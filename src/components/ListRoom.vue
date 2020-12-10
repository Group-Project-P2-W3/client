<template>
  
</template>

<script>
export default {
  name: 'ListRoom',
  computed: {
    roomStatus () {
      return this.$store.state.roomStatus
    }
  },
  methods: {
    addPlayer () {
      this.$store.dispatch('join')
    }
  }
}
</script>

<style>

</style>