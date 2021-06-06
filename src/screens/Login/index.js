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
import {StackActions} from '@react-navigation/native';
import {actions} from '../../redux/actions';
import {msg, regex, toast} from '../../utils';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      email: '',
      password: '',
    };
  }

  componentDidMount() {}

  onChangeText = (value, type) => {
    // console.log('baby')
    this.setState({...this.state, [type]: value});
    // state[type]
  };

  login = async () => {
    if (
      !(
        regex.email.test(this.state.email) //|| regex.phone.test(this.state.email)
      )
    ) {
      toast(msg.invalidEmail);
    }
    else if(this.state.password == ''){
      toast(msg.requiredPassword)
    }
    else {
      const data = {email: this.state.email, password: this.state.password};
      try {
        const auth = await this.props.login(data);
        console.log('loginScreen: ', auth);
        toast('successfully logged In');

        // I'm not using this bec I'm using switch navigation :)
        // this.props.navigation.dispatch(
        //   //uncomment this
        //   StackActions.replace('HomeTabNavigator'),
        // );
        // this.props.navigation.navigate('HomeTabNavigator')
      } catch (e) {
        console.log('loginScreen error: ', e);
        toast(e)
      }
    }
  };

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

        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.scrollContent}>
          <MainInput
            label="Email"
            placeholder="Enter Email"
            style={styles.input}
            fieldStyle={styles.inputFieldStyle}
            value={this.state.email}
            type="email"
            onChangeText={this.onChangeText}
            keyboardType='email-address'
          />

          <MainInput
            label="Password"
            placeholder="Enter Password"
            style={styles.input}
            fieldStyle={styles.inputFieldStyle}
            secureTextEntry
            value={this.state.password}
            type="password"
            onChangeText={this.onChangeText}
          />
          <View style={styles.forgotRow}>
            <TouchableHOC
              onPress={() =>
                this.props.navigation.navigate('PasswordRecovery')
              }>
              <JostRegular style={styles.forgotText}>
                Forgot Password?
              </JostRegular>
            </TouchableHOC>
          </View>

          <Button
            title="LOGIN"
            style={styles.btn}
            labelStyle={styles.btnLabel}
            onPress={() => {
              this.login();

              // this.props.navigation.navigate("HomeTabNavigator")
            }}
          />
          <View style={styles.textRow}>
            <JostRegular style={styles.accountText}>
              Don't have an account?
            </JostRegular>
            <TouchableHOC
              onPress={() => this.props.navigation.navigate('Signup')}>
              <JostRegular style={styles.loginText}> Sign Up Here</JostRegular>
            </TouchableHOC>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStates = (state) => {
  // console.log('state login', state)
  return state;
};
const mapProps = (dispatch) => {
  return {
    login: (data) => dispatch(actions.login(data)),
  };
};

export default connect(mapStates, mapProps)(Login);
