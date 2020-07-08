<template>
  <div>
    <h1>User Details</h1>
    <hr />
    <p>This is the page for user {{ id }}</p>
    <router-link tag="button" :to="{ name: 'userEdit' }" class="btn btn-primary">Edit User</router-link>
  </div>
</template>

<script>
export default {
  props: ["id"]
};
</script>

<style scoped>
</style>