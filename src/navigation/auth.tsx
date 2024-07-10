// In App.js in a new project

import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroSlider from "../pages/SetupProfile/AppIntroSlider";
import SigninPage from "../pages/SetupProfile/Auth/SigninPage";
import SignUpPage from "../pages/SetupProfile/Auth/SignupPage";
import PDetialsForm from "../pages/SetupProfile/PersonalForms/PersonalInfoForm";
import PersonalDetails from "../pages/SetupProfile/PersonalForms/PersonalDetailsForm";

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator
      initialRouteName="IntroSlider"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="IntroSlider" component={IntroSlider} />
      <Stack.Screen name="SigninPage" component={SigninPage} />
      <Stack.Screen name="SignUpPage" component={SignUpPage} />
      <Stack.Screen name="PersDetailsForm" component={PDetialsForm} />
      <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
    </Stack.Navigator>
  );
};

export default Auth;
