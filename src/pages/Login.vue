<template>
  <b-container fluid class="bg-dark">
    <b-container class="menu-padding">
      <b-row>
        <b-col>
          <b-card title="Login to Setup.Camp" class="my-4">
              <b-card-body id="body-content">
                  <b-form-group label="Your Name" id="name-input">
                      <b-form-input v-model="user.name"></b-form-input>
                  </b-form-group>
                  <b-form-group label="Your Email" id="email-input">
                      <b-form-input v-model="user.email"></b-form-input>
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
            user: {
                name: '',
                email: '',
            }
        }
    },
    methods: {
        login() {
            const bodyContent = document.querySelector('#body-content');
            bodyContent.innerHTML = '<div class="text-center"><div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div></div>'
            this.$store.dispatch('loginUser');
            setTimeout(() => {
                bodyContent.innerHTML = `<p class="display-4">Success!</p><p>User logged in with the following:</p><ul class="list-group"><li class="list-group-item"><strong>name:</strong> ${this.user.name}</li><li class="list-group-item"><strong>email:</strong> ${this.user.email}</li></ul>`
            }, 1000);
        }
    }
};
</script>

<style scoped>
.menu-padding {
    padding-top:80px;
}
</style>