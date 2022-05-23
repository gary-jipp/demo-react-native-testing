import React from "react";
import {StyleSheet, Text, View, TextInput} from "react-native";

export const Input = ({label, ...props}) => {
  const containerStyles = [styles.inputContainer];

  return (
    <View style={containerStyles}>
      <View style={styles.row}>
        <TextInput autoCapitalize="none" style={styles.input} {...props} />
      </View>
    </View>
  );
};

export const ErrorText = ({messages = []}) => {
  const displayMessages = messages.filter((msg) => msg !== undefined);

  return (
    <View style={styles.errorContainer}>
      {displayMessages.map((msg) => (
        <Text key={msg} style={styles.errorText}>
          {msg}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#f4f6f8",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#f4f6f8",
  },
  inputContainerError: {
    borderColor: "#cc0011",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputLabel: {
    fontSize: 10,
    color: "#b4b6b8",
  },
  input: {
    color: "#353031",
    fontSize: 24,
    marginTop: 3,
    marginRight: 10,
    flex: 1,
  },
  errorContainer: {
    paddingVertical: 2,
  },
  errorText: {
    fontSize: 16,
    color: "#cc0011",
  },
});