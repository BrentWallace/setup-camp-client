<template>
  <div>
    <b-jumbotron
      container-fluid
      bg-variant="dark"
      text-variant="light"
      class="menu-padding d-flex align-items-center justify-content-center"
    >
      <h1 class="display-3">Explore: {{ region.charAt(0).toUpperCase() + region.slice(1) }}</h1>
    </b-jumbotron>
    <app-explore-search :region="this.region"></app-explore-search>
  </div>
</template>

<script>
import ExploreSearch from './ExploreSearch.vue'

export default {
  props: ["region"],
  components: {
    appExploreSearch: ExploreSearch,
  }
};
</script>

<style scoped>
.jumbotron {
  height:500px;
}
</style>