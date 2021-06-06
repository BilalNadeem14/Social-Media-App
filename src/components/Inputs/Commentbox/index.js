import React, { Component } from 'react'
import {
    TouchableOpacity,
    Image,
    Text,
    View,
    TextInput
} from 'react-native'
import styles from './styles';
// import LinearGradient from 'react-native-radial-gradient'
export default class Commentbox extends React.PureComponent {
    constructor(props) {
        super(props)
    }
    render() {

        return (

            <View style={styles.topSrch}>
                <TextInput style={styles.topSrchinpt} selectionColor="#0C39B4"
                    value={this.props.value}
                    onChangeText={(t) => { this.props.onChangeText(t) }}
                    multiline={true}
                    numberOfLines={8}
                    placeholderTextColor="#ccc"
                    placeholder={this.props.placeholder} />
            </View>
        )
    }
}