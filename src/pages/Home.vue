<template>
  <div>
    <b-jumbotron
      container-fluid
      bg-variant="dark"
      text-variant="light"
      class="vh-100 text-center d-flex flex-column align-items-center justify-content-center"
    >
      <b-img class="my-4 img-responsive" src="/setup-camp-logo.png" fluid />
      <b-button variant="outline-light" size="lg" :to="'/explore'" v-if="this.$store.state.token">Find your next adventure!</b-button>
      <b-button variant="outline-light" size="lg" :to="'/signup'" v-else>Get Started</b-button>
      <video class="background" src="video.mp4" playsinline muted autoplay loop></video>
      <b-button variant="outline-light" @click="scrollDown" class="scroll-down my-4">&darr;</b-button>
    </b-jumbotron>
    <b-container>
      <b-row>
        <b-col>
          <h1 class="display-4 text-center mb-4" id="scroll-target">What is Setup.Camp?</h1>
          <p
            class="mb-4 pb-4 text-center"
          >Have you ever tried to coordinate a group of people for a camping trip or other outdoor adventure? Setup.Camp was created to help those brave souls taking on that task with a collection of tools to help them keep track of who's bringing the extra sleeping bags, and explain how to get to the trailhead for the zillionth time!</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  methods: {
    scrollDown() {
      document.querySelector("#scroll-target").scrollIntoView(true);
    }
  }
};
</script>

<style scoped>
.jumbotron {
  position: relative;
  z-index: 0;
  overflow: hidden;
}
video.background {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  z-index: -1;
}
.scroll-down {
  position: absolute;
  bottom: 0;
  left: 49.5%;
  font-size: 2em;
  margin-bottom: 5px;
}
</style>