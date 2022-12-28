<template>
  <div>
    <v-timeline>
      <v-timeline-item
        v-for="experience of experiences"
        :key="experience.companyNameInEng"
        :color="morning ? '#eee' : '#2d2d2d'"
        fill-dot
      >
        <template v-slot:icon>
          <v-icon small class="color-change">fas fa-briefcase</v-icon>
        </template>
        <div class="border-outset pa-5">
          <p class="text-caption color-change">{{ experience.time }}</p>
          <div
            class="text-h4"
            :class="[morning ? 'grey--text text--darken-3' : 'grey--text text--lighten-1']"
          >
            {{ experience.position }}
          </div>
          <p class="text-body-2 grey--text text--darken-2">
            {{ experience.companyNameInEng }}
          </p>
          <p
            class="text-body-1 grey--text"
            :class="[morning ? 'grey--text text--darken-3' : 'grey--text text--lighten-1']"
          >
            {{ experience.content }}
          </p>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>
<script>
export default {
  data() {
    return {
      experiences: [
        {
          time: 'Oct,2014 - Jun,2022',
          position: '警察',
          companyNameInEng: '連江縣警察局,台灣',
          content:
            '(與前端工程師工作無關)工作內容主要是處理與「人」有關的各種事情，也因此學會了溝通及冷靜的重要性。',
        },
      ],
    };
  },
  computed: {
    morning() {
      return this.$store.state.classList.bgMorning;
    },
  },
};
</script>
<style lang="scss"></style>
