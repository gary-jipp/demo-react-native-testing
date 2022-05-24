import React from "react";
import {StyleSheet, Text, View} from "react-native";
import InfoView from "./InfoView";

const UserItem = ({label, value}) => (
  <View style={styles.userItem}>
    <View style={styles.itemLabel}>
      <Text style={styles.text}>{label}:</Text>
    </View>
    <View style={styles.itemValue}>
      <Text style={styles.text}>{value}</Text>
    </View>
  </View >
);

export default (props) => {
  return (
    <View style={styles.container}>
      <UserItem label="Name" value={props.user.name} />
      <UserItem label="City" value={props.user.address.city} />
      <UserItem label="Company" value={props.user.company.name} />
      <UserItem label="Phone" value={props.user.phone} />
      <UserItem label="Website" value={props.user.website} />
      <InfoView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 0,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  userItem: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  itemLabel: {
    marginRight: 2,
    width: '35%',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  itemValue: {
    // borderWidth: 1,
    // borderColor: 'red',
  },
  text: {
    color: "#353031",
    fontWeight: "500",
    fontSize: 19,
    // borderWidth: 1,
    // borderColor: 'red',
  },
});