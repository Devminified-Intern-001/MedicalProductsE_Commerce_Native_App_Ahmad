import { StyleSheet } from "react-native";
import { ExtendedView, ExtendedText } from "../../../../components/atoms";
import {
  CustomDetailsCard,
  CustomButton,
} from "../../../../components/molecules";
import React from "react";

const PersonalDetails = () => {
  return (
    <ExtendedView style={styles.container}>
      <ExtendedView>
        <ExtendedView>
          <ExtendedText>
            Thanks! Your answers also became a report that can help others like
            you
          </ExtendedText>
        </ExtendedView>

        <ExtendedView>
          <CustomDetailsCard
            leftSource={require("../../../../assets/profile.png")}
            titleText="James Jones"
            detailsText="45 year old man"
          />

          <ExtendedView>
            <ExtendedText>Diagnosed with: </ExtendedText>
            <ExtendedText>Chronic kidney disease.</ExtendedText>
          </ExtendedView>

          <ExtendedView>
            <ExtendedText>First started 2 years ago (at age 43)</ExtendedText>
          </ExtendedView>
        </ExtendedView>

        <ExtendedView style={styles.horizontalLine}></ExtendedView>

        <ExtendedView>
          <ExtendedText>More about my condition</ExtendedText>

          <ExtendedText>
            My Symptoms (all, including before an effective treatment):
          </ExtendedText>
          <ExtendedText>James</ExtendedText>

          <ExtendedText>Treatments I’ve tried to date:</ExtendedText>
          <ExtendedText>6-15-2022</ExtendedText>

          <ExtendedText>More about me:</ExtendedText>
          <ExtendedText>
            Lorem Ipsum is simply dummy text of the printing industry.
          </ExtendedText>
        </ExtendedView>

        <CustomButton title="Next" style={styles.next} />
      </ExtendedView>
    </ExtendedView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  horizontalLine: {
    backgroundColor: "#111",
    height: 2,
    width: "100%",
    marginVertical: 10,
  },
  next: {
    marginTop: "10%",
    height: 46,
  },
});
export default PersonalDetails;
