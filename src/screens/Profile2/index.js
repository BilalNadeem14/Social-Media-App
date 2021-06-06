import React from 'react';
import {View, ScrollView, Text,} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
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
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      email: '',
      password: '',
    };
  }

  componentDidMount() {
    // this.ref.show()
  }

  onChangeText = (value, type) => {
    // console.log('baby')
    this.setState({...this.state, [type]: value});
    // state[type]
  };


  render() {
    return <SafeAreaView forceInset={{ top: 'always' }}
      style={styles.container}>
    <Text>Page content</Text>
  </SafeAreaView> 
    // <View style={{backgroundColor: 'red', flex: 1, marginTop:}}>
    //   <Text>Profile Screen</Text>
      
    // </View> 
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

export default connect(mapStates, mapProps)(Profile);
