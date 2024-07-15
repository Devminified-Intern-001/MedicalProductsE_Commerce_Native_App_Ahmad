// In App.js in a new project

import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroSlider from "../pages/SetupProfile/AppIntroSlider";
import SigninPage from "../pages/SetupProfile/Auth/SigninPage";
import SignUpPage from "../pages/SetupProfile/Auth/SignupPage";
import PDetialsForm from "../pages/SetupProfile/PersonalForms/PersonalInfoForm";
import PersonalDetails from "../pages/SetupProfile/PersonalForms/PersonalDetailsForm";
import { BottomNavBar } from "./index";
import Routes from "../routes";

const Stack = createNativeStackNavigator();

const Auth = ({ route }) => {
  const initialRoute = route?.params?.screen || Routes.IntroSlider;

  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={Routes.IntroSlider} component={IntroSlider} />
      <Stack.Screen name={Routes.SigninPage} component={SigninPage} />
      <Stack.Screen name={Routes.SignUpPage} component={SignUpPage} />
      <Stack.Screen name={Routes.PDetialsForm} component={PDetialsForm} />
      <Stack.Screen name={Routes.PersonalDetails} component={PersonalDetails} />
    </Stack.Navigator>
  );
};

export default Auth;
