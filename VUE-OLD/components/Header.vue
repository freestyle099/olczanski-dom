<template>
  <header class="header">
    <div class="header__background">
      <div class="header__filter" />
      <img
        :src="backgroundImage.src"
        :alt="backgroundImage.alt"
        :srcset="backgroundImage.webpSrc"
        class="header__image"
      />
    </div>
    <div>
      <img
        src="/Logo.png"
        alt="Olczański Dom"
        class="header__logo"
      />
    </div>
    <Navigation />
    <div>
      <img
        src="/parzenica.png"
        alt="parzenica"
        class="header__mark"
      />
    </div>
  </header>
</template>

<script>
import Navigation from '~/components/Navigation';
export default {
  name: 'Header',
  components: { Navigation },
  props: {
    backgroundImage: {
      type: Object,
      default: () => ({
        src: '',
        alt: '',
        webpSrc: '',
      }),
    },
  },
};
</script>

<style scoped lang="scss">
@use '@/assets/breakpoints' as bp;

.header {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-height: 800px;
  &__background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
  }
  &__filter {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--recommend-color);
  }
  &__image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  &__logo {
    width: 100%;
  }
  &__mark {
    width: 100%;
    @media screen and (max-width: bp.$md) {
      width: 25vw;
    }
    @media screen and (max-width: bp.$sm) {
      width: 50vw;
    }
  }
}
</style>
