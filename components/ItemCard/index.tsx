import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  StyleSheet,
} from "react-native";
import { Card } from "react-native-elements";
import React, { ReactNode } from "react";

interface UiItemCard {
  children?: ReactNode;
  title: string;
  itemPrice: string;
  itemQt: string;
  itemDescrip: string;
  source: ImageSourcePropType;
}

const ItemCard = (props: UiItemCard) => {
  const { title, source, itemPrice, itemQt, itemDescrip, children } = props;
  return (
    <Card title="Item Details" style={styles.cardLayout}>
      <View style={styles.itemImage}>
        <Image source={source} style={styles.imageStyle}></Image>
      </View>
      <Text>{title}</Text>
      <Text>{itemDescrip}</Text>
      <View style={styles.priceDetail}>
        <Text>{itemPrice}+$</Text>
        <Text>{itemQt}+kg Price</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardLayout: {
    height: 222,
    width: 165,
    borderRadius: 18,
    backgroundColor: "F9F9F9",
  },
  imageStyle: {
    height: 87,
    width: 120,
  },
  itemImage: {
    height: 115,
    width: 143,
    borderRadius: 13,
  },
  priceDetail: {
    display: "flex",
  },
});

export default ItemCard;
