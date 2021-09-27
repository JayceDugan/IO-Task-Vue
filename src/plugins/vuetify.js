import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#4D7CFE',
        primaryDark: '#252631',
        blueGrey: '#778CA2',
        blueGreyAlt: '#98A9BC',
        success: '#6DD230',
        error: '#FE4D97',
        warning: '#FFAB2B',
        info: '#2CE5F6',
        outline: '#E8ECEF',
        grey: '#F2F4F6',
        greyAlt: '#F8FAFB',
      },
    },
  },
});
