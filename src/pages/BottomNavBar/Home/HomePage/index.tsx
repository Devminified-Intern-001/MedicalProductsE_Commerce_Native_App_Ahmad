import { StyleSheet, SafeAreaView } from "react-native";
import {
  CustomButton,
  CustomInput,
  AboutSection,
  CustomProfileHeader,
  ItemCard,
} from "../../../../components/molecules";
import { ExtendedView, ExtendedText } from "../../../../components/atoms";
import Search from "../../../../../svgs/Search";
import GoogleIcon from "../../../../../svgs/GoogleIcon";
import { SpecialOfferSlider } from "../../../../components/molecules";
import CustomCategoriesCard from "../../../../components/organisams/CategoriesCard";
import { BasicLayout } from "../../../../layout";

const cardData = [
  { title: "Fruit", source: require("../../../../../assets/fruit2.png") },
  { title: "Vegie", source: require("../../../../../assets/vegies.png") },
  { title: "Snack", source: require("../../../../../assets/snacks.png") },
  { title: "Beef", source: require("../../../../../assets/beef.png") },
];

const HomePage = () => {
  return (
    <BasicLayout>
      <ExtendedView style={styles.pageLayout}>
        <ExtendedView style={styles.welcome}>
          <CustomProfileHeader
            topTitle="Hi,James!"
            bottomTitle="What would you buy today?"
            rightSource={require("../../../../../assets/personProfileImg.png")}
          />
        </ExtendedView>
        <ExtendedView style={styles.searchField}>
          <CustomInput
            placeholder="Search by items name"
            keyboardType="default"
            lefticon={<Search />}
          ></CustomInput>
        </ExtendedView>

        <ExtendedView style={styles.offerSlider}>
          <SpecialOfferSlider />
        </ExtendedView>

        <ExtendedView style={styles.categoryCardContainer}>
          <CustomCategoriesCard cardData={cardData} />
        </ExtendedView>

        <ExtendedView style={styles.recentShopTitle}>
          <ExtendedText style={styles.recentCardTitle}>
            Recent Shop
          </ExtendedText>
          <ExtendedText>See All</ExtendedText>
        </ExtendedView>
        <ExtendedView style={styles.itemCardStyle}>
          <ItemCard
            title="Carrot"
            source={require("../../../../../assets/Carrots.png")}
            itemDescrip="Cabbage is a vegitable source of fiber."
            itemPrice="50"
            flexStyle={styles.customFlex}
            imageStyle={styles.imgStyle}
            detailsStyle={styles.dtlStyle}
          />
        </ExtendedView>
      </ExtendedView>
      {/* </SafeAreaView> */}
    </BasicLayout>
  );
};
export default HomePage;
const styles = StyleSheet.create({
  pageLayout: {
    flex: 1,
    gap: 10,
    backgroundColor: "#fff",
    marginTop: 10,
    height: "100%",
  },
  welcome: {
    marginTop: 20,
  },
  searchField: {
    height: 30,
    left: 34,
    zIndex: 1,
  },
  offerSlider: {
    marginTop: 30,
    height: 134,
  },
  categoryCardContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 22,
    marginTop: 30,
    height: 100,
    width: 370,
    right: 4,
  },
  recentShopTitle: {
    flexDirection: "row",
    justifyContent: "center",
    height: 30,
    marginTop: 10,
  },
  recentCardTitle: {
    fontSize: 16,
    fontWeight: "700",
    width: 244,
  },
  itemCardStyle: {
    alignItems: "center",
    bottom: 14,
  },
  customFlex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  imgStyle: {
    marginBottom: 0,
  },
  dtlStyle: {
    paddingLeft: 16,
    bottom: 12,
  },
});
