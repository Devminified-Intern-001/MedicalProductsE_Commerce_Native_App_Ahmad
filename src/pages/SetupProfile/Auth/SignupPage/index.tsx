import { StyleSheet } from "react-native";
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

export default function SignUpPage() {
  const navigation: any = useNavigation();
  return (
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
          <ExtendedText style={styles.btSiginText}>Let's Sign-in</ExtendedText>
        </ExtendedTouchableOpacity>
      </ExtendedView>

      <ExtendedView>
        <ExtendedText style={styles.userText}>User Name</ExtendedText>
      </ExtendedView>
      <CustomInput placeholder="User Name" keyboardType="default"></CustomInput>

      <ExtendedView>
        <ExtendedText style={styles.userText}>Email</ExtendedText>
      </ExtendedView>
      <CustomInput
        placeholder="User Name"
        keyboardType="email-address"
      ></CustomInput>

      <ExtendedView>
        <ExtendedText style={styles.userText}>Password</ExtendedText>
      </ExtendedView>

      <CustomInput
        placeholder="Password"
        secureTextEntry={true}
        righticon={<Eye />}
      ></CustomInput>
      <CustomButton
        title="Signup"
        style={styles.sigin}
        onPress={() => navigation?.navigate(Routes.PDetialsForm)}
      />
      <CustomButton
        title="Signin with google"
        style={styles.googleSigin}
        lefticon={<GoogleIcon />}
      />

      <AboutSection style={styles.aboutSection} />
    </ExtendedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "20%",
  },
  welcome: {
    width: 270,
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: "600",
  },
  memberText: {
    flexDirection: "row",
    marginRight: "12%",
    marginBottom: "13%",
  },
  introText: {
    fontSize: 18,
  },
  btSiginText: {
    fontSize: 18,
    color: "#FBD54E",
    marginLeft: 4,
  },
  userText: {
    marginRight: "46%",
    width: 80,
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
    marginTop: "15%",
  },
});
