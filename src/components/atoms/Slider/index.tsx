import Slider from "@react-native-community/slider";
import React, { useState } from "react";

type UISliderProps = React.ComponentProps<typeof Slider>;

const ExtendedSlider: React.FC<UISliderProps> = (props) => {
  const [value, setValue] = useState(0);
  return (
    <Slider
      style={{ width: 200, height: 30 }}
      minimumTrackTintColor="#FBD54E"
      maximumTrackTintColor="#C9C9C9"
      thumbTintColor="#FBD54E"
      minimumValue={0}
      maximumValue={1}
      value={value}
      onValueChange={(value) => setValue(value)}
      {...props}
    />
  );
};

export default ExtendedSlider;
