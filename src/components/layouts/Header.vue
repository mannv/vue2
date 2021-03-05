<template>
  <header>
    <div class="navbar navbar-dark shadow-sm" :class="bgClass">
      <div class="container d-flex justify-content-between">
        <ul class="nav">
          <li class="nav-item">
            <router-link :to="{ name: 'index' }" class="nav-link">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'product' }" class="nav-link">
              Product
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'about' }" class="nav-link">
              About
            </router-link>
          </li>
        </ul>
        <div>
          <router-link
            :to="{ name: 'register' }"
            class="btn btn-default text-white"
          >
            Register
          </router-link>
          <router-link
            :to="{ name: 'login' }"
            class="btn btn-default text-white"
          >
            Login
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    bgClass: {
      type: String,
      default: 'bg-primary',
    },
  },
}
</script>
<style scoped>
.nav a {
  color: white;
}
.nav a.router-link-exact-active {
  color: red;
}
</style>
