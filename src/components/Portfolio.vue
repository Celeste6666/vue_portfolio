<template>
  <div class="d-flex flex-column align-center justify-center">
    <div class="text-caption mt-6 color-change text-uppercase">portfolio</div>
    <div class="text-h5 font-weight-bold text-uppercase">lastest work</div>
    <div class="ma-5">
      <v-btn
        x-small
        rounded
        v-for="tabName of portfolioTab"
        :key="tabName"
        :class="['color-change', 'text-capitalize','mx-3', 'pa-3',
        currentPortfolioTab===tabName? 'border-inset': 'border-outset']"
        @click.prevent="currentPortfolioTab=tabName"
      >
      {{ tabName }}
      </v-btn>
    </div>
    <!--<component v-bind:is="currentPortfolioTab" class="mt-5"></component>-->
  </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      portfolioTab: ['All', 'Web Application', 'Mobile App', 'E-Commerce'],
      currentPortfolioTab: 'All',
    };
  },
};
</script>
