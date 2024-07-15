import { StyleSheet } from "react-native";
import {
  CustomInput,
  CustomProfileHeader,
  ItemCard,
  SpecialOfferSlider,
} from "../../../../components/molecules";
import {
  ExtendedView,
  ExtendedText,
  ExtendedTouchableOpacity,
} from "../../../../components/atoms";
import { SearchIcon } from "../../../../../svgs";
import { CustomCategoriesCard } from "../../../../components/organisams";
import { BasicLayout } from "../../../../layout";
import { useNavigation } from "@react-navigation/native";

const cardData = [
  {
    title: "Fruit",
    source: require("../../../../../assets/fruit2.png"),
    backgroundColor: "#DB00FF1A",
  },
  {
    title: "Vegie",
    source: require("../../../../../assets/vegies.png"),
    backgroundColor: "#34A85326",
  },
  {
    title: "Snack",
    source: require("../../../../../assets/snacks.png"),
    backgroundColor: "#FBD54E26",
  },
  {
    title: "Beef",
    source: require("../../../../../assets/beef.png"),
    backgroundColor: "#EB433526",
  },
];

const HomePage = () => {
  const navigation: any = useNavigation();

  return (
    <BasicLayout>
      <ExtendedView style={styles.pageLayout}>
        <ExtendedView style={styles.header}>
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
            lefticon={<SearchIcon />}
          ></CustomInput>
        </ExtendedView>

        <ExtendedView style={styles.offerSlider}>
          <SpecialOfferSlider />
        </ExtendedView>

        <ExtendedTouchableOpacity
          onPress={() => navigation.navigate("BottomNavBar")}
          activeOpacity={0.6}
        >
          <ExtendedView style={styles.categoryCardContainer}>
            <CustomCategoriesCard cardData={cardData} />
          </ExtendedView>
        </ExtendedTouchableOpacity>

        <ExtendedView style={styles.recentShopTitle}>
          <ExtendedText style={styles.recentCardTitle}>
            Recent Shop
          </ExtendedText>
          <ExtendedText style={styles.recentSeeAll}>See All</ExtendedText>
        </ExtendedView>
        <ExtendedView style={styles.itemCardStyle}>
          <ItemCard
            title="Carrot"
            source={require("../../../../../assets/Carrots.png")}
            itemDescrip="Cabbage is a vegitable source of fiber."
            itemPrice="50"
            cardLayoutStyle={styles.cardLayout}
            flexStyle={styles.customFlex}
            detailsStyle={styles.dtlStyle}
            backgroundColor="#FBD54E4A"
          />
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
    marginVertical: 20,
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
