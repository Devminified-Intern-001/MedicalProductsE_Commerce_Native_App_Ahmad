import { StyleSheet } from "react-native";
import { CustomButton, CustomHeader } from "../../../../components/molecules";
import { ExtendedView, ExtendedText } from "../../../../components/atoms";
import { BasicLayout } from "../../../../layout";
import React, { useState } from "react";
import { CustomCartItems } from "../../../../components/organisams"; // Ensure the import path is correct
import { itemsCartData } from "../../../../data/cartItems";
import RightArrowIcon from "../../../../../svgs/RightArrow";
import { useNavigation } from "@react-navigation/native";
import Routes from "../../../../routes";

const CartItemPage = () => {
  const navigation: any = useNavigation();
  const [cartData, setCartData] = useState(itemsCartData);

  const handleDelete = (index: number) => {
    const newData = cartData.filter((_, i) => i !== index);
    setCartData(newData);
  };

  return (
    <ExtendedView style={styles.pageContainer}>
      <ExtendedView style={styles.header}>
        <CustomHeader
          leftSource={require("../../../../../assets/arrow.png")}
          title="Cart Item"
          titleStyle={styles.title}
          onArrowPress={() => navigation.goBack()}
        />
      </ExtendedView>
      <BasicLayout>
        <ExtendedView style={styles.cartItems}>
          <CustomCartItems cartData={cartData} onDelete={handleDelete} />
        </ExtendedView>
      </BasicLayout>

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
            onPress={() => navigation.navigate(Routes.PaymentDetailsPage)}
          />
        </ExtendedView>
      </ExtendedView>
    </ExtendedView>
  );
};

export default CartItemPage;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "6%",
  },
  header: {
    marginTop: "2%",
    marginBottom: "2%",
    width: "100%",
    height: "8%",
    flex: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#181C32",
  },
  cartItems: {
    flex: 1,
    marginTop: "4%",
    marginBottom: "10%",
  },
  footerStyle: {
    flex: 0,
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
