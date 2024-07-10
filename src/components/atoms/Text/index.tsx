import { Text } from "react-native";
import React from "react";

type UIText = React.ComponentProps<typeof Text>;
const ExtendedText: React.FC<UIText> = (props) => {
  return <Text {...props} />;
};

export default ExtendedText;
