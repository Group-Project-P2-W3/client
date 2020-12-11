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