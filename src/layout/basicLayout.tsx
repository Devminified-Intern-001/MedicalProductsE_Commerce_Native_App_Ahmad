import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface BasicLayoutProps {
  children?: React.ReactNode;
}
const BasicLayout = ({ children }: BasicLayoutProps) => {
  return <SafeAreaView>{children}</SafeAreaView>;
};

export default BasicLayout;

const styles = StyleSheet.create({});
