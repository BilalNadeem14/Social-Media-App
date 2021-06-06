import React from 'react'
import {
    View, TouchableOpacity, Modal, StatusBar
} from 'react-native'
export default class ModalWrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }
    dismissLoader = () => {
    }
    onShow = () => {
        // alert('asd')

    }
    onDismiss = () => {
        // alert('asd')

    }
    hide = () => {
        this.setState({ visible: false })
    }
    renderStatusBar = () => {
        if(this.props.visible === true){
            return(
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.7)' }}>
                    <TouchableOpacity activeOpacity={1} onPress={this.props.onPress} style={{ flex: 1,alignItems:'center',justifyContent:'center' }}>
                        <TouchableOpacity activeOpacity={1}>
                            {this.props.children}
                        </TouchableOpacity>

                    </TouchableOpacity>
                    <StatusBar key={new Date()} animated={true} hidden={true}/>
                </View>
            )
        }else{
            return<StatusBar key={new Date()} animated={true} hidden={false}/>

        }
    }
    render() {
        return (
            <Modal
            animationType='slide'
                onRequestClose={this.props.onPress}
                transparent={true}
                style={{ flex: 1 }}
                {...this.props}
                visible={this.props.visible} 
                
                >
                
                {this.renderStatusBar()}

            </Modal>
        )
    }
}