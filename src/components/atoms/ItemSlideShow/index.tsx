import { Slideshow } from "react-native-image-slider-show";
import React from "react";
type UiItemSlideShowProps = React.ComponentProps<typeof Slideshow>;
const ExtendedItemSlide: React.FC<UiItemSlideShowProps> = (props) => {
  const { ...rest } = props;
  const images = [
    { url: require("../../../../assets/Carrots.png") },
    { url: require("../../../../assets/cabbage.png") },
    { url: require("../../../../assets/tomato.png") },
  ];
  return <Slideshow dataSource={images} {...rest} />;
};
export default ExtendedItemSlide;
