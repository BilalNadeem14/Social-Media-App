import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
} from 'react-native'
import styles from './styles'

import Icon from 'react-native-vector-icons/FontAwesome';

export default class SearchInput extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            focused: false,
            text: 'Search here',
            searched: false
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
    search = () => {
        if (this.state.text === '') {
            return
        } else {
            this.setState(
                p => {
                    return {
                        ...p,
                        searched: true
                    }
                }
            )
        }
    }
    hide = () => {
        this.setState(
            p => {
                return {
                    ...p,
                    focused: false,
                    text: 'Search here',
                    searched: false
                }
            }
        )
    }
    render() {
        let show = this.state.text
        let buttonStyle = {
            height: this.props.height,
            width: this.props.width,
            borderRadius: this.props.height * 0.5
        }
        let textStyle = {
            fontSize: this.props.height * 0.45,
            marginLeft: this.props.width * 0.05,
            color: '#C1C1C1'
        }
        let iconStyle = {
            marginLeft: this.props.height * 0.4
        }
        let inSideButton = {
            width: this.props.width * 0.2,

        }
        let textContainer = {
            width: this.props.width * 0.8,
            flexDirection: 'row',
        }

        switch (this.state.focused) {
            case false:
                return (
                    <TouchableOpacity onPress={this.getFocus} style={[styles.button, buttonStyle, this.props.style]}>
                        <View style={[styles.textContainer, textContainer]}><Text style={[styles.text, textStyle, { alignSelf: "center", textAlignVertical: "center" }]}>{show}</Text></View>
                        <View style={[styles.imageContainer, inSideButton]}>
                            <Icon style={[styles.icon, iconStyle]} name="search" size={this.props.height * 0.5} color="#EE3048" />
                        </View>
                    </TouchableOpacity>
                )

            case true:

                switch (this.state.searched) {
                    case false:
                        return (
                            <View style={[styles.button, buttonStyle, this.props.style]}>
                                <View style={[styles.textContainer, textContainer]}>
                                    <TextInput onChangeText={t => { this.setState(p => { return { ...p, text: t } }) }} autoFocus={true} style={[styles.text, textStyle, { padding: 0, margin: 0 }]} underlineColorAndroid='transparent' />
                                </View>

                                <TouchableOpacity onPress={this.search} style={[styles.imageContainer, inSideButton]}>
                                    <Icon style={[styles.icon, iconStyle]} name="search" size={this.props.height * 0.4} color="#EE3048" />
                                </TouchableOpacity>
                            </View>
                        )
                    case true:
                        return (
                            <View style={[styles.button, buttonStyle, this.props.style]}>
                                <View style={[styles.textContainer, textContainer]}>
                                    <TextInput onChangeText={t => { this.setState(p => { return { ...p, text: t } }) }} placeholder={this.state.text} autoFocus={true} style={[styles.text, textStyle, { padding: 0, margin: 0 }]} underlineColorAndroid='transparent' />
                                </View>

                                <TouchableOpacity onPress={this.hide} style={[styles.imageContainer, inSideButton]}>
                                    <Icon style={[styles.icon, iconStyle]} name="close" size={this.props.height * 0.4} color="#C1C1C1" />
                                </TouchableOpacity>
                            </View>
                        )
                }



        }
    }
}