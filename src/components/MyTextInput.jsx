import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { FONTS } from '../utils/Fonts';

const MyTextInput = ({ placeholder, onFocus , error , height ,    keyboardType, value, onChangeText , secureTextEntry , backgroundColor , borderRadius }) => {
  return (
    <View>
      <TextInput
        style={[styles.phoneInput , {backgroundColor: backgroundColor , borderRadius: borderRadius || 10 , height: height || 50}]}
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#6F6F6FB8"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default MyTextInput;

const styles = StyleSheet.create({
  phoneInput: {
    marginBottom: 10,
    padding: 10,
    paddingLeft: 15,
    fontSize: 15,
    width: '100%',
    // height: 50,
    // borderWidth: 1,
    // borderColor: '#FFFFFF',
    fontFamily: FONTS.MEDIUM,
    color: '#6F6F6FB8',
    height: 50
  },
});