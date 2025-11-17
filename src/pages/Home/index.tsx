import React from 'react';
import { View, ScrollView } from 'react-native';
import { HOME_DATA, FEATURED_MOVIE } from '../../data/mockData';
import { HeroSection } from '../../components/Hero';
import { styles } from './style';
import { HomeHeader, FiltersHeader } from '../../components/HomeHeader';
import { CategoryRow } from '../../components/CategoriaRow';

export const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <ScrollView stickyHeaderIndices={[1]}>
        <HomeHeader />
        <FiltersHeader />
        <HeroSection
          movie={FEATURED_MOVIE}
          onPlayPress={() => console.log('Assistir:', FEATURED_MOVIE.title)}
          onAddToListPress={() => console.log('Adicionar à lista:', FEATURED_MOVIE.title)}
        />
        {HOME_DATA.map((category) => (
          <CategoryRow key={category.id} category={category} />
        ))}
      </ScrollView>
    </View>
  );
};