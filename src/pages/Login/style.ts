import { StyleSheet, Platform } from 'react-native';

const NETFLIX_RED = '#E50914';
const BACKGROUND_COLOR = '#000000';
const INPUT_BACKGROUND = '#333333';
const PLACEHOLDER_COLOR = '#A9A9A9';
const TEXT_COLOR = '#FFFFFF';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center', 
    paddingHorizontal: 16, 
    paddingVertical: 15,
    marginBottom: 40, 
  },

    backButton: {
    marginLeft: 2,
    paddingHorizontal: 5, 
    paddingVertical: 5,
  },
  
  
  logoImage: {
    width: 130,
    height: 80,
    resizeMode: 'contain',
    marginRight: 'auto',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: INPUT_BACKGROUND,
    borderRadius: 4,
    marginHorizontal: 16,
    marginVertical: 8,
    height: 50,
    paddingHorizontal: 15,
  },

  inputField: {
    flex: 1,
    color: TEXT_COLOR,
    fontSize: 16,
    height: 50,
    paddingVertical: 0,
  },

  passwordToggle: {
    padding: 8, 
  },

  passwordToggleText: { 
    color: PLACEHOLDER_COLOR, 
    fontSize: 20, 
  },

  orText: {
    color: PLACEHOLDER_COLOR,
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 16,
  },

  forgotPasswordText: {
    color: PLACEHOLDER_COLOR, 
    textAlign: 'center',
    marginTop: 25,
    fontSize: 15,
    textDecorationLine: 'underline',
  },

  recaptchaContainer: {
    marginTop: 60, 
    paddingHorizontal: 40,
    alignItems: 'center',
  },

  protectedText: {
    color: PLACEHOLDER_COLOR,
    fontSize: 12, 
    textAlign: 'center',
    lineHeight: 18,
    fontWeight: 'normal',
  },

  learnMoreText: {
    color: PLACEHOLDER_COLOR, 
    fontSize: 12,
    textDecorationLine: 'underline',
    fontWeight: 'normal',
  },
});