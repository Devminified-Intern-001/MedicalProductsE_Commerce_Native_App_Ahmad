import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  StyleSheet,
} from "react-native";
import { Card, CardProps } from "react-native-elements";
import React, { ReactNode } from "react";

interface UiItemCard extends CardProps {
  children?: ReactNode;
  title: string;
  itemPrice: string;
  itemQt: string;
  itemDescrip: string;
  source: ImageSourcePropType;
}

const ItemCard = (props: UiItemCard) => {
  const { title, source, itemPrice, itemQt, itemDescrip, children, ...rest } =
    props;
  return (
    <Card containerStyle={styles.cardLayout} {...(rest as any)}>
      <View>
        <View style={styles.itemImage}>
          <Image source={source} style={styles.imageStyle}></Image>
        </View>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.description}>{itemDescrip}</Text>
        <View style={styles.priceDetail}>
          <Text style={styles.itPrice}>{itemPrice} $</Text>
          <Text style={styles.itQuant}>{itemQt} kg Price</Text>
        </View>
        {children && <View>{children}</View>}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardLayout: {
    height: 222,
    width: 172,
    borderRadius: 18,
    backgroundColor: "#F9F9F9",
    alignItems: "center",
  },
  imageStyle: {
    height: 87,
    width: 120,
    alignSelf: "center",
  },
  itemImage: {
    height: 115,
    width: 143,
    borderRadius: 13,
    alignSelf: "center",
    backgroundColor: "#FaE9F9",
    marginBottom: "6%",
    justifyContent: "center",
    alignItems: "center",
  },
  itemTitle: {
    width: 69,
    height: 20,
  },
  description: {
    fontSize: 10,
    width: 140,
    height: 12,
    marginBottom: "10%",
    color: "#9B9B9B",
  },
  priceDetail: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itPrice: {
    fontSize: 15,
    fontWeight: "400",
  },
  itQuant: {
    color: "#9B9B9B",
    fontSize: 9,
    fontWeight: "400",
    alignSelf: "flex-end",
  },
});

export default ItemCard;
