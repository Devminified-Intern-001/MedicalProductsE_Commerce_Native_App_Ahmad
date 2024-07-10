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
            cardLayoutStyle={styles.cardLayout}
            flexStyle={styles.cardContainer}
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
  },
  cardLayout: {
    minHeight: 240,
    minWidth: 130,
    maxWidth: 160,
  },
  cardContainer: {
    marginBottom: 30,
  },
});

export default CustomItemsCard;
