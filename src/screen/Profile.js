import UserInfo from "component/UserInfo";
import React, {useEffect, useState} from "react";
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from "react-native";

export default (props) => {
  const user = props.route.params.user;
  console.log("params=", props.route.params);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <UserInfo user={user} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
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