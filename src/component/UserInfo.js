import React from "react";
import {StyleSheet, Text, View} from "react-native";
import Slogan from "./Slogan";

export default UserInfo = (props) => {
  return (
    <View style={styles.container} accessibilityLabel="Info" >
      <UserItem accessibilityLabel="User Name" label="Name" value={props.user.name} />
      <UserItem accessibilityLabel="City" label="City" value={props.user.address.city} />
      <UserItem label="Company" value={props.user.company.name} />
      <UserItem label="Phone" value={props.user.phone} />
      <UserItem label="Website" value={props.user.website} />
      <Slogan text={props.user.company.bs} />
    </View>
  );
};

const UserItem = ({label, value, accessibilityLabel}) => (
  <View accessibilityLabel="User Item"
    style={styles.userItem} >
    <View style={styles.itemLabel}>
      <Text style={styles.text}>{label}</Text>
    </View>
    <View style={styles.itemValue}>
      <Text
        accessibilityLabel={accessibilityLabel}
        style={styles.text}>{value}</Text>
    </View>
  </View >
);

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