import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Movie } from '../../type';
import { styles } from './style';

interface HeroSectionProps {
  movie: Movie;
  onPlayPress?: () => void;
  onAddToListPress?: () => void;
}

export const HeroSection = ({ movie, onPlayPress, onAddToListPress }: HeroSectionProps) => {
  const movieInfo = [movie.rating, ...(movie.genres || [])]
    .filter(Boolean)
    .join(' • ');

  return (
    <ImageBackground source={movie.poster} style={styles.background}>
      <View style={styles.overlay}>
        
        {movie.titleLogo && (
          <Image 
            source={movie.titleLogo} 
            style={styles.titleLogo} 
            resizeMode="contain" 
          />
        )}
        
        {movieInfo.length > 0 && (
          <Text style={styles.movieInfo}>{movieInfo}</Text>
        )}

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.playButton} onPress={onPlayPress}>
            <Text style={styles.playButtonText}>▶ Assistir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.myListButton} onPress={onAddToListPress}>
            <Text style={styles.myListButtonText}>+ Minha lista</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};