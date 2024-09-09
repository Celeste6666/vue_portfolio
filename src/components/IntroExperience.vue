<template>
  <div>
    <v-timeline>
      <v-timeline-item v-for="experience of experiences" :key="experience.companyNameInEng"
        :color="morning ? '#eee' : '#2d2d2d'" fill-dot>
        <template v-slot:icon>
          <v-icon small class="color-change">fas fa-briefcase</v-icon>
        </template>
        <div class="border-outset pa-5">
          <p class="text-caption color-change">{{ experience.time }}</p>
          <div class="text-h4" :class="[morning ? 'grey--text text--darken-3' : 'grey--text text--lighten-1']">
            {{ experience.position }}
          </div>
          <p class="text-body-2 grey--text text--darken-2">
            {{ experience.companyNameInEng }}
          </p>
          <div class="text-body-1 grey--text"
            :class="[morning ? 'grey--text text--darken-3' : 'grey--text text--lighten-1']" v-html="experience.content">
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>
<script>
export default {
  data() {
    return {
      experiences: [{
        time: '2023,Jan - Dec,2023',
        position: 'Front-End Developer',
        companyNameInEng: 'Major Intelligent Technologies, Inc, Taiwan',
        content: `<ul>
            <li>Establishing a website which assists companies to fill out C1 to C6 emission and get the emission report with 3 backend developers from 0 to 1.</li>
              <li>Combining Niagara Framework (collecting and saving data from sensor) with Autodesk Forge Viewer to present real time data on the model.</li>
                <li>Improving performance by 25% by refactoring the IOT website.</li>
            </ul>`
        ,
      },
      {
        time: 'Oct,2014 - Jun,2022',
        position: 'Police',
        companyNameInEng: 'Lienchiang County Police Bureau',
        content:
          'Dedicated to improving traffic safety and decreasing criminal rate.',
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
