import React from 'react';
import {  Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const width_screen = Dimensions.get('window').width;

const card_item = width_screen - 24 * 2;

const card_size = {
    width: 325,
    height: 196
}

const Card = () => {
    return (
        <ImageBackground
            source={require('../../assets/images/bag3.jpg')}
            style={styles.card}
        >
           <View style={styles.cardNumber} >
                <Text style={styles.cardNumberText}>50% Off</Text>
                <Text style={styles.cardNumber}>On everything today</Text>
            <Text style={styles.cardHolderName}>With Code: AVDMSKSKSM</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                    </View>
              
        </ImageBackground>
    )
}

export default Card;

const styles = StyleSheet.create({
    card: {
        width: card_item,
        height: 250,
        objectFit: 'contain',
        padding: 24,

        borderRadius: 20

    },
    cardNumber: {
        marginVertical: 12,
        color: 'white',
        fontSize: 17,
        fontWeight: '600'
    },
    cardNumberText: {
        color: 'white',
        fontSize: 28,
        fontWeight: '700',
  },
    cardIcon: {

    },
    cardHolderName: { color: 'rgba(255,255,255, 0.4)', fontSize: 17 },
    cardName: { color: 'white', fontSize: 17 },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        marginTop: 22,
        backgroundColor: 'white', 
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 20,
        width: 120
    },
    buttonText: {
        color: 'black', 
        fontSize: 16,
        textAlign: 'center',
    },
});