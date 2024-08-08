import React from "react";
import { Text, TextProps, StyleSheet } from "react-native";

interface UiItemsTextProps extends TextProps {
  style?: object;
  itemName?: string;
  description?: string;
  servingsPerContainer?: string;
  servingSize?: string;
  amountsPerServing?: string;
}

const ExtendedItemsText: React.FC<UiItemsTextProps> = ({
  itemName,
  description,
  servingsPerContainer,
  servingSize,
  amountsPerServing,
  style,
  ...restProps
}) => {
  return (
    <Text {...restProps} style={style}>
      <Text>{itemName}</Text>
      <Text>{description}</Text>
      <Text>{servingsPerContainer}</Text>
      <Text>{servingSize}</Text>
      <Text>{amountsPerServing}</Text>
    </Text>
  );
};

export default ExtendedItemsText;
