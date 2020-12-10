<template>
  
</template>

<script>
export default {
  name: 'RoomGame',
  computed: {
    player () {
      return this.$store.state.player
    }
  },
  methods: {
    start () {
      this.$store.dispatch('start')
    }
  }
}
</script>

<style>

</style>