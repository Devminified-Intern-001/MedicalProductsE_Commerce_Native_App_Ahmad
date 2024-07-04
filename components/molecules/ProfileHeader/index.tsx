import {
  View,
  StyleSheet,
  Text,
  ImageSourcePropType,
  Image,
} from "react-native";
import React from "react";
import { Header, Icon, Tooltip } from "react-native-elements";
// import { color } from 'react-native-elements/dist/helpers'

interface UiProfileHeader {
  rightSource: ImageSourcePropType;
  topTitle: string;
  bottomTitle: string;
}

const CustomProfileHeader = (props: UiProfileHeader) => {
  const { rightSource, topTitle, bottomTitle, ...rest } = props;
  return (
    <Header
      containerStyle={styles.styleheader}
      leftComponent={
        <View style={styles.leftContainer}>
          <Text style={styles.topTextStyle}>{topTitle}</Text>
          <Text style={styles.bottomTextStyle}>{bottomTitle}</Text>
        </View>
      }
      rightComponent={
        <View style={styles.rightImgContainer}>
          <Image source={rightSource} style={styles.rightImg} />
        </View>
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
