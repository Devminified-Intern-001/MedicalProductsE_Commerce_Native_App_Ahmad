import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from "../routes";
import MyProfilePage from "../pages/BottomNavBar/Profile/MyProfile";
import MyDetailsPage from "../pages/BottomNavBar/Profile/MyDetails";
import NotificationsPage from "../pages/BottomNavBar/Profile/Notifications";
const Stack = createNativeStackNavigator();

const Profile = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.MyProfilePage}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={Routes.MyProfilePage} component={MyProfilePage} />
      <Stack.Screen name={Routes.MyDetailsPage} component={MyDetailsPage} />
      <Stack.Screen
        name={Routes.NotificationsPage}
        component={NotificationsPage}
      />
    </Stack.Navigator>
  );
};

export default Profile;
