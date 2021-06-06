import React, { Component } from 'react'
import {
    TouchableOpacity,
    Image,
    Text
} from 'react-native'
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient'
import Ripple from 'react-native-material-ripple';
import vh from '../../utils/units/vh';
export default class GradientButton extends React.PureComponent {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <Ripple disabled={this.props.disable} onPress={this.props.onPress}>
                <LinearGradient colors={this.props.color == undefined ? ['#EE3048', '#EE3071'] : this.props.color} style={[styles.button, { width: this.props.width, height: this.props.height, borderRadius: this.props.height },this.props.style]}>
                    {this.props.icon?<Image source={this.props.icon} style={[styles.btnImage,this.props.btnImage]} resizeMode="contain"/>:null}
                    <Text style={[styles.buttonText, { fontSize: vh * 2 }, this.props.textStyle]}>
                        {this.props.text}
                    </Text>
                </LinearGradient>
            </Ripple>
        )

    }
} 