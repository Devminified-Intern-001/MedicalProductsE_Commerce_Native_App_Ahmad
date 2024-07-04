import { StyleSheet } from "react-native";
import {
  CustomButton,
  CustomInput,
  AboutSection,
  CustomProfileHeader,
} from "../../components/molecules";
import {
  ExtendedView,
  ExtendedText,
  ExtendedTouchableOpacity,
} from "../../components/atoms";
import Search from "../../svgs/Search";
import GoogleIcon from "../../svgs/GoogleIcon";

export default function HomePage() {
  return (
    <ExtendedView style={styles.pageLayout}>
      <ExtendedView style={styles.welcome}>
        <CustomProfileHeader
          topTitle="Hi,James!"
          bottomTitle="What would you buy today?"
          rightSource={require("../../assets/profile.png")}
        />
      </ExtendedView>
      <ExtendedView>
        <CustomInput
          placeholder="Search by items name"
          lefticon={<Search />}
        ></CustomInput>
      </ExtendedView>
    </ExtendedView>
  );
}

const styles = StyleSheet.create({
  pageLayout: {
    flex: 1,
    gap: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "26%",
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
