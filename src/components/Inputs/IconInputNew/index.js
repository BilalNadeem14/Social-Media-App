import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  LayoutAnimation,
} from 'react-native';
import styles from './styles';

export default class IconInputNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      text: '',
      secureTextEntry: this.props.secure,
      show: false,
    };
  }

  getFocused = () => {
    this.setState((p) => {
      return {
        ...p,
        focused: !p.focused,
      };
    });
  };

  change = (t) => {
    // console.log(this.state.text)
    // console.log(t)
    this.setState(
      (p) => {
        return {
          ...p,
          text: t,
        };
      },
      () => this.props.onChangeText(this.state.text),
    );
  };
  focus = () => {
    //  console.log("focus");

    this.setState(
      (p) => {
        return {
          ...p,
          focused: true,
        };
      },
      () => this.input.focus(),
    );
  };
  render() {
    return (
      <View>
        <Text style={styles.labelTxt}>{this.props.label}</Text>
        <View style={[styles.main,this.props.containerStyle]}>
          {this.props.editable == false ? (
            <Text
              style={[
                styles.field,
                { color: this.props.value != '' ? '#000' : '#ccc' },
              ]}>
              {this.props.value != ''
                ? this.props.value
                : this.props.placeholder}
            </Text>
          ) : (
            <TextInput
              ref={(r) => (this.input = r)}
              onChangeText={this.props.onChangeText}
              keyboardType={this.props.keyboard}
              selectionColor="#0C39B4"
              placeholderTextColor="#CCCCCC"
              placeholder={this.props.placeholder}
              secureTextEntry={this.state.secureTextEntry}
              autoFocus={false}
              editable={this.props.editable}
              value={this.props.value}
              style={[
                styles.field,
                this.props.showHint ? { width: '88%' } : null,
              ]}
              underlineColorAndroid="transparent"
              {...this.props}
            />
          )}

          {this.props.showHint && (
            <>
              <TouchableOpacity
                hitSlop={{ top: 5, bottom: 5, right: 5, left: 5 }}
                onPress={() => {
                  //   this.setState({
                  //     show: !this.state.show,
                  //   });
                  this.props.toggleMessage()
                  LayoutAnimation.configureNext(
                    LayoutAnimation.Presets.easeInEaseOut,
                  );
                }}
                style={styles.toolMainBtn}>
                <Image
                  source={require('../../../assets/images/passwordInfoGray.png')}
                  style={styles.toolMainImg}
                />
              </TouchableOpacity>
              {/* {this.state.show && (
                <View style={styles.toolMainContain}>
                  <Text style={styles.toolText}>
                    Your password must be strong. It must contain at least 1
                    uppercase, 1 lowercase letter, 1 number, special characters
                    for ex: @, !, # and the length must be minimum 8.
                  </Text>
                </View>
              )} */}
            </>
          )}

          {this.props.passwordField ? (
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  secureTextEntry: !this.state.secureTextEntry,
                });
              }}
              style={styles.imageContainer}>
              <Image
                resizeMode="contain"
                source={
                  this.state.secureTextEntry
                    ? this.props.eyeOff
                    : this.props.source
                }
                style={styles.imageContainer}
              />
            </TouchableOpacity>
          ) : (
            <View style={styles.imageContainer}>
              <Image source={this.props.source} style={styles.imageContainer} />
            </View>
          )}





          {/* <View style={styles.imageContainer}>
                        <Image source={this.props.source} style={styles.imageContainer} />
                    </View> */}

          {/* <TouchableOpacity hitSlop={{ top: 5, bottom: 5, right: 5, left: 5 }} onPress={() => {
                    this.setState({
                        show: !this.state.show
                    })
                }} style={styles.toolMainBtn}><Image source={require('../../../assets/images/passwordInfoGray.png')} style={styles.toolMainImg} /></TouchableOpacity>
                {this.state.show && <View style={styles.toolMainContain}>
                    <Text style={styles.toolText}>Your password must be strong. It must contain at least 1 uppercase, 1 lowercase letter, 1 number, special characters for ex: @, !, # and the length must be minimum 8.</Text>
                </View>} */}
        </View>
        {
          this.props.showInfo && <Text style={styles.info}>Your password must contain at least an uppercase, a lowercase, a number, a special character and the length must be minimum 8.</Text>
        }
      </View>
    );
  }
}
