import React, { createContext, useState, useContext } from "react";

interface UserData {
  userName: string;
  email: string;
  dateOfBirth: string;
  gender: string;
  mobile: string;
  image: string;
  role: string;
}

interface AuthContextState {
  access: string | null;
  refresh: string | null;
  userData: UserData | null;
  login: (data: {
    access: string;
    refresh: string;
    userData: UserData;
  }) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextState>({
  access: null,
  refresh: null,
  userData: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [access, setAccess] = useState<string | null>(null);
  const [refresh, setRefresh] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);

  const login = (data: {
    access: string;
    refresh: string;
    userData: UserData;
  }) => {
    setAccess(data.access);
    setRefresh(data.refresh);
    setUserData(data.userData);
  };

  const logout = () => {
    setAccess(null);
    setRefresh(null);
    setUserData(null);
  };

  return (
    <AuthContext.Provider value={{ access, refresh, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
