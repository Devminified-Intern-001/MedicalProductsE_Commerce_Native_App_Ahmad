import { StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  CustomButton,
  CustomFlexText,
  CustomHeader,
} from "../../../../components/molecules";
import {
  ExtendedView,
  ExtendedText,
  ExtendedItemSlide,
  ExtendedRating,
} from "../../../../components/atoms";

import { BasicLayout } from "../../../../layout";
import React, { useState } from "react";
import ShoppingCartIcon from "../../../../../svgs/ShopingCart";

const ShopItemPage = () => {
  let [counter, setCounter] = useState(0);

  function incrementCount() {
    setCounter(counter + 1);
  }

  function decrementCount() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <BasicLayout>
      <ExtendedView>
        <ExtendedView>
          <CustomHeader
            leftSource={require("../../../../../assets/arrow.png")}
            title="Shop Items"
            rightSource={require("../../../../../assets/bag.png")}
          />
        </ExtendedView>

        <ExtendedView>
          <ExtendedItemSlide arrowSize={20} />
        </ExtendedView>

        <ExtendedView>
          <ExtendedText>Organic Carrots</ExtendedText>
        </ExtendedView>

        <ExtendedView>
          <ExtendedView>
            <ExtendedRating title="" />
          </ExtendedView>

          <ExtendedView style={styles.rightImgContainer}>
            <TouchableOpacity onPress={decrementCount}>
              <Image source={require("../../../../../assets/minus.png")} />
            </TouchableOpacity>
            <ExtendedText>{counter}</ExtendedText>
            <TouchableOpacity onPress={incrementCount}>
              <Image source={require("../../../../../assets//add.png")} />
            </TouchableOpacity>
          </ExtendedView>
        </ExtendedView>

        <ExtendedView>
          <ExtendedText>Description</ExtendedText>
        </ExtendedView>
        <ExtendedView>
          <ExtendedText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </ExtendedText>
        </ExtendedView>

        <ExtendedView>
          <ExtendedText>Nutrition facts</ExtendedText>
        </ExtendedView>
        <ExtendedView>
          <ExtendedText>
            About 3.5 servings per container Serving size 1/2 cup (120g)
          </ExtendedText>
          <ExtendedText>Amount per serving </ExtendedText>
        </ExtendedView>

        <ExtendedView>
          <CustomFlexText title="Calories" textValue="40" />
        </ExtendedView>

        <ExtendedView>
          <ExtendedText>% Daily Value*</ExtendedText>
        </ExtendedView>

        <ExtendedView>
          <ExtendedView>
            <ExtendedText>Price</ExtendedText>
            <ExtendedText>$27.38</ExtendedText>
          </ExtendedView>
          <ExtendedView>
            <CustomButton title="Add to cart" lefticon={<ShoppingCartIcon />} />
          </ExtendedView>
        </ExtendedView>
      </ExtendedView>
    </BasicLayout>
  );
};
export default ShopItemPage;

const styles = StyleSheet.create({
  rightImgContainer: {
    height: 80,
    width: 80,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginRight: 3,
  },
});
