<template>
  <v-app id="inspire" app>
    <!-- <v-overlay :value="drawer" z-index="4"> </v-overlay> -->
    <AppBar></AppBar>

    <v-main :style="{ backgroundColor: backgroundColor, margin: margin }">
      <v-container fluid fill-height>
        <v-layout>
          <v-flex> <router-view></router-view> </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar.vue";
export default {
  name: "App",
  components: {
    AppBar,
  },

  data: () => ({
    //
    backgroundColor: "white",
    margin: 0,
  }),
};
</script>
<style scoped>
/* .v-application {
  line-height: 2 !important;
} */
</style>
