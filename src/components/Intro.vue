<template>
  <div class="d-flex flex-column align-center justify-center">
    <div class="text-subtitle-1 text-center mt-6 color-change text-uppercase">main info</div>
    <div class="text-h4 text-center font-weight-bold text-uppercase">about me</div>
    <v-container class="mt-5">
      <v-row align="start" justify="space-between">
        <v-col md="5">
          <div class="pa-5 border-outset d-flex align-center justify-center">
            <v-img src="../assets/img/avatar.jpg"></v-img>
          </div>
          <div class="mt-3 text-center">
            <!-- <v-btn class="mx-2 border-outset dark" href="" fab depressed x-small>
              <v-icon class="grey--text">fab fa-facebook-f</v-icon>
            </v-btn>
            <v-btn class="mx-2 border-outset dark" fab depressed x-small>
              <v-icon class="grey--text">fab fa-instagram</v-icon>
            </v-btn> -->
            <v-btn
              class="mx-2 border-outset dark"
              fab
              depressed
              x-small
              href="https://www.linkedin.com/in/jouchun-kuo-ab08851b1/"
            >
              <v-icon class="grey--text">fab fa-linkedin-in</v-icon>
            </v-btn>
            <v-btn
              href="https://celeste6666.github.io/Celeste6666/"
              class="mx-2 border-outset dark"
              fab
              depressed
              x-small
            >
              <v-icon class="grey--text">fas fa-pencil-alt</v-icon>
            </v-btn>
            <v-btn
              href="https://github.com/Celeste6666"
              class="mx-2 border-outset dark"
              fab
              depressed
              x-small
            >
              <v-icon class="grey--text">fab fa-github-alt</v-icon>
            </v-btn>
            <v-btn
              href="https://codepen.io/your-work"
              class="mx-2 border-outset dark"
              fab
              depressed
              x-small
            >
              <v-icon class="grey--text">fab fa-codepen</v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col md="7" class="d-flex flex-column">
          <!--eslint-disable-next-line-->
          <p
            class="text-subtitle-1"
            :class="[morning ? 'grey--text text--darken-3' : 'grey--text text--lighten-1']"
          >
            【不斷學習與進步】<br />
            透過自學並利用不同的前端框架完成過多個電商作品及後台管理介面，並熟悉前後端資料串接技術，目前正進一步的學習
            TypeScript 及 Java。<br />
            【適應環境能力佳、抗壓能力強、團隊合作能力佳】<br />
            過往的經歷造就了高超的團隊合作能力及抗壓能力，在工作期間與同事相處融洽。<br />
            【冷靜成著處理事情的態度】<br />
            在警察行業中遇到過千奇百怪的事情，也因此學會了冷靜處理事情的重要性。<br />
          </p>
          <p>
            <v-btn href="./CV.pdf" target="_blank" small rounded class="color-change border-outset">
              Download CV
            </v-btn>
            <v-btn to="/#contact" small rounded class="ml-5 color-change border-outset">
              Hire Me
            </v-btn>
          </p>
        </v-col>
      </v-row>
      <div class="d-flex flex-row justify-center mt-5">
        <v-btn
          x-small
          rounded
          v-for="tabName of aboutMeTab"
          :key="tabName"
          :class="[
            'color-change',
            'text-capitalize',
            'mx-3',
            'pa-3',
            currentAboutMeTab === tabName ? 'border-inset' : 'border-outset',
          ]"
          @click.prevent="currentAboutMeTab = tabName"
        >
          {{ tabName }}
        </v-btn>
      </div>
      <component v-bind:is="currentAboutMeTab" class="mt-3"></component>
    </v-container>
  </div>
</template>
<script>
import Skills from './IntroSkills.vue';
import Experience from './IntroExperience.vue';
import Education from './IntroEducation.vue';

export default {
  components: {
    Skills,
    Experience,
    Education,
  },
  data() {
    return {
      aboutMeTab: ['Skills', 'Education', 'Experience'],
      currentAboutMeTab: 'Skills',
    };
  },
  computed: {
    morning: {
      get() {
        return this.$store.state.classList.bgMorning;
      },
    },
  },
};
</script>
<style lang="scss"></style>
