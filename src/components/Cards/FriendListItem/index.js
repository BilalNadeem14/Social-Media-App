import React, { Component } from 'react'
import {
    TouchableOpacity,
    ImageBackground,
    Text,
    Image,
    View,
} from 'react-native'
import styles from './styles';
import CheckBox from '../../Inputs/CheckBox'
import vh from '../../../utils/units/vh';
export default class ChallengeCard extends React.PureComponent {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
    }
    method = () => {

    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <ImageBackground style={styles.circle} imageStyle={styles.profileImage} source={require('../../../assets/images/placeholder.jpg')}>
                    </ImageBackground>
                </View>
                <View style={styles.nameContainer}><Text style={styles.name}>Adam Clair</Text></View>
                <View style={styles.checkContainer}>
                    <CheckBox size={3 * vh} />
                </View>
            </View>
        )

    }
}