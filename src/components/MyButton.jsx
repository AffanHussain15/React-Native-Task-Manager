import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { FONTS } from '../utils/Fonts';

const MyButton = ({
  btnTitle,
  color,
  textColor,
  width,
  fontSize,
  onPress,
  height,
  radius,
  padding,
  borderColor,
  borderWidth,
  source,
  resizeMode,
  imageWidth,
  imageHeight,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.btn,
        {
          backgroundColor: color,
          width: width,
          height: height,
          borderRadius: radius,
          padding: padding,
          borderColor: borderColor,
          borderWidth: borderWidth,
        },
      ]}
    >
      <Text style={[styles.text, { color: textColor, fontSize: fontSize }]}>
        {btnTitle}
      </Text>

      {/* <Image
        source={source}
        style={{
          width: imageWidth || width,
          height: imageHeight || height,
          resizeMode: resizeMode || 'cover',
        }}
      /> */}
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: FONTS.SEMIBOLD,
  },
});
