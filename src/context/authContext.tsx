import React, { createContext, useState, useContext } from "react";

interface UserData {
  userName: string;
  email: string;
  dateOfBirth?: string;
  gender?: string;
  mobile?: string;
  image?: string;
  role?: string;
  location?: string;
  indicators?: string;
  startTime?: string;
}

interface AuthContextState {
  access: string | null;
  refresh: string | null;
  userData: UserData | null;
  email: string | null;
  login: (data: {
    access: string;
    refresh: string;
    userData: UserData;
  }) => void;
  setEmail: (email: string) => void;
  signup: (data: UserData) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextState>({
  access: null,
  refresh: null,
  userData: null,
  email: null,
  setEmail: () => {},
  login: () => {},
  signup: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [access, setAccess] = useState<string | null>(null);
  const [refresh, setRefresh] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  const login = (data: {
    access: string;
    refresh: string;
    userData: UserData;
  }) => {
    setAccess(data.access);
    setRefresh(data.refresh);
    setUserData(data.userData);
  };

  const signup = (data: UserData) => {
    setEmail(data.email);
    setUserData({
      userName: data.userName,
      email: data.email,
      dateOfBirth: data.dateOfBirth,
      gender: data.gender,
      location: data.location,
      indicators: data.indicators,
      startTime: data.startTime,
    });
  };

  const logout = () => {
    setAccess(null);
    setRefresh(null);
    setUserData(null);
    setEmail(null);
  };

  return (
    <AuthContext.Provider
      value={{
        access,
        refresh,
        userData,
        email,
        login,
        setEmail,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
