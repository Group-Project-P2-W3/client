import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    roomName: 'test-roomName',
    roomStatus: 'waiting',
    questionShifted: [],
    question: '',
    players: [],
    startGame: false
  },
  mutations: {
    SOCKET_addPlayer (state, payload) {
      state.players = payload
    },
    roomStatusChange (state) {
      state.roomStatus = 'start'
    },
    decreasePlayer (state) {
      state.player--
    },
    SOCKET_init (state, payload) {
      console.log(payload)
      state.startGame = true
      state.questionShifted = payload
      const random = Math.floor(Math.random() * state.questionShifted.length)
      state.question = state.questionShifted[random].question
      state.questionShifted.splice(random, 1)
    },
    questionShift (state, payload) {
      state.question = state.questionShifted[payload].question
      console.log(state.question)
      state.questionShifted.splice(payload, 1)
    },
    SOCKET_playersInRoom (state, payload) {
      state.players = payload
    }
  },
  actions: {
    join ({ commit }, state) {
      if (state.roomStatus !== 'start') {
        commit('addPlayer')
        this.$router('/game')
      } else {
        Vue.Swal(
          'Fail to Join!',
          'Room Already Start The Game!',
          'error'
        )
      }
    },
    leave (context) {
      context.commit('decreasePlayer')
      this.$router('/rooms')
    },
    answerClicked (context) {
      const random = Math.floor(Math.random() * context.state.questionShifted.length)
      context.commit('questionShift', random)
    }
  },
  modules: {
  }
})
