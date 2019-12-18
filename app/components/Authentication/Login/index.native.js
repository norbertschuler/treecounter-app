import React, { Component } from 'react';
import t from 'tcomb-form-native';
import PropTypes from 'prop-types';
import { Text, View, Image, Keyboard, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import scrollStyle from '../../../styles/common/scrollStyle';
import { loginFormSchema } from '../../../server/formSchemas/login';
import i18n from '../../../locales/i18n.js';
import styles from '../../../styles/login';
import PrimaryButton from '../../Common/Button/PrimaryButton';
import { planetLogo, eye, closeeye } from '../../../assets';
import TouchableItem from '../../Common/TouchableItem.native';
import { TextField } from 'react-native-material-textfield';
import { Formik } from 'formik';
import { generateFormikSchemaFromFormSchema } from './../../../helpers/utils';
let Form = t.form.Form;
import HeaderNew from './../../Header/HeaderNew.native';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidePassword: true
    };
  }

  togglePassword = () => {
    this.setState({
      hidePassword: !this.state.hidePassword
    });
  };
  componentWillMount() {
    this.validationSchema = generateFormikSchemaFromFormSchema(loginFormSchema);
  }

  onForgotPasswordClicked = () => {
    this.props.updateRoute('app_forgotPassword');
  };

  onSignupClicked = () => {
    this.props.updateRoute('app_signup');
  };

  onProfilePickerClick = () => {
    this.props.updateRoute('pickup_profile_modal');
  };

  handleLoginClick = () => {
    if (this.refs.loginForm.value) {
      Keyboard.dismiss();
    }
    // eslint-disable-next-line no-underscore-dangle
    this.props.onPress();
  };
  render() {
    const backgroundColor = 'white';
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={[
          scrollStyle.styleContainer,
          { backgroundColor: backgroundColor, marginBottom: 300 }
        ]}
        enableOnAndroid
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="always"
        style={styles.keyboardScrollView}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled
      >
        <View style={styles.parentContainer}>
          <View style={styles.headerContainer}>
            <Image
              style={styles.imageStyle}
              resizeMode={'contain'}
              source={planetLogo}
            />
            <Text style={styles.loginDescriptionStyle}>
              {i18n.t('label.login_description')}
            </Text>
          </View>

          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <Formik
                initialValues={{
                  _username: '',
                  _password: ''
                }}
                ref={'loginForm'}
                onSubmit={values => {
                  console.log(values);
                }}
                validationSchema={this.validationSchema}
              >
                {props => (
                  <>
                    <View>
                      <View>
                        <TextField
                          label={i18n.t('label.email')}
                          value={props.values._username}
                          tintColor={'#89b53a'}
                          titleFontSize={12}
                          lineWidth={1}
                          error={
                            props.touched._username && props.errors._username
                          }
                          labelTextStyle={{ fontFamily: 'OpenSans-Regular' }}
                          titleTextStyle={{ fontFamily: 'OpenSans-SemiBold' }}
                          affixTextStyle={{ fontFamily: 'OpenSans-Regular' }}
                          returnKeyType="next"
                          onChangeText={props.handleChange('_username')}
                          onBlur={props.handleBlur('_username')}
                        />
                      </View>

                      <View style={styles.formView}>
                        <View style={{ width: '100%' }}>
                          <TextField
                            label={i18n.t('label.password')}
                            value={props.values._password}
                            tintColor={'#89b53a'}
                            titleFontSize={12}
                            lineWidth={1}
                            secureTextEntry={this.state.hidePassword}
                            labelTextStyle={{ fontFamily: 'OpenSans-Regular' }}
                            titleTextStyle={{ fontFamily: 'OpenSans-SemiBold' }}
                            affixTextStyle={{ fontFamily: 'OpenSans-Regular' }}
                            blurOnSubmit={false}
                            error={
                              props.touched._password && props.errors._password
                            }
                            onChangeText={props.handleChange('_password')}
                            onBlur={props.handleBlur('_password')}
                          />
                        </View>

                        <TouchableOpacity
                          onPress={() => this.togglePassword()}
                          style={{ marginLeft: '-14%', bottom: -6 }}
                        >
                          {this.state.hidePassword ? (
                            <Image
                              source={eye}
                              resizeMode={'contain'}
                              style={{ height: 24 }}
                            />
                          ) : (
                            <Image
                              source={closeeye}
                              resizeMode={'contain'}
                              style={{ height: 24 }}
                            />
                          )}
                        </TouchableOpacity>
                      </View>
                    </View>
                  </>
                )}
              </Formik>
            </View>
            <View style={styles.bottomRow}>
              <TouchableItem onPress={this.onForgotPasswordClicked}>
                <Text style={styles.bottomTextHighlight}>
                  {i18n.t('label.forgot_ur_password')}
                </Text>
              </TouchableItem>
            </View>
            <View style={styles.bottomRow}>
              <TouchableItem
                style={{ paddingRight: 5 }}
                onPress={this.onSignupClicked}
              >
                <Text style={styles.bottomTextHighlight}>
                  {i18n.t('label.dont_have_account')} {i18n.t('label.signUp')}
                </Text>
              </TouchableItem>

              <PrimaryButton
                onClick={this.handleLoginClick}
                buttonStyle={styles.loginButtonStyle}
                textStyle={{ fontSize: 16 }}
              >
                {i18n.t('label.login')}
              </PrimaryButton>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

Login.propTypes = {
  onPress: PropTypes.func.isRequired,
  onError: PropTypes.func,
  updateRoute: PropTypes.func,
  formValue: PropTypes.any,
  schemaOptions: PropTypes.any
};
