import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  SafeAreaView,
  Image, // ใช้สำหรับแสดงรูปภาพ
} from 'react-native';

// ดึงขนาดหน้าจอมาใช้ คำนวณขนาด layout
const { width, height } = Dimensions.get('window');

// นำเข้ารูปภาพโหล
const jarActive = require('../assets/Jar.png');        // รูปโหลแบบ Active (สี)
const jarInactive = require('../assets/BlackJar.png'); // รูปโหลแบบ Inactive (ขาวดำ)

const YearJarScreen = ({ navigation }) => {
  // ตั้งค่ารายชื่อเดือน
  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  // ฟังก์ชันสำหรับแสดงขวดโหลแต่ละเดือน
  const renderJar = (month) => {
    const isApril = month === 'April';       // เช็กว่าเดือนนี้คือเมษายนไหม
    const jarImage = isApril ? jarActive : jarInactive; // ถ้าใช่ใช้รูปสี ถ้าไม่ใช่ใช้รูปขาวดำ

    return (
      <TouchableOpacity
        key={month}
        style={styles.jarContainer}
        onPress={() => isApril && navigation.navigate('AprilJar')} // กดได้เฉพาะเดือนเมษายน
        disabled={!isApril} // เดือนอื่นๆ กดไม่ได้
      >
        <Image source={jarImage} style={styles.jarImage} resizeMode="contain" /> 
        {/* แสดงรูปโหล */}
        <Text style={[styles.monthText, !isApril && styles.inactiveText]}>
          {month}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* แสดงปี */}
      <Text style={styles.yearText}>2025</Text>

      {/* แสดงขวดโหลทั้งหมดในรูปแบบ Scroll */}
      <ScrollView 
        contentContainerStyle={styles.shelfContainer}
        showsVerticalScrollIndicator={false}
      >
        {months.map((month) => renderJar(month))}
      </ScrollView>
    </SafeAreaView>
  );
};

// กำหนดสไตล์ต่างๆ
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF5E6',
    paddingHorizontal: width * 0.04,
  },
  yearText: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: height * 0.02,
    color: '#4A4A4A',
  },
  shelfContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: height * 0.01,
  },
  jarContainer: {
    width: width * 0.28,
    aspectRatio: 0.8,
    alignItems: 'center',
    marginBottom: height * 0.02,
  },
  jarImage: {
    width: '80%',
    height: '80%',
  },
  monthText: {
    marginTop: height * 0.01,
    fontSize: width * 0.035,
    color: '#4A4A4A',
  },
  inactiveText: {
    color: '#888888',
  },
});

export default YearJarScreen;
