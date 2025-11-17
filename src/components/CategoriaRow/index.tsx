import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Category } from '../../type';
import { MovieCard } from '../../components/MovieCard';
import { styles } from './style';

interface CategoryRowProps {
  category: Category;
}

export const CategoryRow = ({ category }: CategoryRowProps) => {
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryTitle}>{category.title}</Text>
      <FlatList
        data={category.movies}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            style={styles.smallMovieCard}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};