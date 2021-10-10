import React from 'react';
import {Text, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import VTBIcon from '../../Components/VTBIcon';

import {styles} from '../../Styles';

const Broker = props => {
  return (
    <SafeAreaView style={styles.fl1}>
      <StatusBar barStyle="light-content" backgroundColor="#3A83F1" />
      <ScrollView>
        <VTBIcon nav={() => props.navigation.goBack()} />
        <Text style={styles.MapStyleCityMap}>Брокер</Text>

        <Text style={styles.MapHomeStyleTextStyle}>Открыть счет</Text>
        <Text style={{...styles.MapHomeStyleTextStyle, color: 'black'}}>
          {'Индивидуальный\nинвестиционный счет'}
        </Text>
        <Text style={{...styles.MapHomeStyleTextStyle, color: 'black'}}>
          Брокерский счет
        </Text>

        <Text style={styles.MapHomeStyleTextStyle}>
          {'Получить бонусные\nединицы'}
        </Text>
        <Text style={styles.MapHomeStyleTextStyle}>
          {'Проверить\nсостояние счета'}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Broker;
