// import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import { Slider } from "react-native-elements";
import { ThumbIcon } from "../../../../svgs";
import { StyleSheet } from "react-native";

type UISliderProps = React.ComponentProps<typeof Slider>;

const ExtendedSlider: React.FC<UISliderProps> = (props) => {
  const [value, setValue] = useState(75);
  return (
    <Slider
      minimumTrackTintColor="#FBD54E"
      maximumTrackTintColor="#C9C9C940"
      thumbTintColor="#FBD54E"
      minimumValue={0}
      maximumValue={150}
      value={value}
      onValueChange={(value) => setValue(value)}
      thumbStyle={styles.thumbStyle}
      trackStyle={styles.trackStyle}
      thumbProps={{
        children: <ThumbIcon style={styles.thumbIcon} />,
      }}
      {...props}
    />
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
});
export default ExtendedSlider;
