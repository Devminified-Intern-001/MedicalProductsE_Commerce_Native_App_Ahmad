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
import DropDownArrow from "../../../../svgs/DropDownArrow";

const PDetialsForm = () => {
  return (
    <ExtendedScrollView style={styles.scrollContainer}>
      <ExtendedView style={styles.container}>
        <ExtendedView style={styles.welcome}>
          <ExtendedText style={styles.welcomeText}>
            Chronic Kindey Disease.
          </ExtendedText>
        </ExtendedView>

        <ExtendedView style={styles.memberText}>
          <ExtendedText style={styles.introText}>
            Your answers to the following questions are treated as personal
            information according to our
          </ExtendedText>
          <ExtendedTouchableOpacity>
            <ExtendedText style={styles.createAccText}>
              Privacy Policy
            </ExtendedText>
          </ExtendedTouchableOpacity>
          <ExtendedText style={styles.introText}>
            . To protect your privacy the information used to generate these
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

        <CustomButton title="Submit" style={styles.sigin} />
        <AboutSection style={styles.aboutSection} />
      </ExtendedView>
    </ExtendedScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "26%",
  },
  welcome: {
    marginRight: "22%",
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: "600",
  },
  memberText: {
    flexDirection: "row",
    marginRight: "12%",
    marginBottom: "22%",
  },
  introText: {
    fontSize: 18,
  },
  createAccText: {
    fontSize: 18,
    color: "#FBD54E",
    marginLeft: 4,
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
