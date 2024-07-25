import { TextInput, TextInputProps } from "react-native";
import React from "react";

interface UiInputProps extends TextInputProps {
  placeholder?: string;
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
  secureTextEntry?: boolean;
}

const ExtendedInput: React.FC<UiInputProps> = (props) => {
  const {
    placeholder,
    keyboardType = "default",
    secureTextEntry = true,
    ...rest
  } = props;
  return (
    <TextInput
      placeholder={placeholder}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      {...rest}
    />
  );
};

export default ExtendedInput;
