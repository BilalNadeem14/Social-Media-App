import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import vh from '../utils/units/vh';
import vw from '../utils/units/vw';
import fonts from '../assets/fonts'
import { TransitionPresets } from '@react-navigation/stack';
import styles from './styles';
import { icons } from '../assets/images';
import ExtendedHeader from '../components/ExtendedHeader';
import IconButton from '../components/IconButton';
import theme from '../utils/units/theme';
import { connect } from 'react-redux';
import {store} from '../redux/index'

export const defaultOptions = (activeRouteName, props) => {
    return {
        headerStyle: {
            height: 18 * vh,
            shadowColor: 'transparent',
            elevation: 0,
            backgroundColor: "#F7F7F7"

        },
        headerRightContainerStyle: {
            paddingRight: 5 * vw,
            paddingBottom: 6 * vh
        },
        headerLeftContainerStyle: {
            paddingLeft: 5 * vw,
            paddingBottom: 6 * vh
        },
        headerRight: () => showRightButton(activeRouteName, props),
        headerLeft: () => showLeftButton(activeRouteName, props),

        ...TransitionPresets.SlideFromRightIOS,
        headerTitleAlign: 'center',
        headerTitleStyle: {
            fontFamily: fonts.Fonts.GB,
            color: '#fff',
            fontSize: 2.3 * vh,
            paddingBottom: 6 * vh

        },

        headerBackground: () => (
            <View style={styles.headerBgContainer}>
                <View style={styles.headerStyle}
                />
                {/* <Image style={styles.headerImg}
                    source={icons.headerBg} /> */}
            </View>
        ),
    };
};



export const showRightButton = (activeRouteName, { navigation, route }) => {
    // console.log('state from store: ', store.getState().authReducer.loggedIn);
    if(!store.getState()?.authReducer?.loggedIn) {
        return null
    }
    
    switch (activeRouteName) {
        case 'PasswordRecovery':
        case 'Login':
        case 'Signup':
        case 'Faqs':
        case 'Contact':
        // case 'Menu' :
        case 'Notification' : //&& !store.getState().authReducer.loggedIn
        // case !store.getState().authReducer.loggedIn:
        //remove notification from homeScreen as well
        //remove from serviceDeatils screen 
            return null

        default:
            return <IconButton onPress={() => navigation.navigate("Notification")} style={[styles.headerButtons]} icon={icons.notification} />

    }
};
export const showLeftButton = (activeRouteName, { navigation, route }) => {
    // console.log('activeRouteName, navigation', activeRouteName, navigation, route);

    switch (activeRouteName) {
        case 'Home':
        case 'Menu':
        case 'ChatList':
        case 'MakeOwnPackage':
        case 'Login':
            return null;


    }
    return (
        <IconButton onPress={() => navigation.pop()} style={[styles.headerButtons]} icon={icons.backArrowWhite} />

    );
};

export const shouldHeaderBeShown = (activeRouteName) => {
    switch (activeRouteName) {
        case 'Services':
            return true;
        case 'Contact':
            return true;
        case 'Faqs':
            return true;
        case 'Signup':
            return true;
        case 'Login':
            return true
        case 'PasswordRecovery':
            return true
        case 'PackageDetail':
            return true
        case 'PackageSubscription':
            return true
        case 'MakeOwnPackage':
            return true
        case 'Menu':
            return true
        case 'ChatList':
            return true
        case 'Chat':
            return true
        case 'MyServices':
            return true
        case 'ServiceDetail':
            return false
        case 'MyServiceDetail':
            return true
        case 'MyPackageDetail':
            return true
        case 'PackageResubscription':
            return true
        case 'Notification':
            return true
        case 'MyProfile':
            return true
        case 'EditProfile':
            return true
        default:
            return false;
    }
};


export const getTitle = (activeRouteName, props) => {
    switch (activeRouteName) {
        case 'Services':
            return 'Services';
        case 'Contact':
            return 'Contact Us';
        case 'Faqs':
            return 'FAQs';
        case 'Signup':
            return 'Sign Up';
        case 'Login':
            return 'Login'
        case 'PasswordRecovery':
            return 'Password Recovery'
        case 'PackageDetail':
            return 'Package Detail'
        case 'PackageSubscription':
            return 'Package Subscription'
        case 'MakeOwnPackage':
            return 'Make Your Own Package'
        case 'Menu':
            return 'Menu'
        case 'ChatList':
            return 'Chats'
        case 'Chat':
            return 'Chats'
        case 'MyServices':
            return 'My Services'
        case 'MyServiceDetail':
            return 'Service Detail'
        case 'MyPackageDetail':
            return 'Package Detail'
        case 'PackageResubscription':
            return 'Re-Subscribe Package'
        case 'Notification':
            return 'Notifications'
        case 'MyProfile':
            return 'My Profile'
        case 'EditProfile':
            return 'Edit Profile'
        default:
            return 'TITLE';
    }
};

export const getOptions = (props) => {
    // console.log("props", props);
    var activeRouteName = props.route.state
        ? props.route.state.routes[props.route.state.index].name
        : props.route.name;
    // console.log('active routename', activeRouteName);
    return {
        ...defaultOptions(activeRouteName, props),
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: shouldHeaderBeShown(activeRouteName),
        title: getTitle(activeRouteName, props),
        ...(activeRouteName == 'Services' || activeRouteName == 'Signup' || activeRouteName == 'Menu'
            || activeRouteName == "MyProfile" || activeRouteName == 'EditProfile' || activeRouteName == "ServiceDetail"
            ? { header: (props) => <ExtendedHeader {...props} /> }
            : null),
        gestureEnabled: false,
    };
};

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = () => {
    return {}
}

// export const getOptions = connect(mapStateToProps, mapDispatchToProps)(getOptions2)
