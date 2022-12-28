<template>
  <div class="d-flex flex-column align-center justify-center">
    <div class="text-subtitle-1 mt-6 color-change text-uppercase">portfolio</div>
    <div class="text-h4 font-weight-bold text-uppercase">lastest work</div>
    <div class="ma-5 d-flex flex-row justify-space-between">
      <v-btn
        x-small
        rounded
        v-for="tabName of portfolioTab"
        :key="tabName"
        :class="[
          'color-change',
          'text-capitalize',
          'ma-3',
          'pa-3',
          currentPortfolioTab === tabName ? 'border-inset' : 'border-outset',
        ]"
        @click.prevent="currentPortfolioTab = tabName"
      >
        {{ tabName }}
      </v-btn>
    </div>
    <PortfolioProject :currentPortfolioType="currentPortfolioTab" />
  </div>
</template>
<script>
import PortfolioProject from '@/components/PortfolioProject.vue';

export default {
  components: {
    PortfolioProject,
  },
  data() {
    return {
      portfolioTab: ['All', 'Web', 'Mobile', 'E-Commerce'],
      currentPortfolioTab: 'All',
    };
  },
};
</script>
