import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles'; // Import your existing styles

const ProductBottomSheet = ({ isVisible, onClose, product }) => {
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.bottomSheetContainer}>
        <Image source={product.image} style={styles.bottomSheetImage} />
        <View style={styles.bottomSheetContent}>
          <Text style={styles.bottomSheetName}>{product.name}</Text>
          <Text style={styles.bottomSheetDescription}>{product.description}</Text>
          <Text style={styles.bottomSheetPrice}>Price: ${product.price}</Text>
          <TouchableOpacity style={styles.bottomSheetButton} onPress={onClose}>
            <Text style={styles.bottomSheetButtonText}>Add to Basket</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ProductBottomSheet;
