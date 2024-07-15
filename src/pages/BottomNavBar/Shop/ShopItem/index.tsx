import React, { useState } from "react";
import { StyleSheet, Image, ImageSourcePropType } from "react-native";
import {
  ExtendedView,
  ExtendedText,
  ExtendedItemsText,
  ExtendedRating,
  ExtendedTouchableOpacity,
} from "../../../../components/atoms";
import { CustomButton, CustomHeader } from "../../../../components/molecules";
import ExtendedItemSlide from "../../../../components/organisams/ItemSlideShow";
import { BasicLayout } from "../../../../layout";
import { ShoppingCartIcon } from "../../../../../svgs/index";
import { useNavigation } from "@react-navigation/native";
import Routes from "../../../../routes";
import { shopItemsData } from "../../../../data/shopItems";

interface ShopItemsData {
  imageUrl: ImageSourcePropType;
  itemName: string;
  description: string;
  nutritionFacts: string;
  calories: string;
  price: string;
}

const ShopItemPage: React.FC = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const navigation: any = useNavigation();
  let [counter, setCounter] = useState(0);

  function incrementCount() {
    setCounter(counter + 1);
  }

  function decrementCount() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  const handleItemChange = (index: number) => {
    setSelectedItemIndex(index);
  };

  return (
    <ExtendedView style={styles.pageContainer}>
      <ExtendedView style={styles.header}>
        <CustomHeader
          leftSource={require("../../../../../assets/arrow.png")}
          title="Shop Items"
          rightSource={require("../../../../../assets/shoppingCartImg.png")}
          titleStyle={styles.title}
          onArrowPress={() => navigation.goBack()}
        />
      </ExtendedView>
      <ExtendedView style={styles.contentContainer}>
        <BasicLayout>
          <ExtendedView style={styles.itemsSwiper}>
            <ExtendedItemSlide
              itemsData={shopItemsData}
              onIndexChanged={handleItemChange}
            />
          </ExtendedView>

          <ExtendedView style={styles.mapItemsData}>
            <ExtendedView style={styles.flexStyle}>
              <ExtendedView>
                <ExtendedItemsText
                  style={styles.titleStyle}
                  itemName={shopItemsData[selectedItemIndex].itemName}
                ></ExtendedItemsText>
              </ExtendedView>

              <ExtendedView style={styles.flexBox}>
                <ExtendedView style={styles.ratingIconBackground}>
                  <ExtendedRating />
                </ExtendedView>

                <ExtendedView style={styles.rightImgContainer}>
                  <ExtendedTouchableOpacity onPress={decrementCount}>
                    <Image
                      source={require("../../../../../assets/minus.png")}
                    />
                  </ExtendedTouchableOpacity>
                  <ExtendedText>{counter}</ExtendedText>
                  <ExtendedTouchableOpacity onPress={incrementCount}>
                    <Image source={require("../../../../../assets/add.png")} />
                  </ExtendedTouchableOpacity>
                </ExtendedView>
              </ExtendedView>
            </ExtendedView>
            <ExtendedView style={styles.flexStyle}>
              <ExtendedView>
                <ExtendedText style={styles.textStyle}>
                  Description
                </ExtendedText>
              </ExtendedView>
              <ExtendedView>
                <ExtendedItemsText
                  style={styles.descText}
                  description={shopItemsData[selectedItemIndex].description}
                ></ExtendedItemsText>
              </ExtendedView>
            </ExtendedView>

            <ExtendedView style={styles.flexStyle}>
              <ExtendedView>
                <ExtendedText style={styles.textStyle}>
                  Nutrition facts
                </ExtendedText>
              </ExtendedView>
              <ExtendedView>
                <ExtendedItemsText
                  style={styles.descText}
                  nutritionFacts={
                    shopItemsData[selectedItemIndex].nutritionFacts
                  }
                ></ExtendedItemsText>
                <ExtendedText style={styles.descText}>
                  Amount per serving
                </ExtendedText>
              </ExtendedView>
            </ExtendedView>

            <ExtendedView style={styles.flexStyle}>
              <ExtendedView style={styles.spacing}>
                <ExtendedText style={styles.calTextStyle}>
                  Calories
                </ExtendedText>
                <ExtendedItemsText
                  style={styles.calValue}
                  calories={shopItemsData[selectedItemIndex].calories}
                ></ExtendedItemsText>
              </ExtendedView>

              <ExtendedView style={styles.horizontalLine}></ExtendedView>

              <ExtendedView>
                <ExtendedText style={styles.rightAlign}>
                  % Daily Value*
                </ExtendedText>
              </ExtendedView>
            </ExtendedView>
          </ExtendedView>
        </BasicLayout>
      </ExtendedView>

      <ExtendedView style={styles.footerStyle}>
        <ExtendedView style={styles.priceFlex}>
          <ExtendedText style={styles.totalTextStyle}>Price</ExtendedText>
          <ExtendedText style={styles.priceStyle}>
            ${shopItemsData[selectedItemIndex].price}
          </ExtendedText>
        </ExtendedView>
        <ExtendedView>
          <CustomButton
            title="Add to cart"
            lefticon={<ShoppingCartIcon />}
            style={styles.checkoutBtn}
            onPress={() => navigation.navigate(Routes.CartItemPage)}
          />
        </ExtendedView>
      </ExtendedView>
    </ExtendedView>
  );
};

export default ShopItemPage;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "6%",
    backgroundColor: "#fff",
  },
  header: {
    marginTop: "2%",
    marginBottom: "3%",
    width: "100%",
    height: "8%",
    flex: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    width: 180,
    textAlign: "center",
    color: "#181C32",
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: "9%",
  },
  itemsSwiper: {
    flex: 1,
    marginTop: "3%",
    marginBottom: "8%",
  },
  mapItemsData: {
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  footerStyle: {
    flex: 0,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    height: 100,
    width: "100%",
    borderRadius: 45,
    borderBottomLeftRadius: 29,
    borderBottomRightRadius: 29,
    paddingHorizontal: "8%",
    backgroundColor: "#F9F9FF",
  },
  priceFlex: {
    flexDirection: "column",
  },
  checkoutBtn: {
    width: 166,
    height: 50,
  },
  totalTextStyle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#C4C4C4",
  },
  priceStyle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#3F4254",
  },
  flexStyle: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    textAlign: "center",
    height: "100%",
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "900",
    color: "#111",
  },
  flexBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ratingIconBackground: {
    // backgroundColor: "#111",
  },
  rightImgContainer: {
    height: 60,
    width: 90,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: "4%",
  },
  descText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#9B9B9B",
    marginTop: "2%",
  },
  spacing: {
    marginVertical: "3%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  calTextStyle: {
    fontSize: 16,
    fontWeight: "400",
    color: "#333535",
  },
  calValue: {
    fontSize: 16,
    fontWeight: "700",
  },
  horizontalLine: {
    backgroundColor: "#00000024",
    height: 1,
  },
  rightAlign: {
    alignSelf: "flex-end",
    fontSize: 13,
    fontWeight: "400",
    color: "#333535",
    marginTop: "3%",
    marginBottom: "6%",
  },
});
