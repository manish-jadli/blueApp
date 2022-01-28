/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/login';
import Signup from './app/signup';
import Home from './app/home';
import Expenses from './app/expenses';
import OtherExpenses from './app/otherExpenses';
import Deposit from './app/deposit';
import Withdrawn from './app/withdrawn';
import Balance from './app/balance';
import TotalAmount from './app/totalAmount';



const Stack = createNativeStackNavigator();



const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup}  options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Expenses" component={Expenses} />
        <Stack.Screen name="OtherExpenses" component={OtherExpenses} />
        <Stack.Screen name="Deposit" component={Deposit} />
        <Stack.Screen name="Withdrawn" component={Withdrawn} />
        <Stack.Screen name="TotalAmount" component={TotalAmount} />
        <Stack.Screen name="Balance" component={Balance} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
