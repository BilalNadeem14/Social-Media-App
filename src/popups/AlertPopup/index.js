import React from 'react'
import { View, Modal, FlatList, Image, ImageBackground, LayoutAnimation } from 'react-native'
import styles from './styles'
import {
    icons,
    banners,
    sampleImages
} from '../../assets/images'
import vw from '../../utils/units/vw'
import vh from '../../utils/units/vh'
import Button from '../../components/Button'

import theme from '../../utils/units/theme'
import TextRegular from '../../components/TextRegular'
import TextBold from '../../components/TextBold'
export default class AlertPopup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            visible: false,
            cardNumber: "",
            expiry: ""

        }
    }

    show = () => {
        this.setState(p => {
            return {
                ...p,
                visible: true,
            }
        })
    }

    componentDidMount() {

    }
    dismissPopup = () => {
        this.setState(p => {
            return {
                ...p,
                visible: false
            }
        })

    }

    hidePopup = () => {
        this.setState(p => {
            return {
                ...p,
                visible: false
            }
        }, () => { this.props.onPressBtn1() })

    }
    hide1 = () => {
        this.setState(p => {
            return {
                ...p,
                visible: false
            }
        }, () => { this.props.onSuccess1() })

    }
    hide2 = () => {
        this.setState(p => {
            return {
                ...p,
                visible: false
            }
        }, () => { this.props.onSuccess2() })

    }
    renderBtns = () => {
        if (this.props.onSuccess2) {
            return (
                <View style={styles.btnRow}>

                    <Button title={this.props.btnOne ? this.props.btnOne : "YES"} style={styles.twoBtn}
                        labelStyle={styles.btnLabel} onPress={() => this.props.onSuccess1 ? this.hide1() : this.dismissPopup()} />
                    <Button title={this.props.btnTwo ? this.props.btnTwo : "NO"}
                        labelStyle={[styles.btnLabel, { color: theme.colors.blue }]}
                        style={[styles.twoBtn, { borderColor: theme.colors.blue }]} onPress={() => this.props.onSuccess2 ? this.hide2() : this.dismissPopup()} />

                </View>
            )
        }
        else if (this.props.onPressBtn1) {
            return <Button title={this.props.btnText ? this.props.btnText : "OK"}
                style={[styles.yesbutton]} labelStyle={styles.btnLabel} onPress={() => this.hidePopup()} />

        }
        else if (this.props.dismiss) {
            return <Button title={this.props.btnText ? this.props.btnText : "OK"} style={[styles.yesbutton]} labelStyle={styles.btnLabel} onPress={() => this.dismissPopup()} />

        }
        else {
            return null
        }
    }
    render() {


        return (

            <Modal onRequestClose={this.dismissPopup} visible={this.state.visible} transparent={true} animationType='fade'>
                <TouchableHOC style={styles.modalTouchable} onPress={this.dismissPopup} >

                </TouchableHOC>
                <View style={styles.modalContainer}>
                    <TouchableHOC onPress={this.dismissPopup} style={styles.crossBtn} >
                        <Image source={icons.crossIcon} style={styles.crossIcon} />
                    </TouchableHOC>
                    {this.props.icon ? <Image source={this.props.icon ? this.props.icon : icons.checkCircle2} style={styles.check} /> : null}

                    {this.props.titleText ? <View style={styles.titleBox}><TextBold style={styles.title}>{this.props.titleText}</TextBold>
                        <View style={styles.underline} />
                    </View> : null}
                    <TextRegular style={styles.paymentText} numberOfLines={0}>{this.props.description}</TextRegular>

                    {this.renderBtns()}

                </View>
            </Modal>


        )
    }
}
