// import { StyleSheet, Image } from "react-native";
// import React from "react";
// import { ExtendedText, ExtendedView } from "../../../../components/atoms";
// import { CustomBottomSheet } from "../../../../components/organisams";
// import { BasicLayout } from "../../../../layout";
// import { CustomHeader, CustomInput } from "../../../../components/molecules";

// const PaymentDetailsPage = () => {
//   return (
// <BasicLayout>
//   <ExtendedView style={styles.container}>
//     <ExtendedView>
//       <CustomHeader
//         leftSource={require("../../../../../assets/arrow.png")}
//         title="Cart Item"
//       />
//     </ExtendedView>
//     <ExtendedView style={styles.detailsContainer}>
//       <ExtendedText style={styles.title}> Card type</ExtendedText>
//       <ExtendedView style={styles.paymentcards}>
//         <ExtendedView style={styles.cardtype}>
//           <Image source={require("../../../../../assets/payPal.png")} />
//         </ExtendedView>
//         <ExtendedView style={styles.cardtype}>
//           <Image source={require("../../../../../assets/visa.png")} />
//         </ExtendedView>
//         <ExtendedView style={styles.cardtype}>
//           <Image
//             source={require("../../../../../assets/americanExpress.png")}
//           />
//         </ExtendedView>
//         <ExtendedView style={styles.cardtype}>
//           <Image
//             source={require("../../../../../assets/pal.png")}
//             style={styles.cardTopImg}
//           />
//           <Image
//             source={require("../../../../../assets/pay.png")}
//             style={styles.cardBottomImg}
//           />
//         </ExtendedView>
//       </ExtendedView>

//       <ExtendedView>
//         <ExtendedText>Name on card</ExtendedText>
//         <CustomInput placeholder="James Jones" keyboardType="default" />
//       </ExtendedView>

//       <ExtendedView>
//         <ExtendedText>Card number</ExtendedText>
//         <CustomInput
//           placeholder="1111  2222  3333  4444"
//           keyboardType="numeric"
//         />
//       </ExtendedView>

//       <ExtendedView>
//         <ExtendedView>
//           <ExtendedText>Expiration date</ExtendedText>
//           <CustomInput placeholder="10/24" keyboardType="numeric" />
//         </ExtendedView>

//         <ExtendedView>
//           <ExtendedText>CVV</ExtendedText>
//           <CustomInput placeholder="123" keyboardType="numeric" />
//         </ExtendedView>
//       </ExtendedView>
//     </ExtendedView>
//     <CustomBottomSheet />
//   </ExtendedView>
// </BasicLayout>
//   );
// };

// export default PaymentDetailsPage;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "flex-end",
//     alignItems: "center",
//     marginTop: 10,
//   },
//   //   content: {
//   //     flex: 1,
//   //   },
// detailsContainer: {
//   alignItems: "center",
//   width: 285,
//   height: 488,
//   borderWidth: 1,
//   borderRadius: 25,
//   borderColor: "#D9D9D9",
//   paddingVertical: 30,
//   marginTop: 20,
// },
// title: {
//   fontSize: 15,
//   fontWeight: "700",
//   color: "#9B9B9B",
//   height: 34,
//   alignSelf: "flex-start",
//   marginLeft: 21,
// },
// paymentcards: {
//   flexDirection: "row",
// },
// cardtype: {
//   width: 53,
//   height: 38,
//   borderWidth: 1,
//   borderRadius: 9,
//   borderColor: "#D9D9D9",
//   alignItems: "center",
//   justifyContent: "center",
//   marginHorizontal: 4,
// },
// cardTopImg: {
//   marginBottom: 6,
// },
// cardBottomImg: {
//   marginTop: 8,
//   alignSelf: "center",
//   position: "absolute",
// },
// bottomSheetContainer: {
//   position: "absolute",
//   bottom: 0,
//   width: "100%",
//   // height: "100%",
// },
// });

