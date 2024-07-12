// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroSlider from "../pages/SetupProfile/AppIntroSlider";
import { Auth } from "./index";
import PDetialsForm from "../pages/SetupProfile/PersonalForms/PersonalInfoForm";
import PersonalDetails from "../pages/SetupProfile/PersonalForms/PersonalDetailsForm";
const Stack = createNativeStackNavigator();

function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Auth" component={Auth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
