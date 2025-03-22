<template>
  <section
    id="galeria"
    class="gallery"
  >
    <div class="container">
      <h2 class="gallery__title heading-2">Galeria</h2>
      <div class="gallery__items">
        <div
          v-for="(image, i) in images"
          :key="image.id"
          class="gallery__image-wrapper"
        >
          <img
            class="gallery__image"
            :src="image.url"
            :alt="image.responsiveImage.alt"
            @click="index = i"
          />
        </div>
      </div>
      <CoolLightBox
        :items="images.map((el) => el.responsiveImage.src)"
        :index="index"
        @close="index = null"
      />
    </div>
  </section>
</template>

<script>
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css';

import CoolLightBox from 'vue-cool-lightbox';

export default {
  name: 'Gallery',
  components: { CoolLightBox },
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      index: null,
    };
  },
};
</script>

<style scoped lang="sass">
@use '@/assets/breakpoints' as bp

.gallery
  padding: 3.125rem 0
  background-color: var(--background-color)
  &__title
    text-align: center
  &__items
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr))
    grid-auto-rows: 300px
    gap: 0.3rem
    padding-top: 2rem
    @media only screen and (max-width: bp.$sm)
      padding-top: 1rem
  &__image
    width: 100%
    height: 100%
    object-fit: cover
    cursor: pointer
</style>
