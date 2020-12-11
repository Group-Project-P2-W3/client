<template>
  <div class="container">
    <h1 class="m-5">Are you smarter than your friend?</h1>
    <div style="display: flex; justify-content: space-evenly">
      <div>
        <PlayerList v-for="(allPlayers, i) in allPlayers" :data="allPlayers" :key="i"></PlayerList>
      </div>
      <div class="container col-md-6">
        <button class="btn btn-primary" @click="startGame" v-if="totalPlayer > 1 && !gameStarted">Start Game</button>
        <form v-if="gameStarted">
          <h6>Pertanyaan:</h6>
          <h5>{{getQuestion}}</h5><br><br>
          <input class="m-4" type="text" v-model="answer" style="width: 500px; padding: 10px">
          <button class="btn btn-primary" type="submit" @click.prevent="answerClicked">JAWAB</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import PlayerList from '../components/PlayerList'

export default {
  name: 'RoomGame',
  components: {
    PlayerList
  },
  data () {
    return {
      answer: '',
      playerName: []
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
    },
    gameStarted () {
      return this.$store.state.startGame
    }
  },
  methods: {
    answerClicked () {
      this.$store.dispatch('answerClicked')
    },
    startGame () {
      this.$socket.emit('startGame')
    },
    playersInRoom () {
      this.$socket.emit('playersInRoom')
    }
  },
  created () {
    this.playersInRoom()
  }
}
</script>

<style>

</style>
