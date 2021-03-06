import React, {useEffect, useState} from "react";
import {StyleSheet, Text, SafeAreaView, StatusBar, View} from "react-native";
import Config from "react-native-config";
import {Input, ErrorText} from "component/Form";
import {useAuth} from "hook/useAuth";
import Button from "component/Button";
import Login from "component/Login";

export default ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login, user, pending, invalid} = useAuth();

  console.log("Config: ", Config);

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
      <Login login={login} invalid={invalid} pending={pending} />
      <View><Text>APIKEY={Config.DEMO }</Text></View>
    </SafeAreaView >
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
});
