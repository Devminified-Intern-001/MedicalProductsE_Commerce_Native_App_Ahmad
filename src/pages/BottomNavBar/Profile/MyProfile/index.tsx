import "react-native-gesture-handler";
import React, { useRef, useState } from "react";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
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
import { CustomLogoutBottomSheet } from "../../../../components/organisams";
import { useNavigation } from "@react-navigation/native";

const MyProfilePage = () => {
  const navigation: any = useNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const bottomSheetModalRef = useRef(null);

  const snapPoints = ["15%", "40%", "65%"];

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
    setTimeout(() => {
      setIsOpen(true);
    }, 100);
  }
  const handleCloseModal = () => {
    bottomSheetModalRef.current?.dismiss();
    setIsOpen(false);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <BasicLayout>
          <ExtendedView
            style={[
              styles.container,
              { backgroundColor: isOpen ? "#00000033" : "white" },
            ]}
          >
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
                  onPress={() => navigation.navigate("MyDetailsPage")}
                />
                <CustomSettingsCard
                  leftSource={<GreenBellIcon />}
                  titleText="Notiications"
                  backgroundColor="#34A85326"
                  onPress={() => navigation.navigate("NotificationsPage")}
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
                  onPress={handlePresentModal}
                  backgroundColor="#FBD54E4A"
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
                <CustomLogoutBottomSheet onCancel={handleCloseModal} />
              </ExtendedView>
            </BottomSheetModal>
          </ExtendedView>
        </BasicLayout>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: "3%",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "10%",
  },
  profileImgContent: {
    width: 150,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 30,
  },
  imgSourceStyle: {
    alignSelf: "center",
    height: 126,
    width: 126,
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
  bottomSheet: {
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    bottom: 30,
  },
});

export default MyProfilePage;
