<template>
  <section
    id="na-zywo"
    class="live"
  >
    <div class="container">
      <h2 class="live__title heading-2">Podgląd na żywo</h2>

      <div class="live__cameras">
        <div class="live__camera">
          <h3 class="live__camera-title heading-4">Kasprowy Wierch</h3>
          <iframe
            src="https://imageserver.webcamera.pl/umiesc/kasprowy-wierch"
            class="live__iframe"
          />
        </div>
        <div class="live__camera">
          <h3 class="live__camera-title heading-4">Krupówki</h3>
          <iframe
            src="https://imageserver.webcamera.pl/umiesc/krupowkidolne"
            class="live__iframe"
          />
        </div>
      </div>

      <h2 class="live__title live__subtitle heading-2">Pogoda</h2>
      <div class="live__weather">
        <div class="live__left">
          <h3 class="live__weather-title heading-4">
            {{ weather.name }}, Polska
          </h3>
          <h3 class="live__weather-title heading-4">
            {{ Math.round(weather.main.temp - 274.15) }} &#176; C
          </h3>
          <img
            v-if="weather.weather"
            :src="`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`"
            alt=""
          />
          <p>{{ weather.weather[0].description }}</p>
        </div>
        <div class="live__right">
          <p>Wilgotność powietrza: {{ weather.main.humidity }}%</p>
          <p>Ciśnienie atmosferyczne: {{ weather.main.pressure }} hPa</p>
          <p>Zachmurzenie: {{ weather.clouds.all }}%</p>
          <p>Widoczność: {{ weather.visibility }}m</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Live',
  data() {
    return {
      weather: {
        main: {},
        clouds: {},
        weather: [{ description: '', icon: '04n' }],
      },
    };
  },
  mounted() {
    this.$axios
      .get('/weather')
      .then(({ data }) => {
        this.weather = data;
      })
      .catch((err) => console.error(err));
  },
};
</script>

<style scoped lang="sass">
@use '@/assets/breakpoints' as bp

.live
  padding: 3.125rem 0
  &__title
    text-align: center
    margin-bottom: 2rem
  &__subtitle
    margin: 2rem 0
  &__cameras
    display: grid
    gap: 1rem
    grid-template-columns: 1fr 1fr
    @media screen and (max-width: bp.$sm)
      grid-template-columns: 1fr
  &__camera-title
    text-align: center
    margin-bottom: .5rem
  &__iframe
    width: 100%
    height: 15rem
    border: none
  &__weather
    display: grid
    grid-template-columns: .3fr 1fr 1fr .3fr
    grid-template-areas: ". left right ."
    @media screen and (max-width: bp.$md)
      grid-template-areas: "left right"
      grid-template-columns: 1fr 1fr
    @media screen and (max-width: bp.$sm)
      grid-template-areas: "left" "right"
      grid-template-columns: 1fr
  &__weather-title, &__weather
    color: var(--white-color)
  &__left, &__right
    padding: 2rem
    text-align: center
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

  &__left
    background-color: var(--secondary-color)
    grid-area: left
  &__right
    background-color: var(--tertiary-color)
    grid-area: right
</style>
