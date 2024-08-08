import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
  ExtendedView,
  ExtendedText,
  ExtendedCheckBox,
  ExtendedScrollView,
  PickerList,
} from "../../../../components/atoms";
import {
  CustomInput,
  CustomButton,
  AboutSection,
} from "../../../../components/molecules";
import { useNavigation } from "@react-navigation/native";
import { BasicLayout } from "../../../../layout";
import { useAuth } from "../../../../context/authContext";
import api from "../../../../interceptor";
import Routes from "../../../../routes";

const PDetialsForm = () => {
  const navigation: any = useNavigation();
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const genderOptions = ["Male", "Female", "Other"];
  const { email } = useAuth();
  const [userEmail, setUserEmail] = useState(email || "");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [referrer, setReferrer] = useState("");
  const [indicators, setIndicators] = useState("");
  const [startTime, setStartTime] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { signup } = useAuth();
  const { userData } = useAuth();

  const handleSubmittform = async () => {
    setErrorMessage("");
    if (!userEmail || !age || !gender || !location || !referrer) {
      setErrorMessage("Required fields are missing");
      return;
    }
    try {
      const response = await api.post("/form/submitForm", {
        email: userEmail,
        age: age,
        gender: gender,
        location: location,
        referrer: referrer,
        indicators: indicators,
        startTime: startTime,
      });
      console.log("UserName:", userData.userName);

      console.log("Server response:", response.data);

      if (response.data.done) {
        console.log("Form Submitted:", response.data.done);

        signup({
          userName: userData.userName,
          email: userEmail,
          dateOfBirth: age,
          gender: gender,
          location: location,
          indicators: indicators,
          startTime: startTime,
        });

        navigation.reset({
          index: 0,
          routes: [{ name: Routes.PersonalDetails }],
        });
      } else {
        console.log("Some fields are missing:", response.data.message);
        setErrorMessage(
          response.data.message || "This username already exists"
        );
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      setErrorMessage("Form submission failed");
    }
  };

  return (
    <BasicLayout>
      <ExtendedScrollView style={styles.scrollContainer}>
        <ExtendedView style={styles.container}>
          <ExtendedView style={styles.welcome}>
            <ExtendedText style={styles.welcomeText}>
              Chronic Kidney Disease.
            </ExtendedText>
          </ExtendedView>

          <ExtendedView style={styles.reviewParagraph}>
            <ExtendedText style={styles.reviewText}>
              Your answers to the following questions are treated as personal
              information according to our
              <ExtendedText style={styles.highlightWords}>
                Privacy Policy
              </ExtendedText>
              . To protect your privacy the information used to generate these
              insights is de-identified, aggregated, and analyzed on a no-name
              basis.
            </ExtendedText>
          </ExtendedView>

          <ExtendedView style={styles.detailsContainer}>
            <ExtendedView style={styles.spacing}>
              <ExtendedText style={styles.userText}>1. Your email</ExtendedText>
            </ExtendedView>
            <CustomInput
              placeholder={"Enter your email"}
              keyboardType="email-address"
              value={userEmail}
              onChangeText={setUserEmail}
            />

            <ExtendedView style={styles.spacing}>
              <ExtendedText style={styles.userText}>
                2. What's bringing you here?
              </ExtendedText>
            </ExtendedView>
            <ExtendedView style={styles.picker}>
              <PickerList
                items={[
                  { label: "Friends", value: "friends" },
                  { label: "Family", value: "family" },
                  { label: "Social Media", value: "socialMedia" },
                  { label: "Others", value: "others" },
                ]}
                value={referrer}
                onValueChange={setReferrer}
              />
            </ExtendedView>

            <ExtendedView style={styles.spacing}>
              <ExtendedText style={styles.userText}>
                3. How old are you?
              </ExtendedText>
            </ExtendedView>
            <CustomInput
              placeholder="Enter your age"
              keyboardType="email-address"
              value={age}
              onChangeText={setAge}
            />

            <ExtendedView style={styles.spacing}>
              <ExtendedText style={styles.userText}>
                4. Your sex at birth
              </ExtendedText>
            </ExtendedView>
            <ExtendedView style={styles.checkBox}>
              {genderOptions.map((genderOption) => (
                <ExtendedCheckBox
                  key={genderOption}
                  title={genderOption}
                  checked={selectedGender === genderOption}
                  onPress={() => {
                    setSelectedGender(genderOption);
                    setGender(genderOption);
                  }}
                />
              ))}
            </ExtendedView>

            <ExtendedView style={styles.spacing}>
              <ExtendedText style={styles.userText}>
                5. Where do you live?
              </ExtendedText>
            </ExtendedView>
            <CustomInput
              placeholder="Enter City"
              keyboardType="email-address"
              value={location}
              onChangeText={setLocation}
            />

            <ExtendedView style={styles.spacing}>
              <ExtendedText style={styles.userText}>
                6. If any, what tests / indicators are you following on an
                ongoing basis?
              </ExtendedText>
            </ExtendedView>
            <CustomInput
              placeholder="I have some..."
              keyboardType="email-address"
              value={indicators}
              onChangeText={setIndicators}
            />

            <ExtendedView style={styles.spacing}>
              <ExtendedText style={styles.userText}>
                7. If any, what tests / indicators are you following?
              </ExtendedText>
            </ExtendedView>
            <CustomInput
              placeholder="I have some..."
              keyboardType="email-address"
              value={indicators}
              onChangeText={setIndicators}
            />

            <ExtendedView style={styles.spacing}>
              <ExtendedText style={styles.userText}>
                8. How much time has passed?
              </ExtendedText>
            </ExtendedView>
            <CustomInput
              placeholder="23"
              keyboardType="email-address"
              value={startTime}
              onChangeText={setStartTime}
            />

            {errorMessage ? (
              <ExtendedText style={styles.errorText}>
                {errorMessage}
              </ExtendedText>
            ) : null}

            <CustomButton
              title="Submit"
              style={styles.sigin}
              onPress={handleSubmittform}
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
    width: "80%",
    fontSize: 13,
    alignSelf: "flex-start",
    marginLeft: "7%",
  },
  picker: {
    height: "6%",
  },
  detailsContainer: {
    width: "98%",
    alignItems: "center",
  },
  spacing: {
    marginTop: 24,
    marginBottom: 10,
    width: "81%",
  },
  checkBox: {
    flexDirection: "row",
    width: "74%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "4%",
  },
  sigin: {
    marginTop: 30,
    height: 50,
    width: "78%",
  },
  errorText: {
    color: "red",
    marginTop: "8%",
  },
  aboutSection: {
    marginBottom: "7%",
  },
});
export default PDetialsForm;
