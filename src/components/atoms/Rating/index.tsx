import React from "react";
import { Rating, TapRatingProps } from "react-native-ratings";
import { Text, StyleSheet } from "react-native";
import ExtendedView from "../View";

interface UiRatingProps extends TapRatingProps {
  title?: string;
}

const ExtendedRating: React.FC<UiRatingProps> = (props) => {
  const { ...rest } = props;
  const [currentRating, setCurrentRating] = React.useState(0);

  const ratingCompleted = (rating: number) => {
    setCurrentRating(rating);
    console.log("Rating is: " + rating);
  };

  return (
    <ExtendedView style={styles.container}>
      <Rating
        onFinishRating={ratingCompleted}
        style={styles.rating}
        fractions={1}
        imageSize={20}
        ratingBackgroundColor="transparent"
        {...rest}
      />
      <Text style={styles.ratingValue}>({currentRating.toFixed(1)}/5)</Text>
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
