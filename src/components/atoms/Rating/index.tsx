import React from "react";
import { Rating, TapRatingProps } from "react-native-ratings";
import { View, Text, StyleSheet } from "react-native";

interface UiRatingProps extends TapRatingProps {
  title: string;
}

const ExtendedRating: React.FC<UiRatingProps> = (props) => {
  const { ...rest } = props;
  const [currentRating, setCurrentRating] = React.useState(0);

  const ratingCompleted = (rating: number) => {
    setCurrentRating(rating);
    console.log("Rating is: " + rating);
  };

  return (
    <View style={styles.container}>
      <Rating
        onFinishRating={ratingCompleted}
        style={styles.rating}
        fractions={1}
        imageSize={30}
        {...rest}
      />
      <Text style={styles.ratingValue}>{currentRating.toFixed(1)}/5</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    paddingVertical: 10,
  },
  ratingValue: {
    marginLeft: 20,
    fontSize: 12,
  },
});

export default ExtendedRating;
