import { StyleSheet } from "react-native";
import {
  ExtendedView,
  ExtendedTouchableOpacity,
  ExtendedText,
} from "../../../../atoms";
import React, { ReactNode } from "react";

interface UiAboutSec {
  children?: ReactNode;
  style?: object;
}

const AboutSection: React.FC<UiAboutSec> = (props: UiAboutSec) => {
  const { style, ...rest } = props;
  return (
    <ExtendedView style={[styles.aboutContainer, style]} {...rest}>
      <ExtendedTouchableOpacity>
        <ExtendedText style={styles.aboutText}>Terms & conditions</ExtendedText>
      </ExtendedTouchableOpacity>
      <ExtendedTouchableOpacity>
        <ExtendedText style={styles.aboutText}>Contact us</ExtendedText>
      </ExtendedTouchableOpacity>
    </ExtendedView>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 370,
    marginTop: "16%",
  },
  aboutText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#FBD54E",
  },
});
export default AboutSection;
