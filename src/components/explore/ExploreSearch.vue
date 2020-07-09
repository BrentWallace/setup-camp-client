<template>
  <b-container>
    <b-row>
      <b-col>
        <b-form-group id="state-filter" label="Search by State">
          <b-form-input v-model="filters.state" trim></b-form-input>
        </b-form-group>
        <b-button variant="primary" @click="fetchCampgroundSearchResults">Search</b-button>
        <hr>
        <p class="text-center">or</p>
        <hr>
        <b-form-group>
          <b-form-input v-model="geocoderSearch"></b-form-input>
        </b-form-group>
        <b-button variant="primary" @click="geocode(geocoderSearch)">Search</b-button>
        {{ this.geocoderResults }}
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
        state: ""
      },
      campgroundSearchResults: [],
      resultsLoading: false,
      geocoderSearch: '',
      geocoderResults: '',
    };
  },
  methods: {
    async fetchCampgroundSearchResults() {
      this.resultsLoading = true;

      let queryString = "";

      if (this.filters.state) {
        queryString = `state=${this.filters.state}`;
      }

      const formattedURL = `http://localhost:3000/campgrounds?${queryString}`;
      const results = await fetch(formattedURL);
      const parsedResults = await results.json();

      this.resultsLoading = false;
      this.campgroundSearchResults = parsedResults;
    },
    async geocode(location) {
      this.geocoderResults = await geocoder(location);
      console.log(this.geocoderResults)
    }
  },
};
</script>

<style scoped>
</style>