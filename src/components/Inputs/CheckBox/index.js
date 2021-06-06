import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ImageBackground
} from 'react-native'
import styles from './styles'
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SearchInput extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            focused: false,

        }
    }
    getFocus = () => {
        this.setState(
            p => {
                return {
                    ...p,
                    focused: !p.focused
                }
            }
        )
    }
    render() {
        let active = this.props.active ? this.props.active : require('./default/active.png')
        let inactive = this.props.inactive ? this.props.inactive : require('./default/inactive.png')
        let buttonStyle = {
            width: this.props.size,
            height: this.props.size,
            borderRadius: this.props.size * 0.05
        }
        switch (this.state.focused) {
            case false:
                return (
                    <Ripple rippleCentered={true} rippleColor="#E9ECEA" hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }} onPress={this.getFocus} style={[styles.button, buttonStyle, this.props.style]}>
                        <ImageBackground style={[styles.imgContainer]} imageStyle={styles.img} source={inactive}></ImageBackground>
                    </Ripple>
                )

            case true:
                return (
                    <Ripple rippleCentered={true} rippleColor="#46E34B" hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }} onPress={this.getFocus} style={[styles.button, buttonStyle, this.props.style]}>
                        <ImageBackground style={[styles.imgContainer]} imageStyle={styles.img} source={active}></ImageBackground>
                    </Ripple>
                )
        }
    }
}