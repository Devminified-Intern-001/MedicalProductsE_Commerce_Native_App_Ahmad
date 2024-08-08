import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { ExtendedView, ExtendedText } from "../../atoms";
import { CustomButton, CustomFlexText } from "../../molecules";
import { LogoutIcon } from "../../../../svgs";
import { useNavigation } from "@react-navigation/native";
import Routes from "../../../routes";
import api from "../../../interceptor";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../../../context/authContext";

const CustomLogoutBottomSheet = ({ onCancel }) => {
  const [activeButton, setActiveButton] = useState("Save");
  const navigation: any = useNavigation();
  const [errorMessage, setErrorMessage] = useState("");
  const { logout } = useAuth();

  const attemptLogout = async (token: any) => {
    try {
      const response = await api.post("/logOut", { token });
      if (response.data.done) {
        console.log("Logout Successfully:", response.data.done);
        return true;
      } else {
        console.log("Logout failed:", response.data.message);
        setErrorMessage(response.data.message);
        return false;
      }
    } catch (error) {
      console.error("Error during logout attempt:", error);
      return false;
    }
  };

  const handleLogout = async () => {
    setActiveButton("Save");
    try {
      let refreshToken = await AsyncStorage.getItem("@refresh_token");
      console.log("Using refresh token for logout:", refreshToken);

      let logoutSuccess = await attemptLogout(refreshToken);

      if (!logoutSuccess) {
        refreshToken = await AsyncStorage.getItem("@refresh_token");
        console.log(
          "Retrying with latest refresh token for logout:",
          refreshToken
        );
        logoutSuccess = await attemptLogout(refreshToken);
      }

      if (logoutSuccess) {
        await AsyncStorage.removeItem("@token");
        await AsyncStorage.removeItem("@refresh_token");
        logout();
        navigation.reset({
          index: 0,
          routes: [
            { name: Routes.Auth, params: { screen: Routes.SigninPage } },
          ],
        });
      } else {
        setErrorMessage("Logout failed after retrying. Please try again.");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <ExtendedView style={styles.container}>
      <ExtendedView style={styles.bottomSheet}>
        <ExtendedText style={styles.textStyle}>
          Are you sure you want to log out?
        </ExtendedText>

        <ExtendedView style={styles.logoutIcon}>
          <LogoutIcon />
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
            onPress={() => [setActiveButton("Cancel"), onCancel()]}
          />
          <CustomButton
            title="Save"
            style={[
              styles.cancelButton,
              activeButton === "Save"
                ? styles.activeButton
                : styles.inactiveButton,
            ]}
            onPress={handleLogout}
          />
        </ExtendedView>
        {errorMessage ? (
          <ExtendedText style={styles.errorText}>{errorMessage}</ExtendedText>
        ) : null}
      </ExtendedView>
    </ExtendedView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    alignSelf: "center",
  },
  bottomSheet: {
    alignItems: "center",
    textAlign: "center",
  },
  textStyle: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: "6%",
  },
  logoutIcon: {
    marginVertical: "4%",
    height: 56,
    width: 56,
    borderRadius: 16,
    backgroundColor: "#FBD54E4A",
    justifyContent: "center",
    alignItems: "center",
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
  errorText: {
    color: "red",
    marginTop: 10,
  },
});

export default CustomLogoutBottomSheet;
