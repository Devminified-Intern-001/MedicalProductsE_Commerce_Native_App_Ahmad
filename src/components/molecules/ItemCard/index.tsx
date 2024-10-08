import { Image, ImageSourcePropType, StyleSheet } from "react-native";
import {
  ExtendedView,
  ExtendedText,
  ExtendedTouchableOpacity,
} from "../../atoms";
import { Card, CardProps } from "react-native-elements";
import React, { ReactNode } from "react";
import { useNavigation } from "@react-navigation/native";

interface UiItemCard extends CardProps {
  children?: ReactNode;
  title: string;
  itemPrice: number;
  itemQt?: string;
  itemDescrip: string;
  source: ImageSourcePropType;
  flexStyle?: object;
  imageStyle?: object;
  imgCoverStyle?: object;
  detailsStyle?: object;
  itemTitle?: object;
  description?: object;
  priceDetail?: object;
  cardLayoutStyle?: object;
  backgroundColor?: string;
  onPress?: () => void;
}

const ItemCard = (props: UiItemCard) => {
  const navigation: any = useNavigation();
  const {
    title,
    source,
    itemPrice,
    itemQt,
    flexStyle,
    imageStyle,
    detailsStyle,
    imgCoverStyle,
    cardLayoutStyle,
    itemDescrip,
    itemTitle,
    description,
    priceDetail,
    children,
    backgroundColor,
    onPress,
    ...rest
  } = props;
  return (
    <Card
      containerStyle={[styles.cardLayout, cardLayoutStyle]}
      {...(rest as any)}
    >
      <ExtendedView>
        <ExtendedTouchableOpacity onPress={onPress}>
          <ExtendedView style={[styles.flex, flexStyle]}>
            <ExtendedView
              style={[
                styles.itemImage,
                imgCoverStyle,
                { backgroundColor: backgroundColor },
              ]}
            >
              <Image
                source={source}
                style={[styles.imageStyle, imageStyle]}
              ></Image>
            </ExtendedView>
            <ExtendedView style={[styles.itemDetails, detailsStyle]}>
              <ExtendedText style={[styles.itemTitle, itemTitle]}>
                {title}
              </ExtendedText>
              <ExtendedText style={[styles.description, description]}>
                {itemDescrip}
              </ExtendedText>
              <ExtendedView style={[styles.priceDetail, priceDetail]}>
                <ExtendedText style={styles.itPrice}>{itemPrice}$</ExtendedText>
                {itemQt && (
                  <ExtendedText style={styles.itQuant}>
                    {itemQt} Price
                  </ExtendedText>
                )}
              </ExtendedView>
              {children && <ExtendedView>{children}</ExtendedView>}
            </ExtendedView>
          </ExtendedView>
        </ExtendedTouchableOpacity>
      </ExtendedView>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardLayout: {
    flex: 1,
    borderRadius: 18,
    backgroundColor: "#F9F9F9",
    alignItems: "center",
    justifyContent: "center",
  },
  flex: {
    flexDirection: "column",
    alignItems: "center",
    minWidth: 200,
  },
  itemImage: {
    height: 115,
    width: 120,
    marginHorizontal: 4,
    borderRadius: 13,
    alignSelf: "center",
    backgroundColor: "#FaE9F9",
    marginBottom: "6%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    height: 87,
    width: 120,
    alignSelf: "center",
  },

  itemDetails: {
    height: 56,
    marginTop: 5,
  },
  itemTitle: {
    width: 69,
    fontWeight: "700",
    height: 20,
    fontSize: 16,
  },
  description: {
    fontSize: 12,
    width: 120,
    height: 28,
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
    bottom: 3,
  },
});

export default ItemCard;
