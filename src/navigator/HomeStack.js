import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from 'screen/SignIn';
import Profile from 'screen/Profile';

const Stack = createNativeStackNavigator();

const HomeStack = function() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={SignIn}
        options={{title: 'Sign In'}}
      />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default HomeStack;
