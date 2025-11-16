import React from 'react';
import { 
  TouchableOpacity, 
  Text,
  ViewStyle, 
  TextStyle, 
  ActivityIndicator 
} from 'react-native';
import { styles } from './style'

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;      
  textStyle?: TextStyle; 
  isSecondary?: boolean; 
  loading?: boolean; 
  disabled?: boolean; 
}

const NetflixButton = ({ 
  title, 
  onPress, 
  style, 
  textStyle, 
  isSecondary = false,
  loading = false, 
  disabled = false
}: ButtonProps) => {
  
  const buttonStyle = isSecondary ? styles.secondaryButton : styles.primaryButton;
  const buttonTextStyle = isSecondary ? styles.secondaryText : styles.primaryText;
  
 
  const isDisabled = disabled || loading;
  
  return (
    <TouchableOpacity 
      style={[
        styles.baseButton, 
        buttonStyle, 
        style,
        isDisabled && { opacity: 0.7 } 
      ]} 
      onPress={onPress}
      activeOpacity={0.8}
      disabled={isDisabled} 
    >
      {loading ? (
        <ActivityIndicator 
          size="small" 
          color={isSecondary ? '#A9A9A9' : '#FFFFFF'} 
        />
      ) : (
        <Text style={[styles.baseText, buttonTextStyle, textStyle]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default NetflixButton;