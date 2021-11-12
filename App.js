import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './Landing';
import Home from './home';
import Details from './Details';
import Checkout from './checkout';

export default function App({ navigation }) {
  
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>

      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Landing" component={ Landing } />
        <Stack.Screen name="Home" component={ Home } />
        <Stack.Screen name="Details" component={ Details } />
        <Stack.Screen name="Checkout" component={ Checkout } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}