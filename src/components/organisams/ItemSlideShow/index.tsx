import React from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { ExtendedView, ExtendedText } from "../../atoms";
import Swiper from "react-native-swiper";

interface ShopItemsData {
  imageUrl: ImageSourcePropType;
  itemName: string;
  description: string;
  nutritionFacts: string;
  calories: string;
  price: string;
}
interface ShopItemsProps {
  itemsData: ShopItemsData[];
  onIndexChanged: (index: number) => void;
}

const ExtendedItemSlide: React.FC<ShopItemsProps> = ({
  itemsData,
  onIndexChanged,
}) => {
  const handleIndexChanged = (index: number) => {
    onIndexChanged(index);
  };

  return (
    <ExtendedView style={styles.container}>
      <Swiper
        showsButtons={false}
        loop={true}
        autoplay={true}
        autoplayTimeout={6}
        renderPagination={(index, total, context) => {
          return (
            <ExtendedView style={styles.buttonWrapper}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => context.scrollBy(-1)}
              >
                <ExtendedText style={styles.buttonText}>‹</ExtendedText>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => context.scrollBy(1)}
              >
                <ExtendedText style={styles.buttonText}>›</ExtendedText>
              </TouchableOpacity>
            </ExtendedView>
          );
        }}
        onIndexChanged={handleIndexChanged}
      >
        {itemsData.map((data, index) => (
          <ExtendedView key={index} style={styles.slide}>
            <Image
              source={data.imageUrl}
              style={[
                styles.image,
                data.imageUrl === require("../../../../assets/Carrots.png") &&
                  styles.carrotImage,
              ]}
            />
          </ExtendedView>
        ))}
      </Swiper>
    </ExtendedView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 160,
    width: 300,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    borderRadius: 25,
  },
  image: {
    width: 80,
    height: 73,
    resizeMode: "contain",
  },
  buttonWrapper: {
    position: "absolute",
    top: "43%",
    left: "6%",
    right: "6%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#FBD54E",
    borderRadius: 50,
    height: 24,
    width: 24,
  },
  buttonText: {
    color: "#111",
    fontSize: 24,
    textAlign: "center",
    bottom: 6,
  },
  carrotImage: {
    width: 130,
    height: 94,
  },
});

export default ExtendedItemSlide;
