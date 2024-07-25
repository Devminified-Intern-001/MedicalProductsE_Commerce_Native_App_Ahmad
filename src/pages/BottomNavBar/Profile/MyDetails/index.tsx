import { StyleSheet } from "react-native";
import {
  ExtendedView,
  ExtendedText,
  ExtendedCheckBox,
  ExtendedTouchableOpacity,
  ExtendedScrollView,
} from "../../../../components/atoms";
import React, { useState } from "react";
import { BasicLayout } from "../../../../layout";
import {
  CustomButton,
  CustomHeader,
  CustomInput,
} from "../../../../components/molecules";
import { CalenderIcon, EyeIcon } from "../../../../../svgs";
import { CustomMyProfile } from "../../../../components/molecules";
import { useNavigation } from "@react-navigation/native";

const MyDetailsPage = () => {
  const navigation: any = useNavigation();
  const [activeButton, setActiveButton] = useState("Save");
  return (
    <BasicLayout>
      <ExtendedScrollView>
        <ExtendedView style={styles.container}>
          <ExtendedView style={styles.hearderStyle}>
            <CustomHeader
              leftSource={require("../../../../../assets/arrow.png")}
              title="My Details"
              titleStyle={styles.title}
              onArrowPress={() => navigation.navigate("MyProfilePage")}
            />
          </ExtendedView>

          <ExtendedView style={styles.spacing}>
            <CustomMyProfile
              imgSource={require("../../../../../assets/myProfileImg.png")}
              imgSourceStyle={styles.imgSourceStyle}
            />
          </ExtendedView>

          <ExtendedView style={styles.inputsContainer}>
            <ExtendedView>
              <ExtendedText style={styles.inputTitle}>User Name</ExtendedText>
              <CustomInput
                placeholder="jamesjones"
                keyboardType="default"
                style={styles.inputStyle}
              />
            </ExtendedView>

            <ExtendedView style={styles.spacing}>
              <ExtendedText style={styles.inputTitle}>Mobile</ExtendedText>
              <CustomInput
                placeholder="+123456789"
                keyboardType="phone-pad"
                style={styles.inputStyle}
              />
            </ExtendedView>

            <ExtendedView style={styles.spacing}>
              <ExtendedText style={styles.inputTitle}>Email ID</ExtendedText>
              <CustomInput
                placeholder="jamesjones@email.com"
                keyboardType="email-address"
                style={styles.inputStyle}
              />
            </ExtendedView>

            <ExtendedView style={styles.spacing}>
              <ExtendedText style={styles.inputTitle}>
                Date of Birth
              </ExtendedText>
              <CustomInput
                placeholder="03/10/2000"
                keyboardType="numeric"
                righticon={<CalenderIcon />}
                style={styles.inputStyle}
              />
            </ExtendedView>
          </ExtendedView>

          <ExtendedView style={styles.btnsContainer}>
            <CustomButton
              title="Cancel"
              style={[
                styles.cancelButton,
                activeButton === "Cancel"
                  ? styles.activeButton
                  : styles.inactiveButton,
              ]}
              onPress={() => setActiveButton("Cancel")}
            />
            <CustomButton
              title="Save"
              style={[
                styles.cancelButton,
                activeButton === "Save"
                  ? styles.activeButton
                  : styles.inactiveButton,
              ]}
              onPress={() => setActiveButton("Save")}
            />
          </ExtendedView>

          <ExtendedView style={styles.checkboxContainer}>
            <ExtendedText style={styles.inputTitle}>Gender</ExtendedText>
            <ExtendedView style={styles.checkboxStyle}>
              <ExtendedCheckBox title="Male" />
              <ExtendedCheckBox title="Female" />
              <ExtendedCheckBox title="Other" />
            </ExtendedView>
          </ExtendedView>

          <ExtendedView style={styles.changePassword}>
            <ExtendedView style={styles.textFlex}>
              <ExtendedText style={styles.passText}>Password</ExtendedText>
              <ExtendedTouchableOpacity>
                <ExtendedText style={styles.forgotPasswordText}>
                  changePassword?
                </ExtendedText>
              </ExtendedTouchableOpacity>
            </ExtendedView>
            <CustomInput
              placeholder="Password"
              secureTextEntry={true}
              righticon={<EyeIcon />}
              style={styles.inputStyle}
            ></CustomInput>
          </ExtendedView>
        </ExtendedView>
      </ExtendedScrollView>
    </BasicLayout>
  );
};

export default MyDetailsPage;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
  },
  hearderStyle: {
    marginBottom: "4%",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  imgSourceStyle: {
    alignSelf: "center",
    height: 90,
    width: 90,
    marginTop: "4%",
  },

  spacing: {
    marginTop: "5%",
  },
  inputsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputTitle: {
    marginLeft: 20,
    marginBottom: 10,
  },
  inputStyle: {
    width: 260,
    height: 30,
  },
  btnsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  cancelButton: {
    width: 130,
    height: 46,
  },
  activeButton: {
    backgroundColor: "#FBD54E",
  },
  inactiveButton: {
    backgroundColor: "#FFF",
  },
  checkboxContainer: {
    marginTop: 30,
  },
  checkboxStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 284,
  },
  changePassword: {
    alignItems: "center",
    marginTop: 26,
    height: 200,
  },
  textFlex: {
    flexDirection: "row",
    fontSize: 16,
    marginLeft: 32,
    marginBottom: 10,
  },
  passText: {
    fontSize: 13,
  },
  forgotPasswordText: {
    color: "#FBD54E",
    marginLeft: "44%",
    fontSize: 12,
  },
});
