<template>
  <div class="home px-10">
    <Banner/>
    <Intro class="mt-16"/>
    <Portfolio class="mt-16" />
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import Intro from '@/components/Intro.vue';
import Portfolio from '@/components/Portfolio.vue';

// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    Banner,
    Intro,
    Portfolio,
  },
};
</script>
