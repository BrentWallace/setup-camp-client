<template>
  <b-container fluid class="bg-dark">
    <b-container class="menu-padding">
      <b-row>
        <b-col>
          <b-card title="Signup for Setup.Camp">
              <b-card-body id="body-content">
                  <b-form-group label="Your Name" id="name-input">
                      <b-form-input v-model="user.name"></b-form-input>
                  </b-form-group>
                  <b-form-group label="Your Email" id="email-input">
                      <b-form-input v-model="user.email"></b-form-input>
                  </b-form-group>
                  <button type="button" class="btn btn-primary" @click="signup">Sign Up</button>
                  <p class="mt-4 text-muted">Have an account already? <b-button variant="secondary" size="sm">Click to log in</b-button></p>
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
        signup() {
            const bodyContent = document.querySelector('#body-content');
            bodyContent.innerHTML = '<div class="text-center"><div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div></div>'
            setTimeout(() => {
                bodyContent.innerHTML = `<p class="display-4">Success!</p><p>User created with the following:</p><ul class="list-group"><li class="list-group-item"><strong>name:</strong> ${this.user.name}</li><li class="list-group-item"><strong>email:</strong> ${this.user.email}</li></ul>`
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