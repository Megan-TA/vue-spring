import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
import zhCN from 'vee-validate/dist/locale/zh_CN';

// 自定义属性规则
const dictionary = {
  zh_CN: {
    attributes: {
      userPhone: '手机号',
      userPassword: '密码',
      userConfirmPasswod: '确认密码'
    }
  }
};
Validator.updateDictionary(dictionary);

// 引入中文提示
Validator.addLocale(zhCN);

// 自定义配置
const config = {
  locale: 'zh_CN',
  events: 'blur',
  fieldsBagName: 'vee-fields'
};

Vue.use(VeeValidate, config);

export default Validator; 
