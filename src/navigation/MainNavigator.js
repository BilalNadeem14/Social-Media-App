import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {connect} from 'react-redux'
import AuthStackNavigator from './AuthStackNavigator'
import {createStackNavigator} from '@react-navigation/stack'

import HomeTabNavigator from './HomeTabNavigator';

const RootStack = createStackNavigator()

const RootStackNavigator = () => {
    // const {loggedIn} = this.props
    const loggedIn = false
    return loggedIn?( //<Text>Hey</Text>
        <RootStack.Navigator
            headerMode="none"
            initialRouteName={'AuthStackNavigator'}
        >
            <RootStack.Screen
                name="AuthStackNavigator"
                component={AuthStackNavigator}
            />
        </RootStack.Navigator>
    ): (
        <RootStack.Navigator
            headerMode="none"
            initialRouteName={'HomeTabNavigator'}
        >
            <RootStack.Screen 
                name='HomeTabNavigator'
                component={HomeTabNavigator}
            />
        </RootStack.Navigator>
    )
}

const mapStateToProps = (state) =>{
    return {
        // loggedIn: state.authReducer.loggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(RootStackNavigator)