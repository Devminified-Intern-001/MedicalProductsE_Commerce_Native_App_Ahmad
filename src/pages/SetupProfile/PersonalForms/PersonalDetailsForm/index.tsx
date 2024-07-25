import { StyleSheet } from "react-native";
import { ExtendedView, ExtendedText } from "../../../../components/atoms";
import {
  CustomDetailsCard,
  CustomButton,
  AboutSection,
} from "../../../../components/molecules";
import React from "react";
import { ProfileImgIcon } from "../../../../../svgs";
import { BasicLayout } from "../../../../layout";
import { useNavigation } from "@react-navigation/native";
import Routes from "../../../../routes";

const PersonalDetails = () => {
  const navigation: any = useNavigation();

  return (
    <BasicLayout>
      <ExtendedView style={styles.outerTextContainer}>
        <ExtendedText style={styles.outerTextStyle}>
          Thanks! Your answers also became a report that can help others like
          you
        </ExtendedText>
      </ExtendedView>

      <ExtendedView style={styles.detailsForm}>
        <CustomDetailsCard
          leftSource={<ProfileImgIcon />}
          titleText="James Jones"
          detailsText="45 year old man"
          backgroundColor="#FFF"
          style={styles.profileSection}
          detailsTextStyle={styles.profile}
          imgStyle={styles.profileImg}
        />

        <ExtendedView style={styles.subContainer}>
          <ExtendedView style={styles.profileDetails}>
            <ExtendedView style={styles.flexBox}>
              <ExtendedText style={styles.boldText}>
                Diagnosed with:
              </ExtendedText>
              <ExtendedText style={styles.textStyle}>
                Chronic kidney disease.
              </ExtendedText>
            </ExtendedView>

            <ExtendedView>
              <ExtendedText style={styles.textStyle}>
                First started 2 years ago (at age 43)
              </ExtendedText>
            </ExtendedView>
          </ExtendedView>

          <ExtendedView style={styles.horizontalLine}></ExtendedView>

          <ExtendedView>
            <ExtendedText style={styles.bolderText}>
              More about my condition
            </ExtendedText>

            <ExtendedView style={styles.spacing}>
              <ExtendedText style={styles.textColor}>
                My Symptoms (all, including before an effective treatment):
              </ExtendedText>
              <ExtendedText style={styles.textStyle}>James</ExtendedText>
            </ExtendedView>

            <ExtendedView style={styles.spacing}>
              <ExtendedText style={styles.textColor}>
                Treatments I've tried to date:
              </ExtendedText>
              <ExtendedText style={styles.textStyle}>6-15-2022</ExtendedText>
            </ExtendedView>

            <ExtendedView style={styles.spacing}>
              <ExtendedText style={styles.textColor}>
                More about me:
              </ExtendedText>
              <ExtendedText style={styles.textStyle}>
                Lorem Ipsum is simply dummy text of the printing industry.
              </ExtendedText>
            </ExtendedView>
          </ExtendedView>
        </ExtendedView>
      </ExtendedView>
      <CustomButton
        title="Next"
        style={styles.next}
        onPress={() => navigation.navigate(Routes.SigninPage)}
      />
      <ExtendedView>
        <AboutSection />
      </ExtendedView>
    </BasicLayout>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  outerTextContainer: {
    maxWidth: "82%",
    alignSelf: "center",
    marginTop: "12%",
  },
  outerTextStyle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#3F4254",
  },
  detailsForm: {
    backgroundColor: "#F9F9F9",
    height: "59%",
    borderRadius: 23,
    marginVertical: "6%",
    marginTop: "10%",
    marginHorizontal: "10%",
    paddingVertical: "4%",
    paddingBottom: "10%",
  },
  profileSection: {
    width: "100%",
    height: "22%",
    bottom: "2%",
  },
  profileImg: {
    height: "82%",
    width: "82%",
    backgroundColor: "transparent",
  },
  profile: {
    width: "100%",
    marginTop: "9%",
  },
  subContainer: {
    maxWidth: "90%",
    alignSelf: "center",
    paddingHorizontal: "5%",
    marginTop: "5%",
  },
  profileDetails: {
    justifyContent: "center",
  },
  flexBox: {
    flexDirection: "row",
    marginVertical: "3%",
  },
  boldText: {
    fontSize: 11,
    fontWeight: "400",
  },
  textStyle: {
    fontSize: 11,
    color: "#9B9B9B",
    fontWeight: "400",
  },

  horizontalLine: {
    backgroundColor: "#00000024",
    height: 2,
    marginVertical: "10%",
  },
  bolderText: {
    fontSize: 13,
    fontWeight: "700",
    marginBottom: "3%",
  },
  textColor: {
    fontSize: 11,
    fontWeight: "400",
    color: "#3F4254",
    marginBottom: "2%",
  },
  spacing: {
    marginVertical: "2%",
  },
  next: {
    height: "7%",
    alignSelf: "center",
    width: "77%",
    top: "3%",
  },
});
export default PersonalDetails;
