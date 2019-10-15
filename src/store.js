import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info: {}
  },
  mutations: {
    setInfo(state, info) {
      state.info = info
    }
  },
  getters: {
    getInfo(state) {
      return state.info
    }
  },
  actions: {
    async fetchTickets({ commit }, searchId) {
      try {
        const tickets = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId['searchId']}`)
          .then(response => response.json())
        commit('setInfo', tickets);
        console.log(tickets)
        return tickets;
      } catch (e) {
        throw e;
      }
    },
    searchId() {
      try {
        const searchId = fetch('https://front-test.beta.aviasales.ru/search')
          .then(response => response.json())
        return searchId;
      } catch (e) {
        throw e;
      }
    }
  }
})
