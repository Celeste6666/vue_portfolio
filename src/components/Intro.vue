<template>
<div class="d-flex flex-column align-center justify-center">
    <div class="text-caption text-center mt-6 color-change text-uppercase">main info</div>
    <div class="text-h5 text-center font-weight-bold text-uppercase">about me</div>
    <v-container class="mt-5">
    <v-row
        align="start"
        justify="space-between"
      >
        <v-col
        md="5" >
        <div
          class="pa-5 border-outset d-flex align-center justify-center"
          >
          <v-img
            src="../assets/img/avatar.jpg"
          ></v-img>
        </div>
        <div class="mt-3 text-center">
          <v-btn
            class="mx-2 border-outset dark"
            href=""
            fab
            depressed
            x-small>
            <v-icon class="grey--text">fab fa-facebook-f</v-icon>
          </v-btn>
          <v-btn
            class="mx-2 border-outset dark"
            fab
            depressed
            x-small>
            <v-icon class="grey--text">fab fa-instagram</v-icon>
          </v-btn>
          <v-btn
            class="mx-2 border-outset dark"
            fab
            depressed
            x-small>
            <v-icon class="grey--text">fab fa-linkedin-in</v-icon>
          </v-btn>
          <v-btn
            href="https://celeste6666.github.io/Celeste6666/"
            class="mx-2 border-outset dark"
            fab
            depressed
            x-small>
            <v-icon class="grey--text">fas fa-pencil-alt</v-icon>
          </v-btn>
          <v-btn
          href="https://github.com/Celeste6666"
            class="mx-2 border-outset dark"
            fab
            depressed
            x-small>
            <v-icon class="grey--text">fab fa-github-alt</v-icon>
          </v-btn>
          <v-btn
            href='https://codepen.io/your-work'
            class="mx-2 border-outset dark"
            fab
            depressed
            x-small>
            <v-icon class="grey--text">fab fa-codepen</v-icon>
          </v-btn>
        </div>
        </v-col>
        <v-col
        md="7" class="d-flex flex-column">
          <!--eslint-disable-next-line-->
          <p class="grey--text">一個在警察行業闖蕩 6 年的小女子，多年工作經驗讓我學會了遇事須沉著冷靜，並且知道創造自我價值的重要性。</br>
          <!--eslint-disable-next-line-->
          在一個陽光明媚的日子裡，我突然想要學習第二技能 ─ 網頁製作，也就此踏入了前端<span class="text-decoration-line-through">這條不歸路</span>，學習前端到現在，我喜歡上這種需要不斷學習才能跟上世界的狀態，而且永遠不怕沒資源去學習前端(感謝世界上無私奉獻的前輩們)。</p>
          <p>
          <v-btn
              small
              rounded
              class="color-change border-outset">
              Download CV
          </v-btn>
          <v-btn
              small
              rounded
              class="ml-5 color-change border-outset">
              Hire Me
          </v-btn>
          </p>
        </v-col>
    </v-row>
    </v-container>
    <div class="d-flex flex-row justify-space-between mt-5">
      <v-btn
        x-small
        rounded
        v-for="tabName of aboutMeTab"
        :key="tabName"
        :class="['color-change', 'text-capitalize','mx-3', 'pa-3',
        currentAboutMeTab===tabName? 'border-inset': 'border-outset']"
        @click.prevent="currentAboutMeTab=tabName"
      >
      {{ tabName }}
      </v-btn>
    </div>
    <component v-bind:is="currentAboutMeTab" class="mt-3"></component>
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
};
</script>
<style lang="scss">
</style>
