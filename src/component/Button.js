import React from 'react';
import {StyleSheet, Text, View, Pressable, } from 'react-native';

const Button = (props) => {
  // console.log(`Button.${props.title}.disabled:`, props.disabled);

  return (
    <Pressable
      testID="button"
      accessibilityRole="button"
      disabled={props.disabled}
      style={props.disabled || styles.pressable}
      onPress={props.onPress} >
      <View style={[styles.button, props.style, props.disabled && styles.disabled]}>
        <Text style={[styles.text, props.textStyle]}>{props.title}</Text>
      </View>
    </Pressable >
  );
};

const styles = StyleSheet.create({
  pressable: function({pressed}) {
    return {opacity: pressed ? 0.8 : 1.0};
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#2196F3',
    elevation: 0,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#EEE',
  },
  disabled: {
    backgroundColor: '#EEE',
  }
});

export default Button;