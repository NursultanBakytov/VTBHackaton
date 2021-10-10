import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import VTBIcon from '../../Components/VTBIcon';

import {styles} from '../../Styles';

const FirstHome = props => {
  const Lists = [
    {
      icon: require('../../Assets/home.png'),
      text: 'Дом',
      nav: () => props.navigation.navigate('Home'),
    },
    {
      icon: require('../../Assets/broker.png'),
      text: 'Брокер',
      nav: () => props.navigation.navigate('Broker'),
    },
    {
      icon: require('../../Assets/market.png'),
      text: 'Биржа',
      nav: () => props.navigation.navigate('Market'),
    },
    {
      icon: require('../../Assets/faq.png'),
      text: 'Вопросы/\nответы',
      nav: () => props.navigation.navigate('Faq'),
    },
  ];
  return (
    <SafeAreaView style={styles.fl1}>
      <StatusBar barStyle="light-content" backgroundColor="#3A83F1" />
      <ScrollView>
        <VTBIcon nav={() => props.navigation.goBack()} />
        <Text style={styles.MapStyleCityMap}>Карта города</Text>
        {Lists.map((item, key) => (
          <TouchableOpacity
            activeOpacity={1}
            onPress={item.nav}
            style={styles.MapStyleListsStyle}
            key={key}>
            {/* <Image
              style={{resizeMode: 'contain', width: 163, height: 124}}
              source={item.icon}
            /> */}
            <Text style={styles.FirstHomeStyleText}>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FirstHome;
