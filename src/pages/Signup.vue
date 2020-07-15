<template>
  <b-container fluid class="bg-dark">
    <b-container class="menu-padding">
      <b-row>
        <b-col>
          <b-card title="Signup for Setup.Camp" class="my-4">
            <b-card-body id="body-content">
              <b-form-group label="Your Name" id="name-input">
                <b-form-input v-model="user.name"></b-form-input>
              </b-form-group>
              <b-form-group label="Select a username" id="username-input">
                <b-form-input v-model="user.username"></b-form-input>
              </b-form-group>
              <b-form-group label="Your Email" id="email-input">
                <b-form-input v-model="user.email"></b-form-input>
              </b-form-group>
              <b-form-group label="Select a Password">
                <b-form-input v-model="user.password"></b-form-input>
              </b-form-group>
              <button type="button" class="btn btn-primary" @click="signupUser">Sign Up</button>
              <p class="mt-4 text-muted">
                Have an account already?
                <b-button variant="secondary" size="sm" :to="'/login'">Click to log in</b-button>
              </p>
            </b-card-body>
            <div class="text-center" v-if="loadingStatus">
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
            <div class="text-center" v-if="this.$store.state.loggedIn">
              <p>Success!</p>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>

export default {
  data() {
    return {
      user: {
        name: "",
        username: "",
        email: "",
        password: ""
      },
      loadingStatus: false
    };
  },
  methods: {
    async signupUser() {
      this.loadingStatus = true;

      const userData = {
        name: this.user.name,
        username: this.user.username,
        email: this.user.email,
        password: this.user.password
      };

      await this.$store.dispatch("signupUser", userData);
      
      this.loadingStatus = false;

      this.$router.push('home')
    }
  }
};
</script>

<style scoped>
.menu-padding {
  padding-top: 80px;
}
</style>