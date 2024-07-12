import { StyleSheet } from "react-native";
import {
  ExtendedView,
  ExtendedText,
  ExtendedCheckBox,
  ExtendedScrollView,
} from "../../../../components/atoms";
import {
  CustomInput,
  CustomButton,
  AboutSection,
} from "../../../../components/molecules";
import React, { useState } from "react";
import DropDownArrow from "../../../../../svgs/DropDownArrow";
import { useNavigation } from "@react-navigation/native";
import { BasicLayout } from "../../../../layout";

const PDetialsForm = () => {
  const navigation: any = useNavigation();
  const [selectedGender, setSelectedGender] = useState(null);
  const genderOptions = ["Male", "Female", "Other"];

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
              information according to our{" "}
              <ExtendedText style={styles.highlightWords}>
                Privacy Policy
              </ExtendedText>
              . To protect your privacy the information used to generate these
              insights is de-identified, aggregated, and analysed on a
              no-name-basic.
            </ExtendedText>
          </ExtendedView>

          <ExtendedView style={styles.detailsContainer}>
            <ExtendedView style={styles.spacing}>
              <ExtendedText style={styles.userText}>1. Your email</ExtendedText>
            </ExtendedView>
            <CustomInput
              placeholder="muhammadahmad@email.com"
              keyboardType="email-address"
            ></CustomInput>

            <ExtendedView style={styles.spacing}>
              <ExtendedText style={styles.userText}>
                2. What's bring you here?
              </ExtendedText>
            </ExtendedView>
            <CustomInput
              placeholder="I have / had this condition"
              keyboardType="default"
              righticon={<DropDownArrow />}
            ></CustomInput>

            <ExtendedView style={styles.spacing}>
              <ExtendedText style={styles.userText}>
                3. How old are you?
              </ExtendedText>
            </ExtendedView>
            <CustomInput placeholder="23" keyboardType="numeric"></CustomInput>

            <ExtendedView style={styles.spacing}>
              <ExtendedText style={styles.userText}>
                4. Your sex at birth
              </ExtendedText>
            </ExtendedView>
            <ExtendedView style={styles.checkBox}>
              {genderOptions.map((gender) => (
                <ExtendedCheckBox
                  key={gender}
                  title={gender}
                  checked={selectedGender === gender}
                  onPress={() => setSelectedGender(gender)}
                />
              ))}
            </ExtendedView>

            <ExtendedView style={styles.spacing}>
              <ExtendedText style={styles.userText}>
                5. Where do you live?
              </ExtendedText>
            </ExtendedView>
            <CustomInput
              placeholder="California"
              keyboardType="default"
            ></CustomInput>

            <ExtendedView style={styles.spacing}>
              <ExtendedText style={styles.userText}>
                6. If any, what tests / indicators are you following on an
                ongoing basic?
              </ExtendedText>
            </ExtendedView>
            <CustomInput
              placeholder="I have some..."
              keyboardType="default"
            ></CustomInput>

            <ExtendedView style={styles.spacing}>
              <ExtendedText style={styles.userText}>
                7. If any, what tests / indicators are you following?
              </ExtendedText>
            </ExtendedView>
            <CustomInput
              placeholder="I have some..."
              keyboardType="default"
            ></CustomInput>

            <ExtendedView style={styles.spacing}>
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
          </ExtendedView>

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
    marginTop: "14%",
    width: "76%",
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "700",
  },
  reviewParagraph: {
    width: "76%",
    height: 80,
    justifyContent: "center",
    marginTop: 4,
  },
  reviewText: {
    fontSize: 12,
    textAlign: "justify",
  },
  highlightWords: {
    color: "#FFCC00",
  },
  userText: {
    width: 234,
    fontSize: 13,
    alignSelf: "flex-start",
  },
  detailsContainer: {
    width: "98%",
    alignItems: "center",
  },
  spacing: {
    marginTop: 24,
    marginBottom: 10,
  },
  checkBox: {
    flexDirection: "row",
    width: "76%",
  },
  sigin: {
    marginTop: 30,
    height: 50,
    width: "78%",
  },
  aboutSection: {
    marginBottom: "7%",
  },
});
export default PDetialsForm;
