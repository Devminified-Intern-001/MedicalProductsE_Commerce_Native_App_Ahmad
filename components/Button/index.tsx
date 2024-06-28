import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import React, { ReactNode } from "react";

interface UiButton {
  children?: ReactNode;
  onPress?: () => void;
  lefticon?: ReactNode;
  righticon?: ReactNode;
  title: string;
  style?: object;
}

const CustomButton = (props: UiButton) => {
  const { children, onPress, lefticon, righticon, title, style, ...rest } =
    props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
      {...rest}
    >
      <View style={styles.content}>
        {lefticon && <View style={styles.icon}>{lefticon} </View>}

        <Text style={styles.title}>{title}</Text>

        {righticon && <View style={styles.icon}>{righticon}</View>}

        {children && <View style={styles.children}>{children}</View>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FBD54E",
    padding: 10,
    width: "80%",
    height: "7%",
    display: "flex",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  title: {
    color: "#000000",
    fontSize: 14,
    marginHorizontal: 10,
    fontWeight: "600",
  },
  icon: {
    marginHorizontal: 5,
  },
  children: {
    marginTop: 10,
  },
});

export default CustomButton;
