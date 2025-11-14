import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import COLOR from '../utils/Color';
import { FONTS } from '../utils/Fonts';


const ImageTextInput = ({ placeholder, value, onChangeText }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor="#6F6F6FB8"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconContainer}>
          <Feather
            name={showPassword ? 'eye-off' : 'eye'}
            // name={'eye-invisible'}
            size={19}
            color="#6B7280"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImageTextInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.INPUTWHITE,
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    borderRadius: 10,
    // height: 50,
  },
  input: {
    flex: 1,
    padding: 10,
    paddingLeft: 15,
    fontSize: 15,
    fontFamily: FONTS.MEDIUM,
    color: '#6B7280',
    height: 50
  },
  iconContainer: {
    padding: 10,
    marginRight: 7
  },
});