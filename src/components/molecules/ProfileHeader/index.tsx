import { StyleSheet, ImageSourcePropType, Image } from "react-native";
import {
  ExtendedView,
  ExtendedText,
  ExtendedTouchableOpacity,
} from "../../atoms";
import React from "react";
import { Header, Icon, Tooltip } from "react-native-elements";
// import { color } from 'react-native-elements/dist/helpers'

interface UiProfileHeader {
  rightSource: ImageSourcePropType | React.ReactNode;
  topTitle: string;
  bottomTitle: string;
  backgroundColor?: string;
  onArrowPress?: () => void;
}

const CustomProfileHeader = (props: UiProfileHeader) => {
  const {
    rightSource,
    topTitle,
    bottomTitle,
    backgroundColor,
    onArrowPress,
    ...rest
  } = props;
  return (
    <Header
      containerStyle={styles.styleheader}
      leftComponent={
        <ExtendedView style={styles.leftContainer}>
          <ExtendedText style={styles.topTextStyle}>
            Hi,{topTitle}!
          </ExtendedText>
          <ExtendedText style={styles.bottomTextStyle}>
            {bottomTitle}
          </ExtendedText>
        </ExtendedView>
      }
      rightComponent={
        <ExtendedView
          style={[
            styles.rightImgContainer,
            { backgroundColor: backgroundColor },
          ]}
        >
          <ExtendedTouchableOpacity onPress={onArrowPress}>
            {React.isValidElement(rightSource) ? (
              rightSource
            ) : (
              <Image
                source={rightSource as ImageSourcePropType}
                style={styles.rightImg}
              />
            )}
          </ExtendedTouchableOpacity>
        </ExtendedView>
      }
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  styleheader: {
    height: 70,
    width: "100%",
    backgroundColor: "transparent",
    borderBottomWidth: 0,
    padding: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  leftContainer: {
    height: 45,
    width: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 11,
    marginLeft: 60,
  },
  topTextStyle: {
    fontSize: 20,
    fontWeight: "700",
    height: 24,
    width: 95,
    marginTop: 8,
  },
  bottomTextStyle: {
    fontSize: 12,
    fontWeight: "400",
    height: 24,
    width: 165,
    color: "#909090",
    alignSelf: "center",
    marginLeft: 70,
    marginTop: 10,
  },
  rightImgContainer: {
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 11,
    backgroundColor: "transparent",
    marginRight: 25,
  },
  rightImg: {
    // marginTop: "%",
    height: 50,
    width: 50,
    resizeMode: "cover",
    borderRadius: 11,
  },
});
export default CustomProfileHeader;
