import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Auth, BottomNavBar, BottomNavigationTab, ShopItems } from "./index";
import Routes from "../routes";
const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Routes.Auth}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={Routes.Auth} component={Auth} />

        <Stack.Screen
          name={Routes.BottomNavigationTab}
          component={BottomNavigationTab}
        />
        <Stack.Screen name={Routes.BottomNavBar} component={BottomNavBar} />
        <Stack.Screen name={Routes.ShopItems} component={ShopItems} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
