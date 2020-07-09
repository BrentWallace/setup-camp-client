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

<style>
html, body {
  scroll-behavior: smooth;
  height: 100%;
}
.menu-padding {
  padding-top: 180px;
}
h1,
h2,
h3,
h4,
h5,
h6,
.display-1,
.display-2,
.display-3,
.display-4 {
  font-family: latex-top, sans-serif;
}
</style>
