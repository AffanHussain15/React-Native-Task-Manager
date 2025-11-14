import {
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
import MyButton from '../../components/MyButton';
import ImageTextInput from '../../components/ImageTextInput';
import COLOR from '../../utils/Color';
import { FONTS } from '../../utils/Fonts';

const Signup = ({ navigation }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [numberError, setNumberError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

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

    if (!confirmPassword) {
      setConfirmPasswordError('Confirm Password is required');
      isValid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('Password do not match');
      isValid = false;
    } else {
      setConfirmPasswordError('');
    }

    return isValid;
  };

  const handleSignup = () => {
    if (validation()) {
      navigation.navigate('Main');
      setName('')
      setNumber('')
      setPassword('')
      setConfirmPassword('')
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor={COLOR.WHITE} barStyle={'dark-content'} />
        <View style={styles.logoCon}>
          <Image
            style={styles.logo}
            source={require('../../assets/logo.png')}
          />
        </View>
        <Text style={styles.title}>Create Your Account</Text>
        <Text style={styles.text}>Full Name (Optional)</Text>
        <MyTextInput
          placeholder="Enter your Full Name"
          backgroundColor={COLOR.INPUTWHITE}
          value={name}
          onChangeText={setName}
        />
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
        {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
        <Text style={styles.text}>Confirm Password</Text>
        <ImageTextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirm your Password"
        />
        {confirmPasswordError ? <Text style={styles.error}>{confirmPasswordError}</Text> : null }
        <View style={styles.btnCon}>
          <MyButton
            btnTitle="Create Account"
            textColor={COLOR.WHITE}
            color={COLOR.SECONDARY}
            radius={10}
            height={50}
            // onPress={() => navigation.navigate('Main')}
            onPress={handleSignup}
          />
        </View>
        <View style={{ width: '100%', alignItems: 'center', padding: 10 }}>
          <Text style={styles.termsText}>
            By creating an account, you agree to our{' '}
            <TouchableOpacity style={styles}>
              <Text style={styles.termsText2}>Terms of Service </Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9}>
              <Text
                style={{
                  fontSize: 13,
                  color: COLOR.BLUE,
                  fontFamily: FONTS.LIGHT,
                  marginTop: -3,
                }}
              >
                and{' '}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.termsText2}>Privacy Policy.</Text>
            </TouchableOpacity>
          </Text>
        </View>

        <View
          style={{
            marginBottom: 20,
            flexDirection: 'row',
            gap: 20,
            alignSelf: 'center',
            marginTop: 20,
          }}
        >
          <TouchableOpacity style={styles.googleIconCon}>
            <Image
              style={styles.googleIcon}
              source={require('../../assets/google.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.githubIconCon}>
            <Image
              style={styles.githubIcon}
              source={require('../../assets/github.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.lineCon}>
          <View style={styles.line} />
          <Text style={styles.signupText}> Or sign up with </Text>
          <View style={styles.line} />
        </View>

        <View style={styles.accTextCon}>
          <Text style={styles.accText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.accText2}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Signup;

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
    marginTop: 25,
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
    marginTop: 30,
  },
  text: {
    color: COLOR.BLUE,
    fontSize: 16,
    fontFamily: FONTS.MEDIUM,
    marginVertical: 5,
    marginTop: 7,
  },
  btnCon: {
    marginTop: 30,
  },
  termsText: {
    fontSize: 13,
    color: COLOR.BLUE,
    fontFamily: FONTS.LIGHT,
    textAlign: 'center',
    marginTop: 20,
    // paddingHorizontal: 10,
    lineHeight: 19,
    flexWrap: 'nowrap',
    width: '100%',
    overflow: 'visible',
  },
  termsText2: {
    fontSize: 13,
    color: COLOR.SECONDARY,
    fontFamily: FONTS.MEDIUM,
    lineHeight: 23,
    // overflow: 'visible',
  },
  accTextCon: {
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 20,
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
  line: {
    width: 100,
    height: 2,
    backgroundColor: COLOR.BLUE,
  },
  signupText: {
    fontFamily: FONTS.LIGHT,
    fontSize: 13,
    color: COLOR.BLUE,
    marginHorizontal: 2,
  },
  lineCon: {
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
  },
  googleIconCon: {
    width: 70,
    height: 60,
    borderRadius: 12,
    backgroundColor: COLOR.BLUE,
    borderWidth: 1,
    borderColor: '#FAFAFA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleIcon: {
    width: 38,
    height: 38,
  },
  githubIconCon: {
    width: 70,
    height: 60,
    borderRadius: 12,
    backgroundColor: COLOR.BLUE,
    borderWidth: 1,
    borderColor: '#FAFAFA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  githubIcon: {
    width: 40,
    height: 38,
  },
  error: {
    fontFamily: FONTS.REGULAR,
    color: COLOR.RED,
    fontSize: 13,
    marginLeft: 4,
  },
});
