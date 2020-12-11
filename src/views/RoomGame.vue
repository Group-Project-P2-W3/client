<template>
  <div>
    <h1>INI ROOM GAME</h1>
    <p>{{allPlayers}}</p>
    <button @click="startGame" v-if="totalPlayer > 1">Start Game</button>
    <p>Pertanyaan: {{getQuestion}}</p>
    <input type="text" v-model="answer">
    <button type="submit" @click.prevent="answerClicked">JAWAB</button>
  </div>
</template>

<script>
export default {
  name: 'RoomGame',
  data () {
    return {
      answer: ''
    }
  },
  computed: {
    totalPlayer () {
      return this.$store.state.players.length
    },
    getQuestion () {
      return this.$store.state.question
    },
    allPlayers () {
      return this.$store.state.players
    }
  },
  methods: {
    start () {
      this.$store.dispatch('start')
    },
    answerClicked () {
      this.$store.dispatch('answerClicked')
    },
    startGame () {
      this.$socket.emit('startGame')
    }
  }
}
</script>

<style>

</style>
