<template>
  <div>
    <v-timeline v-for="education of educations" :key="education.schoolNameInEng">
      <v-timeline-item :color="morning?'#eee':'#2d2d2d'" fill-dot>
        <template v-slot:icon>
          <v-icon small class="color-change">fas fa-graduation-cap</v-icon>
        </template>
          <div class="border-outset pa-5" style="width:280px">
            <p class="text-caption color-change">{{ education.time }}</p>
            <div class="text-h4">{{ education.school }}</div>
            <p class="text-body-2 grey--text text--darken-2">
              {{ education.schoolNameInEng }}
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
      educations: [
        {
          time: 'Oct,2012 - Oct,2014',
          school: '警察專科學校',
          schoolNameInEng: 'Taiwan Police College',
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
<style lang="scss">
</style>
