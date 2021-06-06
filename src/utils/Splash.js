import {
    NativeModules,
    Platform
} from 'react-native'

var Splash = {
    hide:()=> {
        if(NativeModules.splash){
            NativeModules.splash.hide()
        }else{
            console.warn('Please link library again')
        }
    },
    navigate:()=> {
        if(NativeModules.splash){
            NativeModules.splash.hide()
        }else{
            console.warn('Please link library again')
        }
    },
}

export default Splash