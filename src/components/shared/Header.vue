<template>
  <b-navbar toggleable="lg" type="dark" style="background-color:rgba(0,0,0,0.5)" fixed="top">
    <b-link class="navbar-brand" :to="'/home'">Setup.Camp Logo</b-link>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="'explore'">Explore</b-nav-item>
        <b-nav-item :to="'adventures'">Adventures</b-nav-item>
        <b-nav-item :to="'gear'">Gear</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <b-avatar class="mr-2"></b-avatar><em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item>Friends</b-dropdown-item>
          <b-dropdown-item href="#">Create a New Adventure</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style scoped>
</style>