<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form
            name="tab-tracker-form"
            autocomplete="off"
          >
            <v-text-field
              label="Email"
              v-model="email"
            ></v-text-field>
            <v-text-field
              label="Password"
              v-model="password"
              type="password"
            ></v-text-field>
            <div class="error" v-html="error"></div>
            <v-btn @click="register" class="cyan" dark>Register</v-btn>
          </form>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async register () {
      try {
        const resposne = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', resposne.data.token)
        this.$store.dispatch('setUser', resposne.data.user)
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
