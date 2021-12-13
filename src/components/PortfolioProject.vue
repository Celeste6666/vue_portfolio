<template>
  <v-container class="portofolio">
    <v-row>
      <v-col
        sm="6"
        md="4"
        lg="3"
        v-for="portfolio of portfolios"
        :key="portfolio.id"
        @mousemove.stop="changeBtnIsShow('')"
      >
        <v-card
          class="mx-auto border-outset"
          max-width="400"
          height="100%"
          @mousemove.stop.prevent="changeBtnIsShow(portfolio.id)"
        >
          <v-img
            :class="['align-center', btnIsShow === portfolio.id ? 'bgOpacity' : '']"
            height="200px"
            :src="portfolio.picture"
            :alt="portfolio.pictureAlt"
          >
            <div class="text-center show" v-show="btnIsShow === portfolio.id">
              <v-overlay absolute opacity="0.3" :value="true">
                <v-btn
                  color="mx-2 color-change"
                  :href="portfolio.sourceCode"
                  target="_blank"
                  small
                  rounded
                  >原始碼</v-btn
                >
                <v-btn color="mx-2 color-change" :href="portfolio.url" target="_blank" small rounded
                  >線上連結</v-btn
                >
              </v-overlay>
            </div>
          </v-img>
          <v-card-text>
            <v-chip
              :ripple="false"
              color="grey lighten-2"
              x-small
              pill
              class="ma-1"
              v-for="skill of portfolio.skill"
              :key="skill"
              >{{ skill }}</v-chip
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'PortfolioProject',
  props: ['currentPortfolioType'],
  data() {
    return {
      btnIsShow: '',
    };
  },
  computed: {
    portfolios() {
      const { currentPortfolioType: type } = this;
      if (type === 'All') {
        return this.$store.state.portfolio;
      }
      return this.$store.state.portfolio.filter((item) => (item.type === type ? item : ''));
    },
  },
  methods: {
    changeBtnIsShow(id) {
      if (id) {
        this.btnIsShow = id;
      } else {
        this.btnIsShow = '';
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.show {
  transition: 0.3s linear;
}
.bgOpacity .v-image__image.v-image__image--cover {
  filter: opacity(0.5);
}
</style>
