<template>
  <v-toolbar app fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <router-link to="/">Tab Tracker</router-link>
    </v-toolbar-title>
    <!-- TODO: Implement Me -->
    <!-- <v-toolbar-items>
      <v-btn flat dark>
        Browse
      </v-btn>
    </v-toolbar-items> -->
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        flat
        dark
        to="login"
        v-if="!$store.state.isUserLoggedIn"
      >Login</v-btn>
      <v-btn
        flat
        dark
        to="register"
        v-if="!$store.state.isUserLoggedIn"
      >Sign Up</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
</style>
