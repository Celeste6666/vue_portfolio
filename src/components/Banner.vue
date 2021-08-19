<template>
  <div class="banner">
    <div class="setting d-flex flex-column align-end">
        <v-btn-toggle
          class="border-outset"
          :class="{ light: morning }"
          v-model="toggleColor"
          rounded
        >
          <div>
            <v-btn
              fab
              text
              small>
              <v-icon @click="colorHidden=!colorHidden"
              :color="morning?'#000':'#fff'">mdi-cogs</v-icon>
            </v-btn>
          </div>
          <div v-show="!colorHidden">
            <v-btn
              fab
              text
              small>
              <v-icon class="primary--text">mdi-checkbox-blank-circle</v-icon>
            </v-btn>
            <v-btn
              fab
              text
              small>
              <v-icon class="secondary--text">mdi-checkbox-blank-circle</v-icon>
            </v-btn>
            <v-btn
              fab
              text
              small>
              <v-icon class="third--text">mdi-checkbox-blank-circle</v-icon>
            </v-btn>
            <v-btn
              fab
              text
              small>
              <v-icon class="fourth--text">mdi-checkbox-blank-circle</v-icon>
            </v-btn>
            <v-btn
              fab
              text
              small>
              <v-icon class="fifth--text">mdi-checkbox-blank-circle</v-icon>
            </v-btn>
          </div>
        </v-btn-toggle>
        <v-btn-toggle
          class="border-outset mt-3"
          :class="{ light: morning }"
          rounded
        >
        <div>
          <v-btn
            v-show="morning"
            fab
            text
            small>
            <v-icon
              :color="morning?'#000':'#fff'"
              @click="morning=!morning">mdi-weather-night</v-icon>
          </v-btn>
            <v-btn
            v-show="!morning"
              fab
              text
              small>
              <v-icon
              :color="morning?'#000':'#fff'"
              @click="morning=!morning">mdi-white-balance-sunny </v-icon>
            </v-btn>
        </div>
        </v-btn-toggle>
    </div>
    <v-row
        align="center"
        justify="space-between"
        no-gutters
        class="mt-10"
      >
      <v-col>
        <p class="text-subtitle-1 grey--text text--lighten-1">Hello</p>
          <p class="text-h3 font-weight-bold">I'm Celeste</p>
          <p class="grey--text text-h6 text--lighten-1">Fronted-Engineer</p>
        </v-col>
        <v-col
        md="6" class="d-flex flex-column align-center justify-center">
        <div
          class="pa-4 border-inset d-flex align-center justify-center rounded-circle">
          <img
            width="320px"
            height="320px"
            class="pa-2 border-outset rounded-circle"
            src="../assets/img/avatar.png">
        </div>
        </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      colorHidden: true,
    };
  },
  computed: {
    morning: {
      get() {
        return this.$store.state.classList.bgMorning;
      },
      set() {
        this.$store.commit('changeMorning');
      },
    },
    toggleColor: {
      get() {
        return this.$store.state.colorChosen;
      },
      set(newVal) {
        if (newVal === 0) return;
        this.$store.commit('changeColor', newVal);
        this.colorHidden = !this.colorHidden;
      },
    },
  },
};
</script>
<style lang="scss">
.light{
  background: #EEEEEE;
  color: black;
}
.dark{
  background: #2b2c2f;
  color: white;
}
.setting{
  position: fixed;
  right: 10px;
  top: 80px;
}
.v-btn-toggle > .v-btn.v-btn{
  border: 0 !important;
}
</style>
