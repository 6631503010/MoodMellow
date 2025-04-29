import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// นำเข้าหน้าจอ
import HomeScreen from './src/screens/HomeScreen';
import YearJarScreen from './src/screens/YearJarScreen';
import AprilJarScreen from './src/screens/AprilJarScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="YearJar" component={YearJarScreen} />
        <Stack.Screen name="AprilJar" component={AprilJarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
