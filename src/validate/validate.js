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

// 自定义验证规则
Validator.extend('mobile', {
  messages: {
    zh_CN: (veeField) => '手机号 输入不正确,且精确到11位数'
  },
  validate: value => {
   let result = /^1[34578]\d{9}$/.test(value);
   return result;
  }
});
Validator.extend('Chinese', {
  messages: {
    zh_CN: (veeField) => '只允许输入中文、英文、字母和-'
  },
  validate: value => {
   let result = /^[\u4e00-\u9fa5a-zA-Z-]+$/.test(value);
   return result;
  }
});


export default Validator; 
