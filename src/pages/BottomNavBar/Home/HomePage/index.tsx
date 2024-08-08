import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import {
  CustomInput,
  CustomProfileHeader,
  ItemCard,
  SpecialOfferSlider,
} from "../../../../components/molecules";
import api from "../../../../interceptor";
import { ExtendedView, ExtendedText } from "../../../../components/atoms";
import { SearchIcon } from "../../../../../svgs";
import { CustomCategoriesCard } from "../../../../components/organisams";
import { BasicLayout } from "../../../../layout";
import { useNavigation } from "@react-navigation/native";
import categoryCardData from "../../../../data/categoryCardData";
import { useAuth } from "../../../../context/authContext";
import Routes from "../../../../routes";

const HomePage = () => {
  const navigation: any = useNavigation();
  const { userData } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    // console.log("Access Token:", access);
    // console.log("Refresh Token:", refresh);
    console.log("UserName:", userData?.userName);
    console.log("Gender:", userData?.gender);

    recentShopProduct();
  }, [userData]);

  const recentShopProduct = async () => {
    setErrorMessage("");
    try {
      const response = await api.post("/product/get", { searchText: "carrot" });
      console.log("Server response:", response.data);
      const { price, defaultImage, shortTitle, title } =
        response.data.message[0];

      const responseImg = await api.get("/img/" + defaultImage);
      const displayTitle = shortTitle || title;
      const imageUrl = responseImg.request.responseURL;
      setProduct({ price, imageUrl, displayTitle });
    } catch (error) {
      console.error("Error during getting product details:", error);
      setErrorMessage("Unauthorized");
    }
  };

  return (
    <BasicLayout>
      <ExtendedView style={styles.pageLayout}>
        <ExtendedView style={styles.header}>
          <CustomProfileHeader
            topTitle={userData?.userName || "User"}
            bottomTitle="What would you buy today?"
            rightSource={require("../../../../../assets/personProfileImg.png")}
          />
        </ExtendedView>
        <ExtendedView style={styles.searchField}>
          <CustomInput
            placeholder="Search by items name"
            keyboardType="default"
            lefticon={<SearchIcon />}
          ></CustomInput>
        </ExtendedView>

        <ExtendedView style={styles.offerSlider}>
          <SpecialOfferSlider />
        </ExtendedView>

        <ExtendedView style={styles.categoryCardContainer}>
          <CustomCategoriesCard cardData={categoryCardData} />
        </ExtendedView>

        <ExtendedView style={styles.recentShopTitle}>
          <ExtendedText style={styles.recentCardTitle}>
            Recent Shop
          </ExtendedText>
          <ExtendedText style={styles.recentSeeAll}>See All</ExtendedText>
        </ExtendedView>
        <ExtendedView style={styles.itemCardStyle}>
          {product ? (
            <ItemCard
              title={product.displayTitle}
              source={{ uri: product.imageUrl }}
              itemDescrip="Cabbage is a vegetable source of fiber."
              itemPrice={product.price.toString()}
              cardLayoutStyle={styles.cardLayout}
              flexStyle={styles.customFlex}
              detailsStyle={styles.dtlStyle}
              backgroundColor="#FBD54E4A"
              onPress={() => navigation.navigate(Routes.ShopItems)}
            />
          ) : (
            <ExtendedText>Loading product details...</ExtendedText>
          )}
        </ExtendedView>
      </ExtendedView>
    </BasicLayout>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  pageLayout: {
    flex: 1,
    gap: 10,
    backgroundColor: "#fff",
    height: "100%",
  },
  header: {
    marginVertical: "5%",
  },
  searchField: {
    height: 30,
    left: 34,
    zIndex: 1,
  },
  offerSlider: {
    marginTop: "9%",
    height: "19%",
  },
  categoryCardContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 22,
    marginTop: "10%",
    height: 100,
    width: 370,
    right: 4,
  },
  recentShopTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    marginTop: "4%",
  },
  recentCardTitle: {
    fontSize: 16,
    fontWeight: "700",
    width: 244,
  },
  recentSeeAll: {
    fontSize: 12,
    fontWeight: "400",
    color: "#9B9B9B",
  },
  itemCardStyle: {
    width: "100%",
  },
  cardLayout: {
    marginHorizontal: "10%",
    alignSelf: "center",
    bottom: "6%",
    marginBottom: "4%",
  },
  customFlex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 120,
    paddingTop: "6%",
  },
  dtlStyle: {
    paddingLeft: "4%",
    bottom: 12,
  },
});
