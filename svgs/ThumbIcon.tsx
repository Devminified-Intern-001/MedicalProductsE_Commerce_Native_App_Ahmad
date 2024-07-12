import React from "react";
import { Svg, G, Defs, Circle } from "react-native-svg";
interface ThumbIconProps {
  style?: object;
}

const ThumbIcon: React.FC<ThumbIconProps> = ({ style }) => {
  return (
    <Svg width="63" height="63" viewBox="0 0 63 63" fill="none" style={style}>
      <G filter="url(#filter0_d_2402_2)">
        <Circle cx="31.5" cy="30.5" r="11.5" fill="black" />
      </G>
      <Circle cx="31.5" cy="30.5" r="8.5" fill="#FBD54E" />
    </Svg>
  );
};

export default ThumbIcon;
