import { Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { CheckBox as RNECheckBox, CheckBoxProps } from "react-native-elements";
import ExtendedTouchableOpacity from "../TouchableOpacity";

interface UiCheckBoxProps extends CheckBoxProps {
  title: string;
  boxStyle?: object;
}
const ExtendedCheckBox: React.FC<UiCheckBoxProps> = (props) => {
  const { title, boxStyle, ...rest } = props;
  const [checked, setChecked] = useState(false);
  return (
    <RNECheckBox
      containerStyle={[styles.styleBox, boxStyle]}
      title={title}
      checkedIcon={<Image source={require("../../../../assets/checked.png")} />}
      uncheckedIcon={
        <Image source={require("../../../../assets/unchecked.png")} />
      }
      checked={checked}
      onPress={() => setChecked(!checked)}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  styleBox: {
    backgroundColor: "transparent",
    padding: 0,
    width: "30%",
    borderWidth: 0,
    alignItems: "center",
  },
});
export default ExtendedCheckBox;
