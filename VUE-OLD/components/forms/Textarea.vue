<template>
  <ValidationProvider
    v-slot="{ errors }"
    mode="eager"
    :rules="rules"
    :name="name"
  >
    <div class="input">
      <textarea
        :id="name"
        type="text"
        :name="name"
        class="input__field"
        :value="value"
        rows="8"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
      />
      <span
        v-if="errors.length"
        class="input__error"
        >{{ errors[0] }}</span
      >
    </div>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
export default {
  components: {
    ValidationProvider,
  },
  model: {
    event: 'input',
  },
  props: {
    type: {
      type: String,
      default: 'text',
    },
    rules: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      content: this.value,
    };
  },
};
</script>

<style scoped lang="scss">
.input {
  display: grid;
  gap: 0.5rem;

  &__label,
  &__error {
    font-size: 0.875rem;
    font-weight: 700;
  }
  &__field {
    resize: none;
    border: none;
    border-radius: 4px;
    padding: 0.8rem 1rem;
    font-family: inherit;
    font-size: 0.875rem;
    color: var(--white-color);
    background-color: var(--primary-color-rgba);
    &::placeholder {
      color: var(--white-color);
    }
    &:focus {
      outline: none;
      border-color: var(--font-color);
    }
  }
  &__error {
    background-color: var(--error-color);
    color: var(--white-color);
    border-radius: 4px;
    padding: 0.3rem 0.7rem;
  }
}
</style>
