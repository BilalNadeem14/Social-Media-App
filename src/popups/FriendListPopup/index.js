import React, { Component } from 'react'
import {
    View,
    ActivityIndicator,
    Text,
    TouchableOpacity,
    ScrollView,
    ImageBackground
} from 'react-native'
import Modal from 'react-native-modal'
import styles from './styles'
import SearchInput from '../../components/Inputs/SearchInput'
import FriendListItem from '../../components/Cards/FriendListItem'
// import CheckBox from '../../Inputs/CheckBox'
import GradientButton from '../../components/GradientButton';
import vh from '../../utils/units/vh'
import vw from '../../utils/units/vw'
export default class Loader extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }
    componentDidMount() {
        //console.log('loading started')
    }

    show = () => {
        this.setState(prev => {
            return {
                ...prev,
                visible: true
            }
        })
    }
    hide = () => {
        this.setState(prev => {
            return {
                ...prev,
                visible: false
            }
        })
    }
    handler = () => {
        this.hide()
        this.props.buttonHandler()
    }
    render(){
        return(
            <Modal  key={'frinedlist'} onBackdropPress={this.hide} isVisible={this.state.visible} style={styles.container}>
                <View style={styles.contentContainer}>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity style={styles.closeButton}>
                            <ImageBackground style={styles.closeImageContainer} imageStyle={styles.imgClose}></ImageBackground>
                        </TouchableOpacity>
                        <View style={styles.headingContainer}>
                            <Text style={styles.heading}></Text>
                        </View>
                        <View style={styles.searchContainer}>
                            <SearchInput width={75 * vw} height={6 * vh} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <ScrollView contentContainerStyle={{ alignItems: "center" }} showsVerticalScrollIndicator={false}>
                            <FriendListItem />
                            <FriendListItem />
                            <FriendListItem />
                            <FriendListItem />
                            <FriendListItem />
                            <FriendListItem />
                            <FriendListItem />
                            <FriendListItem />
                            <FriendListItem />
                            <FriendListItem />
                            <View style={{ marginVertical: 1 * vh }}>
                                <GradientButton onPress={this.handler} text="Challenge a Friend" width={60 * vw} height={6 * vh} />
                            </View>
                        </ScrollView>
                    </View>

                </View>
            </Modal>
        )
    }
}