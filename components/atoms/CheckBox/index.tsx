import { Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { CheckBox as RNECheckBox, CheckBoxProps } from "react-native-elements";

interface UiCheckBoxProps extends CheckBoxProps {
  title: string;
}
const ExtendedCheckBox: React.FC<UiCheckBoxProps> = (props) => {
  const { title, ...rest } = props;
  const [checked, setChecked] = useState(false);
  return (
    <RNECheckBox
      containerStyle={styles.styleBox}
      title={title}
      checkedIcon={<Image source={require("../../../assets/checked.png")} />}
      uncheckedIcon={
        <Image source={require("../../../assets/unchecked.png")} />
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
    borderWidth: 0,
    padding: 0,
  },
});
export default ExtendedCheckBox;
