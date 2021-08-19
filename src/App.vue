<template>
  <v-app :class="[colorTheme]">
    <SvgDecoration/>
    <v-main class="px-md-10" :class="[morning?'morning':'night']">
      <div class="v-container px-16">
        <v-toolbar flat color="transparent" class="pa-0">
        <v-toolbar-title>
          <router-link to="/" class="color-change text-decoration-none">C</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
        class="mx-2 border-outset dark"
        fab
        depressed
        small>
        <v-icon
        :color="morning?'#000':'#fff'">
          mdi-menu
        </v-icon>
      </v-btn>
      </v-toolbar>
      <router-view/>
      </div>
    </v-main>
    <PortfolioFooter :class="['py-5',morning?'morning':'night']" />
  </v-app>
</template>
<script>
import SvgDecoration from '@/components/SvgDecoration.vue';
import PortfolioFooter from '@/components/Footer.vue';

export default {
  name: 'App',

  components: {
    SvgDecoration,
    PortfolioFooter,
  },

  data: () => ({
    //
  }),
  computed: {
    morning() {
      return this.$store.state.classList.bgMorning;
    },
    colorTheme() {
      return this.$store.state.classList.colorTheme;
    },
  },
};
</script>
<style lang="scss">
.morning{
  background: #EEEEEE;
}

.night{
  background: #2b2c2f;
}

.v-toolbar__content{
  padding: 0 !important;
}
</style>
