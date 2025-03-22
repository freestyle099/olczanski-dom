import { extend, ValidationProvider } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';

// install rules and localization
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

// Add a rule.
extend('required', {
  ...rules.required,
  message: 'To pole jest wymagane',
});
extend('email', {
  ...rules.email,
  message: 'Wpisz poprawny adres email',
});
extend('min', {
  ...rules.min,
  message: (value, args) => {
    return `To pole musi zawierać min. ${args.length} znaków`;
  },
});
extend('max', {
  ...rules.max,
  message: (value, args) =>
    `To pole nie może być większe niż ${args.length} znaków`,
});

export default {
  components: {
    ValidationProvider,
  },
};
