import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from "../routes";
import WalletPage from "../pages/BottomNavBar/Home/WalletPage";
import NotificationsPage from "../pages/BottomNavBar/Profile/Notifications";
const Stack = createNativeStackNavigator();

const Wallet = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.WalletPage}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={Routes.WalletPage} component={WalletPage} />

      <Stack.Screen
        name={Routes.NotificationsPage}
        component={NotificationsPage}
      />
    </Stack.Navigator>
  );
};

export default Wallet;
