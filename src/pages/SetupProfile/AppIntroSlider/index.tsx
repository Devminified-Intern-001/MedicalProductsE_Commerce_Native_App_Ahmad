import React, { useRef, useState } from "react";
import { StyleSheet, Image, View, Button } from "react-native";
import {
  ExtendedText,
  ExtendedTouchableOpacity,
  ExtendedView,
} from "../../../components/atoms";
import { CustomButton } from "../../../components/molecules";
import AppIntroSlider from "react-native-app-intro-slider";
import SigninPage from "../Auth/SigninPage";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpPage from "../Auth/SignupPage";
// import ActionSheet from "../../../components/molecules/IntroSlider/ActionSheet";

// const [nextSlide, setNextSlide] = useState(1);
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
  const [showRealApp, setShowRealApp] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const sliderRef = useRef(null);
  const Stack = createNativeStackNavigator();

  const renderItem = ({ item }) => {
    return (
      <ExtendedView style={styles.slide}>
        <Image source={item.image} style={styles.backImage} />
        {/* <ActionSheet text={item.text} highlightedWord={item.highlightedWord} /> */}

        <ExtendedView style={styles.actionSheet}>
          <ExtendedView>
            <ExtendedText style={styles.text}>
              {/* {parts[0]} */}
              <ExtendedText style={styles.highlightedText}>
                {/* {highlightedWord} */}
              </ExtendedText>
              {/* {parts[1]} */}
            </ExtendedText>
          </ExtendedView>
          <ExtendedView>
            <ExtendedTouchableOpacity style={styles.skipContainer}>
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
  actionSheet: {
    // justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "#fff",
    height: 306,
    width: 370,
    bottom: 30,
    paddingTop: 30,
  },
  text: {
    fontSize: 22,
    width: 308,
    color: "#000",
    textAlign: "center",
    marginTop: 30,
    fontWeight: "700",
  },
  highlightedText: {
    color: "#FBD54E",
  },
  skipContainer: {
    width: 200,
    alignItems: "center",
    marginTop: 110,
  },
  skipText: {
    color: "#FFCC00",
    fontSize: 15,
    fontWeight: "500",
    width: "auto",
  },
  next: {
    marginTop: 14,
    height: 46,
    width: 280,
    fontWeight: "700",
  },
});

export default IntroSlider;
