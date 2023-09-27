import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({searchQuery,  handleSearchInput}) => {
  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Search..."
        placeholderTextColor="black"
        value={searchQuery}
        onChangeText={handleSearchInput}
        style={styles.input}
      />
      <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />

    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E4E6EA',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginVertical: 10,
  
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: 'black',
    
    fontSize: 18,
  },
});

export default SearchBar;
