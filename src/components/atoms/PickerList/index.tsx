import React, { useState } from "react";
import RNPickerSelect, { PickerSelectProps } from "react-native-picker-select";
import { StyleSheet } from "react-native";
import { ExtendedView } from "../index";

interface PickerListProps extends PickerSelectProps {
  items: { label: string; value: string }[]; // Add the required items prop
}

const PickerList: React.FC<PickerListProps> = (props) => {
  const { items, value, onValueChange, ...restProps } = props;
  const [selected, setSelected] = useState<string | null>(value || null);

  const handleValueChange = (value: string | null, index: number) => {
    setSelected(value);
    if (onValueChange) {
      onValueChange(value, index);
    }
  };

  return (
    <ExtendedView style={styles.container}>
      <RNPickerSelect
        onValueChange={handleValueChange}
        value={selected}
        items={items}
        style={{
          inputAndroid: styles.picker,
          inputIOS: styles.picker,
        }}
        placeholder={{ label: "Select an option", value: null }}
        {...restProps}
      />
    </ExtendedView>
  );
};

export default PickerList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEF1F5",
    borderRadius: 50,
    minWidth: "80%",
  },
  picker: {
    fontSize: 16,
    color: "#000",
    borderRadius: 50,
    borderColor: "#fff",
    minHeight: 40,
    minWidth: "80%",
    marginLeft: "2%",
  },
});
