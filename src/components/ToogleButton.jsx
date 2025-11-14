import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import COLOR from '../utils/Color';
import { FONTS } from '../utils/Fonts';

const ToggleButton = ({ activeTab, setActiveTab, options }) => {
  return (
    <View style={styles.buttonCon}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.button,
            activeTab === option.value && styles.activeButton,
          ]}
          onPress={() => setActiveTab(option.value)}
        >
          <Text style={styles.text}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonCon: {
    flexDirection: 'row',
    backgroundColor: COLOR.BLUE,
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF69',
    marginHorizontal: 13,
    marginTop: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 6,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: COLOR.SECONDARY,
    borderRadius: 8,
  },
  text: {
    color: COLOR.WHITE,
    fontFamily: FONTS.MEDIUM,
    fontSize: 12,
  },
});

export default ToggleButton;