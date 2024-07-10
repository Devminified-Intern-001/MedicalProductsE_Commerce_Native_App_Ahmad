import React from "react";
import { StyleSheet, ImageSourcePropType } from "react-native";
import { ExtendedView } from "../../atoms";
import { CustomCartItem } from "../../molecules";

interface ItemsCardData {
  leftSource: ImageSourcePropType;
  itemTitle: string;
  priceTitle: string;
  newPriceTitle?: string;
}

interface CartItemsProps {
  style?: object;
  cartData: ItemsCardData[];
}

const CustomCartItems = ({ cartData }: CartItemsProps) => {
  return (
    <ExtendedView style={styles.row}>
      {cartData.map((data, index) => (
        <CustomCartItem
          key={index}
          itemTitle={data.itemTitle}
          priceTitle={data.priceTitle}
          newPriceTitle={data.newPriceTitle}
          leftSource={data.leftSource}
          minusSource={require("../../../../assets/minus.png")}
          addSource={require("../../../../assets/add.png")}
        />
      ))}
    </ExtendedView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});

export default CustomCartItems;
