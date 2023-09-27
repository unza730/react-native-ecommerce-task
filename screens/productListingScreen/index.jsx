import React, { useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';

const ProductListingScreen = ({ categories, handleCategoryPress, selectedCategory, products, addToCart }) => {
  const navigation = useNavigation();
  const [numColumns, setNumColumns] = useState(2); 

  return (
    <SafeAreaView>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => handleCategoryPress(item)}
          >
            <View
              style={[
                styles.category,
                {
                  backgroundColor:
                    item === selectedCategory ? COLORS.primary : 'transparent',
                },
              ]}
            >
              <Text
                style={[
                  styles.subtitle,
                  {
                    color: item === selectedCategory ? COLORS.white : COLORS.accent,
                  },
                ]}
              >
                {item}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <FlatList
        key={numColumns.toString()}
        data={products}
        numColumns={numColumns}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ProductDetail', {
                id: item?.id,
                name: item?.title,
                price: item?.price,
                image: item?.image,
                description: item?.description,
              });
            }}
          >
            <View style={styles.product}>
              <TouchableOpacity onPress={() => addToCart(item)} style={styles.add}>
                <Icon name="add-outline" size={15} />
              </TouchableOpacity>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.subtitle}>{item.name}</Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => {
      dispatch(addToCart(product));
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductListingScreen);
