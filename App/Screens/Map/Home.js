import React from 'react';
import {Text, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import VTBIcon from '../../Components/VTBIcon';

import {styles} from '../../Styles';

const Home = props => {
  return (
    <SafeAreaView style={styles.fl1}>
      <StatusBar barStyle="light-content" backgroundColor="#3A83F1" />
      <ScrollView>
        <VTBIcon nav={() => props.navigation.goBack()} />
        <Text style={styles.MapStyleCityMap}>Дом</Text>
        <Text style={styles.MapHomeStyleTextStyle}>
          Выбор степени активности:
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: 'white',
            alignSelf: 'center',
            marginTop: -5,
          }}>
          активный умеренный пассивный
        </Text>
        <Text style={styles.MapHomeStyleTextStyle}>
          {'Выбор уровня риска/\nдоходности'}
        </Text>
        <Text style={styles.MapHomeStyleTextStyle}>Калькулятор инвестора</Text>
        <Text style={styles.MapHomeStyleTextStyle}>Календарь</Text>
        <Text
          style={
            styles.MapHomeStyleTextStyle
          }>{`Демо-тест\n(ссылка на приложение\nВТБ Инвестиции)`}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
