
import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import {Input, ErrorText} from "component/Form";
import Button from "component/Button";

export default Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Input
        placeholder="email address"
        onChangeText={setEmail}
        testID="SignIn.usernameInput"
      />
      <Input
        placeholder="password"
        secureTextEntry
        onChangeText={setPassword}
        testID="SignIn.passwordInput"
      />
      <Button testID="SignIn.Button" title="Login" disabled={props.pending}
        onPress={() => props.login(email, password)}
        style={styles.button} textStyle={styles.buttonText} />
      {props./invalid && < ErrorText messages={["invalid login"]} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    paddingHorizontal: 40,
    // borderWidth: 1,
    // borderColor: 'blue',
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
});