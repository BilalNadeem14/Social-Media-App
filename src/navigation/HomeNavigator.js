import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { getOptions } from './navigationOptions';

import Home from '../screens/Home';
import TabBarButton from '../components/TabBarButton';
const HomeStack = createStackNavigator();

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator screenOptions={getOptions}
            headerMode="screen"
        >
            <HomeStack.Screen
                name="Home"
                component={Home}
            />
           
        </HomeStack.Navigator>
    );
};


export default HomeStackNavigator;
