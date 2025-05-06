<template>
  <section
    id="witamy"
    class="home"
  >
    <div class="container">
      <h2 class="home__title heading-2">
        {{ home.title }}
      </h2>
      <div
        class="home__description"
        v-html="sanitizeText(home.description)"
      />
    </div>
  </section>
</template>

<script>
import sanitizeHtml from 'sanitize-html';

export default {
  props: {
    home: {
      type: Object,
      default: () => ({
        title: '',
        description: '',
      }),
      required: true,
    },
  },
  computed: {
    sanitizeText() {
      return (text) => sanitizeHtml(text);
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  padding: 3.125rem 0;
  &__title {
    margin-bottom: 2rem;
  }
  &__title,
  &__description {
    text-align: center;
  }
}
</style>
