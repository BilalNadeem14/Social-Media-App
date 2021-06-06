import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ImageBackground,
    Image,
} from 'react-native'
import styles from './styles'
import { Fonts } from '../../../assets/fonts'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class IconInput extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            status: false,
            text: this.props.value,
            input: this.textInput
        }
    }
    getFocus = () => {
        this.setState(
            p => {
                return {
                    ...p,
                    status: !p.focused
                }
            }
        )
    }

    onChangeText = (t) => {
        this.setState(p => { return { ...p, text: t } }, this.props.onChangeText(t))
    }

    clear = () => {
        this.input.clear()
        this.input.blur()
        this.setState(p => {
            return {
                ...p,
                text: '',

            }
        })
    }

    render() {
        switch (this.state.status) {
            case false:
                return (
                    <View style={styles.container}>
                        <Text style={styles.label}>
                            {this.props.label}
                        </Text>
                        <TouchableOpacity onPress={this.getFocus} style={styles.fieldContainer}>
                            <View style={styles.iconContainer}>
                                <Icon size={2.5 * vh} color="#D5D5D5" style={styles.icon} name={this.props.icon} />
                            </View>
                            <View style={styles.placeholderContainer}>
                                <Text style={styles.placeholder}>
                                    {this.props.placeholder}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )
            case true:
                return (
                    <View style={styles.container}>
                        <Text style={styles.label}>
                            {this.props.label}
                        </Text>
                        <View style={styles.fieldContainer}>
                            <View style={styles.iconContainer}>
                                <Icon size={2.5 * vh} color="#D5D5D5" style={styles.icon} name={this.props.icon} />
                            </View>
                            <View style={styles.placeholderContainer}>
                                <TextInput
                                    underlineColorAndroid='transparent'
                                    autoFocus={true}
                                    style={styles.field}
                                    keyboardType={this.props.keyboardType}
                                    onSubmitEditing={this.props.submit}
                                    returnKeyType={this.props.keyType}
                                    placeholder={this.props.placeholder}
                                    onBlur={this.getFocus}
                                    ref={r => this.input = r}
                                />
                            </View>
                        </View>
                    </View>
                )
        }
    }
}