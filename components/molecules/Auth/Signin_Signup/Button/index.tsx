import { StyleSheet } from "react-native";
import {
  ExtendedText,
  ExtendedView,
  ExtendedTouchableOpacity,
} from "../../../../atoms";
import React, { ReactNode } from "react";

interface UiButton {
  children?: ReactNode;
  onPress?: () => void;
  lefticon?: ReactNode;
  righticon?: ReactNode;
  title: string;
  style?: object;
  iconStyle?: object;
  titleStyle?: object;
}

const CustomButton = (props: UiButton) => {
  const {
    children,
    onPress,
    lefticon,
    righticon,
    iconStyle,
    title,
    titleStyle,
    style,
    ...rest
  } = props;
  console.log("left", lefticon);
  return (
    <ExtendedTouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
      {...rest}
    >
      <ExtendedView style={styles.content}>
        {lefticon && (
          <ExtendedView style={[styles.icon, iconStyle]}>
            {lefticon}
          </ExtendedView>
        )}

        <ExtendedText style={[styles.title, titleStyle]}>{title}</ExtendedText>

        {righticon && (
          <ExtendedView style={[styles.icon, iconStyle]}>
            {righticon}
          </ExtendedView>
        )}

        {children && (
          <ExtendedView style={styles.children}>{children}</ExtendedView>
        )}
      </ExtendedView>
    </ExtendedTouchableOpacity>
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
