import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export function TextButton({title, style, onPress}) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  text: {color: '#1F8FD4', fontWeight: '500', fontSize: 16},
});
