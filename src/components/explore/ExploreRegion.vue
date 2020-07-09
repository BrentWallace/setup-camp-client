<template>
  <div>
    <b-jumbotron
      container-fluid
      bg-variant="dark"
      text-variant="light"
      class="menu-padding d-flex align-items-center justify-content-center"
    >
      <template
        v-slot:header
        class="w-100"
      >Explore: {{ region.charAt(0).toUpperCase() + region.slice(1) }}</template>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  props: ["region"]
};
</script>

<style scoped>
.menu-padding {
    padding-top:80px;
}
</style>