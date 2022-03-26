import Vue from 'vue'
import App from './App.vue'

//Styles
import './assets/css/main.css';

import router from './routes';

Vue.config.productionTip = false

new Vue({
  
  render: h => h(App),
  router,
  
}).$mount('#app')
