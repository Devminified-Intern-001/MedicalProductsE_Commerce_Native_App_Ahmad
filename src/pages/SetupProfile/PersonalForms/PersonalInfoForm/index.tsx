import { StyleSheet } from "react-native";
import {
  ExtendedView,
  ExtendedText,
  ExtendedTouchableOpacity,
  ExtendedCheckBox,
  ExtendedScrollView,
} from "../../../../components/atoms";
import {
  CustomInput,
  CustomButton,
  AboutSection,
} from "../../../../components/molecules";
import React from "react";
import DropDownArrow from "../../../../../svgs/DropDownArrow";
import { useNavigation } from "@react-navigation/native";
import { BasicLayout } from "../../../../layout";

const PDetialsForm = () => {
  const navigation: any = useNavigation();
  return (
    <BasicLayout>
      <ExtendedScrollView style={styles.scrollContainer}>
        <ExtendedView style={styles.container}>
          <ExtendedView style={styles.welcome}>
            <ExtendedText style={styles.welcomeText}>
              Chronic Kindey Disease.
            </ExtendedText>
          </ExtendedView>

          <ExtendedView style={styles.reviewParagraph}>
            <ExtendedText style={styles.reviewText}>
              Your answers to the following questions are treated as personal
              information according to our
            </ExtendedText>

            <ExtendedTouchableOpacity>
              <ExtendedText style={styles.highlightText}>
                Privacy Policy.
              </ExtendedText>
            </ExtendedTouchableOpacity>
            <ExtendedText style={styles.reviewText}>
              To protect your privacy the information used to generate these
              insights is de-identified, aggregated, and analysed on a
              no-name-basic.
            </ExtendedText>
          </ExtendedView>

          <ExtendedView>
            <ExtendedText style={styles.userText}>1. Your email</ExtendedText>
          </ExtendedView>
          <CustomInput
            placeholder="muhammadahmad@email.com"
            keyboardType="email-address"
          ></CustomInput>

          <ExtendedView>
            <ExtendedText style={styles.userText}>
              2. What's bring you here?
            </ExtendedText>
          </ExtendedView>
          <CustomInput
            placeholder="I have / had this condition"
            keyboardType="default"
            righticon={<DropDownArrow />}
          ></CustomInput>

          <ExtendedView>
            <ExtendedText style={styles.userText}>
              3. How old are you?
            </ExtendedText>
          </ExtendedView>
          <CustomInput placeholder="23" keyboardType="numeric"></CustomInput>

          <ExtendedView>
            <ExtendedText style={styles.userText}>
              3. How old are you?
            </ExtendedText>
          </ExtendedView>
          <CustomInput placeholder="23" keyboardType="numeric"></CustomInput>

          <ExtendedView>
            <ExtendedText style={styles.userText}>
              4. Your sex at birth
            </ExtendedText>
          </ExtendedView>
          <ExtendedView>
            <ExtendedCheckBox title="Male"></ExtendedCheckBox>
            <ExtendedCheckBox title="Female"></ExtendedCheckBox>
            <ExtendedCheckBox title="Other"></ExtendedCheckBox>
          </ExtendedView>

          <ExtendedView>
            <ExtendedText style={styles.userText}>
              5. Where do you live?
            </ExtendedText>
          </ExtendedView>
          <CustomInput
            placeholder="California"
            keyboardType="default"
          ></CustomInput>

          <ExtendedView>
            <ExtendedText style={styles.userText}>
              6. If any, what tests / indicators are you following on an ongoing
              basic?
            </ExtendedText>
          </ExtendedView>
          <CustomInput
            placeholder="I have some..."
            keyboardType="default"
          ></CustomInput>

          <ExtendedView>
            <ExtendedText style={styles.userText}>
              7. If any, what tests / indicators are you following?
            </ExtendedText>
          </ExtendedView>
          <CustomInput
            placeholder="I have some..."
            keyboardType="default"
          ></CustomInput>

          <ExtendedView>
            <ExtendedText style={styles.userText}>
              8. How much time has passed ?
            </ExtendedText>
          </ExtendedView>
          <CustomInput placeholder="23" keyboardType="numeric"></CustomInput>

          <CustomButton
            title="Submit"
            style={styles.sigin}
            onPress={() => navigation.navigate("PersonalDetails")}
          />
          <AboutSection style={styles.aboutSection} />
        </ExtendedView>
      </ExtendedScrollView>
    </BasicLayout>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderWidth: 2,
    borderColor: "#111",
  },
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  welcome: {
    marginTop: "22%",
    borderWidth: 2,
    borderColor: "#111",
    width: "90%",
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "700",
  },
  reviewParagraph: {
    flexDirection: "column",
    flexWrap: "nowrap",
    width: "90%",
    height: 100,
    borderWidth: 2,
    borderColor: "#111",
    textAlign: "justify",
    position: "relative",
  },
  reviewText: {
    fontSize: 12,
  },
  highlightText: {
    fontSize: 12,
    color: "#FBD54E",
    position: "absolute",
    alignSelf: "flex-end",
    borderWidth: 2,
    borderColor: "#111",
    bottom: 10,
  },
  userText: {
    marginRight: "46%",
    width: 80,
    fontSize: 13,
  },
  sigin: {
    marginTop: "6%",
  },
  aboutSection: {
    marginTop: "22%",
  },
});
export default PDetialsForm;
