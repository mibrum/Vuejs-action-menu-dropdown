import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      items: [
        { id: 1, value: 'My profile', icon: 'fas fa-user' },
        { id: 2, value: 'Notifications', icon: 'fas fa-envelope-open-text' },
        { id: 3, value: 'Settings', icon: 'fas fa-cog' },
      ]
    },
    mutations: {},
    actions: {}
  })