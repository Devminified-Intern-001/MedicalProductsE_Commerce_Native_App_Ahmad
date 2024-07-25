import { StyleSheet, Image } from "react-native";
import {
  CustomButton,
  CustomProfileHeader,
} from "../../../../components/molecules";
import { ExtendedView, ExtendedText } from "../../../../components/atoms";
import { CustomDetailsCard } from "../../../../components/molecules";
import { BasicLayout } from "../../../../layout";
import BellIcon from "../../../../../svgs/BellIcon";
import { TickIcon } from "../../../../../svgs";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Routes from "../../../../routes";

const WalletPage = () => {
  const [activeButton, setActiveButton] = useState("Cards");
  const navigation: any = useNavigation();
  const handleButtonPress = (button) => {
    setActiveButton(button);
  };
  return (
    <ExtendedView style={styles.container}>
      <ExtendedView style={styles.header}>
        <CustomProfileHeader
          topTitle="Hi,James!"
          bottomTitle="Check your wallet status"
          rightSource={<BellIcon />}
          backgroundColor="#FBD54E"
          onArrowPress={() => navigation.navigate(Routes.NotificationsPage)}
        />
      </ExtendedView>
      <ExtendedView style={styles.pageContainer}>
        <ExtendedView style={styles.btnFlex}>
          <CustomButton
            title="Cards"
            style={[
              styles.btnStyle,
              activeButton === "Cards"
                ? styles.activeBtnStyle
                : styles.inactiveBtnStyle,
            ]}
            onPress={() => handleButtonPress("Cards")}
          />
          <CustomButton
            title="Accounts"
            style={[
              styles.btnStyle,
              activeButton === "Accounts"
                ? styles.activeBtnStyle
                : styles.inactiveBtnStyle,
              styles.accBtnPosition,
            ]}
            onPress={() => handleButtonPress("Accounts")}
          />
        </ExtendedView>

        <ExtendedView style={styles.detailsCard}>
          <CustomDetailsCard
            leftSource={<TickIcon />}
            titleText="Add your bank card"
            detailsText="It's easy for when you are making a payment"
            backgroundColor="#34A85326"
            style={styles.cardDetails}
            detailsTextStyle={styles.details}
            imgStyle={styles.imgStyle}
            titleStyle={styles.detailsTitle}
          />
        </ExtendedView>

        <ExtendedView style={styles.imgContainer}>
          <Image
            source={require("../../../../../assets/cards.png")}
            style={styles.cardsImg}
          />
        </ExtendedView>
      </ExtendedView>

      <ExtendedView style={styles.cardBtn}>
        <CustomButton title="Add card" style={styles.addCardBtn} />
      </ExtendedView>
    </ExtendedView>
  );
};
export default WalletPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingBottom: "10%",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "15%",
  },
  pageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  btnFlex: {
    flexDirection: "row",
    marginBottom: "8%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "74%",
  },
  btnStyle: {
    width: 146,
    height: 40,
  },
  activeBtnStyle: {
    backgroundColor: "#FBD54E",
    zIndex: 2,
    position: "relative",
  },
  inactiveBtnStyle: {
    backgroundColor: "#EEF1F599",
    position: "absolute",
  },
  accBtnPosition: {
    left: 114,
  },
  detailsCard: {
    marginTop: "2%",
    marginBottom: "10%",
  },
  cardDetails: {
    backgroundColor: "#F9F9F9",
    height: 66,
    marginHorizontal: "11%",
    borderRadius: 19,
    paddingBottom: "10%",
  },
  details: {
    marginLeft: 70,
  },
  detailsTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#3F4254",
  },
  imgStyle: {
    borderRadius: 13,
  },
  cardsImg: {
    width: 380,
    height: 300,
    resizeMode: "contain",
  },
  imgContainer: {
    height: "39%",
  },
  cardBtn: {
    width: "84%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: "12%",
  },
  addCardBtn: {
    width: 280,
    height: 60,
  },
});
