import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, } from 'react-native';

export default Slogan = (props) => {
  const [text, setText] = useState('');

  const onPress = () => {
    setText(props.text);
  };

  return (
    <View style={styles.container}>
      <Button testID="button" title='Slogan' onPress={onPress} />
      <Text testID="slogan" style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: 'red',
  },
  text: {
    color: "#353031",
    fontWeight: "500",
    fontSize: 18,
  },
});