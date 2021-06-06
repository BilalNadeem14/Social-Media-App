import React from 'react';
import { Text, View, TextInput } from 'react-native';
import TextMedium from '../TextMedium';
import styles from './styles';
import Ripple from 'react-native-material-ripple';
import IconButton from '../IconButton';
import { icons } from '../../assets/images';
import vh from '../../utils/units/vh';
import TextRegular from '../TextRegular';
import theme from '../../utils/units/theme';
import TextBold from '../TextBold';

class MainInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  toggle = () => {
    this.setState({ show: !this.state.show });
  };
  renderEye = () => {
    if (this.props.secureTextEntry === true) {
      return (
        <IconButton
          hitSlop={{
            top: 5,
            bottom: 5,
          }}
          onPress={this.toggle}
          iconStyle={styles.rightIcon}
          icon={this.state.show === false ? icons.eyeClose : icons.eyeOpen}
        />
      );
    }
  };
  renderLabel = () => {
    if (this.props.label) {
      return (
        <View style={[styles.labelContainer, this.props.labelContainer]}>
          <TextBold style={[styles.label, this.props.labelStyles]}>
            {this.props.label}{' '}
            {this.props.required ? (
              <TextBold style={[styles.label, { color: '#CE1127' }]}>
                *
              </TextBold>
            ) : null}
          </TextBold>
          {this.props.hint ? (
            <TextRegular
              style={[
                styles.label,
                { color: '#666666', fontSize: vh * 1.6, marginBottom: vh * 1 },
                this.props.labelStyle
              ]}>
              {this.props.hint}{' '}
            </TextRegular>
          ) : null}
        </View>
      );
    }
  };
  render() {
    var secure = false;
    if (this.props.secureTextEntry === true && this.state.show === false) {
      secure = true;
    } else {
      secure = false;
    }
    return (
      <View>
        {this.renderLabel()}
        <View style={[styles.container, this.props.style]}>
          {this.props.leftIcon && (
            <IconButton
              iconStyle={[styles.leftIcon, this.props.leftIconStyle]}
              icon={this.props.leftIcon}
            />
          )}
          <TextInput
            placeholderTextColor={theme.colors.placeholderGray}
            {...this.props}
            secureTextEntry={secure}
            selectionColor={theme.colors.primaryColor}
            style={[styles.field, this.props.fieldStyle]}
          />
          {this.renderEye()}
          {this.props.rightIcon2 && (
            <IconButton
              iconStyle={[styles.rightIcon, this.props.rightIconStyle]}
              icon={this.props.rightIcon2}
            />
          )}
          {this.props.rightIcon && (
            <IconButton
              iconStyle={[styles.rightIcon, this.props.rightIconStyle]}
              icon={this.props.rightIcon}
              onPress={this.props.rightIconPress}
            />
          )}
        </View>
      </View>
    );
  }
}
export default MainInput;
