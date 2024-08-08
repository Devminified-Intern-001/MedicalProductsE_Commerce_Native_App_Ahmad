import { StyleSheet, TouchableOpacity } from "react-native";
import { ExtendedText, ExtendedView } from "../../atoms";
import React from "react";

interface UiFlexText {
  title: string;
  textValue: string | React.ReactNode;
  titleStyle?: object;
  flexContainer?: object;
  textValueStyle?: object;
  onTitlePress?: () => void;
  onTextValuePress?: () => void;
}

const CustomFlexText: React.FC<UiFlexText> = (props) => {
  const {
    title,
    textValue,
    titleStyle,
    flexContainer,
    textValueStyle,
    onTitlePress,
    onTextValuePress,
  } = props;

  return (
    <ExtendedView style={[styles.cardTitle, flexContainer]}>
      <TouchableOpacity onPress={onTitlePress} activeOpacity={0.7}>
        <ExtendedText style={[styles.titleText, titleStyle]}>
          {title}
        </ExtendedText>
      </TouchableOpacity>
      {React.isValidElement(textValue) ? (
        <TouchableOpacity onPress={onTextValuePress} activeOpacity={0.7}>
          {textValue}
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onTextValuePress} activeOpacity={0.7}>
          <ExtendedText style={[styles.elementStyle, textValueStyle]}>
            {textValue}
          </ExtendedText>
        </TouchableOpacity>
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
