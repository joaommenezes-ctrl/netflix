import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './style';

export const HomeHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Para Felipe</Text>
      <View style={styles.headerIcons}>
        <TouchableOpacity>
          <Feather name="download" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="search" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="bell" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const FiltersHeader = () => {
  return (
    <View style={styles.filterButtonsContainer}>
      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.filterButtonText}>Séries</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.filterButtonText}>Filmes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.filterButton]}>
        <Text style={styles.filterButtonText}>Categorias ▼</Text>
      </TouchableOpacity>
    </View>
  );
};