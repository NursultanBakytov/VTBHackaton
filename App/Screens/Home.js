import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Dimensions,
} from 'react-native';
import VTBIcon from '../Components/VTBIcon';

import {styles} from '../Styles';

const Home = props => {
  const window = Dimensions.get('window');
  const [width, setwidth] = useState(window.width);
  useEffect(() => {
    Dimensions.addEventListener('change', ({window: {width, height}}) => {
      if (width < height) {
        setwidth(width);
      } else {
        setwidth(width);
      }
      setwidth(width);
    });
  }, []);

  return (
    <SafeAreaView style={styles.fl1}>
      <StatusBar barStyle="light-content" backgroundColor="#3A83F1" />
      <ScrollView>
        <VTBIcon />
        <Text
          onPress={() => props.navigation.navigate('Map')}
          style={styles.HomesTextStyle}>
          FinCity
        </Text>
        <Text style={styles.HomesTextStyle}>Имя</Text>
        <Text style={styles.HomesTextStyle}>Дата рождения</Text>
        <Text style={styles.HomesTextStyle}>Город</Text>
        <Text style={styles.HomesTextStyle}>{'Номер\nтелефона'}</Text>
        <Image
          style={{...styles.HomesBackStyle, width: width}}
          source={require('../Assets/homeBack.png')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
