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
      state.question = state.questionShifted[random]
      state.questionShifted.splice(random, 1)
    },
    questionShift (state, payload) {
      state.question = state.questionShifted[payload]
      state.questionShifted.splice(payload, 1)
    },
    SOCKET_playersInRoom (state, payload) {
      state.players = payload
    },
    SOCKET_addScore (state, payload) {
      for (let i = 0; i < state.players.length; i++) {
        if (payload.username === state.players[i].username) {
          state.players[i] = payload
        }
      }
    }
  },
  actions: {
    answerClicked (context) {
      const random = Math.floor(Math.random() * context.state.questionShifted.length)
      context.commit('questionShift', random)
    }
  },
  modules: {
  }
})
