<template>
  <div>
    <b-jumbotron
      container-fluid
      bg-variant="dark"
      text-variant="light"
      class="menu-padding d-flex align-items-center justify-content-center"
    >
      <template v-slot:header class="w-100">My Profile</template>
    </b-jumbotron>
    <b-container>
      <b-row>
        <b-col>
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col lg="3" md="6">
                <b-card-img
                  src="https://placehold.it/250x250"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col lg="9" md="6">
                <b-card-body title="User Name">
                  <b-card-text>
                    This is where the user's profile information will go
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
          <b-card class="my-4" title="My Adventures"></b-card>
          <b-card class="my-4" title="My Gear"></b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.jumbotron {
  height: 500px;
}
</style>