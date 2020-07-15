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
    <app-explore-state-search :region="this.region"></app-explore-state-search>
  </div>
</template>

<script>
import ExploreStateSearch from './ExploreStateSearch.vue'

export default {
  props: ["region"],
  components: {
    appExploreStateSearch: ExploreStateSearch,
  }
};
</script>

<style scoped>
.jumbotron {
  height:500px;
}
</style>