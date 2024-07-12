import {
  View,
  StyleSheet,
  Text,
  ImageSourcePropType,
  Image,
} from "react-native";
import React from "react";
import { Header, Icon } from "react-native-elements";
import { ExtendedTouchableOpacity } from "../../atoms";
// import { color } from 'react-native-elements/dist/helpers'

interface UiHeader {
  leftSource?: ImageSourcePropType;
  rightSource?: ImageSourcePropType;
  title?: string;
  onPress?: () => void;
}

const CustomHeader = (props: UiHeader) => {
  const { leftSource, rightSource, title, onPress } = props;
  return (
    <Header
      containerStyle={styles.styleheader}
      leftComponent={
        leftSource && (
          <View style={styles.leftImgContainer}>
            <Image source={leftSource} />
          </View>
        )
      }
      centerComponent={
        title && (
          <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{title}</Text>
          </View>
        )
      }
      rightComponent={
        rightSource && (
          <View style={styles.rightImgContainer}>
            <ExtendedTouchableOpacity onPress={onPress}>
              <Image source={rightSource} style={styles.rightImg} />
            </ExtendedTouchableOpacity>
          </View>
        )
      }
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
  },
  leftImgContainer: {
    height: 45,
    width: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 11,
    marginLeft: "45%",
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
    height: 12,
    width: 18,
  },
});
export default CustomHeader;
