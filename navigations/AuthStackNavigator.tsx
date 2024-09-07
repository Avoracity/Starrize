import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import AppTrackerScreen from '../screens/AppTrackerScreen';

const Stack = createStackNavigator();

const CustomHeader = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerTitle}>Login</Text>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    backgroundColor: '#282631',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2, // Border width
    borderBottomColor: '#55555f', // Border color
  },
  headerTitle: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login" // Ensure this matches a valid screen name
        screenOptions={{
          header: () => <CustomHeader />, // Use custom header
        }}>
        {/* Define your screens here */}
        <Stack.Screen name="Login" component={AppTrackerScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
