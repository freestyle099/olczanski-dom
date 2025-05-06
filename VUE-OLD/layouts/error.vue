<template>
  <div class="container">
    <h1 class="title">Nie znaleziono takiej strony.</h1>
    <nuxt-link
      class="link"
      to="/"
    >
      Powrót do strony głównej
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Error',
};
</script>

<style scoped lang="scss">
.container {
  padding-bottom: 50px;
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.title {
  margin-bottom: 2rem;
  text-align: center;
}
.link {
  background-color: var(--primary-color);
  color: var(--white-color) !important;
  text-decoration: none;
  border: 2px solid var(--primary-color);
  border-radius: 4px;
  padding: 0.7rem 1.4rem;
  font-weight: bold;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: var(--white-color);
    color: var(--primary-color) !important;
  }
}
</style>
