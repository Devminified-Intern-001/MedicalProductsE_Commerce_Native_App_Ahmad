import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import SigninPage from "./pages/SigninPage";
import CustomCategoryCard from "./components/CategoryCard";
// import BotomNavigationTab from "./components/BottomNavigationTab"
import BottomNavTab from "./components/BottomNavigationTab";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" />; */}
      {/* <SigninPage /> */}
      {/* <CustomCategoryCard
        source={require("./assets/fruit2.png")}
        title="Fruits"
      ></CustomCategoryCard> */}
      <BottomNavTab />
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
