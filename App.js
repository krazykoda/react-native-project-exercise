import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Payment, AddToCart,  Shopping } from './screens'
import { lorem } from './utils';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <AddToCart /> */}
      {/* <Shopping /> */}
        <Payment />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
