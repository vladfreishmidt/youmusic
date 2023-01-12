import {
  Form as VeeForm,
  Field as VeeField,
  ErrorMessage,
  defineRule,
} from "vee-validate";
import {
  required,
  min,
  max,
  min_value as minVal,
  max_value as maxVal,
  email,
  alpha_spaces as alphaSpaces,
  confirmed,
  not_one_of as excluded,
} from "@vee-validate/rules";

export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("alpha_spaces", alphaSpaces);
    defineRule("email", email);
    defineRule("min_value", minVal);
    defineRule("max_value", maxVal);
    defineRule("confirmed", confirmed);
    defineRule("excluded", excluded);
  },
};
