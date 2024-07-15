import React from "react";
import { ViewStyle, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomePage from "../pages/BottomNavBar/Home/HomePage";
import WalletPage from "../pages/BottomNavBar/Home/WalletPage";
import MyProfilePage from "../pages/BottomNavBar/Profile/MyProfile";
import ShopItems from "./shopItems";
import { ExtendedView } from "../components/atoms";
import CartItemPage from "../pages/BottomNavBar/Shop/CartItem";
import Profile from "./profile";
import Wallet from "./wallet";

const Tab = createBottomTabNavigator();

const BottomNavigationTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          // position: "absolute",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="home" size={24} color={focused ? "#000" : "#ccc"} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="wallet"
              size={24}
              color={focused ? "#000" : "#ccc"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bag"
        component={ShopItems}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="bag" size={24} color={focused ? "#000" : "#ccc"} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person"
              size={24}
              color={focused ? "#000" : "#ccc"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});
export default BottomNavigationTab;
