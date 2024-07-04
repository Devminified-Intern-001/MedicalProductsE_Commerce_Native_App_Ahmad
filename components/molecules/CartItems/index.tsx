import {
  View,
  StyleSheet,
  Text,
  ImageSourcePropType,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { ReactNode, useState } from "react";
import { Header } from "react-native-elements";

interface UiCartItem {
  children?: ReactNode;
  rightSource: ImageSourcePropType;
  leftSource: ImageSourcePropType;
  itemTitle: string;
  priceTitle: string;
  newPriceTitle?: string;
  minusSource: ImageSourcePropType;
  addSource: ImageSourcePropType;
}

const CustomCartItem = (props: UiCartItem) => {
  let [counter, setCounter] = useState(0);

  function incrementCount() {
    setCounter(counter + 1);
  }

  function decrementCount() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  const {
    children,
    leftSource,
    itemTitle,
    priceTitle,
    newPriceTitle,
    minusSource,
    addSource,
    ...rest
  } = props;

  const priceTextStyle = [
    styles.priceTextStyle,
    newPriceTitle
      ? { textDecorationLine: "line-through" as const }
      : { fontWeight: "700" },
  ];

  return (
    <View style={styles.cartLayout}>
      <Header
        containerStyle={styles.styleheader}
        leftComponent={
          <View style={styles.leftImgContainer}>
            <Image source={leftSource} style={styles.leftImg} />
          </View>
        }
        centerComponent={
          <View style={styles.centerContainer}>
            <Text style={styles.itemTextStyle}>{itemTitle}</Text>
            <View style={styles.priceContainer}>
              <Text style={priceTextStyle as any}>{priceTitle}</Text>
              {newPriceTitle && (
                <Text style={styles.newPriceTextStyle}>{newPriceTitle}</Text>
              )}
            </View>
          </View>
        }
        rightComponent={
          <View style={styles.rightImgContainer}>
            <TouchableOpacity onPress={decrementCount}>
              <Image source={minusSource} style={styles.minusImg} />
            </TouchableOpacity>
            <Text>{counter}</Text>
            <TouchableOpacity onPress={incrementCount}>
              <Image source={addSource} style={styles.addImg} />
            </TouchableOpacity>
          </View>
        }
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cartLayout: {
    height: 103,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    borderRadius: 25,
    marginHorizontal: 24,
    paddingTop: 3,
  },
  styleheader: {
    height: 80,
    width: "100%",
    backgroundColor: "transparent",
    borderBottomWidth: 0,
    padding: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  centerContainer: {
    height: 80,
    width: 170,
    justifyContent: "center",
    borderRadius: 11,
    marginLeft: 60,
  },
  itemTextStyle: {
    fontSize: 13,
    fontWeight: "700",
    height: 24,
    width: 90,
  },
  priceContainer: {
    flexDirection: "row",
    width: 165,
  },
  priceTextStyle: {
    fontSize: 15,
    fontWeight: "400",
    height: 24,
    width: 48,
    color: "#909090",
    alignSelf: "center",
  },
  newPriceTextStyle: {
    fontWeight: "700",
  },
  leftImgContainer: {
    height: 76,
    width: 76,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 11,
    marginLeft: 3,
    backgroundColor: "#faefc7",
  },
  leftImg: {
    height: 50,
    width: 50,
    resizeMode: "cover",
    borderRadius: 11,
  },
  rightImgContainer: {
    height: 80,
    width: 80,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginRight: 3,
  },
  minusImg: {},
  addImg: {},
});

export default CustomCartItem;
