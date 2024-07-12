import { StyleSheet, ImageSourcePropType, Image } from "react-native";
import { ExtendedView, ExtendedText } from "../../atoms";
import React, { ReactNode, useState } from "react";
import { Header } from "react-native-elements";

interface UiDetailsCard {
  children?: React.ReactNode;
  leftSource?: React.ReactNode;
  titleText?: string;
  detailsText?: string;
  timeDuration?: string;
  style?: object;
  titleStyle?: object;
  detailsTextStyle?: object;
  rightContentStyle?: object;
  backgroundColor?: string;
  imgStyle?: object;
}

const CustomDetailsCard = (props: UiDetailsCard) => {
  const {
    children,
    leftSource,
    titleText,
    detailsText,
    timeDuration,
    style,
    titleStyle,
    detailsTextStyle,
    rightContentStyle,
    backgroundColor,
    imgStyle,
    ...rest
  } = props;

  return (
    <ExtendedView style={[styles.cardContainer, style]}>
      <Header
        containerStyle={styles.styleheader}
        leftComponent={
          leftSource && (
            <ExtendedView
              style={[
                styles.leftImgContainer,
                { backgroundColor: backgroundColor },
                imgStyle,
              ]}
            >
              {leftSource}
            </ExtendedView>
          )
        }
        centerComponent={
          [titleText || detailsText] && (
            <ExtendedView style={[styles.centerContainer, detailsTextStyle]}>
              <ExtendedText style={[styles.titleTextStyle, titleStyle]}>
                {titleText}
              </ExtendedText>
              <ExtendedText style={styles.detailsTextStyle}>
                {detailsText}
              </ExtendedText>
            </ExtendedView>
          )
        }
        rightComponent={
          <ExtendedView style={styles.rightContainer}>
            <ExtendedText style={[styles.rigthContent, rightContentStyle]}>
              {timeDuration}
            </ExtendedText>
          </ExtendedView>
        }
        {...rest}
      />
    </ExtendedView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 84,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
  },
  styleheader: {
    height: 70,
    width: "100%",
    backgroundColor: "transparent",
    borderBottomWidth: 0,
    padding: 0,
    // alignItems: "center",
    // justifyContent: "center",
  },
  leftImgContainer: {
    height: 44,
    width: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "rgba(251, 213, 78, 0.29)",
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
  },
  detailsTextStyle: {
    width: 205,
    height: 19,
    fontWeight: "400",
    lineHeight: 19,
    fontSize: 11,
    color: "rgba(155, 155, 155, 1)",
  },
  rightContainer: {
    height: 27,
    width: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
  },
  rigthContent: {
    fontSize: 12,
    color: "rgba(129, 129, 129, 1)",
    lineHeight: 14,
  },
});

export default CustomDetailsCard;
