import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export function SplashScreen() {
  return (
    <View>
      <Image
        source={require('../../assets/icons/icon_tc.png')}
        style={styles.iconScreen}
      />
      <Text style={styles.text1}>SpareParts Control</Text>
      <Text style={styles.text2}>Technology Control Section</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  iconScreen: {
    alignContent: 'center',
    marginLeft: 140,
    marginTop: 300,
    width: 100,
    height: 158,
    borderRadius: 40,
  },
  text1: {
    fontSize: 20,
    color: '#4398D1',
    fontFamily: 'Arial Black',
    marginTop: 210,
    marginLeft: 115,
  },
  text2: {fontSize: 16, fontWeight: '100', marginLeft: 115},
});
