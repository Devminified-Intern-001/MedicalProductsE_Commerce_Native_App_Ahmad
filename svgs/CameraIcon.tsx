import React from "react";
import { Svg, Path, G, Defs, ClipPath, Rect } from "react-native-svg";
const CameraIcon = () => {
  return (
    <Svg width="18" height="16" viewBox="0 0 18 16" fill="none">
      <G clip-path="url(#clip0_345_1360)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9 11.5556C7.50883 11.5556 6.3 10.3616 6.3 8.88889C6.3 7.41613 7.50883 6.22222 9 6.22222C10.4912 6.22222 11.7 7.41613 11.7 8.88889C11.7 10.3616 10.4912 11.5556 9 11.5556ZM16.2 1.77778C17.19 1.77778 18 2.57778 18 3.55556V14.2222C18 15.2 17.19 16 16.2 16H1.8C0.81 16 0 15.2 0 14.2222V3.55556C0 2.57778 0.81 1.77778 1.8 1.77778H4.653L5.76 0.577778C6.102 0.213333 6.588 0 7.092 0H10.908C11.412 0 11.898 0.213333 12.231 0.577778L13.347 1.77778H16.2ZM9 13.3333C11.484 13.3333 13.5 11.3422 13.5 8.88889C13.5 6.43556 11.484 4.44444 9 4.44444C6.516 4.44444 4.5 6.43556 4.5 8.88889C4.5 11.3422 6.516 13.3333 9 13.3333Z"
          fill="#FFCC00"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_345_1360">
          <Rect width="18" height="16" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default CameraIcon;
