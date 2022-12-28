<template>
  <div
    class="drawer position-fixed d-flex flex-column justify-center align-center"
    v-if="drawerIsShow"
  >
    <v-btn class="ma-2 text-uppercase grey--text border-outset close" fab x-small>
      <v-icon @click="closeDrawerIsShow">fas fa-times</v-icon>
    </v-btn>
    <v-btn
      to="/"
      class="ma-2 px-6 text-uppercase color-change border-outset"
      rounded
      @click="closeDrawerIsShow"
    >
      home
    </v-btn>
    <v-btn
      to="/#about"
      class="ma-2 px-6 text-uppercase color-change border-outset"
      rounded
      @click="closeDrawerIsShow"
    >
      about
    </v-btn>
    <v-btn
      to="/#portfolio"
      class="ma-2 px-6 text-uppercase color-change border-outset"
      rounded
      @click="closeDrawerIsShow"
    >
      portfolio
    </v-btn>

    <v-btn
      to="/#contact"
      class="ma-2 px-6 text-uppercase color-change border-outset"
      rounded
      @click="closeDrawerIsShow"
    >
      contact
    </v-btn>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  props: ['drawerIsShow'],
  methods: {
    closeDrawerIsShow() {
      this.$emit('closeDrawerIsShow', false);
    },
  },
};
</script>
<style lang="scss" scoped>
.drawer {
  z-index: 1000;
  width: 100%;
  height: 100%;
}
.close {
  position: absolute;
  right: 20px;
  top: 40px;
}
</style>
