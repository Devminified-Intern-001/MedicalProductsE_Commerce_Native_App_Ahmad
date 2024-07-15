import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductsPage from "../pages/BottomNavBar/Home/ProductsPage";
import { BottomNavigationTab } from "./index";
import Routes from "../routes";

const Stack = createNativeStackNavigator();

const BottomNavBar = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.ProductsPage}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={Routes.ProductsPage} component={ProductsPage} />
    </Stack.Navigator>
  );
};

export default BottomNavBar;
