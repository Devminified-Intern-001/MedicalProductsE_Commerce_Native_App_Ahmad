import { StyleSheet, Image, ImageSourcePropType } from "react-native";
import React, { ReactNode } from "react";
import {
  ExtendedView,
  ExtendedText,
  ExtendedTouchableOpacity,
} from "../../atoms";

interface UiCategoryCard {
  children?: ReactNode;
  title: string;
  source: ImageSourcePropType;
  style?: object;
  backgroundColor?: string;
  onPress?: () => void;
}

const CustomCategoryCard = (props: UiCategoryCard) => {
  const { children, title, source, backgroundColor, onPress, ...rest } = props;
  return (
    <ExtendedTouchableOpacity onPress={onPress} activeOpacity={0.6}>
      <ExtendedView
        style={[
          styles.container,
          rest.style,
          { backgroundColor: backgroundColor },
        ]}
      >
        <ExtendedView>
          <Image style={styles.icon} source={source} />
        </ExtendedView>
        <ExtendedView>
          <ExtendedText style={styles.title}>{title}</ExtendedText>
        </ExtendedView>
        <ExtendedView>{children}</ExtendedView>
      </ExtendedView>
    </ExtendedTouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fbe5ff",
    borderRadius: 13,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    width: 66,
    height: 66,
  },
  title: {
    color: "#000000",
    fontSize: 10,
    marginHorizontal: 10,
    width: 40,
    marginTop: 3,
    textAlign: "center",
  },
  icon: {
    resizeMode: "contain",
    width: 27,
    height: 27,
  },
});

export default CustomCategoryCard;
