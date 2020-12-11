<template>
  <div class="home">
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
  },
  sockets: {
    connect () {
      console.log('Socket.io client connected')
    }
  },
  methods: {
    createRoom () {
      this.$store.dispatch('createRoom')
    },
    join () {
      this.$store.dispatch('joinRoom')
    }
  }
}
</script>
