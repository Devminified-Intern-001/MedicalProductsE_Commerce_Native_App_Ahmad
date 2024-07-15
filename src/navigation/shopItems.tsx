import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartItemPage from "../pages/BottomNavBar/Shop/CartItem";
import Routes from "../routes";
import PaymentDetailsPage from "../pages/BottomNavBar/Shop/PaymentDetails";
import ShopItemPage from "../pages/BottomNavBar/Shop/ShopItem";
const Stack = createNativeStackNavigator();

const ShopItems = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.ShopItemPage}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={Routes.ShopItemPage} component={ShopItemPage} />

      <Stack.Screen name={Routes.CartItemPage} component={CartItemPage} />
      <Stack.Screen
        name={Routes.PaymentDetailsPage}
        component={PaymentDetailsPage}
      />
    </Stack.Navigator>
  );
};

export default ShopItems;
