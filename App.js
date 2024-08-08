// import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SigninPage from "./src/pages/SetupProfile/Auth/SigninPage";
import SignUpPage from "./src/pages/SetupProfile/Auth/SignupPage";
import CustomCategoryCard from "./src/components/molecules/CategoryCard";
import BottomNavTab from "./src/navigation/bottomNavigationTab";
import ItemCard from "./src/components/molecules/ItemCard";
import CustomCheckBox from "./src/components/atoms/CheckBox";
import CustomHeader from "./src/components/molecules/Header";
import CustomProfileHeader from "./src/components/molecules/ProfileHeader";
import CustomSlider from "./src/components/atoms/Slider";
import CustomItemSlideShow from "./src/components/organisams/ItemSlideShow";
import CustomCartItem from "./src/components/molecules/CartItems";
import CustomDetailsCard from "./src/components/molecules/DetailsCard";
import PDetialsForm from "./src/pages/SetupProfile/PersonalForms/PersonalInfoForm";
import PersonalDetails from "./src/pages/SetupProfile/PersonalForms/PersonalDetailsForm";
import IntroSlider from "./src/pages/SetupProfile/AppIntroSlider";
import SpecialOfferSlider from "./src/components/molecules/SpecialOfferSlider";
import HomePage from "./src/pages/BottomNavBar/Home/HomePage";
import CustomCategoriesCard from "./src/components/organisams/CategoriesCard";
import CustomItemsCard from "./src/components/organisams/ItemsCard";
import {
  ExtendedRating,
  ExtendedSwitch,
  ExtendedView,
  ExtendedItemSlide,
  PickerList,
} from "./src/components/atoms";
import { itemsCardData } from "./src/data/itemsCardData";
import { CustomFlexText, CustomSettingsCard } from "./src/components/molecules";
import {
  CustomBottomSheet,
  CustomCartItems,
  LogoutActionSheet,
  ProfileSettingCards,
  ItemsFilter,
  CustomLogoutBottomSheet,
} from "./src/components/organisams";
import { itemsCartData } from "./src/data/cartItems";
import PaymentDetailsPage from "./src/pages/BottomNavBar/Shop/PaymentDetails";
import Arrow from "./svgs/Arrow";
import { settingCardData } from "./src/data/settingCardData";
import Main from "./src/navigation/main";
import {
  BagIcon,
  BellIcon,
  GreenBellIcon,
  LocationIcon,
  LogoutIcon,
  LoyaltyIcon,
  ProfileIcon,
  SettingsIcon,
  WishlistIcon,
} from "./svgs";
import CustomMyProfile from "./src/components/molecules/MyProfile";
import MyProfilePage from "./src/pages/BottomNavBar/Profile/MyProfile";
import MyDetailsPage from "./src/pages/BottomNavBar/Profile/MyDetails";
import NotificationsPage from "./src/pages/BottomNavBar/Profile/Notifications";
import ProductsPage from "./src/pages/BottomNavBar/Home/ProductsPage";
import WalletPage from "./src/pages/BottomNavBar/Home/WalletPage";
import CartItemPage from "./src/pages/BottomNavBar/Shop/CartItem";
import ShopItemPage from "./src/pages/BottomNavBar/Shop/ShopItem";
import { AuthProvider } from "./src/context/authContext";

export default function App() {
  return (
    <AuthProvider>
      <ExtendedView style={styles.container}>
        {/* <PickerList /> */}
        <Main />
        {/* <PDetialsForm /> */}
      </ExtendedView>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // padding: 22,
  },
  // imgContainer: {
  //   borderWidth: 2,
  //   borderColor: "#111",
  // },
  // profileNameStyle: {
  //   fontSize: 18,
  //   fontWeight: "700",
  //   marginTop: 10,
  //   alignSelf: "center",
  // },
  // nameTagStyle: {
  //   fontSize: 12,
  //   fontWeight: "400",
  //   marginTop: 6,
  //   alignSelf: "center",
  //   color: "#9B9B9B",
  // },
});
