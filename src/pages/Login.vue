<template>
  <b-container fluid class="bg-dark">
    <b-container class="menu-padding">
      <b-row>
        <b-col>
          <b-card title="Login to Setup.Camp" class="my-4">
              <b-card-body id="body-content">
                  <b-form-group label="Your Email" id="email-input">
                      <b-form-input v-model="userData.email"></b-form-input>
                  </b-form-group>
                  <b-form-group label="Your Password" id="password-input">
                      <b-form-input v-model="userData.password"></b-form-input>
                  </b-form-group>
                  <button type="button" class="btn btn-primary" @click="login">Login</button>
                  <p class="mt-4 text-muted">Don't have an account yet? <b-button variant="secondary" size="sm" :to="'/signup'">Click to sign up</b-button></p>
              </b-card-body>
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
            userData: {
                email: '',
                password: '',
            }
        }
    },
    methods: {
        async login() {
            const bodyContent = document.querySelector('#body-content');
            bodyContent.innerHTML = '<div class="text-center"><div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div></div>'
            await this.$store.dispatch('loginUser', this.userData);
            bodyContent.innerHTML = 'Success!'
            this.$router.push('home')
        }
    }
};
</script>

<style scoped>
.menu-padding {
    padding-top:80px;
}
</style>