import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { Header } from "react-native-elements";
import { ExtendedView, ExtendedText } from "../../atoms";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";

interface UiCartItem {
  children?: React.ReactNode;
  leftSource: ImageSourcePropType;
  itemTitle: string;
  priceTitle: string;
  newPriceTitle?: string;
  minusSource: ImageSourcePropType;
  addSource: ImageSourcePropType;
  backgroundColor?: string;
  onDelete: () => void;
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
    leftSource,
    itemTitle,
    priceTitle,
    newPriceTitle,
    minusSource,
    addSource,
    backgroundColor,
    onDelete,
  } = props;

  const priceTextStyle = [
    styles.priceTextStyle,
    newPriceTitle
      ? { textDecorationLine: "line-through" }
      : { fontWeight: "700" },
  ];

  const renderRightActions = () => (
    <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
      <Icon name="trash-outline" size={24} color="red" />
    </TouchableOpacity>
  );

  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <ExtendedView style={styles.cartLayout}>
          <Header
            containerStyle={styles.styleheader}
            leftComponent={
              <ExtendedView
                style={[
                  styles.leftImgContainer,
                  { backgroundColor: backgroundColor },
                ]}
              >
                <Image source={leftSource} style={styles.leftImg} />
              </ExtendedView>
            }
            centerComponent={
              <ExtendedView style={styles.centerContainer}>
                <ExtendedText style={styles.itemTextStyle}>
                  {itemTitle}
                </ExtendedText>
                <ExtendedView style={styles.priceContainer}>
                  <ExtendedText style={priceTextStyle as any}>
                    {priceTitle}
                  </ExtendedText>
                  {newPriceTitle && (
                    <ExtendedText style={styles.newPriceTextStyle}>
                      {newPriceTitle}
                    </ExtendedText>
                  )}
                </ExtendedView>
              </ExtendedView>
            }
            rightComponent={
              <ExtendedView style={styles.rightImgContainer}>
                <TouchableOpacity onPress={decrementCount}>
                  <Image source={minusSource} />
                </TouchableOpacity>
                <ExtendedText>{counter}</ExtendedText>
                <TouchableOpacity onPress={incrementCount}>
                  <Image source={addSource} />
                </TouchableOpacity>
              </ExtendedView>
            }
          />
        </ExtendedView>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  cartLayout: {
    height: 100,
    width: "86%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    borderRadius: 25,
    marginHorizontal: 24,
    marginVertical: 8,
    paddingBottom: 30,
  },
  styleheader: {
    height: 80,
    width: "100%",
    backgroundColor: "transparent",
    borderBottomWidth: 0,
    padding: 0,
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
  },
  deleteButton: {
    backgroundColor: "#EB43351A",
    color: "red",
    justifyContent: "center",
    alignItems: "flex-end",
    width: 90,
    height: "80%",
    alignSelf: "center",
    padding: "4.5%",
    borderRadius: 25,
    marginRight: "7%",
    marginLeft: "-17%",
  },
});

export default CustomCartItem;
