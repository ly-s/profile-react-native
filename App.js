import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>Profile</Text>
      <Image source={require('./assets/Bad-acting-headshot.png')} style={{height:350, marginBottom:10}}resizeMode='contain'></Image>
      <Text style={{fontSize: 17}}>Name: Elijah Silang</Text>
      <Text style={{fontSize: 17}}>Address: LBK, TX</Text>
      <Text style={{fontSize: 17}}>Education Background: BS in CS</Text>
      <StatusBar style="auto" />
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
