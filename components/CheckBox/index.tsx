import { Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { CheckBox as RNECheckBox } from "react-native-elements";

interface UiCheckBox {
  title: string;
}
const CustomCheckBox = (props: UiCheckBox) => {
  const { title } = props;
  const [checked, setChecked] = useState(false);
  return (
    <RNECheckBox
      containerStyle={styles.styleBox}
      title={title}
      checkedIcon={<Image source={require("../../assets/checked.png")} />}
      uncheckedIcon={<Image source={require("../../assets/unchecked.png")} />}
      checked={checked}
      onPress={() => setChecked(!checked)}
    />
  );
};

const styles = StyleSheet.create({
  styleBox: {
    backgroundColor: "transparent",
    borderWidth: 0,
    padding: 0,
  },
});
export default CustomCheckBox;
