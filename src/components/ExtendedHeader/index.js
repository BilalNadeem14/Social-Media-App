import React from 'react';
import { View, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Header } from '@react-navigation/stack';
import { connect } from 'react-redux';
import vh from '../../utils/units/vh';
import MainInput from '../MainInput';
import { icons, sampleImages } from '../../assets/images';
import imagePicker from 'rn-image-picker'
import { actions } from '../../redux/actions';
import { baseUrl, regex, toast } from '../../utils';

class ExtendedHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      userImage: '',

      search: '',
      response: []
    };
  }
  // imagePicker.open(success => {
  //   console.log("success data", success);
    
  //   this.setState({avatar_url: 'data:image/jpeg;base64,' + success.data})
  //   }, error => {
  //   console.log('error ', error)
  //   })
  imagePicker = () => {
    console.log('image picker called');
    // var data = {}
    imagePicker.open(
        success => {
      console.log("success data", success);
      
      this.setState({userImage: success.uri})//'data:image/png,' + //data:image/jpeg;base64 => success.data
      const data = {
        image: {
          uri: success.uri,
          type: 'image/png',
          name: `${Date.now().toString()}main_image`, //this.state.success.uri.name //success.uri
        },
      }
      this.props.setImage(data.image)
    }, error => {
      console.log('error ', error)
      }
      
      
    //   success=>{ 
    //   console.log("Imagfe succes", success);
    // },erro => {
    //   console.log("Imagfe error", erro);
    // }
    
    )
     //save in reducer
  }

  onChangeText = (value, type) => {
    // console.log('baby')
    this.setState({...this.state, [type]: value});
    // state[type]
  };


  renderBody = () => {
    // console.log("route current", this.props.scene);
    switch (this.props.scene.route.name) {

      case 'Signup':
        return (
          <View style={styles.userCircle} key={this.props.scene.route.key}>
            <Image source={this.props.signUpImage? {uri: this.props.signUpImage}: sampleImages.userimg} style={styles.useravatar} />
            <TouchableOpacity style={styles.cameraBtn}
              onPress={() => {console.log('imagePicker'); this.imagePicker()}}
            >
              <Image source={icons.whiteCamera} style={styles.cameraImg} />
            </TouchableOpacity>
          </View>
        )
        break;
      case 'MyProfile':
        return (
          <View style={styles.userCircle} key={this.props.scene.route.key}>
            <Image source={this.props.user.image? {uri: baseUrl + this.props.user.image}: sampleImages.userimg} style={styles.useravatar} />
          </View>
        )
        break;
      case 'EditProfile':
        return (
          <TouchableOpacity style={styles.userCircle} key={this.props.scene.route.key}
          onPress={() => {console.log('imagePicker'); this.imagePicker()}}
          
          >
            {/* sampleImages.userimg */}
            {/* source={this.state.userImage? {uri: this.state.userImage}: sampleImages.userimg} */}
            <Image source={this.props.signUpImage? {uri: this.props.signUpImage}:(this.props.user.image? {uri: baseUrl + this.props.user.image}: sampleImages.userimg)} style={styles.useravatar} />
            <TouchableHOC style={styles.cameraBtn}
              onPress={() => {console.log('imagePicker'); this.imagePicker()}}
            >
              <Image source={icons.whiteCamera} style={styles.cameraImg} />
            </TouchableHOC>
          </TouchableOpacity>
        )
        break;
      case 'Menu':
        return (
          this.props.loggedIn?
          <View style={styles.userCircle} key={this.props.scene.route.key}>
            <Image 
            // source={sampleImages.service}
              source={this.props.user.image? {uri: baseUrl + this.props.user.image}: sampleImages.userimg} 
              style={styles.useravatar} />
          </View>:null
        )
        break;



      case 'Services':
        return (
          <View style={{ marginTop: -7 * vh }} key={this.props.scene.route.key}>
            <MainInput
              placeholder="Find a service...."
              style={styles.input}
              rightIcon={icons.searchGray}

              value={this.state.search}
              type="search"
              onChangeText={this.onChangeText}
              rightIconPress={() => {
                this.searchService();
              }}
              onSubmitEditing={() => {
                this.searchService();
              }}
            />
          </View>
        )
        break;
      default:
        return (
          <View></View>
        )
        break;
    }
  };

  _returnHeaderHeight = () => {
    let height = 18 * vh;
    const activeRoute = this.props.scene.route.name;

    if (activeRoute == 'ServiceDetail') {
      height = 0 * vh
    }
    else if (activeRoute == 'Signup' || activeRoute == 'EditProfile') {
      height = 22 * vh
    }
    //   // height = 24 * vh
    // } else if (activeRoute == 'GroupChatScreen') {
    //   height = 15 * vh;
    // } else if (activeRoute == 'EditGroup') {
    //   height = 15 * vh;
    // }

    return height;
  };

  render() {
    // console.log("props route", this.props.scene.route.name);

    return (
      <View
        style={{
          // backgroundColor : 'red' , height : 22 * vh
          height: this._returnHeaderHeight(),
        }}>
        {this.props.scene.route.name != "ServiceDetail" ? <Header {...this.props} /> : null}



        {this.renderBody()}
      </View>
    );
  }
}

// const mySelector = createDeepEqualSelector(
//   (state) => state.User.user,
//   (user) => {
//     return {
//       user,
//     };
//   },
// );

const mapStateToProps = (state) => {
  // console.log('mapState: ', state.authReducer) //.user
    return {
    Store: state,
    loggedIn: state.authReducer.loggedIn,
    user: state.authReducer.user,
    signUpImage: state.authReducer.image?.uri
  };
};
const mapDispacthToProps = (dispatch) => {
    return {
        // getuser: (pass, fail) => dispatch(actions.GHFS.getuser(pass, fail)),
        // loading: (value) => dispatch({ type: "LOADING", value }),
        setImage: (image) => dispatch(actions.setImage(image)),
    }
}
export default connect(mapStateToProps, mapDispacthToProps)(ExtendedHeader);
