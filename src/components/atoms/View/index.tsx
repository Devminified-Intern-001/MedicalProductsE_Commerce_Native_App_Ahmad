import { View, ViewProps } from "react-native";
import React from "react";

type UIView = React.ComponentProps<typeof View>;
const ExtendedView: React.FC<UIView> = (props) => {
  return <View {...props} />;
};

export default ExtendedView;
