import React from "react";
import { Svg, Path } from "react-native-svg";
import { View } from "react-native";
const EyeIcon = () => {
  return (
    <View>
      <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <Path
          d="M13.32 13.3198C12.0768 14.2675 10.563 14.7925 9 14.818C3.90909 14.818 1 8.99984 1 8.99984C1.90465 7.31395 3.15937 5.84101 4.68 4.67984M7.47273 3.3562C7.97333 3.23903 8.48586 3.18045 9 3.18166C14.0909 3.18166 17 8.99984 17 8.99984C16.5585 9.82574 16.032 10.6033 15.4291 11.3198M10.5418 10.5417C10.3421 10.756 10.1012 10.928 9.83357 11.0472C9.56593 11.1665 9.27702 11.2306 8.98407 11.2357C8.69111 11.2409 8.40012 11.187 8.12844 11.0773C7.85677 10.9676 7.60998 10.8042 7.4028 10.597C7.19562 10.3899 7.03229 10.1431 6.92255 9.8714C6.81282 9.59972 6.75893 9.30873 6.7641 9.01577C6.76927 8.72282 6.83339 8.43391 6.95264 8.16628C7.07189 7.89864 7.24382 7.65777 7.45818 7.45802"
          stroke="#A7A8BB"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M1 1L17 17"
          stroke="#A7A8BB"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default EyeIcon;
