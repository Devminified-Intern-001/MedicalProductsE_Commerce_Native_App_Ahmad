import { StyleSheet, ImageSourcePropType, Image } from "react-native";
import { ExtendedView, ExtendedText } from "../../atoms";
import React from "react";
import { Header } from "react-native-elements";
import { ExtendedTouchableOpacity } from "../../atoms";

interface UiHeader {
  leftSource?: ImageSourcePropType;
  rightSource?: ImageSourcePropType;
  title?: string;
  titleStyle?: object;
  onPress?: () => void;
  onArrowPress?: () => void;
}

const CustomHeader = (props: UiHeader) => {
  const { leftSource, rightSource, title, onPress, onArrowPress, titleStyle } =
    props;
  return (
    <Header
      containerStyle={styles.styleheader}
      leftComponent={
        leftSource && (
          <ExtendedView style={styles.leftImgContainer}>
            <ExtendedTouchableOpacity
              onPress={onArrowPress}
              style={styles.touchableArea}
            >
              <Image source={leftSource} />
            </ExtendedTouchableOpacity>
          </ExtendedView>
        )
      }
      centerComponent={
        title && (
          <ExtendedView style={styles.itemContainer}>
            <ExtendedText style={[styles.itemTitle, titleStyle]}>
              {title}
            </ExtendedText>
          </ExtendedView>
        )
      }
      rightComponent={
        rightSource && (
          <ExtendedView style={styles.rightImgContainer}>
            <ExtendedTouchableOpacity onPress={onPress}>
              <Image source={rightSource} style={styles.rightImg} />
            </ExtendedTouchableOpacity>
          </ExtendedView>
        )
      }
    />
  );
};

const styles = StyleSheet.create({
  styleheader: {
    height: 70,
    width: "96%",
    backgroundColor: "transparent",
    alignSelf: "center",
    borderBottomWidth: 0,
    padding: 0,
  },
  leftImgContainer: {
    height: 45,
    width: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 11,
    marginLeft: "10%",
  },
  touchableArea: {
    padding: "8%",
  },
  itemContainer: {
    width: 100,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  itemTitle: {
    fontSize: 16,
    alignSelf: "center",
    marginTop: "5%",
    fontWeight: "600",
  },
  rightImgContainer: {
    height: 45,
    width: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 11,
    backgroundColor: "#FBD54E",
    marginRight: "25%",
  },
  rightImg: {
    // marginTop: "%",
    // height: 12,
    // width: 18,
  },
});
export default CustomHeader;
