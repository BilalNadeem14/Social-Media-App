import React from 'react'
import {
    View, TouchableOpacity, Modal, StatusBar, ActivityIndicator, StyleSheet,
    Text
} from 'react-native'
import ModalWrapper from '../ModalWrapper'
import vh from '../../utils/units/vh'
import vw from '../../utils/units/vw'
import { connect } from 'react-redux'
import actionTypes from '../../redux/actions/actionTypes'
// import actions from '../../redux/actions/actionTypes'
class Loader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }
    componentDidMount(){
        // console.log('did mount modal')
        if(this.props.loading != false){
            // console.log('did mount modal, inside if')
            this.props.loaderOff()
        }
    }
    // componentDidMount() {
    
    // }
   
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
        if (this.props.visible === true) {
            return <StatusBar hidden={true} />
        } else {
            return <StatusBar hidden={false} />

        }
    }
    render() {
        // console.log('LOADINGGGG ',this.props.loading)
        return (
            <ModalWrapper visible={this.props.loading}>
                <View style={styles.content}>
                    <ActivityIndicator color='#0080F8' size='large' />
                    <Text style={{ marginLeft: 7 * vw }}>Loading</Text>
                </View>
            </ModalWrapper>
        )
    }
}
const mapStates = (state) => {
    return {
        loading: state.GeneralReducer.loading,
    }
}
const mapDispatch = (dispatch) => {
    return {
        loaderOff:()=> dispatch({type:actionTypes.loaderOff}),
     
    }
}
export default connect(mapStates,mapDispatch)(Loader);

const styles = StyleSheet.create({
    content: {
        height: 15 * vh,
        width: 70 * vw,
        backgroundColor: 'white',
        borderRadius: 2 * vw,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0.5*vh,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    }
})