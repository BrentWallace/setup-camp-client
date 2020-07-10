<template>
  <b-container>
    <b-row>
      <b-col>
        <b-form-group id="state-filter" label="Search by State">
          <b-form-input v-model="filters.state" trim></b-form-input>
        </b-form-group>
        <b-button variant="primary" @click="fetchByState(filters)">Search</b-button>
        <hr />
        <p class="text-center">or</p>
        <hr />
        <b-form-group label="Enter a location (address or location name)">
          <b-form-input v-model="geocoderSearch"></b-form-input>
        </b-form-group>
        <b-form-group label="Enter a search radius (in miles)">
          <b-form-input v-model="filters.radius"></b-form-input>
        </b-form-group>
        <b-button variant="primary" @click="fetchByRadius">Search</b-button>
      </b-col>
    </b-row>
    <hr />
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
        state: "",
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
    async fetchByState(filters) {
      // Reset search status and results
      this.resultsLoading = true;
      this.searchError = false;
      this.campgroundSearchResults = [];

      // Declare query string
      let queryString = "";

      // Check for the state to search by
      if (filters.state) {
        queryString = `state=${filters.state}&region=${this.region}`;
      }

      // Construct the url
      const formattedURL = `http://localhost:3000/campgrounds?${queryString}`;
      
      // Execute the request and parse the results
      const results = await fetch(formattedURL);
      const parsedResults = await results.json();

      // Set the search status and populate the results array
      this.resultsLoading = false;
      if (parsedResults.length == 0) {
        this.searchError = true
      }
      this.campgroundSearchResults = parsedResults;
    },
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
        queryString = `latitude=${geocoderResults.latitude}&longitude=${geocoderResults.longitude}&maxDistance=${this.filters.radius}`
      }

      const formattedURL = `http://localhost:3000/campgrounds?${queryString}`;
      const results = await fetch(formattedURL);
      const parsedResults = await results.json();

      this.resultsLoading = false;
      console.log(results.length)
      if (!parsedResults.length) {
        this.searchError = true
      }
      this.campgroundSearchResults = parsedResults;
    },
    async geocode(location) {
      const geocoderResults = await geocoder(location);
      const coordinateObject = { latitude: geocoderResults.results[0].geometry.location.lat, longitude: geocoderResults.results[0].geometry.location.lng }
      console.log(coordinateObject);
      return coordinateObject;
    }
  }
};
</script>

<style scoped>
</style>