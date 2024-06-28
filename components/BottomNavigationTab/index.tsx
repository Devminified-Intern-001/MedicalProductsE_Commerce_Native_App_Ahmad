import React from "react";
import { View, StyleSheet, Text, ViewStyle } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const HomeScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Home Screen</Text>
  </View>
);

const WalletScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Wallet Screen</Text>
  </View>
);

const BagScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Bag Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Profile Screen</Text>
  </View>
);

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    // display: "flex",
    bottom: 0,
    right: 0,
    left: 0,
    height: 60,
    backgroundColor: "#D9D9D9",
  } as ViewStyle,
};

function BottomNavTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="home"
                size={24}
                color={focused ? "#000" : "#ccc"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Wallet"
          component={WalletScreen}
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
          component={BagScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="bag"
                size={24}
                color={focused ? "#000" : "#ccc"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
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
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BottomNavTab;
