import React from "react";
import { Rating, TapRatingProps } from "react-native-ratings";
import { Text, StyleSheet } from "react-native";
import ExtendedView from "../View";

interface UiRatingProps extends TapRatingProps {
  title?: string;
  avgRating: number;
}

const ExtendedRating: React.FC<UiRatingProps> = (props) => {
  const { avgRating, ...rest } = props;

  return (
    <ExtendedView style={styles.container}>
      <Rating
        startingValue={avgRating}
        readonly
        style={styles.rating}
        fractions={1}
        imageSize={20}
        ratingBackgroundColor="transparent"
        {...rest}
      />
      <Text style={styles.ratingValue}> {avgRating}</Text>
    </ExtendedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  rating: {
    paddingVertical: 0,
    backgroundColor: "transparent",
  },
  ratingValue: {
    marginLeft: 12,
    fontSize: 12,
  },
});

export default ExtendedRating;
