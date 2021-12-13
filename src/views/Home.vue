<template>
  <div class="home px-md-10 px-0">
    <Banner />
    <Intro id="about" class="mt-16" />
    <Portfolio id="portfolio" class="mt-16" />
    <Contact id="contact" class="mt-16" />
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import Intro from '@/components/Intro.vue';
import Portfolio from '@/components/Portfolio.vue';
import Contact from '@/components/Contact.vue';

// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    Banner,
    Intro,
    Portfolio,
    Contact,
  },
};
</script>
