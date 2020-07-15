<template>
  <b-container>
    <b-row>
      <b-col>
        <b-form-row>
          <b-col>
            <b-form-group id="address-search" label="Search for a location">
              <b-form-input v-model="geocoderSearch" trim></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              id="address-search-radius"
              label="Enter a radius for your search (in miles)"
            >
              <b-form-input v-model="filters.radius" trim></b-form-input>
            </b-form-group>
          </b-col>
        </b-form-row>
        <b-button variant="secondary" class="btn-block" @click="fetchByRadius()">Search</b-button>
        <hr />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-spinner label="Spinning" class="m-4 mx-auto" v-if="resultsLoading"></b-spinner>
        <p v-if="searchError">Sorry, we couldn't find any results for that search!</p>
        <b-card-group columns>
          <b-card
            v-for="campground in campgroundSearchResults"
            :key="campground._id"
            :title="campground.name"
          >
            <b-card-text>
              <hr />
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
import { geocoder } from "../../utils/geocoder.js";

export default {
  props: ["region"],
  data() {
    return {
      filters: {
        coordinates: {
          latitude: 0,
          longitude: 0
        },
        radius: 20
      },
      campgroundSearchResults: [],
      resultsLoading: false,
      geocoderSearch: "",
      geocoderResults: {},
      searchError: false
    };
  },
  methods: {
    async fetchByRadius() {
      // Reset search status and results
      this.resultsLoading = true;
      this.searchError = false;
      this.campgroundSearchResults = [];

      // Declare query string
      let queryString = "";

      // Fetch the geocoder results for the location
      const geocoderResults = await this.geocode(this.geocoderSearch);

      if (geocoderResults) {
        queryString = `latitude=${geocoderResults.latitude}&longitude=${geocoderResults.longitude}&maxDistance=${this.filters.radius}`;
      }
      const formattedURL = `http://localhost:3000/campgrounds?${queryString}`;
      const results = await fetch(formattedURL);
      const parsedResults = await results.json();
      this.resultsLoading = false;
      if (!parsedResults.length) {
        this.searchError = true;
      }
      this.campgroundSearchResults = parsedResults;
    },
    async geocode(location) {
      const geocoderResults = await geocoder(location);
      const coordinateObject = {
        latitude: geocoderResults.results[0].geometry.location.lat,
        longitude: geocoderResults.results[0].geometry.location.lng
      };
      return coordinateObject;
    }
  }
};
</script>

<style scoped>
</style>