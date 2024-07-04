// import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import SigninPage from "./pages/SetupProfile/Auth/SigninPage";
import SignUpPage from "./pages/SetupProfile/Auth/SignupPage";
import CustomCategoryCard from "./components/molecules/CategoryCard";
import BottomNavTab from "./components/molecules/BottomNavigationTab";
import ItemCard from "./components/molecules/ItemCard";
import CustomCheckBox from "./components/atoms/CheckBox";
import CustomHeader from "./components/molecules/Header";
import CustomProfileHeader from "./components/molecules/ProfileHeader";
import CustomSlider from "./components/atoms/Slider";
import CustomItemSlideShow from "./components/atoms/ItemSlideShow";
import CustomCartItem from "./components/molecules/CartItems";
import CustomDetailsCard from "./components/molecules/DetailsCard";
import PDetialsForm from "./pages/SetupProfile/PersonalForms/PersonalInfoForm";
import PersonalDetails from "./pages/SetupProfile/PersonalForms/PersonalDetailsForm";
import IntroSlider from "./pages/SetupProfile/AppIntroSlider";
import SpecialOfferSlider from "./components/molecules/SpecialOfferSlider";
import HomePage from "./pages/Home";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" />; */}
      {/* <SigninPage /> */}
      {/* <SignUpPage /> */}
      {/* <PDetialsForm /> */}
      {/* <PersonalDetails /> */}
      {/* <IntroSlider /> */}
      {/* <SpecialOfferSlider /> */}
      <HomePage />
      {/* <CustomCategoryCard
        source={require("./assets/fruit2.png")}
        title="Fruits"
      ></CustomCategoryCard> */}
      {/* <BottomNavTab /> */}
      {/* <ItemCard
        title="Carrot"
        source={require("./assets/Carrots.png")}
        itemDescrip="Very fresh and new product."
        itemPrice="50"
        itemQt="1"
      /> */}
      {/* <CustomCheckBox title="Sugar Free" /> */}
      {/* <CustomHeader
        leftSource={require("./assets/arrow.png")}
        title="Vegitables"
        rightSource={require("./assets/menu.png")}
      /> */}
      {/* <CustomProfileHeader
        topTitle="Hi,James!"
        bottomTitle="What would you buy today?"
        rightSource={require("./assets/ProfileImg.png")}
      /> */}
      {/* <CustomSlider /> */}
      {/* <CustomItemSlideShow /> */}
      {/* <CustomCartItem
        itemTitle="Carrot"
        priceTitle="$3.45"
        newPriceTitle="$3.75"
        leftSource={require("./assets/Carrots.png")}
        minusSource={require("./assets/minus.png")}
        addSource={require("./assets/add.png")}
      /> */}
      {/* <CustomDetailsCard
        leftSource={require("./assets/bag.png")}
        titleText="Your order has arrived"
        detailsText="Lorem Ipsum is simply dummy text."
        timeDuration="24h"
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
