import { StyleSheet } from "react-native";
import api from "../../../../interceptor";
import {
  CustomButton,
  CustomInput,
  AboutSection,
} from "../../../../components/molecules";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  ExtendedView,
  ExtendedText,
  ExtendedTouchableOpacity,
} from "../../../../components/atoms";
import Eye from "../../../../../svgs/Eye";
import GoogleIcon from "../../../../../svgs/GoogleIcon";
import { useNavigation } from "@react-navigation/native";
import Routes from "../../../../routes";
import { BasicLayout } from "../../../../layout";
import React, { useState } from "react";
import { useAuth } from "../../../../context/authContext";

export default function SigninPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigation: any = useNavigation();
  const { login } = useAuth();

  const handleSignIn = async () => {
    setErrorMessage("");
    if (!username || !password) {
      setErrorMessage("Username and password are required");
      return;
    }
    try {
      const response = await api.post("/logIn", {
        userName: username,
        password: password,
      });
      console.log("Server response:", response.data);

      if (response.data.done) {
        console.log("Login successful:", response.data.done);

        const { access, refresh, userData } = response.data;
        console.log("User Data:", userData);

        await AsyncStorage.setItem("@token", access);
        await AsyncStorage.setItem("@refresh_token", refresh);
        console.log("Tokens stored successfully");

        login({ access, refresh, userData });
        navigation.reset({
          index: 0,
          routes: [{ name: Routes.BottomNavigationTab }],
        });
      } else {
        console.log("Login failed:", response.data.message);
        setErrorMessage(
          response.data.message || "Incorrect username or password"
        );
      }
    } catch (error) {
      console.error("Error during sign in:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <BasicLayout>
      <ExtendedView style={styles.container}>
        <ExtendedView style={styles.welcome}>
          <ExtendedText style={styles.welcomeText}>
            Welcome to Start.
          </ExtendedText>
        </ExtendedView>

        <ExtendedView style={styles.memberText}>
          <ExtendedText style={styles.introText}>New Here?</ExtendedText>
          <ExtendedTouchableOpacity
            onPress={() => navigation?.navigate(Routes.SignUpPage)}
          >
            <ExtendedText style={styles.createAccText}>
              Create an Account
            </ExtendedText>
          </ExtendedTouchableOpacity>
        </ExtendedView>

        <ExtendedView>
          <ExtendedText style={styles.userText}>User Name</ExtendedText>
        </ExtendedView>
        <CustomInput
          placeholder="User Name"
          keyboardType="email-address"
          value={username}
          onChangeText={setUsername}
        />

        <ExtendedView style={styles.textFlex}>
          <ExtendedText style={styles.passText}>Password</ExtendedText>
          <ExtendedTouchableOpacity>
            <ExtendedText style={styles.forgotPasswordText}>
              Forget Password?
            </ExtendedText>
          </ExtendedTouchableOpacity>
        </ExtendedView>
        <CustomInput
          placeholder="Password"
          secureTextEntry={true}
          righticon={<Eye />}
          value={password}
          onChangeText={setPassword}
        />

        {errorMessage ? (
          <ExtendedText style={styles.errorText}>{errorMessage}</ExtendedText>
        ) : null}

        <CustomButton
          title="Signin"
          style={styles.sigin}
          onPress={handleSignIn}
        />

        <CustomButton
          title="Signin with google"
          style={styles.googleSigin}
          lefticon={<GoogleIcon />}
        />
        <AboutSection style={styles.aboutSection} />
      </ExtendedView>
    </BasicLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "22%",
    paddingBottom: "6%",
  },
  welcome: {
    marginRight: "22%",
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: "600",
  },
  memberText: {
    flexDirection: "row",
    marginRight: "12%",
    marginBottom: "22%",
  },
  introText: {
    fontSize: 18,
  },
  createAccText: {
    fontSize: 18,
    color: "#FBD54E",
    marginLeft: 4,
  },
  userText: {
    marginRight: "46%",
    width: 80,
    fontSize: 13,
  },
  textFlex: {
    flexDirection: "row",
    marginLeft: "13%",
    marginTop: "4%",
    fontSize: 16,
  },
  passText: {
    fontSize: 13,
  },
  forgotPasswordText: {
    color: "#FBD54E",
    marginLeft: "44%",
    fontSize: 12,
  },
  sigin: {
    marginTop: "6%",
  },
  googleSigin: {
    marginTop: "6%",
    backgroundColor: "#FEFAE8",
  },
  aboutSection: {
    marginTop: "22%",
  },
  errorText: {
    color: "red",
    marginTop: 6,
  },
});
