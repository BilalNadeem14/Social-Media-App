import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native'
import styles from './styles';
import vw from '../../../Units/vw'
import vh from '../../../Units/vh';


export default class FormInput extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            focused: false,
            labelEnabled: false,
            isValid: true,
            text: ''
        }
    }

    floatingLabel = () => {

        this.setState(
            p => {
                return {
                    ...p,
                    focused: !p.focused
                }
            }
        )
    }

    change = t => {

        this.setState(
            p => {
                return {
                    ...p,
                    text: t
                }
            }
            // , () => this.props.onChangeText(this.state.text)
        )
    }

    clear = () => {
        this.setState({
            text: ''
        })
    }

    render() {
        let textToShow = this.props.placeholder
        let color = this.props.labelColor
        if (this.state.text === '') {
            textToShow = this.props.placeholder
            color = this.props.labelColor
        } else if (this.props.secure === true) {
            // textToShow = '********'
            let t = ''
            for (c in this.state.text) {
                t = t + '•'
            }
            textToShow = t
            color = this.props.color


        } else {
            textToShow = this.state.text
            color = this.props.color
        }
        switch (this.state.focused) {
            case false:
                return (
                    <TouchableOpacity onPress={this.floatingLabel} style={[styles.container, {
                        width: this.props.width, height: this.props.height,
                        borderBottomColor: this.props.labelColor
                    }]}>
                        {/* <Text style={[styles.label, { color: this.props.labelColor, fontSize: 4 * vw, 
                            margin: 0, textAlignVertical: "center", paddingTop: this.props.height * 0.1 }]}>{this.props.label}</Text> */}
                        <Text style={[styles.label, {
                            color: this.props.labelColor,
                            fontSize: 2.5 * vh, margin: 0, padding: 0, width: this.props.width, lineHeight: 3.5 * vh
                        }]}>{this.props.label}</Text>
                        <Text style={[styles.inputFields, {
                            color: color, width: this.props.width,
                            fontSize: 1.9 * vh, textAlignVertical: "center", paddingBottom: 1 * vh
                        }]} >{textToShow}</Text>
                    </TouchableOpacity>
                )
            case true:
                return (
                    <View style={[styles.containerFocused, { width: this.props.width, height: this.props.height, borderBottomColor: this.props.labelColor }]}>
                        <Text style={[styles.label, {
                            color: this.props.labelColor,
                            fontSize: 2.5 * vh, margin: 0, padding: 0, width: this.props.width, lineHeight: 3.5 * vh
                        }]}>{this.props.label}</Text>
                        <TextInput
                            value={this.props.value}

                            // onChangeText={t => { this.setState(p => { return { ...p, text: t } }) }}
                            onChangeText={t => { this.change(t) }}

                            ref={input => { this.textInput = input }} multiline={this.props.multiline}
                            keyboardType={this.props.keyboard} secureTextEntry={this.props.secure} value={this.state.text} autoFocus={true}
                            placeholderTextColor={this.props.labelColor} style={[styles.inputFields,
                            {
                                color: this.props.color, width: this.props.width,
                                fontSize: 1.9 * vh, padding: 0, margin: 0, paddingBottom: 1 * vh,
                                backgroundColor: 'transparent', textAlignVertical: 'center'
                            }]}
                            onBlur={this.floatingLabel} underlineColorAndroid="transparent"
                            placeholder={this.props.placeholder} />
                    </View>
                )
        }
    }
}