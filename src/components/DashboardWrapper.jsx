import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLOR from '../utils/Color'

const DashboardWrapper = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLOR.WHITE} barStyle={'dark-content'} />
      {children}
    </SafeAreaView>
  );
};

export default DashboardWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    // backgroundColor: '#FFFFFF'
    // paddingHorizontal: 10,
  },
});
