import '@fortawesome/fontawesome-free/css/all.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },
  theme: {
    themes: {
      light: {
        primary: '#fb839e',
        secondary: '#ec9412',
        third: '#1fc586',
        fourth: '#2eb1ed',
        fifth: '#cc3a3b',
        light: '#eff0f4',
        night: '#212121',
        morning: '#eeeeee',
      },
    },
  },
});
