<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{ roomName }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ player }} </h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="card-link">Join</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListRoom',
  computed: {
    roomStatus () {
      return this.$store.state.roomStatus
    },
    player () {
      return this.$store.state.player
    },
    roomName () {
      return this.$store.state.roomName
    }
  },
  methods: {
    start () {
      this.$store.dispatch('start')
    },
    decreasePlayer () {
      this.$store.dispatch('leave')
    }
  }
}
</script>

<style>

</style>
