<template>
  <router-view></router-view>
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