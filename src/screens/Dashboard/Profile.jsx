import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback } from 'react';
import DashboardWrapper from '../../components/DashboardWrapper';
import Header from '../../components/Header';
import Line from '../../components/Line';
import { useFocusEffect } from '@react-navigation/native';
import MyTextInput from '../../components/MyTextInput';
import CustomArrowButton from '../../components/CustomArrowButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import COLOR from '../../utils/Color';
import { FONTS } from '../../utils/Fonts';

const Profile = ({ navigation }) => {
  useFocusEffect(
    useCallback(() => {
      navigation.getParent().setOptions({
        tabBarStyle: {
          display: 'none',
        },
      });
    }, []),
  );
  return (
    <DashboardWrapper>
      <Header title="Profile" navigation={navigation} />
      <Line />
      <ScrollView style={styles.scrollCon} showsVerticalScrollIndicator={false}>
        <View style={styles.nameCon}>
          <View style={styles.nameHeader}>
            <Image
              style={styles.profileImg}
              source={require('../../assets/profileImg.png')}
            />
            <View style={styles.nameSec}>
              <Text style={styles.name}>Avery Johnson</Text>
              <Text style={styles.nameProfession}>
                Product Designer • Team Atlas
              </Text>
            </View>
          </View>
          <View style={styles.detail}>
            <View style={styles.emailCon}>
              <Text style={styles.email}>avery@atlas.co</Text>
            </View>
            <View style={styles.emailCon}>
              <Text style={styles.email}>+1 415 555 0132</Text>
            </View>
          </View>
        </View>
        <Text style={styles.title}>Profile Details</Text>
        <Text style={styles.text}>Full Name</Text>
        <MyTextInput placeholder="Avery Johnson" backgroundColor={COLOR.INPUTWHITE}/>
        <Text style={styles.text}>Email</Text>
        <MyTextInput
          placeholder="avery@atlas.co"
          backgroundColor={COLOR.INPUTWHITE}
          keyboardType="email-address"
        />
        <Text style={styles.text}>Phone </Text>
        <MyTextInput
          placeholder="+1 415 555 0132"
          backgroundColor={COLOR.INPUTWHITE}
          keyboardType="number-pad"
        />
        <Text style={styles.title2}>Actions</Text>
        <CustomArrowButton
          imageSource={require('../../assets/pencil.png')}
          text="Edit Profile"
          endIcon={require('../../assets/rightArrow.png')}
        />
        <CustomArrowButton
          iconStyle={{ height: 18 }}
          imageSource={require('../../assets/lock.png')}
          text="Change Password"
          endIcon={require('../../assets/rightArrow.png')}
        />
        <CustomArrowButton
          iconStyle={{ height: 18 }}
          imageSource={require('../../assets/notification.png')}
          text="Notification Settings"
          endIcon={require('../../assets/rightArrow.png')}
        />

        <TouchableOpacity style={styles.logoutCon}>
          <MaterialIcons name="logout" size={25} color={COLOR.BLACK} />
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </DashboardWrapper>
  );
};

export default Profile;

const styles = StyleSheet.create({
  scrollCon: {
    paddingHorizontal: 15,
  },
  nameCon: {
    backgroundColor: COLOR.BLUE,
    // borderWidth: 1,
    // borderColor: '#FFFFFF4A',
    borderRadius: 10,
    paddingVertical: 15,
    marginVertical: 15,
  },
  nameHeader: {
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  profileImg: {
    width: 50,
    height: 50,
  },
  nameSec: {
    marginLeft: 15,
  },
  name: {
    fontSize: 17,
    color: COLOR.WHITE,
    fontFamily: FONTS.BOLD,
  },
  nameProfession: {
    fontSize: 13,
    color: COLOR.WHITE,
    fontFamily: FONTS.LIGHT,
  },
  detail: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    gap: 10,
    marginTop: 10,
  },
  emailCon: {
    backgroundColor: COLOR.SECONDARY,
    borderRadius: 6,
    paddingHorizontal: 15,
    paddingVertical: 6,
  },
  email: {
    color: COLOR.WHITE,
    fontFamily: FONTS.MEDIUM,
    fontSize: 12,
  },
  title: {
    fontSize: 19,
    color: COLOR.BLACK,
    fontFamily: FONTS.SEMIBOLD,
    // paddingLeft: 10,
  },
  title2: {
    fontSize: 19,
    color: COLOR.BLACK,
    fontFamily: FONTS.SEMIBOLD,
    marginVertical: 10,
  },
  text: {
    color: COLOR.BLACK,
    fontSize: 16,
    fontFamily: FONTS.MEDIUM,
    marginVertical: 4,
    marginTop: 7,
  },
  logoutCon: {
    flexDirection: 'row',
    marginVertical: 15,
    marginBottom: 20,
    marginLeft: 2
  },
  logout: {
    fontSize: 15,
    color: COLOR.BLACK,
    fontFamily: FONTS.MEDIUM,
    marginLeft: 5,
    marginTop: 2,
  },
});
