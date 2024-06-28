import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";
import React, { ReactNode } from "react";

interface UiCategoryCard {
  children?: ReactNode;
  title: string;
  source: ImageSourcePropType;
  style?: object;
}

const CustomCategoryCard = (props: UiCategoryCard) => {
  const { children, title, source, ...rest } = props;
  return (
    <View style={[styles.container, rest.style]}>
      <View>
        <Image style={styles.icon} source={source} />
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fbe5ff",
    borderRadius: 13,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    width: 74,
    height: 74,
  },
  title: {
    color: "#000000",
    fontSize: 10,
    marginHorizontal: 10,
    width: 30,
    height: 12,
    marginTop: 2,
  },
  icon: {
    resizeMode: "contain",
    width: 27,
    height: 27,
  },
});

export default CustomCategoryCard;
