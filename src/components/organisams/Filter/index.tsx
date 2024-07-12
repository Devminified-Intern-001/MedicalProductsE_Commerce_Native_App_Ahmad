import { StyleSheet } from "react-native";
import {
  ExtendedView,
  ExtendedSwitch,
  ExtendedText,
  ExtendedSlider,
  ExtendedCheckBox,
  ExtendedInput,
} from "../../atoms";
import React from "react";
import { CustomFlexText } from "../../molecules";
import DropDownArrow from "../../../../svgs/DropDownArrow";
const ItemsFilter = () => {
  return (
    <ExtendedView style={styles.container}>
      <ExtendedView style={styles.formContainer}>
        <ExtendedView>
          <CustomFlexText
            title="Filter"
            textValue="Clear All"
            flexContainer={styles.flexContent}
          />
        </ExtendedView>

        <ExtendedView style={styles.horizontalLine}></ExtendedView>

        <ExtendedView style={styles.switchContainer}>
          <ExtendedView>
            <CustomFlexText
              title="On Sales"
              titleStyle={styles.titleLightText}
              textValue={<ExtendedSwitch />}
              flexContainer={styles.flexContent}
            />
          </ExtendedView>

          <ExtendedView style={styles.spacing}>
            <CustomFlexText
              title="New Arrivals"
              titleStyle={styles.titleLightText}
              textValue={<ExtendedSwitch />}
              flexContainer={styles.flexContent}
            />
          </ExtendedView>
        </ExtendedView>

        <ExtendedView style={styles.horizontalLine}></ExtendedView>

        <ExtendedView style={styles.sliderContainer}>
          <ExtendedView>
            <CustomFlexText
              title="Price Range"
              titleStyle={styles.titleText}
              textValue={<DropDownArrow />}
              flexContainer={styles.flexContent}
            />
          </ExtendedView>

          <ExtendedView style={styles.sliderStyle}>
            <ExtendedSlider />
          </ExtendedView>

          <ExtendedView style={styles.slideRange}>
            <ExtendedInput
              placeholder="0"
              keyboardType="numeric"
              style={styles.rangeInput}
            />
            <ExtendedText style={styles.textStyle}>To</ExtendedText>
            <ExtendedInput
              placeholder="150"
              keyboardType="numeric"
              style={styles.rangeInput}
            />
          </ExtendedView>
        </ExtendedView>

        <ExtendedView style={styles.horizontalLine}></ExtendedView>

        <ExtendedView>
          <ExtendedView>
            <CustomFlexText
              title="Dietary Needs"
              titleStyle={styles.titleText}
              textValue={<DropDownArrow />}
              flexContainer={styles.flexContent}
            />
          </ExtendedView>
        </ExtendedView>

        <ExtendedView style={styles.checkBoxContainer}>
          <ExtendedCheckBox
            title="Sugar Free"
            containerStyle={styles.checkBox}
          />
          <ExtendedCheckBox title="Low Fat" containerStyle={styles.checkBox} />
          <ExtendedCheckBox title="Fat-Free" containerStyle={styles.checkBox} />
          <ExtendedCheckBox title="Vegan" containerStyle={styles.checkBox} />
        </ExtendedView>
      </ExtendedView>
    </ExtendedView>
  );
};

export default ItemsFilter;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#0000003B",
  },
  formContainer: {
    width: "84%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    paddingVertical: "6%",
    backgroundColor: "#FFFFFF",
  },
  flexContent: {
    width: 240,
    height: 30,
    alignItems: "center",
  },
  horizontalLine: {
    backgroundColor: "#00000024",
    height: 1,
    marginBottom: "8%",
    width: "80%",
  },
  titleLightText: {
    fontSize: 16,
    fontWeight: "400",
  },
  switchContainer: {
    width: "84%",
    alignItems: "center",
    justifyContent: "center",
    height: "14%",
  },
  spacing: {
    marginBottom: "4%",
  },
  sliderContainer: {
    width: "84%",
  },
  sliderStyle: {
    marginHorizontal: "2%",
  },
  slideRange: {
    flexDirection: "row",
    width: "80%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "4%",
    marginBottom: "12%",
  },
  rangeInput: {
    width: 75,
    height: 38,
    borderRadius: 5,
    backgroundColor: "#D9D9D966",
    borderWidth: 1,
    borderColor: "#FBD54E",
    textAlign: "center",
  },
  textStyle: {
    marginHorizontal: "16%",
    fontSize: 13,
    fontWeight: "400",
    color: "#909090",
  },
  titleText: {
    fontSize: 16,
    fontWeight: "700",
  },
  checkBoxContainer: {
    width: "80%",
    alignItems: "flex-start",
  },
  checkBox: {
    width: "80%",
    backgroundColor: "transparent",
    borderWidth: 0,
    marginRight: 10,
    right: 18,
    height: 30,
  },
});
