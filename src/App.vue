<template>
  <v-app :class="[colorTheme]">
    <Menu
      :drawerIsShow="drawerIsShow"
      :class="[morning ? 'morning' : 'night']"
      @closeDrawerIsShow="changeDrawerIsShow"
    />
    <SvgDecoration />
    <v-main class="px-md-10" :class="[morning ? 'morning' : 'night']">
      <div class="v-container px-10">
        <v-toolbar flat color="transparent" class="pa-0">
          <router-link to="/" class="mt-8">
            <v-img max-width="120" src="@/assets/logo.png"></v-img>
          </router-link>
          <v-spacer></v-spacer>
          <v-btn
            class="mx-2 border-outset dark"
            fab
            depressed
            small
            @pointerup.stop="changeDrawerIsShow(true)"
          >
            <v-icon :color="morning ? '#000' : '#fff'"> mdi-menu </v-icon>
          </v-btn>
        </v-toolbar>

        <div class="setting d-flex flex-column align-end" v-if="!drawerIsShow">
          <v-btn-toggle
            class="border-outset"
            :class="{ light: morning }"
            v-model="toggleColor"
            rounded
          >
            <div>
              <v-btn fab text small>
                <v-icon @click="colorHidden = !colorHidden" :color="morning ? '#000' : '#fff'"
                  >mdi-cogs</v-icon
                >
              </v-btn>
            </div>
            <div v-show="!colorHidden">
              <v-btn fab text small>
                <v-icon class="primary--text">mdi-checkbox-blank-circle</v-icon>
              </v-btn>
              <v-btn fab text small>
                <v-icon class="secondary--text">mdi-checkbox-blank-circle</v-icon>
              </v-btn>
              <v-btn fab text small>
                <v-icon class="third--text">mdi-checkbox-blank-circle</v-icon>
              </v-btn>
              <v-btn fab text small>
                <v-icon class="fourth--text">mdi-checkbox-blank-circle</v-icon>
              </v-btn>
              <v-btn fab text small>
                <v-icon class="fifth--text">mdi-checkbox-blank-circle</v-icon>
              </v-btn>
            </div>
          </v-btn-toggle>
          <v-btn-toggle class="border-outset mt-3" :class="{ light: morning }" rounded>
            <div>
              <v-btn v-show="morning" fab text small>
                <v-icon :color="morning ? '#000' : '#fff'" @click="morning = !morning"
                  >mdi-weather-night</v-icon
                >
              </v-btn>
              <v-btn v-show="!morning" fab text small>
                <v-icon :color="morning ? '#000' : '#fff'" @click="morning = !morning"
                  >mdi-white-balance-sunny
                </v-icon>
              </v-btn>
            </div>
          </v-btn-toggle>
        </div>
        <router-view />
      </div>
    </v-main>
    <PortfolioFooter :class="['py-5', morning ? 'morning' : 'night']" />
  </v-app>
</template>
<script>
import SvgDecoration from '@/components/SvgDecoration.vue';
import PortfolioFooter from '@/components/Footer.vue';
import Menu from '@/components/Menu.vue';

export default {
  name: 'App',
  components: {
    SvgDecoration,
    PortfolioFooter,
    Menu,
  },
  data() {
    return {
      drawerIsShow: false,
      colorHidden: true,
    };
  },
  computed: {
    colorTheme() {
      return this.$store.state.classList.colorTheme;
    },
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
  methods: {
    changeDrawerIsShow(val) {
      this.drawerIsShow = val;
    },
  },
};
</script>
<style lang="scss">
.v-application {
  overflow: hidden;
}

.v-toolbar__content {
  padding: 0 !important;
}
.setting {
  position: fixed;
  z-index: 1000;
  right: 10px;
  top: 80px;
}
</style>
