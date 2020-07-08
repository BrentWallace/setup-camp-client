<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/shared/Header.vue";
import Footer from "./components/shared/Footer.vue";
export default {
  name: "App",
  components: {
    appHeader: Header,
    appFooter: Footer
  }
};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
