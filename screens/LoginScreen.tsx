import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; // Import NativeStackNavigationProp
import tailwind from 'tailwind-rn'; // Import the tailwind-rn function

type Props = {
  navigation: NativeStackNavigationProp<any, 'Login'>; 
   // any is the type of the param list
   // 'Login' is the name to identify the navigation stack that is being worked on
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  // Sample data
  const appData = [
    { icon: require('../assets/favicon.png'), name: 'MyApp', timeSpent: '2h 30m' },
    // Add more app data here as needed
  ];

  return (
    <View style={styles.container}>

      <View style={styles.rectangleContainer}>
        <View style={styles.rectangleContainerTop}>
          <Text style={styles.rectangleText}>Time Breakdown</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.largeContainer}
        // Uncomment the line below to enable navigation on press
        // onPress={() => navigation.navigate('Home')}
      >
        {appData.map((app, index) => (
          <View key={index} style={styles.appContainer}>
            <Image source={app.icon} style={styles.icon} />
            <Text style={styles.appName}>{app.name}</Text>
            <Text style={styles.timeSpent}>{app.timeSpent}</Text>
          </View>
        ))}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#080808',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    marginBottom: 20,
  },
  largeContainer: {
    backgroundColor: '#121117', // Optional: background color of the container
    width: 500, // Adjust width as needed
    height: 200, // Adjust height as needed
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 5, // Rounded bottom-left corner
    borderBottomRightRadius: 5, // Rounded bottom-right corner
    borderTopLeftRadius: 0, // No rounding for top-left corner
    borderTopRightRadius: 0, // No rounding for top-right corner
    padding: 10, // Add padding to space out contents
    borderWidth: 1, // Optional: border width
    borderColor: '#55555f',
  },
  rectangleContainer: {
    width: '100%', // Full width of the screen
    alignItems: 'center', // Center the rectangle horizontally

  },
  rectangleContainerTop: {
    width: 500, // Width of the rectangle
    height: 50, // Height of the rectangle
    backgroundColor: '#282631', // Color of the rectangle
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 0, // No rounding for bottom-left corner
    borderBottomRightRadius: 0, // No rounding for bottom-right corner
    borderTopLeftRadius: 5, // Rounded top-left corner
    borderTopRightRadius: 5, // Rounded top-right corner
    borderWidth: 1, // Optional: border width
    borderBottomWidth: 0,
    borderColor: '#55555f',
  },
  rectangleText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    width: '80%', // move text
  },
  appContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 100,
    padding: 5,
    backgroundColor: '#282631',
    width: '100%',
    borderRadius: 5,
    justifyContent: 'space-between', // Distribute space between children

  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  appName: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1, // Take up remaining space between icon and time
  },
  timeSpent: {
    color: '#cccccc',
    fontSize: 14,
    marginRight: 25,
  },
});

export default LoginScreen;
