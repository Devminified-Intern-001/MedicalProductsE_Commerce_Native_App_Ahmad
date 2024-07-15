import { StyleSheet } from "react-native";
import React from "react";
import {
  ExtendedView,
  ExtendedText,
  ExtendedScrollView,
} from "../../../../components/atoms";
import { BasicLayout } from "../../../../layout";
import {
  CustomHeader,
  CustomDetailsCard,
} from "../../../../components/molecules";
import { BagIcon, LoyaltyIcon, WalletIcon } from "../../../../../svgs";
import {
  todayNotificationData,
  yesterdayNotificationData,
  lastWeekNotificationData,
} from "../../../../data";
import { useNavigation } from "@react-navigation/native";
import Routes from "../../../../routes";

const iconMap = {
  BagIcon: <BagIcon />,
  WalletIcon: <WalletIcon />,
  LoyaltyIcon: <LoyaltyIcon />,
};

const NotificationsPage = () => {
  const navigation: any = useNavigation();
  return (
    <BasicLayout>
      <ExtendedScrollView>
        <ExtendedView style={styles.container}>
          <ExtendedView style={styles.hearderStyle}>
            <CustomHeader
              leftSource={require("../../../../../assets/arrow.png")}
              title="Notifications"
              onArrowPress={() => navigation.goBack()}
              titleStyle={styles.title}
            />
          </ExtendedView>

          <ExtendedView>
            <ExtendedText style={styles.textStyle}>Today</ExtendedText>
            {todayNotificationData.map((data, index) => (
              <CustomDetailsCard
                key={index}
                leftSource={iconMap[data.leftSource || ""]}
                titleText={data.titleText}
                detailsText={data.detailsText}
                timeDuration={data.timeDuration}
                backgroundColor={data.backgroudColor}
              />
            ))}
          </ExtendedView>

          <ExtendedView>
            <ExtendedText style={styles.textStyle}>Yesterday</ExtendedText>
            {yesterdayNotificationData.map((data, index) => (
              <CustomDetailsCard
                key={index}
                leftSource={iconMap[data.leftSource || ""]}
                titleText={data.titleText}
                detailsText={data.detailsText}
                timeDuration={data.timeDuration}
                backgroundColor={data.backgroudColor}
              />
            ))}
          </ExtendedView>

          <ExtendedView>
            <ExtendedText style={styles.textStyle}>Today</ExtendedText>
            {lastWeekNotificationData.map((data, index) => (
              <CustomDetailsCard
                key={index}
                leftSource={iconMap[data.leftSource || ""]}
                titleText={data.titleText}
                detailsText={data.detailsText}
                timeDuration={data.timeDuration}
                backgroundColor={data.backgroudColor}
              />
            ))}
          </ExtendedView>
        </ExtendedView>
      </ExtendedScrollView>
    </BasicLayout>
  );
};

export default NotificationsPage;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 360,
    paddingBottom: "12%",
  },
  hearderStyle: {
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    width: 120,
    paddingLeft: "3%",
  },
  textStyle: {
    marginLeft: 32,
    fontSize: 20,
    fontWeight: "700",
    marginTop: 20,
  },
});
