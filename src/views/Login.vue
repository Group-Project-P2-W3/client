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
                <form class="form-container" id="loginForm" @submit.prevent="login">
                    <div class="form-group mb-2">
                      <label for="emailLoginForm">Name</label>
                      <input type="email" class="form-control" id="emailLogin" v-model="userName" aria-describedby="emailHelp" required>
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
