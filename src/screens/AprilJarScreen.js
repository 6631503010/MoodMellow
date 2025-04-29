import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Modal, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AprilJarScreen() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [emotions, setEmotions] = useState([]); // เก็บ emotion + ตำแหน่ง
  const [selectedEmotion, setSelectedEmotion] = useState(null);

  // รูปอารมณ์
  const emotionOptions = [
    { id: 1, src: require('../assets/Happy.png') },
    { id: 2, src: require('../assets/Lovely.png') },
    { id: 3, src: require('../assets/Calm.png') },
    { id: 4, src: require('../assets/Angry.png') },
    { id: 5, src: require('../assets/Anxious.png') },
    { id: 6, src: require('../assets/Sad.png') },
  ];

  const handleAddEmotion = () => {
    if (selectedEmotion) {
      // กำหนดขอบเขตสุ่มตามโหล
      const minX = 40;
      const maxX = 300;
      const minY = 80;
      const maxY = 500;
  
      // สุ่มตำแหน่งในโหล
      const randomX = Math.random() * (maxX - minX) + minX;
      const randomY = Math.random() * (maxY - minY) + minY;
  
      const newEmotion = {
        ...selectedEmotion,
        x: randomX,
        y: randomY,
      };
  
      setEmotions([...emotions, newEmotion]);
      setSelectedEmotion(null);
      setModalVisible(false);
    }
  };
  

  return (
    <View style={styles.container}>
      {/* พื้นหลังรูปขวด */}
      <ImageBackground
        source={require('../assets/BackgroundJar.png')}
        style={styles.background}
        resizeMode="cover"
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backText}>{'<'}</Text>
          </TouchableOpacity>

          <Text style={styles.monthText}>April</Text>

          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.addButton}>
            <Text style={styles.addText}>＋</Text>
          </TouchableOpacity>
        </View>

        {/* อารมณ์ที่เลือก */}
        <View style={styles.emotionContainer}>
          {[...emotions].reverse().map((emotion, index) => (
            <Image
              key={index}
              source={emotion.src}
              style={[
                styles.emotionIcon,
                {
                  position: 'absolute',
                  bottom: emotion.y,
                  left: emotion.x,
                  
                },
              ]}
            />
          ))}
        </View>

        {/* Modal เลือกอารมณ์ */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={styles.modalOverlay}>
              <TouchableWithoutFeedback>
                <View style={styles.modalContent}>
                  <Text style={styles.modalTitle}>
                    Mood check! {"\n"} How are you feeling?
                  </Text>

                  <ScrollView contentContainerStyle={styles.emotionOptionsContainer}>
                    {emotionOptions.map((emotion) => (
                      <TouchableOpacity
                        key={emotion.id}
                        onPress={() => setSelectedEmotion(emotion)}
                        style={[
                          styles.emotionOption,
                          selectedEmotion?.id === emotion.id && styles.selectedEmotion,
                        ]}
                      >
                        <Image source={emotion.src} style={styles.emotionImage} />
                      </TouchableOpacity>
                    ))}
                  </ScrollView>

                  <TouchableOpacity onPress={handleAddEmotion} style={styles.addEmotionButton}>
                    <Text style={styles.addEmotionButtonText}>Add to The Jar</Text>
                  </TouchableOpacity>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </ImageBackground>
    </View>
  );
}

// สไตล์
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    marginTop: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    padding: 10,
  },
  backText: {
    fontSize: 24,
    color: '#333',
  },
  monthText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    padding: 10,
  },
  addText: {
    fontSize: 30,
    color: '#333',
  },
  emotionContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 100, // เผื่อระยะขอบล่างของขวด
  },
  emotionIcon: {
    width: 50,
    height: 50,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  emotionOptionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  emotionOption: {
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'transparent',
    padding: 5,
  },
  selectedEmotion: {
    borderColor: '#E5989B',
  },
  emotionImage: {
    width: 50,
    height: 50,
  },
  addEmotionButton: {
    marginTop: 20,
    backgroundColor: '#E5989B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  addEmotionButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
