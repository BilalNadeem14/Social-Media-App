import React from 'react'
import { Image
} from 'react-native'
import styles from './styles'
import TouchableHOC from '../TouchableHOC'

export default IconButton = (props) => {
    return (
        <TouchableHOC {...props} style={[styles.container,props.style]}>
            <Image source={props.icon} style={[styles.icon,props.iconStyle]}/>
        </TouchableHOC>
    )
}