import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import { themeColors } from '../theme';

import {
  HomeIcon as HomeOutline,
  UserIcon as UserOutline,
  HeartIcon as HeartOutline,
  ShoppingBagIcon as BagOutline,
} from 'react-native-heroicons/outline';

import {
  HomeIcon as HomeSolid,
  UserIcon as UserSolid,
  HeartIcon as HeartSolid,
  ShoppingBagIcon as BagSolid,
} from 'react-native-heroicons/solid';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SplashScreen from '../screens/SplashScreen';
import ProductDetailScreen from '../screens/productDetails';
import CartScreen from '../screens/CartScreen';
import { COLORS } from '../constants/theme';

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: 'white' },
        }}
      >
        <Stack.Screen name="Splash" options={{ headerShown: false }} component={SplashScreen} />
        <Stack.Screen name="WelcomeScreen" options={{ headerShown: false }} component={WelcomeScreen} />
        <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeTabs} />
        <Stack.Screen name="CartScreen" options={{ headerShown: false }} component={CartScreen} />
        <Stack.Screen name="ProductDetail" options={{ headerShown: false }} component={ProductDetailScreen} />
        <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
        <Stack.Screen name="Register" options={{ headerShown: false }} component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Profile Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => menuIcons(route, focused),
        tabBarStyle: {
          marginBottom: 6,
          borderRadius: 8,
          backgroundColor: 'black',
          height: 60,
          marginHorizontal: 10,
        },
        tabBarItemStyle: {
          marginTop: 5,
        },
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
};

const menuIcons = (route, focused) => {
  let icon;
  if (route.name == 'HomeScreen') {
    icon = focused ? <HomeSolid size={30} style={{backgroundColor:'white', padding:19, height: 30, width: 30, borderRadius:30}} color={COLORS.primary} /> : <HomeOutline size={30} color="white" />;
  } else if (route.name == 'Profile') {
    icon = focused ? <UserSolid size={30} style={{backgroundColor:'white', padding:19, height: 30, width: 30, borderRadius:30}} color={COLORS.primary} /> : <UserOutline size={30} strokeWidth={2} color="white" />;
  } else if (route.name == 'Cart') {
    icon = focused ? <BagSolid size={30} style={{backgroundColor:'white', padding:19, height: 30, width: 30, borderRadius:30}} color={COLORS.primary} /> : <BagOutline size={30} strokeWidth={2} color="white" />;
  }
  return (
    <View style={[styles.iconContainer, focused ? styles.iconContainerFocused : null]}>
      {icon}
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  tabLabel: {
    marginBottom: -3,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9999,
    padding: 7,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconContainerFocused: {},
});
