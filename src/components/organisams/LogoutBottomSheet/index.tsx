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

  const handleLogout = async () => {
    setActiveButton("Save");
    try {
      const refresh = await AsyncStorage.getItem("@refresh_token");

      console.log("Using refresh token for logout:", refresh);

      if (refresh) {
        const response = await api.post("/logOut", {
          token: refresh,
        });

        if (response.data.done) {
          console.log("Logout Successfully:", response.data.done);

          logout();
          navigation.reset({
            index: 0,
            routes: [
              { name: Routes.Auth, params: { screen: Routes.SigninPage } },
            ],
          });
        } else {
          console.log("Logout failed:", response.data.message);
        }
      }
    } catch (error) {
      console.error("Error during logout:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <ExtendedView style={styles.container}>
      <ExtendedView style={styles.bottomSheet}>
        <ExtendedText style={styles.textStyle}>
          Are you sure want to log out?
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
      </ExtendedView>
    </ExtendedView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    // height: "27%",
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
});

export default CustomLogoutBottomSheet;
