import { StyleSheet, Image, ImageSourcePropType } from "react-native";
import { ExtendedView, ExtendedText } from "../../atoms";
import React from "react";

interface MyProfile {
  imgSource: ImageSourcePropType;
  profileName?: string;
  nameTag?: string;
  imgSourceStyle?: object;
  profileNameStyle?: object;
  nameTagStyle?: object;
}

const CustomMyProfile = (props: MyProfile) => {
  const {
    imgSource,
    profileName,
    nameTag,
    imgSourceStyle,
    profileNameStyle,
    nameTagStyle,
  } = props;
  return (
    <ExtendedView>
      <ExtendedView>
        <Image source={imgSource} style={imgSourceStyle} />
      </ExtendedView>

      <ExtendedView>
        <ExtendedView>
          <ExtendedText style={profileNameStyle}>{profileName}</ExtendedText>
        </ExtendedView>
        <ExtendedView>
          <ExtendedText style={nameTagStyle}>{nameTag}</ExtendedText>
        </ExtendedView>
      </ExtendedView>
    </ExtendedView>
  );
};

export default CustomMyProfile;
