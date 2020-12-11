<template>
  <div class="container" id="loginPage">
    <div class="row" style="justify-content: center;">
      <div class=".col-12 .col-md-8" style="min-width: 640px;">
        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-5">
              <img src="../assets/bf.jpg" class="card-img" alt="Image">
            </div>
            <div class="col-md-7">
              <div class="card-body">
                <h3 class="card-title">Welcome To The Jungle, My Friends!</h3>
                <p>Please tell me your name..</p>
                <form class="form-container" id="loginForm" @submit.prevent="playerLogin">
                    <div class="form-group mb-2">
                      <label for="name">Name</label>
                      <input type="text" class="form-control" id="name" v-model="userName" aria-describedby="nameHelp" required>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">To The Jungle!</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      userName: ''
    }
  },
  methods: {
    playerLogin () {
      const player = {
        username: this.userName,
        score: 0
      }
      this.$socket.emit('playerLogin', player)
      this.$router.push('/game')
      localStorage.setItem('access_token', player.username)
    },
    loginChecker () {
      if (localStorage.getItem('access_token')) {
        this.$router.push('/game')
      }
    }
  },
  sockets: {
    connect () {
      console.log('Socket.io client connected')
    }
  },
  created () {
    this.loginChecker()
  }
}
</script>

<style>
.col-md-7{
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.text-kecil:hover{
  transition-delay: 200ms ease;
}
</style>
