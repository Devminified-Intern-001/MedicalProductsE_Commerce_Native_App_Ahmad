import React from "react";
import { Text, TextProps, StyleSheet } from "react-native";

interface UiItemsTextProps extends TextProps {
  style?: object;
  itemName?: string;
  description?: string;
  nutritionFacts?: string;
  calories?: string;
}

const ExtendedItemsText: React.FC<UiItemsTextProps> = ({
  itemName,
  description,
  nutritionFacts,
  calories,
  style,
  ...restProps
}) => {
  return (
    <Text {...restProps} style={style}>
      <Text>{itemName}</Text>
      <Text>{description}</Text>
      <Text>{nutritionFacts}</Text>
      <Text>{calories}</Text>
    </Text>
  );
};

export default ExtendedItemsText;
