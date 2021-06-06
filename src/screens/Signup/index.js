import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import styles from './styles';
import {icons, sampleImages} from '../../assets/images';
import {connect} from 'react-redux';
import MainInput from '../../components/MainInput';
import Alert from '../../popups/AlertPopup';
import Button from '../../components/Button';
import JostRegular from '../../components/JostRegular';
import TouchableHOC from '../../components/TouchableHOC';
import { actions } from '../../redux/actions';
import { regex, toast, msg } from '../../utils';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      password: '',
      rePassword: '',
    };
  }
   
  componentDidMount() {}

  onChangeText = (value, type) => {
    this.setState({...this.state, [type]: value});
    // state[type]
  };

  signup = () => {
    if(!regex.alphabets.test(this.state.firstName) || this.state.firstName === '') {
      toast(msg.invalidFirstname)
      console.log('first name wrong')
      return
    }
    else if(!regex.alphabets.test(this.state.lastName) || this.state.lastName === '') {
      toast(msg.invalidLastname)
      return
    }
    else if(!regex.email.test(this.state.email)) {
      toast(msg.invalidEmail)
      return
    }
    else if(!regex.phone.test(this.state.phone)) {
      toast(msg.invalidPhone)
      // console.log('phone wrong', this.state.phone)
      return
    }
    // else if(this.state.address === '') {
    //   toast('Please enter your Address')
    // }
    else if(this.state.password !== this.state.rePassword) {
      toast(msg.passwordNotMatch)
      return
    }
    else {
      const data = {
        firstName: this.state.firstName, 
        lastName: this.state.lastName, 
        email: this.state.email, 
        phone: this.state.phone, 
        // address: this.state.address, 
        password: this.state.password, 
        image: this.props.image //bring from redux
      }
      this.props.signup(data, (response) => {
        console.log('response in screen');
        toast(response)
        this.props.navigation.goBack()
      }, error => {
        console.log('error in screen', error);
        toast(error)
      })
      return  
    }
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Alert
          ref={(e) => (this.confirmPopup = e)}
          icon={icons.confirmCheck}
          titleText={'Confirmation'}
          description={'Message Has been sent successfully!'}
          onCross={() => {}}
        />

        <KeyboardAwareScrollView
          style={styles.container}
          contentContainerStyle={styles.scrollContent}>
          <View style={styles.expandedRow}>
            {/* <Text>{this.state.firstName}</Text> */}
            <MainInput
              label="First Name"
              placeholder="Enter First Name"
              style={styles.inputWidth}
              fieldStyle={styles.inputFieldStyle}
              value={this.state.firstName}
              type="firstName"
              onChangeText={this.onChangeText}
            />
            <MainInput
              label="Last Name"
              placeholder="Enter Last Name"
              style={styles.inputWidth}
              fieldStyle={styles.inputFieldStyle}
              value={this.state.lastName}
              type="lastName"
              onChangeText={this.onChangeText}
            />
          </View>
          <View style={styles.expandedRow}>
            <MainInput
              label="Email"
              placeholder="Enter Email"
              style={styles.inputWidth}
              fieldStyle={styles.inputFieldStyle}
              value={this.state.email}
              type="email"
              onChangeText={this.onChangeText}
              keyboardType='email-address'
            />
            <MainInput
              label="Phone"
              placeholder="Enter Phone"
              style={styles.inputWidth}
              fieldStyle={styles.inputFieldStyle}
              keyboardType="number-pad"
              value={this.state.phone}
              type="phone"
              onChangeText={this.onChangeText}
            />
          </View>
          {/* <MainInput
            label="Address"
            placeholder="Enter Address"
            style={styles.input}
            fieldStyle={styles.inputFieldStyle}
            value={this.state.address}
            type="address"
            onChangeText={this.onChangeText}
          /> */}
          <View style={styles.expandedRow}>
            <MainInput
              label="Password"
              placeholder="Enter Password"
              style={styles.inputWidth}
              fieldStyle={styles.inputFieldStyle}
              secureTextEntry
              value={this.state.password}
              type="password"
              onChangeText={this.onChangeText}
            />
            <MainInput
              label="Confirm Password"
              placeholder="Confirm Password"
              style={styles.inputWidth}
              fieldStyle={styles.inputFieldStyle}
              secureTextEntry
              value={this.state.rePassword}
              type="rePassword"
              onChangeText={this.onChangeText}
            />
          </View>
          <Button
            title="SIGN UP"
            style={styles.btn}
            labelStyle={styles.btnLabel}
            onPress={() => {
              // this.confirmPopup.show();
              this.signup()
            }}
          />
          <View style={styles.textRow}>
            <JostRegular style={styles.accountText}>
              Already have an account?
            </JostRegular>
            <TouchableHOC
              onPress={() => this.props.navigation.navigate('Login')}>
              <JostRegular style={styles.loginText}> Login here</JostRegular>
            </TouchableHOC>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const mapStates = (state) => {
  // console.log('mapState signUp: ', state.authReducer.image)
  return {
    image: state.authReducer.image
  }
};
const mapDispatchToProps = (dispatch) => {
  console.log('mapDispatch');
  return {
    signup: (data, callback, error) => dispatch(actions.signup(data, callback, error))
  };
};

export default connect(mapStates, mapDispatchToProps)(Signup);
