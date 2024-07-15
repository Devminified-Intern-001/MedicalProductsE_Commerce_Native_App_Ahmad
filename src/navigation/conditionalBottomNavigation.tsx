import React from "react";
import { useRoute } from "@react-navigation/native";
import { BottomNavigationTab } from "./index";

const ConditionalBottomNavigation = () => {
  const route = useRoute();

  const excludedScreens = [
    "ShopItemPage",
    "CartItemPage",
    "PaymentDetailsPage",
  ];

  const shouldShowBottomNavigation = !excludedScreens.includes(route.name);

  return shouldShowBottomNavigation ? <BottomNavigationTab /> : null;
};

export default ConditionalBottomNavigation;
