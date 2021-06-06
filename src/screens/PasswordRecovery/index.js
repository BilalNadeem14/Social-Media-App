import React from 'react'
import { View, ScrollView, Image } from 'react-native'
import styles from './styles'
import { icons, sampleImages } from '../../assets/images'
import { connect } from 'react-redux';
import MainInput from '../../components/MainInput';
import Alert from '../../popups/AlertPopup';
import Button from '../../components/Button'
import JostRegular from '../../components/JostRegular';
import TouchableHOC from '../../components/TouchableHOC';
import TextRegular from '../../components/TextRegular';
import { actions } from '../../redux/actions';
import { msg, regex, toast } from '../../utils';
class PasswordRecovery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            screenStep: 1,
            email: '',
            code: '',
            password: '',
            rePassword: '',
            responseToken: '',
        }
    }

    componentDidMount() {

    }

    onChangeText = (value, type) => {
        // console.log('baby')
        this.setState({...this.state, [type]: value});
        // state[type]
      };    

    nextBtn = () => {
        if (this.state.screenStep != 3) {
            this.setState({ screenStep: this.state.screenStep + 1 })
        }
        else {
            this.props.navigation.navigate("Login")
        }
    }
    
    passwordRecovery1 = () => {
        if (!(regex.email.test(this.state.email))) { //email can be phone or email
            toast(msg.invalidEmail)
        }
        else {
            this.props.passRecovery1({email: this.state.email}, (responseMessage, response) => {                                                     
                // console.log('response in screen: ', response)
                if(responseMessage === 'success') {
                    if(this.state.screenStep == 1) {
                        this.nextBtn()
                    }
                    toast('code sent on mail')
                }
                else {
                    toast(responseMessage)
                }
                
            })
        }
    }

    passwordRecovery2 = () => {
        if(!regex.numbers.test(this.state.code)) {
            toast('Please enter a valid code')
        }
        else {
            this.props.passRecovery2({email: this.state.email, code: this.state.code}, (response) => {
                if(response.status == 'verified') {
                    toast(response.status)
                    this.setState({responseToken: response.token})
                    this.nextBtn()
                    // console.log('screen response: ', response)
                }
                else {
                    toast(response)
                    // console.log('screen error response: ', response)
                }
            }) 
        }
    }

    passwordRecovery3 = async () => {
        if(this.state.password !== this.state.rePassword) {
            toast(msg.passwordNotMatch)
        }
        else {
            try {
                const response = await this.props.passRecovery3({email: this.state.email, password: this.state.password, token: this.state.responseToken}) // rePassword: this.state.rePassword
                console.log('response', response)
                toast(response.status)//('password updated successfully')
                this.nextBtn()
            }
            catch(e) {
                toast(e)
            }
        }
    }

    renderSteps = () => {
        switch (this.state.screenStep) {
            case 1:
                return (
                    <>
                        <MainInput
                            label="Email" // Or Phone
                            placeholder="Enter Email" // Or Phone
                            keyboardType="email-address"
                            value={this.state.email}
                            type="email"
                            onChangeText={this.onChangeText}
                        />
                        <Button
                            title="Continue"
                            style={styles.btn}
                            labelStyle={styles.btnLabel}
                            onPress={() => {
                                this.passwordRecovery1()
                                }
                            }
                        />
                    </>
                )

                break;
            case 2:
                return (
                    <>
                        <MainInput
                            label="Verification Code"
                            placeholder="Enter Verification Code"
                            value={this.state.code}
                            type="code"
                            onChangeText={this.onChangeText}
                        />
                        <View style={styles.forgotRow}>
                            <TouchableHOC
                                onPress={() => this.passwordRecovery1()}
                            >
                                <JostRegular style={styles.forgotText}>Resend Code</JostRegular>
                            </TouchableHOC>
                        </View>
                        <Button
                            title="Continue"
                            style={styles.btn}
                            labelStyle={styles.btnLabel}
                            onPress={() => {
                                this.passwordRecovery2()                                                                                 
                            }}
                        />
                    </>
                )

                break;
            case 3:
                return (
                    <>
                        <MainInput
                            label="New Password"
                            placeholder="Enter New Password"
                            secureTextEntry
                            value={this.state.password}
                            type="password"
                            onChangeText={this.onChangeText}
                        />
                        <MainInput
                            label="Confirm Password"
                            placeholder="Enter Confirm Password"
                            secureTextEntry
                            value={this.state.rePassword}
                            type="rePassword"
                            onChangeText={this.onChangeText}
                        />
                        <Button
                            title="Update"
                            style={styles.btn}
                            labelStyle={styles.btnLabel}
                            onPress={ () => {
                                this.passwordRecovery3()                                                                         
                            }}
                        />
                    </>
                )

                break;
        }
    }
    render() {

        return (
            <View style={styles.mainContainer}>
                <Alert
                    ref={(e) => (this.confirmPopup = e)}
                    icon={icons.confirmCheck}
                    titleText={'Confirmation'}
                    description={"Message Has been sent successfully!"}
                    onCross={() => { }}
                />

                <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>

                    {this.renderSteps()}
                    <TouchableHOC
                        onPress={() => this.props.navigation.navigate("Login")}
                        style={styles.backLoginBtn}>
                        <Image source={icons.backArrowBlue} style={styles.backArrow} />
                        <TextRegular style={styles.backLogin}>
                            Back To Login
              </TextRegular>
                    </TouchableHOC>
                </ScrollView>
            </View>

        )
    }
}

const mapStates = state => {
    return state
}
const mapProps = dispatch => {
    return {
        passRecovery1: (email, callback) => {dispatch(actions.passwordRecovery1(email, callback))},
        passRecovery2: (code, callback) => {dispatch(actions.passwordRecovery2(code, callback))},
        passRecovery3: (data, callback) => dispatch(actions.passwordRecovery3(data, callback)),
        
    }
}

export default connect(mapStates, mapProps)(PasswordRecovery)