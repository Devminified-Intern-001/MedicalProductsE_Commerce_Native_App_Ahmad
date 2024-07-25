// import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import { Slider } from "react-native-elements";
import { ThumbIcon } from "../../../../svgs";
import { StyleSheet } from "react-native";
import { ExtendedView, ExtendedInput, ExtendedText } from "../index";

type UISliderProps = React.ComponentProps<typeof Slider>;

const ExtendedSlider: React.FC<UISliderProps> = (props) => {
  const [value, setValue] = useState(75);
  return (
    <ExtendedView>
      <Slider
        minimumTrackTintColor="#FBD54E"
        maximumTrackTintColor="#C9C9C940"
        thumbTintColor="#FBD54E"
        minimumValue={0}
        maximumValue={150}
        value={value}
        onValueChange={(value) => setValue(Math.round(value))}
        thumbStyle={styles.thumbStyle}
        trackStyle={styles.trackStyle}
        thumbProps={{
          children: <ThumbIcon style={styles.thumbIcon} />,
        }}
        {...props}
      />
      <ExtendedView style={styles.slideRange}>
        <ExtendedText style={styles.rangeInput}>0</ExtendedText>
        <ExtendedText style={styles.textStyle}>To</ExtendedText>
        <ExtendedText style={styles.rangeInput}>{value}</ExtendedText>
      </ExtendedView>
    </ExtendedView>
  );
};

const styles = StyleSheet.create({
  trackStyle: {
    height: 10,
    width: "100%",
    borderRadius: 20,
  },
  thumbStyle: {
    width: 23,
    height: 23,
  },
  thumbIcon: {
    bottom: 19,
    right: 20,
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
    paddingTop: "4%",
  },
  textStyle: {
    marginHorizontal: "16%",
    fontSize: 13,
    fontWeight: "400",
    color: "#909090",
  },
});
export default ExtendedSlider;
