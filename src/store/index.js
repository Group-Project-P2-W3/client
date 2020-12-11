import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    player: 0,
    roomStatus: 'waiting',
    questions: [],
    questionShifted: [],
    question: ''
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
      state.question = state.questionShifted[payload].question
      state.questionShifted.splice(payload, 1)
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
    }
  },
  modules: {
  }
})
