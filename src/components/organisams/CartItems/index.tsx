import React from "react";
import { StyleSheet, ImageSourcePropType } from "react-native";
import { ExtendedView } from "../../atoms";
import { CustomCartItem } from "../../molecules";

interface ItemsCardData {
  leftSource: ImageSourcePropType;
  itemTitle: string;
  priceTitle: string;
  newPriceTitle?: string;
  backgroundColor?: string;
}

interface CartItemsProps {
  style?: object;
  cartData: ItemsCardData[];
  onDelete: (index: number) => void;
}

const CustomCartItems = ({ cartData, onDelete }: CartItemsProps) => {
  return (
    <ExtendedView style={styles.row}>
      {cartData.map((data, index) => (
        <CustomCartItem
          key={index}
          itemTitle={data.itemTitle}
          priceTitle={data.priceTitle}
          newPriceTitle={data.newPriceTitle}
          leftSource={data.leftSource}
          backgroundColor={data.backgroundColor}
          minusSource={require("../../../../assets/minus.png")}
          addSource={require("../../../../assets/add.png")}
          onDelete={() => onDelete(index)}
        />
      ))}
    </ExtendedView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomCartItems;
