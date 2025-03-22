<template>
  <div>
    <Header :background-image="header.background.responsiveImage" />
    <main>
      <Home :home="home" />
      <AboutUs :all-abouts="allAbouts" />
      <Live />
      <Gallery :images="gallery.image" />
    </main>
    <Footer
      :src="contact.background.responsiveImage.src"
      :alt="contact.background.responsiveImage.alt"
      :webp-src-set="contact.background.responsiveImage.webpSrcSet"
    />
  </div>
</template>

<script>
import { request } from '@/datocms';
import { HEADER_QUERY } from '~/graphql';

export default {
  components: {},
  asyncData() {
    return new Promise((resolve, reject) => {
      request({
        query: HEADER_QUERY,
      })
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  },
};
</script>
