<template>
  <b-container>
    <b-row>
      <b-col>
        <b-form-group id="state-filter" label="Search by State">
          <b-form-input v-model="filters.state" trim></b-form-input>
        </b-form-group>
        <b-button variant="primary" @click="fetchCampgroundSearchResults(this.filters)">Search</b-button>
        <hr>
        <p class="text-center">or</p>
        <hr>
        <b-form-group label="Enter an address">
          <b-form-input v-model="geocoderSearch"></b-form-input>
        </b-form-group>
        <b-form-group label="Enter a search radius">
          <b-form-input v-model="geocoderRadius"></b-form-input>
        </b-form-group>
        <b-button variant="primary" @click="geocode(geocoderSearch)">Search</b-button>
      </b-col>
    </b-row>
    <hr />
    <b-row>
      <b-col>
        <b-spinner label="Spinning" class="text-center" v-if="resultsLoading"></b-spinner>
        <b-card-group columns>
          <b-card
            v-for="campground in campgroundSearchResults"
            :key="campground._id"
            :title="campground.name"
          >
            <b-card-text>
              <hr>
              <p>Coordinates: {{campground.latitude}}, {{ campground.longitude }}</p>
              <p>Location: {{ campground.distance }} {{ campground.bearing }} of {{ campground.nearestTown }}</p>
              <p v-if="campground.comments.length > 1">Comments: {{ campground.comments }}</p>
            </b-card-text>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { geocoder } from '../../utils/geocoder.js'

export default {
  props: ["region"],
  data() {
    return {
      filters: {
        state: "",
        coordinates: {}
      },
      campgroundSearchResults: [],
      resultsLoading: false,
      geocoderSearch: '',
      geocoderRadius: '',
      geocoderResults: {},
    };
  },
  methods: {
    async fetchCampgroundSearchResults(filters) {
      this.resultsLoading = true;

      let queryString = "";

      if (filters.state) {
        queryString = `state=${filters.state}`;
      }

      const formattedURL = `http://localhost:3000/campgrounds?${queryString}`;
      const results = await fetch(formattedURL);
      const parsedResults = await results.json();

      this.resultsLoading = false;
      this.campgroundSearchResults = parsedResults;
    },
    async geocode(location) {
      const geocoderResults = await geocoder(location);
      this.filters.coordinates = {
        lng: geocoderResults.results[0].geometry.location.lng,
        lat: geocoderResults.results[0].geometry.location.lat
      }
      console.log(this.filters.coordinates)
    }
  },
};
</script>

<style scoped>
</style>