import "react-native-gesture-handler";
import React, { useRef, useState } from "react";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CustomButton } from "../../../../components/molecules";
import { StyleSheet, Image } from "react-native";
import { ExtendedText, ExtendedView } from "../../../../components/atoms";
import { CustomBottomSheet } from "../../../../components/organisams";
import { BasicLayout } from "../../../../layout";
import { CustomHeader, CustomInput } from "../../../../components/molecules";

const PaymentDetailsPage = () => {
  // const [darkmode, setDarkmode] = useState(false);
  // const [device, setDevice] = useState(false);
  // const { width } = useWindowDimensions();
  // const [theme, setTheme] = useState("dim");
  const [isOpen, setIsOpen] = useState(false);

  const bottomSheetModalRef = useRef(null);

  const snapPoints = ["25%", "48%", "75%"];

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
    setTimeout(() => {
      setIsOpen(true);
    }, 100);
  }

  return (
    <BasicLayout>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <ExtendedView
            style={[
              styles.container,
              { backgroundColor: isOpen ? "gray" : "white" },
            ]}
          >
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
                    <Image
                      source={require("../../../../../assets/payPal.png")}
                    />
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

                <ExtendedView style={styles.cardTitle}>
                  <ExtendedView style={styles.inputStyle}>
                    <ExtendedText style={styles.textAlign}>
                      Name on card
                    </ExtendedText>
                    <CustomInput
                      placeholder="James Jones"
                      keyboardType="default"
                    />
                  </ExtendedView>

                  <ExtendedView style={styles.inputStyle}>
                    <ExtendedText style={styles.textAlign}>
                      Card number
                    </ExtendedText>
                    <CustomInput
                      placeholder="1111  2222  3333  4444"
                      keyboardType="numeric"
                    />
                  </ExtendedView>
                </ExtendedView>

                <ExtendedView style={styles.flexInputs}>
                  <ExtendedView style={styles.expInputStyle}>
                    <ExtendedText style={styles.expTextAlign}>
                      Expiration date
                    </ExtendedText>
                    <CustomInput placeholder="10/24" keyboardType="numeric" />
                  </ExtendedView>

                  <ExtendedView style={styles.expInputStyle}>
                    <ExtendedText style={styles.expTextAlign}>CVV</ExtendedText>
                    <CustomInput placeholder="123" keyboardType="numeric" />
                  </ExtendedView>
                </ExtendedView>
                <CustomButton
                  title="Add Details"
                  onPress={handlePresentModal}
                  style={styles.addButton}
                />
              </ExtendedView>
            </ExtendedView>

            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={1}
              snapPoints={snapPoints}
              backgroundStyle={{ borderRadius: 50 }}
              onDismiss={() => setIsOpen(false)}
            >
              <ExtendedView style={styles.bottomSheet}>
                <CustomBottomSheet />
              </ExtendedView>
            </BottomSheetModal>
          </ExtendedView>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </BasicLayout>
  );
};

export default PaymentDetailsPage;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: "3%",
    alignItems: "center",
    justifyContent: "center",
  },
  detailsContainer: {
    alignItems: "center",
    width: "80%",
    borderRadius: 25,
    paddingVertical: 30,
    marginTop: 20,
    backgroundColor: "#F9F9F9",
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
    marginBottom: "4%",
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
  cardTitle: {
    width: "90%",
  },
  textAlign: {
    alignSelf: "flex-start",
    marginLeft: "16%",
    marginBottom: "3%",
    fontSize: 12,
    fontWeight: "700",
    color: "#3F4254",
  },
  inputStyle: {
    width: 290,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: "4%",
  },
  flexInputs: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    marginTop: "4%",
    marginBottom: "10%",
  },
  expInputStyle: {
    width: 130,
    justifyContent: "center",
    alignItems: "center",
  },
  expTextAlign: {
    alignSelf: "flex-start",
    marginLeft: "24%",
    marginBottom: "6%",
    fontSize: 12,
    fontWeight: "700",
    color: "#3F4254",
  },
  addButton: {
    width: 200,
    height: 50,
    marginBottom: "2%",
  },
  bottomSheetContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    // height: "100%",
  },
  bottomSheet: {
    justifyContent: "center",
    alignItems: "center",
    height: 340,
  },
});
