import React, { useState } from "react";
import { ExtendedView } from "../../../../components/atoms";
import {
  CustomMyProfile,
  CustomSettingsCard,
} from "../../../../components/molecules";
import {
  BagIcon,
  GreenBellIcon,
  LocationIcon,
  LogoutIcon,
  LoyaltyIcon,
  ProfileIcon,
  SettingsIcon,
  WishlistIcon,
} from "../../../../../svgs";
import { StyleSheet } from "react-native";
import { BasicLayout } from "../../../../layout";

const MyProfilePage = () => {
  return (
    <BasicLayout>
      <ExtendedView>
        <ExtendedView style={styles.profileImgContent}>
          <CustomMyProfile
            imgSource={require("../../../../../assets/myProfileImg.png")}
            profileName="James Jones"
            nameTag="@jamesjones"
            imgSourceStyle={styles.imgSourceStyle}
            profileNameStyle={styles.profileNameStyle}
            nameTagStyle={styles.nameTagStyle}
          />
        </ExtendedView>
        <ExtendedView style={styles.settingsCardContainer}>
          <CustomSettingsCard
            leftSource={<ProfileIcon />}
            titleText="My Details"
            backgroundColor="#FBD54E4A"
          />
          <CustomSettingsCard
            leftSource={<GreenBellIcon />}
            titleText="Notiications"
            backgroundColor="#34A85326"
          />
          <CustomSettingsCard
            leftSource={<BagIcon />}
            titleText="Order History"
            backgroundColor="#FFBC6F40"
          />
          <CustomSettingsCard
            leftSource={<LocationIcon />}
            titleText="Billing Address"
            backgroundColor="#FBD54E4A"
          />
          <CustomSettingsCard
            leftSource={<WishlistIcon />}
            titleText="My Wishlist"
            backgroundColor="#03A9F421"
          />
          <CustomSettingsCard
            leftSource={<LoyaltyIcon />}
            titleText="My Loyalty"
            backgroundColor="#EB43351A"
          />
          <CustomSettingsCard
            leftSource={<SettingsIcon />}
            titleText="Settings"
            backgroundColor="#DB00FF1A"
          />
          <CustomSettingsCard
            leftSource={<LogoutIcon />}
            titleText="Log Out"
            backgroundColor="#FBD54E4A"
          />
        </ExtendedView>
      </ExtendedView>
    </BasicLayout>
  );
};

const styles = StyleSheet.create({
  profileImgContent: {
    width: 150,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 30,
  },
  imgSourceStyle: {
    alignSelf: "center",
    height: 96,
    width: 96,
  },
  profileNameStyle: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 10,
    alignSelf: "center",
  },
  nameTagStyle: {
    fontSize: 12,
    fontWeight: "400",
    marginTop: 6,
    alignSelf: "center",
    color: "#9B9B9B",
  },
  settingsCardContainer: {
    marginTop: 20,
  },
});

export default MyProfilePage;
