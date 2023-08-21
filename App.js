import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {API_KEY} from './api/weatherApi.js'

export default function App() {

  state = {
    isLoading: false,
    temperature: 0,
    weatherCondition: null,
    error: null
  };
    const { isLoading } = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? (
          <Text>Fetching Data</Text>
    ) : (
      <View>
        <Text>Weather App</Text>
        <StatusBar style="auto" />
      </View>
      )}
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
