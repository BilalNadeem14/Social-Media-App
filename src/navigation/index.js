import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import MainNavigator from './MainNavigator';
import Modal from '../popups/Loading'

// const RootStack = createStackNavigator()

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#F7F7F7',
    }
}

export default Navigator = () => {
    return(
        <NavigationContainer theme={MyTheme}>
            <Modal/>
            <MainNavigator/>
        </NavigationContainer>
    )
}