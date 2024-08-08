import React, { useEffect, useState } from "react";
import { StyleSheet, ActivityIndicator, Alert, Image } from "react-native";
import {
  ExtendedView,
  ExtendedText,
  ExtendedCheckBox,
  ExtendedTouchableOpacity,
  ExtendedScrollView,
} from "../../../../components/atoms";
import { BasicLayout } from "../../../../layout";
import {
  CustomButton,
  CustomHeader,
  CustomInput,
} from "../../../../components/molecules";
import { CalenderIcon, EyeIcon, CameraIcon } from "../../../../../svgs";
import { CustomMyProfile } from "../../../../components/molecules";
import { useNavigation } from "@react-navigation/native";
import api from "../../../../interceptor";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format, parseISO } from "date-fns";
import * as ImagePicker from "expo-image-picker";

type ImagePickerResult = {
  uri: string;
  type: string;
  name: string;
  filename: string;
};

const MyDetailsPage = () => {
  const navigation: any = useNavigation();
  const [activeButton, setActiveButton] = useState("Save");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    gender: "",
    dateOfBirth: "",
    password: "",
    mobile: "",
    image: "",
  });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImagePickerResult | null>(
    null
  );

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await api.get("/User");
      const { userName, email, gender, dateOfBirth, password, mobile, image } =
        response.data.message;
      setUserData({
        userName,
        email,
        gender,
        dateOfBirth: format(parseISO(dateOfBirth), "yyyy-MM-dd"),
        password,
        mobile,
        image,
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
      setErrorMessage("Error fetching user data");
    } finally {
      setLoading(false);
    }
  };

  const uploadImage = async () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append("image", {
        uri: selectedImage.uri,
        name: selectedImage.filename,
        type: selectedImage.type,
      } as any);

      console.log("Selected image: ", selectedImage);

      try {
        const response = await api.post("/User", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
        });

        console.log("Image upload response:", response.data);
        if (response.data.done) {
          return true;
        } else {
          throw new Error("Image upload failed");
        }
      } catch (error) {
        console.error("Error uploading image:", error.message);
        Alert.alert("Error", "Error uploading image");
        return false;
      }
    }
    return true;
  };

  const updateUserData = async () => {
    try {
      setLoading(true);

      const formattedDateOfBirth = format(
        parseISO(userData.dateOfBirth),
        "yyyy-MM-dd"
      );
      const formData = new FormData();
      formData.append("gender", userData.gender || "");
      formData.append("dateOfBirth", formattedDateOfBirth);
      formData.append("mobile", userData.mobile || "");

      if (userData.password && userData.password.trim() !== "") {
        formData.append("password", userData.password.trim());
      }

      const imageUploaded = await uploadImage();
      if (imageUploaded) {
        console.log("Image upload: ", imageUploaded);
        await api.put("/User", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        Alert.alert("Success", "User data updated successfully");
      } else {
        Alert.alert("Error", "User data updated but image upload failed");
      }
    } catch (error) {
      console.error("Error updating user data:", error);
      Alert.alert("Error", "Error updating user data");
    } finally {
      setLoading(false);
    }
  };

  const onDateChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || new Date(userData.dateOfBirth);
    setShowDatePicker(false);
    setUserData({
      ...userData,
      dateOfBirth: format(currentDate, "yyyy-MM-dd"),
    });
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled && result.assets.length > 0) {
      setSelectedImage({
        uri: result.assets[0].uri,
        type: result.assets[0].type,
        name: result.assets[0].fileName || "profile.jpg",
        filename: result.assets[0].fileName || "profile.jpg",
      });
    }
  };

  return (
    <BasicLayout>
      <ExtendedScrollView>
        <ExtendedView style={styles.container}>
          <ExtendedView style={styles.headerStyle}>
            <CustomHeader
              leftSource={require("../../../../../assets/arrow.png")}
              title="My Details"
              titleStyle={styles.title}
              onArrowPress={() => navigation.navigate("MyProfilePage")}
            />
          </ExtendedView>

          {loading ? (
            <ExtendedView style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#FBD54E" />
              <ExtendedText>Loading...</ExtendedText>
            </ExtendedView>
          ) : errorMessage ? (
            <ExtendedText style={styles.errorText}>{errorMessage}</ExtendedText>
          ) : (
            <>
              <ExtendedView style={styles.spacing}>
                <CustomMyProfile
                  imgSource={
                    selectedImage
                      ? { uri: selectedImage.uri }
                      : userData.image
                      ? {
                          uri: `https://medical-e-commerce-backend.vercel.app/img${userData.image}`,
                        }
                      : require("../../../../../assets/myProfileImg.png")
                  }
                  imgSourceStyle={styles.imgSourceStyle}
                />
              </ExtendedView>

              <ExtendedView style={styles.camera}>
                <ExtendedTouchableOpacity
                  style={styles.cameraBackground}
                  onPress={pickImage}
                >
                  <CameraIcon />
                </ExtendedTouchableOpacity>
              </ExtendedView>

              <ExtendedView style={styles.inputsContainer}>
                <ExtendedView>
                  <ExtendedText style={styles.inputTitle}>
                    User Name
                  </ExtendedText>
                  <CustomInput
                    value={userData.userName}
                    onChangeText={(text) =>
                      setUserData({ ...userData, userName: text })
                    }
                    placeholder="User Name"
                    keyboardType="email-address"
                    style={styles.inputStyle}
                  />
                </ExtendedView>

                <ExtendedView style={styles.spacing}>
                  <ExtendedText style={styles.inputTitle}>Mobile</ExtendedText>
                  <CustomInput
                    value={userData.mobile}
                    onChangeText={(text) =>
                      setUserData({ ...userData, mobile: text })
                    }
                    placeholder="Mobile"
                    keyboardType="phone-pad"
                    style={styles.inputStyle}
                  />
                </ExtendedView>

                <ExtendedView style={styles.spacing}>
                  <ExtendedText style={styles.inputTitle}>
                    Email ID
                  </ExtendedText>
                  <CustomInput
                    value={userData.email}
                    onChangeText={(text) =>
                      setUserData({ ...userData, email: text })
                    }
                    placeholder="Email ID"
                    keyboardType="email-address"
                    style={styles.inputStyle}
                  />
                </ExtendedView>

                <ExtendedView style={styles.dofStyle}>
                  <ExtendedText style={styles.inputDobTitle}>
                    Date of Birth
                  </ExtendedText>
                  <ExtendedTouchableOpacity
                    onPress={() => setShowDatePicker(true)}
                  >
                    <CustomInput
                      value={userData.dateOfBirth}
                      onChangeText={(text) =>
                        setUserData({ ...userData, dateOfBirth: text })
                      }
                      placeholder="Date of Birth"
                      keyboardType="email-address"
                      righticon={<CalenderIcon />}
                      style={styles.inputStyle}
                    />
                  </ExtendedTouchableOpacity>
                  {showDatePicker && (
                    <DateTimePicker
                      value={new Date(userData.dateOfBirth)}
                      mode="date"
                      display="default"
                      onChange={onDateChange}
                    />
                  )}
                </ExtendedView>
              </ExtendedView>

              <ExtendedView style={styles.btnsContainer}>
                <CustomButton
                  title="Cancel"
                  style={[
                    styles.cancelButton,
                    activeButton === "Cancel"
                      ? styles.activeButton
                      : styles.inactiveButton,
                  ]}
                  onPress={() => setActiveButton("Cancel")}
                />
                <CustomButton
                  title="Save"
                  style={[
                    styles.cancelButton,
                    activeButton === "Save"
                      ? styles.activeButton
                      : styles.inactiveButton,
                  ]}
                  onPress={() => {
                    setActiveButton("Save");
                    updateUserData();
                  }}
                />
              </ExtendedView>

              <ExtendedView style={styles.checkboxContainer}>
                <ExtendedText style={styles.inputTitle}>Gender</ExtendedText>
                <ExtendedView style={styles.checkboxStyle}>
                  <ExtendedCheckBox
                    title="Male"
                    checked={userData.gender === "Male"}
                    onPress={() => setUserData({ ...userData, gender: "Male" })}
                  />
                  <ExtendedCheckBox
                    title="Female"
                    checked={userData.gender === "Female"}
                    onPress={() =>
                      setUserData({ ...userData, gender: "Female" })
                    }
                  />
                  <ExtendedCheckBox
                    title="Other"
                    checked={userData.gender === "Other"}
                    onPress={() =>
                      setUserData({ ...userData, gender: "Other" })
                    }
                  />
                </ExtendedView>
              </ExtendedView>

              <ExtendedView style={styles.changePassword}>
                <ExtendedView style={styles.textFlex}>
                  <ExtendedText style={styles.passText}>Password</ExtendedText>
                  <ExtendedText
                    style={styles.forgotPasswordText}
                    onPress={() => navigation.navigate("ChangePasswordPage")}
                  >
                    Change Password
                  </ExtendedText>
                </ExtendedView>
                <CustomInput
                  value={userData.password}
                  placeholder="Update Password"
                  keyboardType="email-address"
                  onChangeText={(text) =>
                    setUserData({ ...userData, password: text })
                  }
                  righticon={<EyeIcon />}
                  style={styles.inputStyle}
                />
              </ExtendedView>
            </>
          )}
        </ExtendedView>
      </ExtendedScrollView>
    </BasicLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
    height: "100%",
  },
  headerStyle: {
    marginBottom: "4%",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  imgSourceStyle: {
    alignSelf: "center",
    height: 126,
    width: 126,
    marginTop: "4%",
    borderRadius: 100,
  },
  camera: {
    position: "absolute",
    top: "19%",
    right: "35%",
    backgroundColor: "#FFF4CF",
    height: "4%",
    width: "12%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  cameraBackground: {
    padding: 10,
  },
  spacing: {
    marginTop: "5%",
  },
  inputsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputTitle: {
    marginLeft: 20,
    marginBottom: 10,
  },
  inputStyle: {
    width: "97%",
    height: 30,
  },
  dofStyle: {
    marginTop: "5%",
    minWidth: "78%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputDobTitle: {
    marginLeft: 20,
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  btnsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  cancelButton: {
    width: 130,
    height: 46,
  },
  activeButton: {
    backgroundColor: "#FBD54E",
  },
  inactiveButton: {
    backgroundColor: "#FFF",
  },
  checkboxContainer: {
    marginTop: 30,
  },
  checkboxStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 284,
  },
  changePassword: {
    alignItems: "center",
    marginTop: 26,
    height: 200,
  },
  textFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "72%",
    fontSize: 16,
    marginBottom: 10,
  },
  passText: {
    fontSize: 13,
  },
  forgotPasswordText: {
    color: "#FBD54E",
    fontSize: 12,
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "75%",
  },
  errorText: {
    color: "red",
    marginTop: 20,
  },
});

export default MyDetailsPage;
