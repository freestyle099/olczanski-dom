<template>
  <button
    :class="`btn btn--${size}`"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    size: {
      type: String,
      default: 'large',
    },
  },
};
</script>

<style scoped lang="scss">
.btn {
  padding: 0.6875rem 2.3125rem;
  background-color: var(--primary-color);
  color: var(--white-color);
  font-size: 1rem;
  font-weight: 700;
  font-family: inherit;
  border-radius: 4px;
  border: 3px solid var(--primary-color);
  transition: 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: var(--primary-color);
    background-color: var(--white-color);
  }
}
</style>
