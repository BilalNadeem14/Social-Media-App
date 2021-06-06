import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { getOptions } from './navigationOptions';

import Signup from '../screens/Signup';
import Login from '../screens/Login';
import PasswordRecovery from '../screens/PasswordRecovery';

const AuthStack = createStackNavigator()

const AuthStackNavigator = () => {
    return(
        <AuthStack.Navigator
            screenOptions={getOptions}
            initialRouteName="Login"
        >
            <AuthStack.Screen
                name='Login'
                component={Login}
            />
            <AuthStack.Screen
                name="PasswordRecovery"
                component={PasswordRecovery}
            />
            <AuthStack.Screen
                name='Signup'
                component={Signup}
            />
        </AuthStack.Navigator>
    )
}

export default AuthStackNavigator