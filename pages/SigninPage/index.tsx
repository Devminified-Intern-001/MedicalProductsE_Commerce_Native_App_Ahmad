import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "../../components/Button";
import CustomInput from "../../components/Input";
import Eye from "../../icons/Eye";
import GoogleIcon from "../../icons/GoogleIcon";

export default function SigninPage() {
  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>Welcome to Start.</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginRight: "12%",
          marginBottom: "16%",
        }}
      >
        <Text style={{ fontSize: 18 }}>New Here?</Text>
        <TouchableOpacity style={{ marginLeft: "1%" }}>
          <Text style={{ fontSize: 18, color: "#FBD54E" }}>
            Create an Account
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.userText}>User Name</Text>
      </View>
      <CustomInput
        placeholder="User Name"
        keyboardType="email-address"
      ></CustomInput>
      <View style={styles.textFlex}>
        <Text style={styles.passText}>Password</Text>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forget Password?</Text>
        </TouchableOpacity>
      </View>
      <CustomInput
        placeholder="Password"
        secureTextEntry={true}
        righticon={<Eye />}
      ></CustomInput>
      <CustomButton title="Signin" style={styles.sigin} />

      <CustomButton
        title="Signin with google"
        style={styles.googleSigin}
        righticon={<GoogleIcon />}
      />

      <View
        style={{
          flexDirection: "row",
          marginTop: "28%",
        }}
      >
        <TouchableOpacity style={{ marginRight: "32%" }}>
          <Text style={{ fontSize: 12, color: "#FBD54E" }}>
            Terms & conditions
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: "1%" }}>
          <Text style={{ fontSize: 12, color: "#FBD54E" }}>Contact us</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  userText: {
    marginRight: "50%",
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
    marginTop: "4%",
  },
  googleSigin: {
    marginTop: "4%",
    backgroundColor: "#FEFAE8",
  },
});
