import React from 'react'
import {

} from 'react-native'
import Ripple from 'react-native-material-ripple';
import styles from './styles'
import vh from '../../utils/units/vh';
import vw from '../../utils/units/vw';
import theme from '../../utils/units/theme';



export default TouchableHOC = (props) => {
    return (
        <Ripple
            rippleColor={theme.colors.gray4}
            // hitSlop={{height:4*vh,width:4*vw}}
            hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
            {...props}
        >{props.children}</Ripple>
    )
}