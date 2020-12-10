<template>
  <div>
    <h1>INI ROOM GAME</h1>
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
    player () {
      return this.$store.state.player
    },
    getQuestion () {
      return this.$store.state.questionShifted
    }
  },
  methods: {
    start () {
      this.$store.dispatch('start')
    },
    answerClicked () {
      this.$store.dispatch('answerClicked')
    }
  }
}
</script>

<style>

</style>
