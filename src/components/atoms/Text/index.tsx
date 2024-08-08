import { Text, TextProps } from "react-native";
import React from "react";

interface ExtendedTextProps extends TextProps {
  title?: string;
}

const ExtendedText: React.FC<ExtendedTextProps> = ({ title, ...props }) => {
  return (
    <Text {...props}>
      {title}
      {props.children}
    </Text>
  );
};

export default ExtendedText;
