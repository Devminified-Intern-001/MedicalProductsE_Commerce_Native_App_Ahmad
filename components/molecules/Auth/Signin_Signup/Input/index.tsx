import { StyleSheet } from "react-native";
import { ExtendedView, ExtendedInput } from "../../../../atoms";
import React, { ReactNode } from "react";

interface UiInputProps {
  children?: ReactNode;
  lefticon?: ReactNode;
  righticon?: ReactNode;
  placeholder: string;
  style?: object;
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
  secureTextEntry?: boolean;
}

const CustomInput: React.FC<UiInputProps> = (props: UiInputProps) => {
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
    <ExtendedView style={styles.container}>
      <ExtendedView style={[styles.inputContainer, style]}>
        {lefticon && (
          <ExtendedView style={styles.icon}>{lefticon} </ExtendedView>
        )}
        <ExtendedInput
          style={styles.textInput}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          {...rest}
        />
        {righticon && (
          <ExtendedView style={styles.icon}>{righticon}</ExtendedView>
        )}
        {children && (
          <ExtendedView style={styles.children}>{children}</ExtendedView>
        )}
      </ExtendedView>
    </ExtendedView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#EEF1F5",
    borderRadius: 50,
    borderColor: "#fff",
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
