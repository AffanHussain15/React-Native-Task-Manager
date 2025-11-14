import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Line = () => {
  return (
    <View>
      <View style={styles.line} />
    </View>
  );
};

export default Line;

const styles = StyleSheet.create({
  line: {
    backgroundColor: '#2929294A',
    height: 1,
    width: '100%',
    marginVertical: 8,
  },
});
