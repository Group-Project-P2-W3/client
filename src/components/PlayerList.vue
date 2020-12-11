<template>
  <div>
    <div class="card mb-3" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{data.username}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Score: {{data.score}}</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerList',
  props: ['data']
}
</script>

<style>

</style>
