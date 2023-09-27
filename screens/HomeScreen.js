import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../components/Card';
import ProductListingScreen from './productListingScreen';
import SearchBar from '../components/SearchBar/SearchBar';
import axios from 'axios';

const HomeScreen = () => {
  const [categories, setCategories] = useState(['All']); // Initialize with 'All' as the default category
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Fetch product categories from API
    axios
      .get('https://fakestoreapi.com/products/categories')
      .then((response) => {
        setCategories(['All', ...response.data]);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  useEffect(() => {
    // Fetch products based on the selected category from API
    const fetchProducts = async () => {
      try {
        const response =
          selectedCategory === 'All'
            ? await axios.get('https://fakestoreapi.com/products')
            : await axios.get(
                `https://fakestoreapi.com/products/category/${selectedCategory}`
              );
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [selectedCategory]);

  // Function to handle search input changes
  const handleSearchInput = (text) => {
    setSearchQuery(text);
    // Filter products based on the search query
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text>Hello</Text>
            <Text style={styles.userName}>My Name</Text>
          </View>
          <Image source={require('../assets/images/ic_notif.png')} />
        </View>
        <SearchBar searchQuery={searchQuery} handleSearchInput={handleSearchInput} />
        <View style={styles.card}>
          <Card />
        </View>
        <ProductListingScreen
          categories={categories}
          handleCategoryPress={setSelectedCategory}
          selectedCategory={selectedCategory}
          products={searchQuery ? filteredProducts : products}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 17,
  },
  userName: {
    fontWeight: '600',
    fontSize: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    paddingVertical: 14,
  },
});
