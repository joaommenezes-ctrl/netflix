import React from 'react';
import { Image, TouchableOpacity, ViewStyle } from 'react-native';
import { styles } from './style';
import { Movie } from '../../type';

interface MovieCardProps {
  movie: Movie;
  onPress?: () => void;
  style?: ViewStyle;
}

export const MovieCard = ({ movie, onPress, style }: MovieCardProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Image
        source={movie.poster}
        style={styles.poster}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};