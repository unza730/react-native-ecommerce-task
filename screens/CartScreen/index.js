import React from 'react';
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../constants/theme';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { View, SafeAreaView, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart
} from '../../redux/actions/cartActions';
import { connect } from 'react-redux';

const CartScreen = ({ cartItems, incrementQuantity, decrementQuantity, removeFromCart }) => {

  const navigation = useNavigation();

  // Calculate total price
  const total = cartItems?.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.back}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="chevron-left" size={30} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <ScrollView>
          {cartItems?.length > 0 && cartItems?.map((item) => (
            <View key={item.id} style={styles.cartItem}>
              {/* Column 1: Product Image */}
              <View style={styles.column}>
                <Image source={{ uri: item.image }} style={styles.productImage} />
              </View>

              {/* Column 2: Product Details */}
              <View style={styles.column}>
                <Text style={styles.productTitle}>{item.name}</Text>
                <Text style={styles.productPrice}>Price: ${item?.price?.toFixed(2)}</Text>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => incrementQuantity(item.id)}
                  >
                    <Text style={styles.quantityButtonText}>+</Text>
                  </TouchableOpacity>
                  <Text style={styles.productQuantity}>{item.quantity}</Text>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => decrementQuantity(item.id)}
                  >
                    <Text style={styles.quantityButtonText}>-</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Column 3: Remove Button */}
              <View style={styles.removeButtonContainer}>
                <TouchableOpacity style={styles.removeButton}
                  onPress={() => removeFromCart(item.id)}
                >
                  <Icon2 name="delete" size={26} color={COLORS.white} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
        {/* Total Price */}
        <View style={styles.totalAndBuyNowContainer}>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total Price: ${total?.toFixed(2)}</Text>
          </View>

          {/* Buy Now Button */}
          <TouchableOpacity style={styles.buyNowButton}>
            <Text style={styles.buyNowButtonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );
};
const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = (dispatch) => {
  return {
    incrementQuantity: (itemId) => dispatch(incrementQuantity(itemId)),
    decrementQuantity: (itemId) => dispatch(decrementQuantity(itemId)),
    removeFromCart: (itemId) => dispatch(removeFromCart(itemId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
