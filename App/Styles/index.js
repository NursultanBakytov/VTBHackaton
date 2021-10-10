import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fl1: {flex: 1},
  fdrow: {flexDirection: 'row', alignItems: 'center'},
  VTBTextStyle: {
    resizeMode: 'contain',
    width: 187,
    height: 91,
    marginLeft: 10,
  },
  HomesTextStyle: {
    fontSize: 36,
    color: 'white',
    alignSelf: 'center',
    marginTop: 30,
    textAlign: 'center',
  },
  HomesBackStyle: {height: 222, marginTop: 80, resizeMode: 'contain'},
  // -------------------------------------------------------------------
  MapStyleCityMap: {
    fontSize: 48,
    color: '#000',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 30,
  },
  MapStyleListsStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  MapHomeStyleTextStyle: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginTop: 40,
  },
  // -------------------------------------------------------------------
  FirstHomeStyleText: {
    color: 'white',
    fontSize: 36,
    textAlign: 'center',
    marginTop: 50,
  },
});
