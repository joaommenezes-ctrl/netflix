import { ImageSourcePropType } from 'react-native';

export interface Movie {
  id: string;
  title: string;
  poster: ImageSourcePropType;
  background?: ImageSourcePropType;
  titleLogo?: ImageSourcePropType; 
  genres?: string[];
  description?: string;
  rating?: string;
}

export interface Category {
  id: string;
  title: string;
  movies: Movie[];
}