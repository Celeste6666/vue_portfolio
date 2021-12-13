<template>
  <div class="banner">
    <v-row align="center" justify="space-between" no-gutters class="mt-10">
      <v-col class="text-center text-md-start">
        <p class="text-subtitle-1 grey--text text--lighten-1">Hello</p>
        <p class="text-h3 font-weight-bold">I'm Celeste</p>
        <p class="grey--text text-h6 text--lighten-1">Fronted-Engineer</p>
      </v-col>
      <v-col>
        <div class="pa-4 border-inset rounded-circle">
          <v-img class="pa-2 border-outset rounded-circle" src="../assets/img/avatar.png"></v-img>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
};
</script>
<style lang="scss">
.light {
  background: #eeeeee;
  color: black;
}
.dark {
  background: #2b2c2f;
  color: white;
}

.v-btn-toggle > .v-btn.v-btn {
  border: 0 !important;
}
</style>
