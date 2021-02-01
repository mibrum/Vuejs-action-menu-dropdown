import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import './App.scss'

// Fontawesome Icons
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

// Library for placing elements
import Popover from 'vue-js-popover';
Vue.use(Popover)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
