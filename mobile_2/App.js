import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';

import * as firebase from 'firebase';

import { NavigationContainer } from '@react-navigation/native'; //main file for nav
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';
import LoginScreen from './components/auth/Login';
import HomeScreen from './components/auth/HomeScreen';
import Calendar from './components/auth/Calendar';

const firebaseConfig = {
    apiKey: "AIzaSyB7-c-2_JVpnreGGDPlJINp1j06DdKWhqY",
    authDomain: "lab1-4d552.firebaseapp.com",
    projectId: "lab1-4d552",
    storageBucket: "lab1-4d552.appspot.com",
    messagingSenderId: "467035941278",
    appId: "1:467035941278:web:a3fccd65ca2b528a200e8f"
};

if (firebase.apps.length === 0) {
    // if we are not running any firebase instant
    firebase.initializeApp(firebaseConfig); //firebase initialize
}

const Stack = createStackNavigator(); //screens,routes

class App extends Component {
    state = {
        loaded: false,
    };

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Landing'>
                    <Stack.Screen
                        name='Landing'
                        component={LandingScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name='Register' component={RegisterScreen} />
                    <Stack.Screen name='Login' component={LoginScreen} />
                    <Stack.Screen 
                        name='Home' 
                        component={HomeScreen} 
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen 
                        name='Calendar' 
                        component={Calendar} 
                        options={{ headerShown: true }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default App;
