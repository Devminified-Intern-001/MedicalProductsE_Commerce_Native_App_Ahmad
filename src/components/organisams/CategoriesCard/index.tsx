import React from "react";
import { StyleSheet, ImageSourcePropType } from "react-native";
import CustomCategoryCard from "../../molecules/CategoryCard";
import { ExtendedText, ExtendedView } from "../../atoms";

interface CardData {
  title: string;
  source: ImageSourcePropType;
}

interface CategoriesCardRowProps {
  style?: object;
  cardData: CardData[];
}

const CustomCategoriesCard = ({ cardData }: CategoriesCardRowProps) => {
  return (
    <ExtendedView>
      <ExtendedView style={styles.cardTitle}>
        <ExtendedText style={styles.titleText}>Categories</ExtendedText>
        <ExtendedText style={styles.seeAll}>See All</ExtendedText>
      </ExtendedView>
      <ExtendedView style={styles.row}>
        {cardData.map((data, index) => (
          <CustomCategoryCard
            key={index}
            title={data.title}
            source={data.source}
          />
        ))}
      </ExtendedView>
    </ExtendedView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    width: 300,
  },
  cardTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: 5,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 7,
  },
  seeAll: {
    fontSize: 12,
    fontWeight: "400",
    color: "#9B9B9B",
  },
});

export default CustomCategoriesCard;
