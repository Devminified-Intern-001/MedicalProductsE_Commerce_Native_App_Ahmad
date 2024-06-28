import { View, TextInput, Text, StyleSheet, SafeAreaView } from "react-native";
import React, { ReactNode } from "react";

interface UiInput {
  children?: ReactNode;
  lefticon?: ReactNode;
  righticon?: ReactNode;
  placeholder: string;
  style?: object;
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
  secureTextEntry?: boolean;
}

const CustomInput = (props: UiInput) => {
  const {
    children,
    lefticon,
    righticon,
    placeholder,
    style,
    keyboardType = "default",
    secureTextEntry = true,
    ...rest
  } = props;
  return (
    <SafeAreaView style={[styles.container, style]} {...rest}>
      <View style={styles.inputContainer}>
        {lefticon && <View style={styles.icon}>{lefticon} </View>}
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          {...rest}
        />
        {righticon && <View style={styles.icon}>{righticon}</View>}
      </View>
      {children && <View style={styles.children}>{children}</View>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    width: "80%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    minWidth: 150,
    height: 30,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderColor: "#ccc",
  },
  icon: {
    paddingHorizontal: 10,
  },
  children: {
    marginTop: 10,
  },
});

export default CustomInput;
