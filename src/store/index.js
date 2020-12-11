import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    player: 0,
    roomStatus: 'waiting'
  },
  mutations: {
    addPlayer (state) {
      state.player++
    },
    roomStatusChange (state) {
      state.roomStatus = 'start'
    },
    decreasePlayer (state) {
      state.player--
    }
  },
  actions: {
    join ({ context, state }) {
      if (state.roomStatus !== 'start') {
        context.commit('addPlayer')
        this.$router('/game')
      } else {
        Vue.Swal(
          'Fail to Join!',
          'Room Already Start The Game!',
          'error'
        )
      }
    },
    start ({ context, state }) {
      if (state.player >= 2) {
        context.commit('roomStatusChange')
        this.$router('/game')
      } else {
        Vue.Swal(
          'Fail to Start!',
          'Minimum 2 Player to Start!',
          'error'
        )
      }
    },
    createRoom (context) {
      this.$router('/create')
    },
    leave (context) {
      context.commit('decreasePlayer')
      this.$router('/rooms')
    }
  },
  modules: {
  }
})
