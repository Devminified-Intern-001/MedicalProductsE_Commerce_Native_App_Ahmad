import React, { useRef, useState } from "react";
import { StyleSheet, Image, View, Button } from "react-native";
import {
  ExtendedText,
  ExtendedTouchableOpacity,
  ExtendedView,
} from "../../../components/atoms";
import { CustomButton } from "../../../components/molecules";
import AppIntroSlider from "react-native-app-intro-slider";
import { useNavigation } from "@react-navigation/native";

const slides = [
  {
    key: 1,
    text: "We are offering specialist certified products",
    highlightedWord: "specialist",
    image: require("../../../../assets/specialistBackground.png"),
    backgroundColor: "#59b2ab",
  },
  {
    key: 2,
    text: "Very fresh and clean organic fruits & vegetables!",
    highlightedWord: "organic",
    image: require("../../../../assets/organicBackground.png"),
    backgroundColor: "#febe29",
  },
  {
    key: 3,
    text: "We always care about your health condition!",
    highlightedWord: "care",
    image: require("../../../../assets/careBackground.png"),
    backgroundColor: "#22bcb5",
  },
];

const IntroSlider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const sliderRef = useRef(null);

  const renderItem = ({ item }) => {
    const parts = item.text.split(item.highlightedWord);

    return (
      <ExtendedView style={styles.slide}>
        <Image source={item.image} style={styles.backImage} />
        <ExtendedView style={styles.actionSheet}>
          <ExtendedView>
            <ExtendedText style={styles.text}>
              {parts[0]}
              <ExtendedText style={styles.highlightedText}>
                {item.highlightedWord}
              </ExtendedText>
              {parts[1]}
            </ExtendedText>
          </ExtendedView>
          <ExtendedView>
            <ExtendedTouchableOpacity
              style={styles.skipContainer}
              onPress={() => {
                onDone();
              }}
            >
              <ExtendedText style={styles.skipText}>Skip</ExtendedText>
            </ExtendedTouchableOpacity>
          </ExtendedView>
          <CustomButton
            title="Next"
            style={styles.next}
            onPress={() => {
              const nextSlideIndex = currentSlideIndex + 1;
              if (nextSlideIndex < slides.length) {
                setCurrentSlideIndex(nextSlideIndex);
                sliderRef.current.goToSlide(nextSlideIndex);
              } else {
                onDone();
              }
            }}
          />
        </ExtendedView>
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
  const navigation: any = useNavigation();
  const onDone = () => {
    navigation?.navigate("SigninPage");
  };

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      renderPagination={renderPagination}
      onDone={onDone}
      ref={sliderRef}
    />
  );
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
    height: "66%",
    width: "100%",
    resizeMode: "cover",
  },
  paginationContainer: {
    position: "absolute",
    bottom: "19%",
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: "2%",
    height: "70%",
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginHorizontal: ".8%",
    marginBottom: "3%",
  },
  activeDot: {
    backgroundColor: "#FBD54E",
    width: "4%",
  },
  actionSheet: {
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "#fff",
    height: "34%",
    width: "100%",
  },
  text: {
    fontSize: 22,
    width: 308,
    color: "#000",
    textAlign: "center",
    marginBottom: "8%",
    fontWeight: "700",
  },
  highlightedText: {
    color: "#FBD54E",
  },
  skipContainer: {
    width: 200,
    alignItems: "center",
    marginTop: "8%",
  },
  skipText: {
    color: "#FFCC00",
    fontSize: 15,
    fontWeight: "500",
    width: "auto",
  },
  next: {
    marginTop: 14,
    height: "20%",
    width: "70%",
    fontWeight: "700",
  },
});

export default IntroSlider;
