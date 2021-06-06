import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image,
} from 'react-native';
import styles from './styles';
import {Fonts} from '../../../assets/fonts';
export default class CheckoutInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      text: this.props.value,
      input: this.textInput,
    };
  }
  getFocus = () => {
    this.setState((p) => {
      return {
        ...p,
        focused: !p.focused,
      };
    });
  };
  onChangeText = (t) => {
    this.setState((p) => {
      return {...p, text: t};
    }, this.props.onChangeText(t));
  };
  clear = () => {
    this.input.clear();
    this.input.blur();
    this.setState((p) => {
      return {
        ...p,
        text: '',
      };
    });
  };

  render() {
    // let textShow = this.props.value

    // if (this.props.value === '') {
    //     textShow = this.props.text
    // } else {
    //     textShow = this.props.value
    // }

    return (
      <View
        style={[
          {
            height: this.props.height,
            width: this.props.width,
            flexDirection: 'row',
            backgroundColor: '#FFFFFF',
            borderRadius: this.props.height * 0.5,
            elevation: 2,
            marginVertical: 3 * vw,
            marginHorizontal: 2 * vw,
            fontFamily: Fonts.KR,
            shadowColor: '#999',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            //   elevation: 5,
          },
          this.props.style,
        ]}>
        <View style={styles.textContainer}>
          <TextInput
            maxLength={this.props.maxLength}
            ref={(r) => {
              this.props.ref = r;
            }}
            placeholder={this.props.text}
            placeholderTextColor="#CCCCCC"
            keyboardType={this.props.keyboard}
            value={this.props.value}
            onChangeText={(t) => {
              this.onChangeText(t);
            }}
            style={[
              {
                flex: 1,
                color: '#333333',
                fontSize: this.props.height * 0.35,
                fontFamily: Fonts.KR,
              },
              this.props.textStyle,
            ]}
            underlineColorAndroid="transparent"
          />
        </View>
      </View>
    );

    // if (this.state.focused === true) {
    //     return (
    //         <View onPress={this.getFocus}
    //             style={{
    //                 height: this.props.height, width: this.props.width, flexDirection: 'row', backgroundColor: '#FFFFFF',
    //                 borderRadius: this.props.height * 0.5, elevation: 2, marginVertical: 3 * vw, marginHorizontal: 2 * vw, fontFamily: Fonts.KR, shadowColor: "#000",
    //                 shadowOffset: {
    //                     width: 0,
    //                     height: 2,
    //                 },
    //                 shadowOpacity: 0.25,
    //                 shadowRadius: 3.84,

    //                 elevation: 5,
    //             }}>
    //             <View style={styles.textContainer}><TextInput maxLength={this.props.maxLength ? this.props.maxLength : null} autoFocus={true} ref={r => { this.props.ref = r }} placeholder={this.props.text} placeholderTextColor="#CCCCCC" keyboardType={this.props.keyboard} onBlur={this.getFocus} value={this.props.value} onChangeText={t => { this.onChangeText(t) }} autoFocus={true} style={{ flex: 1, color: '#999999', fontSize: this.props.height * 0.35, fontFamily: Fonts.KR }} underlineColorAndroid='transparent' /></View>
    //         </View>
    //     )
    // } else if (this.state.focused === false) {
    //     return (
    //         <TouchableOpacity onPress={this.getFocus} style={{
    //             height: this.props.height, width: this.props.width, flexDirection: 'row',
    //             backgroundColor: '#FFFFFF', borderRadius: this.props.height * 0.5, elevation: 2, marginVertical: 2 * vw, marginHorizontal: 2 * vw, shadowColor: "#000",
    //             shadowOffset: {
    //                 width: 0,
    //                 height: 2,
    //             },
    //             shadowOpacity: 0.25,
    //             shadowRadius: 3.84,

    //             elevation: 5,
    //         }}>
    //             <View style={styles.textContainer}><Text style={[styles.text, { fontSize: this.props.height * 0.35, fontFamily: Fonts.KR }]}>{textShow}</Text></View>
    //         </TouchableOpacity>
    //     )
    // }
  }
}
