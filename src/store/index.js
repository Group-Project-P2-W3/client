import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    roomName: 'test-roomName',
    roomStatus: 'waiting',
    questionShifted: [],
    question: '',
    players: []
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
      state.questionShifted = payload
    },
    questionShift (state, payload) {
      state.question = state.questionShifted[payload].question
      state.questionShifted.splice(payload, 1)
    },
    roomNameChange (state, payload) {
      state.roomName = payload
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
    },
    answerClicked (context) {
      console.log(context)
      const random = Math.floor(Math.random() * context.state.questionShifted.length)
      context.commit('questionShift', random)
    },
    roomNameChange ({ context }, payload) {
      context.commit('roomNameChange', payload)
    }
  },
  modules: {
  }
})
