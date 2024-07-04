import { View, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

type UITouchableOpacityProps = React.ComponentProps<typeof TouchableOpacity>;

const ExtendedTouchableOpacity: React.FC<UITouchableOpacityProps> = (props) => {
  return <TouchableOpacity {...props} />;
};

export default ExtendedTouchableOpacity;
