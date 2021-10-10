import React from 'react';
import {Text, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import VTBIcon from '../../Components/VTBIcon';

import {styles} from '../../Styles';

const Faq = props => {
  return (
    <SafeAreaView style={styles.fl1}>
      <StatusBar barStyle="light-content" backgroundColor="#3A83F1" />
      <ScrollView>
        <VTBIcon nav={() => props.navigation.goBack()} />
        <Text style={styles.MapStyleCityMap}>FAQ</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Faq;
