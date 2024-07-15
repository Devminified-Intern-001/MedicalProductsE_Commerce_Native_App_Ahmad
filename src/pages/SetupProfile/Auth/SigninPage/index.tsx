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
import SignUpPage from "../SignupPage";

export default function SigninPage() {
  const navigation: any = useNavigation();
  const handleSignIn = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: Routes.BottomNavigationTab }],
    });
  };
  return (
    <ExtendedView style={styles.container}>
      <ExtendedView style={styles.welcome}>
        <ExtendedText style={styles.welcomeText}>
          Welcome to Start.
        </ExtendedText>
      </ExtendedView>

      <ExtendedView style={styles.memberText}>
        <ExtendedText style={styles.introText}>New Here?</ExtendedText>
        <ExtendedTouchableOpacity>
          <ExtendedTouchableOpacity
            onPress={() => navigation?.navigate(Routes.SignUpPage)}
          >
            <ExtendedText style={styles.createAccText}>
              Create an Account
            </ExtendedText>
          </ExtendedTouchableOpacity>
        </ExtendedTouchableOpacity>
      </ExtendedView>

      <ExtendedView>
        <ExtendedText style={styles.userText}>User Name</ExtendedText>
      </ExtendedView>
      <CustomInput placeholder="User Name" keyboardType="default"></CustomInput>

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
      ></CustomInput>

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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "26%",
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
});
