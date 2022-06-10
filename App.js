import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GuessNumber from './Components/GuessNumber';

export default function App() {
  return (
    <View style={styles.container}>
      <GuessNumber/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
