<template>
  <b-navbar toggleable="lg" type="dark" style="background-color:rgba(0,0,0,0.5)" fixed="top">
    <b-link class="navbar-brand" :to="'/home'">Setup.Camp</b-link>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="'/explore'">Explore</b-nav-item>
        <b-nav-item :to="'/adventures'" v-if="loginStatus">Adventures</b-nav-item>
        <b-nav-item :to="'/gear'" v-if="loginStatus">Gear</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right v-if="loginStatus">
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <b-avatar class="mr-2"></b-avatar>
            <em>User</em>
          </template>
          <b-dropdown-item :to="'/user'">Profile</b-dropdown-item>
          <b-dropdown-item>Friends</b-dropdown-item>
          <b-dropdown-item :to="'/createAdventure'">Create a New Adventure</b-dropdown-item>
          <b-dropdown-item @click="logoutButton">Logout</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item v-else :to="'/login'"><b-button variant="outline-light">Login</b-button></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  computed: {
    loginStatus() {
      return this.$store.state.loggedIn;
    }
  },
  methods: {
    logoutButton() {
      this.$store.dispatch("logoutUser");
    }
  }
};
</script>

<style scoped>
.navbar-brand {
  font-family: latex-top, sans-serif;
  font-size: 3em;
  font-style: normal;
}
</style>