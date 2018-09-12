import i18n from '../locales/i18n.js';

export const commonValidator = function(value, path, context) {
  let hasConfig = context && context.options.config;
  if (!value && hasConfig && hasConfig.required) {
    console.log('TEST_ERROR', value, path, context);
    return i18n.t(context.options.label) + i18n.t('label.isRequired');
  } else if (value && hasConfig) {
    if (hasConfig.email && !/(.)+@(.)+/.test(value)) {
      return i18n.t('label.enterValidEmail');
    } else if (hasConfig.attr && hasConfig.attr.maxlength) {
      if (value.length > hasConfig.attr.maxlength) {
        return i18n.t('label.invalidLength') + hasConfig.attr.maxlength;
      }
    }
  } else {
    i18n.t('label.invalidValueMsg') + i18n.t(context.options.label);
  }
};