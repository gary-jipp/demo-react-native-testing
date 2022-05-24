import React, {useState} from 'react';
import {StyleSheet, Text, View, Pressable, Button, } from 'react-native';
export default TestView = () => {
  const [text, setText] = useState('');

  const onPress = () => {
    setText("Hi There!");
  };

  return (
    <View style={styles.container}>
      <Button title='Press Me'/>
      <View>
        <Text>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 0,
    borderWidth: 1,
    borderColor: 'red',
  },
  text: {
    color: "#353031",
    fontWeight: "500",
    fontSize: 24,
  },
});