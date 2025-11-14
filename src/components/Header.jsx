import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import COLOR from '../utils/Color';
import { FONTS } from '../utils/Fonts';

const Header = ({ title, navigation , iconStyle , showBackArrow = true, icon = null , rightText = null, onIconPress = () => {}, onRightTextPress = () => {} }) => {
  return (
    <View style={styles.headerContainer}>
      {showBackArrow && (
        <TouchableOpacity onPress={() => navigation && navigation.goBack() }>
          <Image
            source={require('../assets/backArrow.png')}
            style={styles.backArrow}
          />
        </TouchableOpacity>
      )}
      <Text style={styles.headerTitle}>{title}</Text>
      {/* {icon && <View style={styles.headerIcon}>{icon}</View>} */}
      {/* {icon && (
        <Image
          source={icon} 
          style={styles.headerIcon}
        />
      )}  */}
      {icon && !rightText && (
        <TouchableOpacity onPress={onIconPress}>
          <Image source={icon} style={[styles.headerIcon , iconStyle]} />
        </TouchableOpacity>
      )}
      {rightText && !icon && (
        <TouchableOpacity onPress={onRightTextPress}>
          <Text style={styles.headerRightText}>{rightText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.WHITE,
    padding: 10,
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 8,
  },
  backArrow: {
    width: 21,
    height: 15,
    tintColor: COLOR.BLACK
  },
  headerTitle: {
    color: COLOR.BLACK,
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
    fontFamily: FONTS.SEMIBOLD,
    marginRight: 10,
    marginTop: 2,
  },
  headerIcon: {
    width: 24,
    height: 24,
    tintColor: COLOR.BLACK
    // marginLeft: 10,
  },
  headerRightText: {
    color: COLOR.SECONDARY,
    fontSize: 15,
    fontFamily: FONTS.SEMIBOLD,
    marginLeft: -15,
    marginTop: 3
  },
});

export default Header;
