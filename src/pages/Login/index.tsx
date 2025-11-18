import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import { styles } from './style';
import NetflixButton from '../../components/NetflixButton';
import NetflixLogoImage from '../../../assets/LogoLogin.png';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useLogin } from '../../services/index';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Abertura: undefined;
  Login: undefined;
  MainApp: undefined; 
};

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

interface Props {
  navigation: LoginScreenNavigationProp;
}

export function Login({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { signIn, loading } = useLogin();

  const handleSignIn = async () => {
    try {
      await signIn({ email, password });
      navigation.navigate('MainApp');
    } catch (error) {
      console.error(error);
      Alert.alert("Erro no Login", "Email ou senha inválidos. Tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
        >
          <Ionicons
            name="chevron-back-outline"
            size={24}
            color="#FFFFFF"
          />
        </TouchableOpacity>

        <Image
          source={NetflixLogoImage}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="Email address or mobile number"
          placeholderTextColor="#A9A9A9"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="Password"
          placeholderTextColor="#A9A9A9"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.passwordToggle}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Ionicons
            name={showPassword ? 'eye-outline' : 'eye-off-outline'}
            size={20}
            color="#A9A9A9"
          />
        </TouchableOpacity>
      </View>

      <NetflixButton
        title={loading ? 'ENTRANDO...' : 'Sign in'}
        onPress={handleSignIn}
        disabled={loading}
        loading={loading}
      />

      <Text style={styles.orText}>OR</Text>

      <NetflixButton
        title="Use a sign-in code"
        onPress={() => console.log('Use a sign-in code')}
        isSecondary={true}
      />

      <TouchableOpacity onPress={() => console.log('Forgot password')}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>

      <View style={styles.recaptchaContainer}>
        <Text style={styles.protectedText}>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          {' '}
          <Text style={styles.learnMoreText} onPress={() => console.log('Learn more')}>
            Learn more
          </Text>
        </Text>
      </View>
    </View>
  );
}