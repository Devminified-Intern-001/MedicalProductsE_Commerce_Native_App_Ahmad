import { StyleSheet } from "react-native";
import { ExtendedText, ExtendedView } from "../../atoms";
import React from "react";

interface UiFlexText {
  title: string;
  textValue: string | React.ReactNode;
  titleStyle?: object;
  textValueStyle?: object;
}

const CustomFlexText: React.FC<UiFlexText> = (props) => {
  const { title, textValue, titleStyle, textValueStyle } = props;
  return (
    <ExtendedView style={styles.cardTitle}>
      <ExtendedText style={[styles.titleText, titleStyle]}>
        {title}
      </ExtendedText>
      {React.isValidElement(textValue) ? (
        textValue
      ) : (
        <ExtendedText style={[styles.elementStyle, textValueStyle]}>
          {textValue}
        </ExtendedText>
      )}
    </ExtendedView>
  );
};

export default CustomFlexText;

const styles = StyleSheet.create({
  cardTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
    marginHorizontal: 5,
    width: 270,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 7,
  },
  elementStyle: {
    fontSize: 12,
    fontWeight: "400",
    color: "#9B9B9B",
  },
});
