import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    player: 0,
    roomName: 'test-roomName',
    roomStatus: 'waiting',
    questions: [],
    questionShifted: []
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
    },
    SOCKET_init (state, payload) {
      console.log(payload)
      state.questions = payload
      state.questionShifted = payload
    },
    questionShift (state, payload) {
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
    answerClicked (context, state) {
      const random = Math.floor(Math.random() * state.questionShifted.length)
      context.commit('questionShift', random)
    },
    roomNameChange ({ context }, payload) {
      context.commit('roomNameChange', payload)
    }
  },
  modules: {
  }
})
