import { StyleSheet } from "react-native";
import {
  ExtendedView,
  ExtendedSwitch,
  ExtendedText,
  ExtendedSlider,
  ExtendedCheckBox,
} from "../../atoms";
import React from "react";
import { CustomButton, CustomFlexText } from "../../molecules";
import DropDownArrow from "../../../../svgs/DropDownArrow";
const itemsFilter = () => {
  return (
    <ExtendedView>
      <ExtendedView>
        <CustomFlexText title="Filter" textValue="Clear All" />
      </ExtendedView>

      <ExtendedView>
        <ExtendedView>
          <CustomFlexText title="On Sales" textValue={<ExtendedSwitch />} />
        </ExtendedView>

        <ExtendedView>
          <CustomFlexText title="New Arrivals" textValue={<ExtendedSwitch />} />
        </ExtendedView>
      </ExtendedView>

      <ExtendedView>
        <ExtendedView>
          <CustomFlexText title="Price Range" textValue={<DropDownArrow />} />
        </ExtendedView>

        <ExtendedView>
          <ExtendedSlider />
        </ExtendedView>

        <ExtendedView>
          <CustomButton title="0" />
          <ExtendedText>To</ExtendedText>
          <CustomButton title="100" />
        </ExtendedView>
      </ExtendedView>

      <ExtendedView>
        <ExtendedView>
          <CustomFlexText title="Price Range" textValue={<DropDownArrow />} />
        </ExtendedView>
      </ExtendedView>

      <ExtendedView>
        <ExtendedCheckBox title="Sugar Free" />
        <ExtendedCheckBox title="Low Fat" />
        <ExtendedCheckBox title="Fat-Free" />
        <ExtendedCheckBox title="Vegan" />
      </ExtendedView>
    </ExtendedView>
  );
};

export default itemsFilter;

const styles = StyleSheet.create({
  flexContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
    marginHorizontal: 5,
    width: 270,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 7,
  },
});
