import React from "react";
import { ScrollView, ScrollViewProps, StyleSheet } from "react-native";

interface UiScrollViewProps extends ScrollViewProps {
  style?: object;
}

const ExtendedScrollView: React.FC<UiScrollViewProps> = (props) => {
  const { style, children, ...rest } = props;

  return (
    <ScrollView
      contentContainerStyle={[styles.scrollContainer, style]}
      {...rest}
    >
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ExtendedScrollView;
