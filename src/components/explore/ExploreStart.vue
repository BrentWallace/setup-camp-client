<template>
  <div>
    <b-jumbotron
      container-fluid
      bg-variant="dark"
      text-variant="light"
      class="menu-padding d-flex align-items-center justify-content-center"
    >
      <template v-slot:header class="w-100">Explore</template>
    </b-jumbotron>
    <b-container>
      <b-row>
        <b-col><h1 class="display-4 text-center my4">Explore a location</h1></b-col>
      </b-row>
      <app-explore-address-search></app-explore-address-search>
      <p class="text-center display-4">or</p>
      <hr />
      <b-row>
        <b-col>
          <h1 class="display-4 text-center my-4">Explore by Region</h1>
        </b-col>
      </b-row>
      <b-row class="my-4">
        <b-col lg="4" md="6" sm="12" v-for="region in regions" :key="region.name">
          <router-link :to="region.link">
            <b-card overlay :img-src="region.image" text-variant="white" class="mb-4">
              <b-card-text class="text-center text-center display-4 label-depth">{{ region.name }}</b-card-text>
              <div class="card-overlay"></div>
            </b-card>
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ExploreAddressSearch from './ExploreAddressSearch.vue'

export default {
  components: {
    appExploreAddressSearch: ExploreAddressSearch,
  },
  data() {
    return {
      regions: [
        { name: "West", image: "west.jpg", link: "/explore/west" },
        {
          name: "Southwest",
          image: "southwest.jpg",
          link: "/explore/southwest"
        },
        { name: "Midwest", image: "midwest.jpg", link: "/explore/midwest" },
        { name: "South", image: "south.jpg", link: "/explore/south" },
        {
          name: "Northeast",
          image: "northeast.jpg",
          link: "/explore/northeast"
        },
        { name: "Canada", image: "canada.jpg", link: "/explore/canada" }
      ]
    };
  }
};
</script>

<style scoped>
.label-depth {
  position: relative;
  top: 30%;
  z-index: 1;
}
.card-overlay {
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
}
.jumbotron {
  height:500px;
}
</style>