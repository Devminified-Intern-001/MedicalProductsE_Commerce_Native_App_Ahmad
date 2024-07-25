import { StyleSheet } from "react-native";
import api from "../../../../interceptor";
import {
  CustomButton,
  CustomInput,
  AboutSection,
} from "../../../../components/molecules";
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

export default function SignUpPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigation: any = useNavigation();

  const handleSignUp = async () => {
    setErrorMessage("");
    if (!username || !email || !password) {
      setErrorMessage("Username, email, and password are required");
      return;
    }
    try {
      const response = await api.post("/signUp", {
        userName: username,
        password: password,
        email: email,
      });
      console.log("Server response:", response.data);

      if (response.data.done) {
        console.log("SignUp successful:", response.data.done);
        navigation.reset({
          index: 0,
          routes: [{ name: Routes.PDetialsForm }],
        });
      } else {
        console.log("SignUp failed:", response.data.message);
        setErrorMessage(
          response.data.message || "This username already exists"
        );
      }
    } catch (error) {
      console.error("SignUp failed:", error);
      setErrorMessage("Some error occured");
    }
  };

  return (
    <BasicLayout>
      <ExtendedView style={styles.container}>
        <ExtendedView style={styles.welcome}>
          <ExtendedText style={styles.welcomeText}>
            Sign up to get started.
          </ExtendedText>
        </ExtendedView>
        <ExtendedView style={styles.memberText}>
          <ExtendedText style={styles.introText}>Already a user?</ExtendedText>

          <ExtendedTouchableOpacity
            onPress={() => navigation?.navigate("SigninPage")}
          >
            <ExtendedText style={styles.btSiginText}>
              Let's Sign-in
            </ExtendedText>
          </ExtendedTouchableOpacity>
        </ExtendedView>

        <ExtendedView style={styles.userText}>
          <ExtendedText>User Name</ExtendedText>
        </ExtendedView>
        <ExtendedView style={styles.input}>
          <CustomInput
            placeholder="Enter User Name"
            keyboardType="default"
            value={username}
            onChangeText={setUsername}
          />
        </ExtendedView>

        <ExtendedView style={styles.userText}>
          <ExtendedText>Email</ExtendedText>
        </ExtendedView>
        <ExtendedView style={styles.input}>
          <CustomInput
            placeholder="Enter Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </ExtendedView>

        <ExtendedView style={styles.userText}>
          <ExtendedText>Password</ExtendedText>
        </ExtendedView>

        <ExtendedView style={styles.input}>
          <CustomInput
            placeholder="Enter Password"
            secureTextEntry={true}
            righticon={<Eye />}
            value={password}
            onChangeText={setPassword}
          />
        </ExtendedView>

        {errorMessage ? (
          <ExtendedText style={styles.errorText}>{errorMessage}</ExtendedText>
        ) : null}

        <CustomButton
          title="Signup"
          style={styles.sigin}
          onPress={handleSignUp}
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
    paddingTop: "14%",
    paddingBottom: "26%",
  },
  welcome: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: "600",
    paddingRight: "3%",
  },
  memberText: {
    flexDirection: "row",
    marginRight: "12%",
    marginBottom: "13%",
  },
  introText: {
    fontSize: 18,
  },
  input: {
    marginBottom: "4%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  btSiginText: {
    fontSize: 18,
    color: "#FBD54E",
    marginLeft: "2%",
  },
  userText: {
    width: "70%",
    justifyContent: "flex-start",
    alignSelf: "center",
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
    position: "absolute",
    bottom: "5%",
  },
  errorText: {
    color: "red",
    marginTop: 10,
  },
});
