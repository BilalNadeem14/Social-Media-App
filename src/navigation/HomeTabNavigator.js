import React from 'react';

// import { createStackNavigator } from '@react-navigation/stack';
// import { getOptions } from './navigationOptions';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MenuStackNavigator from './MenuNavigator';
// import ChatStackNavigator from './ChatNavigator';
// import PackageStackNavigator from './PackageNavigator';
import HomeStackNavigator from './HomeNavigator';
import TabBarButton from '../components/TabBarButton';
import styles from './styles'
import Profile from '../screens/Profile';
import FriendListScreen from '../screens/FriendListScreen';

const HomeTabs = createBottomTabNavigator();


const HomeTabNavigator = (props) => {

    return (

        <HomeTabs.Navigator
            tabBarPosition='bottom'
            lazy={true}
            tabBarOptions={{
                style: styles.tabStyle,
                tabStyle: styles.homeTab,
                iconStyle: styles.tabIcon,
                showIcon: true,
                activeTintColor: theme.colors.fontWhite,
                inactiveTintColor: theme.colors.fontWhite,
                showLabel: false,

                indicatorStyle: styles.indicatorStyle,
                indicatorContainerStyle: styles.indicatorContainerStyle,
            }}
            initialRouteName={'HomeStackNavigator'}
        >

            <HomeTabs.Screen
                options={{
                    tabBarIcon: (params) => {
                        return (
                            <TabBarButton params={params} name='Home' />
                        )
                    },
                }}

                name="HomeStackNavigator"
                component={HomeStackNavigator}

            />

            <HomeTabs.Screen
                options={{
                    tabBarIcon: (params) => {
                        return (
                            <TabBarButton params={params} name='Package' />
                        )
                    },
                }}

                name="FriendList"
                component={FriendListScreen}

            />

            <HomeTabs.Screen
                options={{
                    tabBarIcon: (params) => {
                        return (
                            <TabBarButton params={params} name='Chat' />
                        )
                    },
                }}

                name="Profile"
                component={Profile}

            />

            {/* <HomeTabs.Screen
                options={{
                    tabBarIcon: (params) => {
                        return (
                            <TabBarButton params={params} name='Package' />
                        )
                    },
                }}

                name="PackageStackNavigator"
                component={PackageStackNavigator}

            /> */}
            {/* <HomeTabs.Screen
                options={{
                    tabBarIcon: (params) => {
                        return (
                            <TabBarButton params={params} name='Chat' />
                        )
                    },
                }}

                name="ChatStackNavigator"
                component={ChatStackNavigator}
            /> */}
            {/* <HomeTabs.Screen
                options={{
                    tabBarIcon: (params) => {
                        return (
                            <TabBarButton params={params} name='Menu' />
                        )
                    },
                }}

                name="MenuStackNavigator"
                component={MenuStackNavigator}
            /> */}
        </HomeTabs.Navigator>

    );
}
export default HomeTabNavigator;
