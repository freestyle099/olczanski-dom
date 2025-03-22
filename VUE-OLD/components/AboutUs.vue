<template>
  <section
    id="o-nas"
    class="about"
  >
    <div class="container">
      <h2 class="about__title heading-2">O nas</h2>
      <div class="about__items">
        <div
          v-for="about in allAbouts"
          :key="about.id"
          class="about__item"
        >
          <svg class="about__icon">
            <use :xlink:href="`/sprite.svg#icon-${about.iconPath}`" />
          </svg>
          <p>
            {{ about.title }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutUs',
  props: {
    allAbouts: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped lang="scss">
@use '@/assets/breakpoints' as bp;

.about {
  padding: 3.125rem 0;
  background-color: var(--background-color);

  &__title {
    margin-bottom: 2rem;
    text-align: center;
  }
  &__items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
    grid-template-rows: max-content 1fr;
    gap: 1rem;
    @media screen and (max-width: bp.$sm) {
      grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
    }
  }
  &__item {
    display: grid;
    justify-content: center;
    align-content: start;
    justify-items: center;
    text-align: center;
  }
  &__icon {
    width: 5rem;
  }
}
</style>
