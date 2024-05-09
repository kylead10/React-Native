import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const HomeScreen = () => {
  const MyName = 'Kayode';
  return (
    <View>
      <Text style={styles.text}>Getting started with React Native</Text>
      <Text style={styles.name}>my name is {MyName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
  },
  name: {
    fontSize: 20,
  },
});

export default HomeScreen;
