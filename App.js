import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import SigninPage from "./pages/SigninPage";
import CustomCategoryCard from "./components/CategoryCard";
import BottomNavTab from "./components/BottomNavigationTab";
import ItemCard from "./components/ItemCard";
import CustomCheckBox from "./components/CheckBox";
import CustomHeader from "./components/Header";
import CustomProfileHeader from "./components/ProfileHeader";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" />; */}
      {/* <SigninPage /> */}
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
      <CustomProfileHeader
        topTitle="Hi,James!"
        bottomTitle="What would you buy today?"
        rightSource={require("./assets/ProfileImg.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
