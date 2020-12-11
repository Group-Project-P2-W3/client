<template>
  <div class="home">
    <ListRoom>
    </ListRoom>
  </div>
</template>

<script>
import ListRoom from '../components/ListRoom'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    ListRoom
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
