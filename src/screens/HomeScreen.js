import React from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
    SafeAreaView,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.MoodMellow}>Mood Mellow</Text>
      <Image source={require('../assets/Jar.png')} style={styles.logo}></Image>
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate('YearJar')}
      >
        <Text style={styles.startButtonText}>Start</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDF5E6', // Warm off-white background
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: width * 0.05, // 5% of screen width
      },
      MoodMellow: {
        fontSize: width * 0.08, // 8% of screen width
        fontWeight: 'bold',
        marginBottom: height * 0.04, // 4% of screen height
        color: '#4A4A4A',
      },
      logo: {
        width: width * 0.45, // 45% of screen width
        height: width * 0.45, // Keep it square
        marginBottom: height * 0.05, // 5% of screen height
      
      },
      startButton: {
        backgroundColor: '#E5989B', // Soft blue
        paddingHorizontal: width * 0.1, // 10% of screen width
        paddingVertical: height * 0.02, // 2% of screen height
        borderRadius: width * 0.06, // 6% of screen width
        elevation: 3,
      },
      startButtonText: {
        fontSize: width * 0.05, // 5% of screen width
        color: '#FFF',
        fontWeight: '600',
      },
});

export default HomeScreen;
