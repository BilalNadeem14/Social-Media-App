import React, {Component} from 'react';
import {TouchableOpacity, Image, Text, View, TextInput} from 'react-native';
import styles from './styles';
// import LinearGradient from 'react-native-radial-gradient'
export default class NewInput extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={[styles.topSrch, this.props.container]}>
        <TextInput
          onChangeText={this.props.onChangeText}
          value={this.props.value}
          style={[styles.topSrchinpt, this.props.inputStyles]}
          maxLength={this.props.maxLength}
          secureTextEntry={this.props.secure}
          keyboardType={this.props.keyboard}
          editable={
            this.props.editable !== undefined ? this.props.editable : true
          }
          selectionColor="#0C39B4"
          placeholder={this.props.placeholder}
          placeholderTextColor="#ccc"
          {...this.props}
        />
      </View>
    );
  }
}
