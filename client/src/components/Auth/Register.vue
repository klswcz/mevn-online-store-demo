<template>
  <v-form>
    <v-container>
      <v-form @submit.prevent="register()">
        <v-row>
          <v-col cols="6">
            <v-label for="e-mail">
              E-mail
            </v-label>
            <v-text-field name="e-mail" outlined dense v-model="email"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-label for="password">
              Password
            </v-label>
            <v-text-field name="password" type="password" outlined dense v-model="password"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-btn type="submit" color="primary">Register</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </v-form>
</template>

<script>
import {register as registerService} from '../../services/UserServices'

export default {
  name: 'Register',
  data () {
    return {
      email: null,
      password: null,
      confirmPassword: null
    }
  },
  methods: {
    register () {
      registerService({
        email: this.email,
        password: this.password
      }).then(res => {
        this.$router.push({name: 'Login'}).then(() => {
          this.$store.commit('showAlert', ['Account has been created, now please log in.'])
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
