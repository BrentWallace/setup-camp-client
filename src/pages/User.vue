<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <router-view></router-view>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  props: ["id"],
  methods: {
    navigateToHome() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style scoped>
</style>