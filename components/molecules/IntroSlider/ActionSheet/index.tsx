import { StyleSheet } from "react-native";
import {
  ExtendedText,
  ExtendedView,
  ExtendedTouchableOpacity,
} from "../../../atoms";
import CustomButton from "../../Auth/Signin_Signup/Button";
import React from "react";

const ActionSheet = ({ text, highlightedWord }) => {
  const parts = text.split(highlightedWord);
  return (
    <ExtendedView style={styles.actionSheet}>
      <ExtendedView>
        <ExtendedText style={styles.text}>
          {parts[0]}
          <ExtendedText style={styles.highlightedText}>
            {highlightedWord}
          </ExtendedText>
          {parts[1]}
        </ExtendedText>
      </ExtendedView>
      <ExtendedView>
        <ExtendedTouchableOpacity style={styles.skipContainer}>
          <ExtendedText style={styles.skipText}>Skip</ExtendedText>
        </ExtendedTouchableOpacity>
      </ExtendedView>
      <CustomButton title="Next" style={styles.next} />
    </ExtendedView>
  );
};

const styles = StyleSheet.create({
  actionSheet: {
    // justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "#fff",
    height: 306,
    width: 370,
    bottom: 30,
    paddingTop: 30,
  },
  text: {
    fontSize: 22,
    width: 308,
    color: "#000",
    textAlign: "center",
    marginTop: 30,
    fontWeight: "700",
  },
  highlightedText: {
    color: "#FBD54E",
  },
  skipContainer: {
    width: 200,
    alignItems: "center",
    marginTop: 110,
  },
  skipText: {
    color: "#FFCC00",
    fontSize: 15,
    fontWeight: "500",
    width: "auto",
  },
  next: {
    marginTop: 14,
    height: 46,
    width: 280,
    fontWeight: "700",
  },
});
export default ActionSheet;
