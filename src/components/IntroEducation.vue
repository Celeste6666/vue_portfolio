<template>
  <div>
    <v-timeline>
      <v-timeline-item
        v-for="education of educations"
        :key="education.schoolNameInEng"
        :color="morning ? '#eee' : '#2d2d2d'"
        fill-dot
      >
        <template v-slot:icon>
          <v-icon small class="color-change">fas fa-graduation-cap</v-icon>
        </template>
        <div class="border-outset py-2 px-5">
          <p class="text-caption color-change">{{ education.time }}</p>
          <p
            class="text-h4"
            :class="[morning ? 'grey--text text--darken-3' : 'grey--text text--lighten-1']"
          >
            {{ education.school }}
          </p>
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
        {
          time: '2018 - 2020',
          school: '六角學院',
          schoolNameInEng: 'HexSchool',
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
