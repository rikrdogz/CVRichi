import Vue from 'vue'
import App from './App.vue'

//Styles
import './assets/css/main.css';


//Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';
import { faTwitter, faFacebook, faStackOverflow, faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons'

library.add(fas,  faTwitter, faFacebook, faStackOverflow, faGithub, faGitlab);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);


import router from './routes';

Vue.config.productionTip = false

new Vue({
  
  render: h => h(App),
  router,
  
}).$mount('#app')
