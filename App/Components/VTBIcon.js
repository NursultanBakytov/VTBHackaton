import React, {Component} from 'react';
import {Image, TouchableOpacity} from 'react-native';

import {styles} from '../Styles';

export default class VTBIcon extends Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={this.props.nav}
        style={{...styles.fdrow, alignSelf: 'center', marginTop: 25}}>
        <Image
          style={{width: 51, height: 26, alignSelf: 'flex-start'}}
          source={require('../Assets/VTBIcon.png')}
        />
        <Image
          style={styles.VTBTextStyle}
          source={require('../Assets/VTBText.png')}
        />
      </TouchableOpacity>
    );
  }
}
