import React from "react";
import { StyleSheet } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import {
  ExtendedView,
  ExtendedText,
  ExtendedTouchableOpacity,
} from "../../atoms";
import { CustomButton, CustomFlexText } from "../../molecules";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import RightArrowIcon from "../../../../svgs/RightArrow";

const CustomBottomSheet = () => {
  const snapPoints = ["4", "50%", "75"];

  return (
    <ExtendedView style={styles.container}>
      <BottomSheet
        snapPoints={snapPoints}
        index={1}
        style={styles.bottomSheet}
        backgroundStyle={styles.bottomSheetBackground}
      >
        <BottomSheetView style={styles.contentContainer}>
          <ExtendedView>
            <CustomFlexText
              title="Convenience fee"
              textValue="$10.00"
              titleStyle={styles.title}
              textValueStyle={styles.textValue}
            />
            <CustomFlexText
              title="Subtotal"
              textValue="$3 000.00"
              titleStyle={styles.title}
              textValueStyle={styles.textValue}
            />
            <CustomFlexText
              title="Convenience fee"
              textValue="$20.00"
              titleStyle={styles.title}
              textValueStyle={styles.textValue}
            />
          </ExtendedView>

          <ExtendedView>
            <CustomFlexText
              title="Total"
              textValue="$3020.00"
              titleStyle={styles.totalTitle}
              textValueStyle={styles.totalTextValue}
            />
          </ExtendedView>

          <ExtendedTouchableOpacity>
            <ExtendedText style={styles.promoCode}>
              Add promo code?
            </ExtendedText>
          </ExtendedTouchableOpacity>

          <CustomButton
            title="Checkout"
            righticon={<RightArrowIcon />}
            style={styles.buttonStyle}
          />
        </BottomSheetView>
      </BottomSheet>
    </ExtendedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "rgba(249, 249, 249, 1)",
    width: 360,
  },
  bottomSheetBackground: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 45,
  },
  bottomSheet: {},
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // minHeight: 500,
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
  promoCode: {
    color: "rgba(255, 204, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 20,
  },
  buttonStyle: {
    height: 61,
  },
});

export default CustomBottomSheet;
