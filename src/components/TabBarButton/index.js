import React from 'react'
import {
    View, Image
} from 'react-native'
import styles from './styles'

import theme from '../../utils/units/theme'
import { connect } from 'react-redux';
import vw from '../../utils/units/vw'
import { tabIcons } from '../../assets/images'
class TabBarButton extends React.Component {

    render() {
        var imageSource = null;
        var title = null;
        var titleColor = this.props.params.focused ? theme.colors.primaryColor : theme.colors.lightGrey;
        var activeBg = this.props.params.focused ? "rgba(80,3,173,0.1)" : "transparent";
        var focused = this.props.params.focused;
        switch (this.props.name) {
            case 'Home': {
                imageSource = focused ? tabIcons.activeHome : tabIcons.inactiveHome
                title = "Home"
                break
            }
            case 'Package': {
                imageSource = focused ? tabIcons.activePackage : tabIcons.inactivePackage
                title = "Package"
                break
            }
            case 'Chat': {
                imageSource = focused ? tabIcons.activeChat : tabIcons.inactiveChat
                title = "Chat"
                break
            }
            case 'Menu': {
                imageSource = focused ? tabIcons.activeMenu : tabIcons.inactiveMenu
                title = "Menu"
                break
            }
        }


        return (
            <View
                style={[styles.tabButtonContainer, focused && {borderTopColor: theme.colors.primaryColor,}]}
            >

                <Image
                    style={[styles.tabButtonIcon, {tintColor: titleColor}]}
                    source={imageSource}
                    resizeMode="contain" />


            </View>
        )
    }
}
const mapStates = state => {
    return state
}
const mapProps = dispatch => {
    return {
    }
}
export default connect(mapStates, mapProps)(TabBarButton)