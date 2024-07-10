import { StyleSheet } from "react-native";
import { CustomButton, CustomHeader } from "../../../../components/molecules";
import { ExtendedView, ExtendedText } from "../../../../components/atoms";

import { BasicLayout } from "../../../../layout";
import React from "react";
import { CustomCartItems } from "../../../../components/organisams";
import { itemsCartData } from "../../../../data/cartItems";
import RightArrowIcon from "../../../../../svgs/RightArrow";

const CartItemPage = () => {
  return (
    <BasicLayout>
      <ExtendedView>
        <ExtendedView>
          <CustomHeader
            leftSource={require("../../../../../assets/arrow.png")}
            title="Cart Item"
          />
        </ExtendedView>

        <ExtendedView>
          <CustomCartItems cartData={itemsCartData} />
        </ExtendedView>

        <ExtendedView>
          <ExtendedView>
            <ExtendedText>Total</ExtendedText>
            <ExtendedText>$27.38</ExtendedText>
          </ExtendedView>
          <ExtendedView>
            <CustomButton title="Checkout" righticon={<RightArrowIcon />} />
          </ExtendedView>
        </ExtendedView>
      </ExtendedView>
    </BasicLayout>
  );
};
export default CartItemPage;

const styles = StyleSheet.create({});
