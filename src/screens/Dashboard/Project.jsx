import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import DashboardWrapper from '../../components/DashboardWrapper';
import COLOR from '../../utils/Color';
import { FONTS } from '../../utils/Fonts';
import Entypo from 'react-native-vector-icons/Entypo';

const Project = () => {
  return (
    <DashboardWrapper>
      <View style={styles.header}>
        <View style={styles.logoCon}>
          <Image
            style={styles.logo}
            source={require('../../assets/logo.png')}
          />
        </View>
        {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}> */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}
            style={styles.plusCon}
          >
            <Entypo name={'plus'} size={24} color={COLOR.WHITE} />
          </TouchableOpacity>
        {/* </View> */}
      </View>
      <Text style={styles.title}>Project</Text>
    </DashboardWrapper>
  );
};

export default Project;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoCon: {
    width: 165,
    height: 60,
    // alignSelf: 'center',
    marginTop: 10,
    marginLeft: 10,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
   plusCon: {
    width: 34,
    height: 34,
    backgroundColor: COLOR.SECONDARY,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 7,
  },
  title: {
    fontSize: 19,
    color: COLOR.BLUE,
    fontFamily: FONTS.SEMIBOLD,
    paddingLeft: 10,
    marginTop: 10,
  },
});
