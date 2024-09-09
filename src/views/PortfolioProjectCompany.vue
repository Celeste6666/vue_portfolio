<script>
export default {
  name: 'PortfolioProjectCompany',
  data() {
    return {

      slidesList: [{
        id: 1,
        title: "test"
      }, {
        id: 2,
        title: "test2"
      }],
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
    }
  },
  methods: {

  },
  computed: {
    morning: {
      get() {
        return this.$store.state.classList.bgMorning;
      },
    },

    project() {
      console.log(this.$store.state.portfolio, this.$route)
      return this.$store.state.portfolio.find(({ id }) => id === parseInt(this.$route.params.id))


    }
  },
  mounted() {

  }
}
</script>

<template>
  <v-container class="mt-5">
    <v-row align="start" justify="space-between">
      <v-col md="7">
        <div class="border-outset ">
          <v-carousel show-arrows="hover" :interval="10000" cycle hide-delimiter-background>
            <template v-slot:prev="{ on, attrs }">
              <v-btn class="ma-1" outlined fab color="white" v-bind="attrs" v-on="on">
                <v-icon> fas fa-arrow-left</v-icon>

              </v-btn>
            </template>
            <template v-slot:next="{ on, attrs }">
              <v-btn class="ma-1" outlined fab color="white" v-bind="attrs" v-on="on"> <v-icon> fas
                  fa-arrow-right</v-icon></v-btn>
            </template>
            <v-carousel-item v-for="slide in project.pictureList" :key="slide">
              <v-sheet height="100%" class="position-relative">
                <v-img :class="['align-center position-absolute']" :src="slide" :alt="project.pictureAlt" />
              </v-sheet>
            </v-carousel-item>
          </v-carousel>

        </div>
        <div class="d-flex justify-end">
          <v-btn :href="project.url" target="_blank" rounded class="color-change border-outset mt-4">
            <span>Link</span>
            <span class="ml-1">
              <v-icon small>fas fa-arrow-right</v-icon>
            </span>
          </v-btn>
        </div>
      </v-col>
      <v-col md="5" class="d-flex flex-column">

        <div>
          <v-chip :ripple="false" color="grey lighten-2" x-small pill class="ma-1" v-for="skill of project.skill"
            :key="skill">{{ skill }}</v-chip>
        </div>
        <h1 class="mt-4 mb-3 text-h6 font-weight-bold">{{ project.name }}</h1>
        <!--eslint-disable-next-line-->
        <p v-html="project.description" :class="[morning ? 'black--text' : 'grey--text text--lighten-1']">

        </p>

      </v-col>
    </v-row>
  </v-container>
</template>

<style lang='scss'>
.theme--dark.v-btn--active:before,
.theme--dark.v-btn--active:hover:before {
  opacity: .3 !important;
}
</style>