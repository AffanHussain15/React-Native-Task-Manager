import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import COLOR from '../utils/Color'
import { FONTS } from '../utils/Fonts';

const CustomButton = ({ title, imageSource, onPress, iconStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image source={imageSource} style={[styles.icon, iconStyle] } />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.SECONDARY,
    paddingVertical: 8,
    borderRadius: 20,
    paddingHorizontal: 10
  },
  icon: {
    width: 14,
    height: 14,
    marginRight: 5,
  },
  text: {
    color: COLOR.WHITE,
    fontSize: 12,
    fontFamily: FONTS.MEDIUM
  },
});

export default CustomButton;