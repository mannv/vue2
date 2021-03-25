<template>
  <div>
    <h1>
      Home: <span class="text-primary">{{ name }}</span>
    </h1>
    <pre>
      isLogin: {{ isLogin }}
    </pre>
    <button class="btn btn-success" @click="demo">Demo</button>
    <button class="btn btn-danger" @click="logout">Logout</button>
    <button class="btn btn-info" @click="category">Category</button>
    <router-link :to="{ name: 'ag-gird' }" class="btn btn-danger">
      AG Gird
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('auth', ['name']),
    isLogin() {
      return this.$auth.isAuthenticated()
    },
  },
  methods: {
    // ...mapActions('auth', ['loadProfile']),
    demo() {
      console.log(this.$auth.getToken())
      console.log(this.$auth.getPayload())
    },
    logout() {
      this.$store.dispatch('auth/logout')
      this.$auth.logout()
      this.$router.push({ name: 'login' })
    },
    async category() {
      // let categories = await this.axios.get('/category/v1/list')
      // let userProfile = await this.axios.get('/user/v1/profile')
      // console.log('categories', categories)
      // console.log('userProfile', userProfile)
      await this.$store.dispatch('auth/loadProfile')
    },
  },
}
</script>

<style scoped></style>
