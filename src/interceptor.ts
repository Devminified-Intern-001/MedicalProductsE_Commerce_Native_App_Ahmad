import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "./context/authContext";
import { useContext } from "react";

const api = axios.create({
  baseURL: "https://medical-e-commerce-backend.vercel.app",
  timeout: 10000,
});

api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("@token");
    console.log("Token:", token);
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    console.log("Request sent:", config);
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    if (
      response.headers["content-type"]?.toString()?.split("/")?.[0] != "image"
    )
      console.log("Response received:", response.data);
    else console.log("An image received");
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response) {
      if (error.response.status === 401 && !originalRequest._retry) {
        console.log(
          "Access token expired or unauthorized. Attempting to refresh..."
        );
        originalRequest._retry = true;

        try {
          const token = await AsyncStorage.getItem("@token");
          const refreshToken = await AsyncStorage.getItem("@refresh_token");
          console.log("Stored Access Token:", token);
          console.log("Stored Refresh Token:", refreshToken);
          if (refreshToken) {
            console.log(
              "Refresh token found. Attempting to refresh tokens..."
              // refreshToken
            );

            const response = await axios.post(
              "https://medical-e-commerce-backend.vercel.app/refreshToken",
              { token: refreshToken },
              { headers: { Authorization: `Bearer ${token}` } }
            );

            const { access, refresh } = response.data;

            await AsyncStorage.setItem("@token", access);
            await AsyncStorage.setItem("@refresh_token", refresh);

            console.log("New Access Token:", access);
            console.log("New Refresh Token:", refresh);

            originalRequest.headers["Authorization"] = `Bearer ${access}`;

            return api(originalRequest);
          } else {
            console.error("No refresh token available. Please log in again.");
          }
        } catch (refreshError) {
          console.error("Refresh token request failed:", refreshError);
        }
      } else {
        console.error("Error response:", error.response || error.message);
      }
    } else {
      console.error("Error without response:", error.message);
    }

    return Promise.reject(error);
  }
);

export default api;

// import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { AuthContext } from "./context/authContext";
// import { useContext } from "react";

// const api = axios.create({
//   baseURL: "https://medical-e-commerce-backend.vercel.app",
//   timeout: 10000,
// });

// api.interceptors.request.use(
//   async (config) => {
//     const token = await AsyncStorage.getItem("@token");
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     if (
//       error.response &&
//       error.response.status === 401 &&
//       !originalRequest._retry
//     ) {
//       originalRequest._retry = true;

//       const refreshToken = await AsyncStorage.getItem("@refresh_token");
//       if (refreshToken) {
//         try {
//           const response = await axios.post(
//             "https://medical-e-commerce-backend.vercel.app/refreshToken",
//             { token: refreshToken }
//           );

//           const { access, refresh } = response.data;

//           await AsyncStorage.setItem("@token", access);
//           await AsyncStorage.setItem("@refresh_token", refresh);
//           console.error("New access token:", access);
//           console.error("New refresh token:", refresh);

// const authContext = useContext(AuthContext);
// authContext.login({
//   access,
//   refresh,
//   userData: authContext.userData,
// });

//           originalRequest.headers["Authorization"] = `Bearer ${access}`;
//           return api(originalRequest);
//         } catch (refreshError) {
//           console.error("Token refresh failed:", refreshError);
//         }
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// export default api;
