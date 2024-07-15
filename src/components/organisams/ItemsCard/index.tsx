import React from "react";
import { StyleSheet, ImageSourcePropType } from "react-native";
import { ExtendedView } from "../../atoms";
import { ItemCard } from "../../molecules";
import { SafeAreaView } from "react-native-safe-area-context";

interface ItemsCartData {
  title: string;
  source: ImageSourcePropType;
  itemDescrip: string;
  itemPrice: string;
  itemQt: string;
  backgroundColor?: string;
}

interface CategoriesCardRowProps {
  style?: object;
  cardData: ItemsCartData[];
}

const CustomItemsCard = ({ cardData }: CategoriesCardRowProps) => {
  return (
    <SafeAreaView>
      <ExtendedView style={styles.row}>
        {cardData.map((data, index) => (
          <ItemCard
            key={index}
            title={data.title}
            source={data.source}
            itemDescrip={data.itemDescrip}
            itemPrice={data.itemPrice}
            itemQt={data.itemQt}
            backgroundColor={data.backgroundColor}
            cardLayoutStyle={styles.cardLayout}
            flexStyle={styles.cardContainer}
            imageStyle={styles.image}
            imgCoverStyle={styles.imgCover}
            itemTitle={styles.itemTitle}
            description={styles.description}
            priceDetail={styles.priceDetail}
          />
        ))}
      </ExtendedView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    bottom: "8%",
  },
  cardLayout: {
    minHeight: 190,
    minWidth: 100,
    maxWidth: 130,
    paddingBottom: "6%",
    marginVertical: "8%",
  },
  cardContainer: {},
  image: {
    height: 44,
    width: 44,
    resizeMode: "cover",
  },
  imgCover: {
    width: 102,
    height: 80,
  },
  itemTitle: {
    marginLeft: "9%",
    fontSize: 14,
    bottom: 6,
  },
  description: {
    marginLeft: "9%",
    fontSize: 10,
    bottom: 6,
  },
  priceDetail: {
    bottom: 22,
    width: 102,
    alignSelf: "center",
    justifyContent: "space-between",
  },
});

export default CustomItemsCard;
