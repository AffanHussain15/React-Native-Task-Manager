import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import COLOR from '../utils/Color';

const CustomArrowButton = ({ imageSource, text, onPress, endIcon = null , iconStyle }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.btnSec}>
        <Image source={imageSource} style={[styles.startIcon , iconStyle]} />
        <Text style={styles.buttonText}>{text}</Text>
      </View>
      {endIcon && <Image source={endIcon} style={styles.endIcon} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.SECONDARY,
    paddingVertical: 14,
    paddingHorizontal: 15,
    borderRadius: 8,
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 6
  },
  btnSec: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  startIcon: {
    width: 16,
    height: 16,
    tintColor: COLOR.WHITE,
    marginRight: 8,
  },
  buttonText: {
    color: COLOR.WHITE,
    fontSize: 16,
    fontWeight: '500',
  },
  endIcon: {
    width: 10,
    height: 16,
    tintColor: COLOR.WHITE,
    marginRight: 4,
  },
});

export default CustomArrowButton;
