import { StyleSheet, Image } from "react-native";
import React from "react";
import { ExtendedText, ExtendedView } from "../../../../components/atoms";
import { CustomBottomSheet } from "../../../../components/organisams";
import { BasicLayout } from "../../../../layout";
import { CustomHeader, CustomInput } from "../../../../components/molecules";

const PaymentDetailsPage = () => {
  return (
    <BasicLayout>
      <ExtendedView style={styles.container}>
        <ExtendedView>
          <CustomHeader
            leftSource={require("../../../../../assets/arrow.png")}
            title="Cart Item"
          />
        </ExtendedView>
        <ExtendedView style={styles.detailsContainer}>
          <ExtendedText style={styles.title}> Card type</ExtendedText>
          <ExtendedView style={styles.paymentcards}>
            <ExtendedView style={styles.cardtype}>
              <Image source={require("../../../../../assets/payPal.png")} />
            </ExtendedView>
            <ExtendedView style={styles.cardtype}>
              <Image source={require("../../../../../assets/visa.png")} />
            </ExtendedView>
            <ExtendedView style={styles.cardtype}>
              <Image
                source={require("../../../../../assets/americanExpress.png")}
              />
            </ExtendedView>
            <ExtendedView style={styles.cardtype}>
              <Image
                source={require("../../../../../assets/pal.png")}
                style={styles.cardTopImg}
              />
              <Image
                source={require("../../../../../assets/pay.png")}
                style={styles.cardBottomImg}
              />
            </ExtendedView>
          </ExtendedView>

          <ExtendedView>
            <ExtendedText>Name on card</ExtendedText>
            <CustomInput placeholder="James Jones" keyboardType="default" />
          </ExtendedView>

          <ExtendedView>
            <ExtendedText>Card number</ExtendedText>
            <CustomInput
              placeholder="1111  2222  3333  4444"
              keyboardType="numeric"
            />
          </ExtendedView>

          <ExtendedView>
            <ExtendedView>
              <ExtendedText>Expiration date</ExtendedText>
              <CustomInput placeholder="10/24" keyboardType="numeric" />
            </ExtendedView>

            <ExtendedView>
              <ExtendedText>CVV</ExtendedText>
              <CustomInput placeholder="123" keyboardType="numeric" />
            </ExtendedView>
          </ExtendedView>
        </ExtendedView>
        <CustomBottomSheet />
      </ExtendedView>
    </BasicLayout>
  );
};

export default PaymentDetailsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 10,
  },
  //   content: {
  //     flex: 1,
  //   },
  detailsContainer: {
    alignItems: "center",
    width: 285,
    height: 488,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#D9D9D9",
    paddingVertical: 30,
    marginTop: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    color: "#9B9B9B",
    height: 34,
    alignSelf: "flex-start",
    marginLeft: 21,
  },
  paymentcards: {
    flexDirection: "row",
  },
  cardtype: {
    width: 53,
    height: 38,
    borderWidth: 1,
    borderRadius: 9,
    borderColor: "#D9D9D9",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 4,
  },
  cardTopImg: {
    marginBottom: 6,
  },
  cardBottomImg: {
    marginTop: 8,
    alignSelf: "center",
    position: "absolute",
  },
  bottomSheetContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    // height: "100%",
  },
});
