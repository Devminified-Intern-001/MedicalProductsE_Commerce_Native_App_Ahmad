import { StyleSheet, ImageSourcePropType, Image } from "react-native";
import {
  ExtendedView,
  ExtendedText,
  ExtendedTouchableOpacity,
} from "../../atoms";
import React, { ReactNode, useState } from "react";
import { Header } from "react-native-elements";
import { Arrow } from "../../../../svgs";

interface UiDetailsCard {
  children?: ReactNode;
  leftSource?: ReactNode;
  titleText?: string;
  onPress?: () => void;
  style?: object;
  backgroundColor?: string;
}

const CustomSettingsCard = (props: UiDetailsCard) => {
  const { children, leftSource, titleText, style, backgroundColor, onPress } =
    props;

  return (
    <ExtendedView style={[styles.cardContainer, style]}>
      <ExtendedTouchableOpacity
        onPress={onPress}
        style={[styles.cardContainer, style]}
      >
        <Header
          containerStyle={styles.styleheader}
          leftComponent={
            leftSource && (
              <ExtendedView
                style={[
                  styles.leftImgContainer,
                  { backgroundColor: backgroundColor },
                ]}
              >
                {leftSource}
              </ExtendedView>
            )
          }
          centerComponent={
            titleText && (
              <ExtendedView style={styles.centerContainer}>
                <ExtendedText style={styles.titleTextStyle}>
                  {titleText}
                </ExtendedText>
              </ExtendedView>
            )
          }
          rightComponent={
            <ExtendedView style={styles.rightContainer}>
              <Arrow />
            </ExtendedView>
          }
        />
      </ExtendedTouchableOpacity>
    </ExtendedView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 58,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 28,
    width: 300,
  },
  styleheader: {
    height: 70,
    width: "100%",
    backgroundColor: "transparent",
    borderBottomWidth: 0,
    padding: 0,
  },
  leftImgContainer: {
    height: 44,
    width: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 12,
  },
  leftImg: {
    height: 23,
    width: 23,
    resizeMode: "cover",
  },
  centerContainer: {
    flexDirection: "column",
    height: 68,
    width: 210,
    justifyContent: "center",
    borderRadius: 11,
    marginLeft: 28,
  },
  titleTextStyle: {
    fontSize: 16,
    fontWeight: "700",
    height: 24,
    width: 174,
    alignSelf: "center",
  },
  rightContainer: {
    height: 37,
    width: 30,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 10,
  },
});

export default CustomSettingsCard;
