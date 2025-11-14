import {
  Alert,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import MyTextInput from '../../components/MyTextInput';
import ImageTextInput from '../../components/ImageTextInput';
import MyButton from '../../components/MyButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLOR from '../../utils/Color';
import { FONTS } from '../../utils/Fonts';

const Login = ({ navigation }) => {
  const [number, setNumber] = useState('');
  const [numberError, setNumberError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validation = () => {
    let isValid = true;

    if (!number) {
      setNumberError('Number is Required');
      isValid = false;
    } else {
      setNumberError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleLogin = () => {
    if (validation()) {
      navigation.navigate('Main');
      // Alert.alert('Login Succesful');
      setNumber('')
      setPassword('')
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLOR.WHITE} barStyle={'dark-content'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.logoCon}>
          <Image
            style={styles.logo}
            source={require('../../assets/logo.png')}
          />
        </View>
        <Text style={styles.title}>Log In</Text>
        <Text style={styles.title2}>Welcome back to your task manager.</Text>
        <Text style={styles.text}>Phone Number</Text>
        <MyTextInput
          placeholder="Enter your phone number"
          backgroundColor={COLOR.INPUTWHITE}
          // keyboardType="number-pad"
          value={number}
          onChangeText={setNumber}
        />
        {numberError ? <Text style={styles.error}>{numberError}</Text> : null}
        <Text style={styles.text}>Password</Text>
        <ImageTextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your Password"
        />
        {passwordError ? (
          <Text style={styles.error}>{passwordError}</Text>
        ) : null}
        <TouchableOpacity style={styles.forgetTextCon}>
          <Text style={styles.forgetText}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={styles.btnCon}>
          <MyButton
            btnTitle="Log In"
            textColor={COLOR.WHITE}
            color={COLOR.SECONDARY}
            radius={10}
            height={50}
            // onPress={() => navigation.navigate('Main')}
            onPress={handleLogin}
          />
        </View>

        <View style={styles.accTextCon}>
          <Text style={styles.accText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.accText2}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    paddingHorizontal: 15,
  },
  logoCon: {
    width: 270,
    height: 100,
    alignSelf: 'center',
    marginTop: 50,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 25,
    color: COLOR.BLUE,
    fontFamily: FONTS.SEMIBOLD,
    textAlign: 'center',
    marginTop: 20,
  },
  title2: {
    fontSize: 17,
    color: COLOR.BLUE,
    fontFamily: FONTS.LIGHT,
    textAlign: 'center',
    marginVertical: 10,
  },
  text: {
    color: COLOR.BLUE,
    fontSize: 16,
    fontFamily: FONTS.MEDIUM,
    marginVertical: 5,
    marginTop: 7,
  },
  forgetTextCon: {
    alignSelf: 'flex-end',
  },
  forgetText: {
    color: COLOR.SECONDARY,
    fontFamily: FONTS.MEDIUM,
    fontSize: 15,
  },
  btnCon: {
    marginTop: 30,
  },
  accTextCon: {
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
  },
  accText: {
    fontSize: 15,
    color: COLOR.BLUE,
    fontFamily: FONTS.LIGHT,
    textAlign: 'center',
  },
  accText2: {
    fontSize: 15,
    color: COLOR.SECONDARY,
    fontFamily: FONTS.MEDIUM,
  },
  error: {
    fontFamily: FONTS.REGULAR,
    color: COLOR.RED,
    fontSize: 13,
    marginLeft: 4,
  },
});
