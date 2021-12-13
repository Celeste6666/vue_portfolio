import Vue from 'vue';
import Vuex from 'vuex';
import portfolio from './portfolio';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    api: {
      email_user_id: process.env.VUE_APP_EMAIL_USER_ID,
      email_template_id: process.env.VUE_APP_EMAIL_TEMPLATE_ID,
      email_service_id: process.env.VUE_APP_EMAIL_SERVICE_ID,
    },
    classList: {
      navbarOpen: false,
      bgMorning: true,
      colorTheme: 'pinkTheme',
    },
    colorChosen: 1,
    portfolio,
  },
  mutations: {
    changeColor(state, val) {
      state.colorChosen = val;
      switch (val) {
        case 1:
          state.classList.colorTheme = 'pinkTheme';
          break;
        case 2:
          state.classList.colorTheme = 'orangeTheme';
          break;
        case 3:
          state.classList.colorTheme = 'greenTheme';
          break;
        case 4:
          state.classList.colorTheme = 'blueTheme';
          break;
        case 5:
          state.classList.colorTheme = 'redTheme';
          break;
        default:
          state.classList.colorTheme = 'pinkTheme';
          break;
      }
    },
    changeMorning(state) {
      state.classList.bgMorning = !state.classList.bgMorning;
    },
  },
  actions: {
  },
});
