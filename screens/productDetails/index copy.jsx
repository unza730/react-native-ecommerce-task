
import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'

import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS } from '../../constants/theme';
const ProductDetailScreen = ({route, navigation}) => {
  console.log("Routes ", route?.params)
const {id, name, image, description, price} = route?.params
  const [quantity, setQuantity] = useState(1)
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.back}>
      <TouchableOpacity onPress={()=> {
        navigation.navigate('Home')
      }} >
<Icon name="chevron-left" size={30} color={COLORS.white} />
      </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} resizeMode='contain' style={styles.image}/>
        </View>
        <View style={styles.nameAndQuantity}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity  onPress={()=> {
            if(quantity > 1){
            setQuantity(quantity - 1)
            }
          }}>
            <View style={styles.quantityIcon}>
                <Icon name='minus' size={10} color={COLORS.primary} />
            </View>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity onPress={()=> {
            setQuantity(quantity + 1)
          }}>
            <View style={styles.quantityIcon}>
              <Icon name='plus' size={10} color={COLORS.primary} />
            </View>
          </TouchableOpacity>
        </View>
        </View>
        <View >
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.bottomRow}>
          <View style={styles.priceContainer}>
            <Text style={styles.subtitle}>Total Price</Text>
            <Text style={styles.price}>${price* quantity}</Text>
          </View>
          <TouchableOpacity onPress={()=> navigation.navigate("CartScreen")}>
             <View style={styles.basketContainer}>
              <Text style={styles.addToBasket}>Add to basket</Text>
             <View style={styles.basketIcon}>
              <Icon name='shopping-basket' size={20} color={COLORS.primary} />
              </View>
             </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
       
   
    </SafeAreaView>
  )
}

export default ProductDetailScreen