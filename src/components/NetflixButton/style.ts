import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  baseButton: {
    borderRadius: 4,       
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,  
    marginVertical: 8,
  },
  baseText: {
    fontSize: 16,          
  },

  primaryButton: {
    backgroundColor: '#E50914', 
    marginTop: 25,         
    marginBottom: 0,       
  },
  primaryText: {
    color: '#FFFFFF',
    fontWeight: 'bold',   
  },

  secondaryButton: {
    backgroundColor: '#444444', },
    secondaryText: {
    color: '#FFFFFF',
    fontWeight: 'normal', }
});