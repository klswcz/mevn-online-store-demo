<template>
  <v-form>
    <v-container>
      <v-form @submit.prevent="login()">
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
            <v-btn type="submit" color="primary">Login</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </v-form>
</template>

<script>
import { login as loginService } from '../../services/UserServices'
import store from '../../store'

export default {
  name: 'Login',
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    login () {
      loginService({
        email: this.email,
        password: this.password
      }).then(res => {
        localStorage.setItem('token', res.data.token)
        store.dispatch('authSuccess', [res.data.token, res.data.user])
        store.dispatch('setCart', res.data.cart)
        this.$router.push({name: 'Home'}).then(() => {
          this.$store.commit('showAlert', ['You\'ve been logged in.'])
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
