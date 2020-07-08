<template>
  <div>
    <h1>Please select a user</h1>
    <hr>
    <ul class="list-group">
      <router-link tag="li" to="/user/1" class="list-group-item">User 1</router-link>
      <router-link tag="li" to="/user/2" class="list-group-item">User 2</router-link>
      <router-link tag="li" to="/user/3" class="list-group-item">User 3</router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>