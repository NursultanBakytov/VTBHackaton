import React from 'react';
import {Text, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import VTBIcon from '../../Components/VTBIcon';

import {styles} from '../../Styles';

const Market = props => {
  return (
    <SafeAreaView style={styles.fl1}>
      <StatusBar barStyle="light-content" backgroundColor="#3A83F1" />
      <ScrollView>
        <VTBIcon nav={() => props.navigation.goBack()} />
        <Text style={styles.MapStyleCityMap}>Биржа</Text>

        <Text style={styles.MapHomeStyleTextStyle}>Операции с активами</Text>
        <Text
          style={{
            ...styles.MapHomeStyleTextStyle,
            color: 'black',
            marginTop: 20,
          }}>
          Посмотреть портфель
        </Text>
        <Text
          style={{
            ...styles.MapHomeStyleTextStyle,
            color: 'black',
            marginTop: 20,
          }}>
          Купить/продать актив
        </Text>

        {/* -------------------------------------------------------------- */}
        <Text style={{...styles.MapHomeStyleTextStyle, marginTop: 50}}>
          Новости
        </Text>
        <Text
          style={{
            ...styles.MapHomeStyleTextStyle,
            color: 'black',
            marginTop: 20,
          }}>
          Решение
        </Text>
        <Text
          style={{
            ...styles.MapHomeStyleTextStyle,
            color: 'black',
            marginTop: 20,
          }}>
          {'Историческая\nсправка'}
        </Text>
        <Text style={styles.MapHomeStyleTextStyle}>
          {'Формирование\nпортфеля инвестора'}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Market;
