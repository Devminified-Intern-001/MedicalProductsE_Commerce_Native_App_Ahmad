import React, { useState } from "react";
import { StyleSheet, Image, View, ImageBackground } from "react-native";
import { ExtendedText, ExtendedView } from "../../../components/atoms";
import { CustomButton } from "../../../components/molecules";
import AppIntroSlider from "react-native-app-intro-slider";
import RightArrow from "../../../svgs/rightArrow";
const slides = [
  {
    key: 1,
    text: "Enjoy the special offer up to 50%",
    image: require("../../../assets/itemsBackgroung.png"),
    backgroundColor: "#59b2ab",
  },
  {
    key: 2,
    text: "Enjoy the special offer up to 30%",
    image: require("../../../assets/itemsBackgroung.png"),
    backgroundColor: "#febe29",
  },
  {
    key: 3,
    text: "Enjoy the special offer up to 20%",
    image: require("../../../assets/itemsBackgroung.png"),
    backgroundColor: "#22bcb5",
  },
];

const SpecialOfferSlider = () => {
  const renderItem = ({ item }) => {
    return (
      <ExtendedView style={styles.slide}>
        <ExtendedView style={styles.imageBackground}>
          <Image source={item.image} style={styles.backImage} />
        </ExtendedView>
        <ExtendedView style={styles.textContainer}>
          <ExtendedText style={styles.text}>{item.text}</ExtendedText>
        </ExtendedView>
        <ExtendedView style={styles.offerTextContainer}>
          <ExtendedText style={styles.offerTime}>
            At 12-20 December 2022
          </ExtendedText>
        </ExtendedView>
        <CustomButton
          title="See more"
          style={styles.moreButton}
          titleStyle={styles.btnTitle}
          righticon={<RightArrow />}
        />
      </ExtendedView>
    );
  };

  const renderPagination = (activeIndex) => {
    return (
      <View style={styles.paginationContainer}>
        {slides.map((_, i) => (
          <View
            key={i}
            style={[styles.dot, i === activeIndex ? styles.activeDot : {}]}
          />
        ))}
      </View>
    );
  };

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      renderPagination={renderPagination}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    padding: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
  },
  imageBackground: {
    height: 130,
    width: 274,
    backgroundColor: "#fef9e4",
    position: "relative",
    borderRadius: 26,
  },
  backImage: {
    height: 130,
    width: 276,
    resizeMode: "contain",
  },
  textContainer: {
    position: "absolute",
    top: "43%",
    left: "18%",
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    width: 165,
    height: 40,
    color: "#FFCC00",
  },
  offerTextContainer: {
    position: "absolute",
    left: "18%",
  },
  offerTime: {
    fontSize: 8,
    color: "#9B9B9B",
  },
  moreButton: {
    width: 90,
    height: 30,
    position: "absolute",
    top: "52.5%",
    left: "18%",
  },
  btnTitle: {
    fontSize: 8,
    fontWeight: "700",
  },
  paginationContainer: {
    position: "absolute",
    bottom: 140,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
    marginBottom: "40%",
  },
  activeDot: {
    backgroundColor: "#FBD54E",
    width: 15,
  },
});

export default SpecialOfferSlider;
