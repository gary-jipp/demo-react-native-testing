import React, {useEffect, useState} from "react";
import {StyleSheet, Text, SafeAreaView, StatusBar} from "react-native";
import {Input, ErrorText} from "component/Form";
import {useAuth} from "hook/useAuth";
import Button from "component/Button";

export default ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login, user, pending, invalid} = useAuth();

  useEffect(() => {
    if (user) {
      // console.log("user=", user);
      navigation.push("Profile", {user: user});
    }
  }, [user]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Text style={styles.headerText}>Login</Text>
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
      <Button testID="SignIn.Button" title="Login" disabled={pending}
        onPress={() => login(email, password)}
        style={styles.button} textStyle={styles.buttonText} />
      {invalid && < ErrorText messages={["invalid login"]} />}

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
    alignItems: "stretch",
    paddingHorizontal: 40,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  headerText: {
    color: "#353031",
    fontWeight: "bold",
    fontSize: 34,
    marginBottom: 10,
    marginTop: 10,
    // borderWidth: 1,
    // borderColor: 'red',
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