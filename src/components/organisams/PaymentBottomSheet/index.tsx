import React from "react";
import { StyleSheet } from "react-native";
import {
  ExtendedView,
  ExtendedText,
  ExtendedTouchableOpacity,
} from "../../atoms";
import { CustomButton, CustomFlexText } from "../../molecules";
import RightArrowIcon from "../../../../svgs/RightArrow";

const CustomBottomSheet = () => {
  return (
    <ExtendedView style={styles.container}>
      <ExtendedView>
        <CustomFlexText
          title="Convenience fee"
          textValue="$10.00"
          titleStyle={styles.title}
          textValueStyle={styles.textValue}
          flexContainer={styles.flexContainer}
        />
        <CustomFlexText
          title="Subtotal"
          textValue="$3 000.00"
          titleStyle={styles.title}
          textValueStyle={styles.textValue}
          flexContainer={styles.flexContainer}
        />
        <CustomFlexText
          title="Convenience fee"
          textValue="$20.00"
          titleStyle={styles.title}
          textValueStyle={styles.textValue}
          flexContainer={styles.flexContainer}
        />
      </ExtendedView>

      <ExtendedView>
        <CustomFlexText
          title="Total"
          textValue="$3020.00"
          titleStyle={styles.totalTitle}
          textValueStyle={styles.totalTextValue}
          flexContainer={styles.flexContainer}
        />
      </ExtendedView>

      <ExtendedTouchableOpacity>
        <ExtendedText style={styles.promoCode}>Add promo code?</ExtendedText>
      </ExtendedTouchableOpacity>

      <CustomButton
        title="Checkout"
        righticon={<RightArrowIcon height={20} width={20} />}
        style={styles.buttonStyle}
      />
    </ExtendedView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    alignSelf: "center",
  },

  title: {
    fontSize: 14,
    fontWeight: 400,
    color: "rgba(51, 53, 53, 0.65)",
  },
  textValue: {
    fontSize: 14,
    fontWeight: 400,
    color: "rgba(51, 53, 53, 0.77)",
    marginBottom: 6,
  },
  flexText: {
    // width: "80%",
    // paddingHorizontal: "20%",
    // alignSelf: "center",
  },
  totalTitle: {
    fontSize: 20,
    fontWeight: 700,
    color: "rgba(63, 66, 84, 1)",
  },
  totalTextValue: {
    fontSize: 20,
    fontWeight: 700,
    color: "rgba(63, 66, 84, 1)",
    marginBottom: 6,
  },
  flexContainer: {
    width: "92%",
  },
  promoCode: {
    color: "rgba(255, 204, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    marginVertical: 20,
    textAlign: "center",
  },
  buttonStyle: {
    height: 61,
  },
});

export default CustomBottomSheet;
