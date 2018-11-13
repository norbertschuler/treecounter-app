import React, { Component } from 'react';
import PropTypes from 'prop-types';
import t from 'tcomb-form';
import LoadingIndicator from '../Common/LoadingIndicator';
import PrimaryButton from '../Common/Button/PrimaryButton';
import TextHeading from '../Common/Heading/TextHeading';
import TextBlock from '../Common/Text/TextBlock';
import CardLayout from '../Common/Card';
import i18n from '../../locales/i18n.js';
import DescriptionHeading from '../Common/Heading/DescriptionHeading';
import {
  redeemSignIn,
  redeem_outline_red,
  redeem_outline,
  close_green
} from '../../assets';

let TCombForm = t.form.Form;

// const allSchemaOptions = {
//   template: formLayout,
//   ...schemaOptions
// };
export default class Redemption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.code
    };
    this.onChange = this.onChange.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.code });
  }
  onSetRedemption() {
    // let value = this.refs.redemptionForm.getValue();
    if (this.state.value) {
      this.props.setRedemptionCode(this.state.value);
    }
  }
  onValidationCode() {
    // let value = this.refs.redemptionForm.getValue();
    if (this.state.value) {
      this.props.validateCode(this.state.value);
    }
  }
  onChange(value) {
    this.setState({ value: value });
  }
  render() {
    const { code, updateRoute } = this.props;
    let content,
      button,
      icon,
      errorText,
      successText,
      actionText,
      statusText,
      form;
    errorText = this.props.errorText ? (
      <div className="pftp-error-heading">{this.props.errorText}</div>
    ) : null;
    successText = this.props.successText ? (
      <div className="pftp-description-heading">{this.props.successText}</div>
    ) : null;
    actionText = this.props.actionText ? (
      <div className="pftp-description-heading">{this.props.actionText}</div>
    ) : null;
    statusText = this.props.statusText ? (
      <div className="pftp-description-heading">{this.props.statusText}</div>
    ) : null;
    content = (
      <div>
        {errorText}
        {statusText}
        {successText}
        {actionText}
      </div>
    );
    if (
      this.props.pageStatus === 'code-validated' &&
      this.props.codeStatus === 'error'
    ) {
      button = (
        <div className="row">
          <PrimaryButton onClick={() => this.onValidationCode()}>
            {i18n.t('label.validate_code')}
          </PrimaryButton>
        </div>
      );
      icon = redeem_outline_red;
    } else if (this.props.pageStatus === 'code-unknown') {
      button = (
        <div className="row">
          <PrimaryButton onClick={() => this.onValidationCode()}>
            {i18n.t('label.validate_code')}
          </PrimaryButton>
        </div>
      );
      icon = redeem_outline;
    } else if (this.props.pageStatus === 'not-logged-in') {
      button = (
        <div className="row">
          <PrimaryButton onClick={this.props.loginButton}>
            {i18n.t('label.login')}
          </PrimaryButton>
          <button
            className="pftp-button-primary1"
            onClick={this.props.signupButton}
          >
            {i18n.t('label.signUp')}
          </button>
        </div>
      );
      icon = redeemSignIn;
    } else {
      button = (
        <div className="row">
          <PrimaryButton onClick={() => this.onSetRedemption()}>
            {this.props.buttonText}
          </PrimaryButton>
        </div>
      );
      icon = redeem_outline;
    }

    let value = this.state.value;
    if (this.props.pageStatus !== 'success') {
      let disabled = false;
      if (this.props.pageStatus === 'code-unknown') {
        disabled = false;
        // form = (
        //   <TCombForm
        //     ref="redemptionForm"
        //     type={redemptionEditableFormSchema}
        //     options={schemaOptionsRedeemEditable}
        //     value={value}
        //     onChange={this.onCrossClick()}
        //   />
        // );
      } else {
        disabled = true;
        // form = (
        //   <TCombForm
        //     ref="redemptionForm"
        //     type={redemptionNonEditableFormSchema}
        //     options={schemaOptionsRedeemNonEditable}
        //     value={value}
        //   />
        // );
      }
      const onCrossClick = () => {
        this.props.updateRoute('app_redeem');
      };
      let right_icon = disabled ? (
        <img
          className="glyphicon"
          src={close_green}
          onClick={() => onCrossClick()}
        />
      ) : null;
      form = (
        <div className="pftp-textfield-container">
          <div className="pftp-textfield">
            <div className="pftp-textfield_redeeminput">
              <div>
                {right_icon}
                <input
                  type="text"
                  autoComplete="new-password"
                  required="required"
                  disabled={disabled}
                  maxLength="20"
                  value={value}
                  onChange={evt => this.onChange(evt.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      form = null;
      button = (
        <div className="row">
          <PrimaryButton onClick={() => this.props.updateRoute('app_myTrees')}>
            {this.props.buttonText}
          </PrimaryButton>
        </div>
      );
    }
    let heading;
    if (this.props.path === 'redeem') {
      heading = i18n.t('label.redeem_trees');
    } else if (this.props.path === 'claim') {
      heading = i18n.t('label.claim_trees');
    }
    return this.props.loading ? (
      <div className="sidenav-wrapper">
        <LoadingIndicator />
      </div>
    ) : (
      <div className="app-container__content--center sidenav-wrapper redemption_container">
        <TextHeading>
          {heading}
          <DescriptionHeading>
            {i18n.t('label.redeem_heading')}
          </DescriptionHeading>
        </TextHeading>
        <CardLayout className="redeem_card_layout">
          <div className="imageContainerRedeem">
            <img src={icon} />
          </div>
          {content}
          {form}
          {button}
        </CardLayout>
      </div>
    );
  }
}

Redemption.propTypes = {
  pageStatus: PropTypes.string,
  code: PropTypes.string,
  isLoggedIn: PropTypes.any,
  updateRoute: PropTypes.func,
  setRedemptionCode: PropTypes.func,
  validateCode: PropTypes.func,
  loginButton: PropTypes.func,
  signupButton: PropTypes.func,
  path: PropTypes.string,
  loading: PropTypes.any,
  codeStatus: PropTypes.string,
  statusText: PropTypes.string,
  successText: PropTypes.string,
  errorText: PropTypes.string,
  actionText: PropTypes.string,
  buttonText: PropTypes.string,
  tpos: PropTypes.array
};