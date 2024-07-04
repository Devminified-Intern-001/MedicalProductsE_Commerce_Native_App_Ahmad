import React, { useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import {
  ExtendedText,
  ExtendedTouchableOpacity,
  ExtendedView,
} from "../../../components/atoms";
import { CustomButton } from "../../../components/molecules";
import AppIntroSlider from "react-native-app-intro-slider";
import SigninPage from "../Auth/SigninPage";
import ActionSheet from "../../../components/molecules/IntroSlider/ActionSheet";

const slides = [
  {
    key: 1,
    text: "We are offering specialist certified products",
    highlightedWord: "specialist",
    image: require("../../../assets/specialistBackground.png"),
    backgroundColor: "#59b2ab",
  },
  {
    key: 2,
    text: "Very fresh and clean organic fruits & vegetables!",
    highlightedWord: "organic",
    image: require("../../../assets/organicBackground.png"),
    backgroundColor: "#febe29",
  },
  {
    key: 3,
    text: "We always care about your health condition!",
    highlightedWord: "care",
    image: require("../../../assets/careBackground.png"),
    backgroundColor: "#22bcb5",
  },
];

const IntroSlider = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const renderItem = ({ item }) => {
    return (
      <ExtendedView style={styles.slide}>
        <Image source={item.image} style={styles.backImage} />
        <ActionSheet text={item.text} highlightedWord={item.highlightedWord} />
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

  const onDone = () => {
    setShowRealApp(true);
  };

  if (showRealApp) {
    return (
      <ExtendedView>
        <SigninPage />
      </ExtendedView>
    );
  } else {
    return (
      <AppIntroSlider
        renderItem={renderItem}
        data={slides}
        renderPagination={renderPagination}
        onDone={onDone}
      />
    );
  }
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
  },
  backImage: {
    height: 450,
    width: 360,
    resizeMode: "cover",
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
    marginBottom: 14,
  },
  activeDot: {
    backgroundColor: "#FBD54E",
    width: 15,
  },
});

export default IntroSlider;
