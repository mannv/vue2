<template>
  <div>
    <h1>Home</h1>
    <pre>
      isLogin: {{ isLogin }}
    </pre>
    <button class="btn btn-success" @click="demo">Demo</button>
    <button class="btn btn-danger" @click="logout">Logout</button>
    <button class="btn btn-info" @click="category">Category</button>
  </div>
</template>

<script>
export default {
  computed: {
    isLogin() {
      return this.$auth.isAuthenticated()
    },
  },
  methods: {
    demo() {
      console.log(this.$auth.getToken())
      console.log(this.$auth.getPayload())
    },
    logout() {
      this.$auth.logout()
    },
    async category() {
      let categories = await this.axios.get('/category/v1/list')
      let userProfile = await this.axios.get('/user/v1/profile')
      console.log('categories', categories)
      console.log('userProfile', userProfile)
    },
  },
}
</script>

<style scoped></style>
