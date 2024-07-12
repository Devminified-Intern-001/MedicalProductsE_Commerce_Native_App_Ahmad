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
      <ExtendedView style={styles.pageContainer}>
        <ExtendedView style={styles.header}>
          <CustomHeader
            leftSource={require("../../../../../assets/arrow.png")}
            title="Cart Item"
          />
        </ExtendedView>

        <ExtendedView>
          <CustomCartItems cartData={itemsCartData} />
        </ExtendedView>

        <ExtendedView style={styles.footerStyle}>
          <ExtendedView style={styles.priceFlex}>
            <ExtendedText style={styles.textStyle}>Total</ExtendedText>
            <ExtendedText style={styles.priceStyle}>$27.38</ExtendedText>
          </ExtendedView>
          <ExtendedView>
            <CustomButton
              title="Checkout"
              righticon={<RightArrowIcon width={24} height={24} />}
              style={styles.checkoutBtn}
            />
          </ExtendedView>
        </ExtendedView>
      </ExtendedView>
    </BasicLayout>
  );
};
export default CartItemPage;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  header: {
    paddingTop: "6%",
    paddingBottom: "8%",
  },
  footerStyle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    height: 100,
    width: "100%",
    borderRadius: 45,
    borderBottomLeftRadius: 29,
    borderBottomRightRadius: 29,
    paddingHorizontal: "8%",
    backgroundColor: "#F9F9FF",
  },
  priceFlex: {
    flexDirection: "column",
  },
  checkoutBtn: {
    width: 166,
    height: 50,
  },
  textStyle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#C4C4C4",
  },
  priceStyle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#3F4254",
  },
});
