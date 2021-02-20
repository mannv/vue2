<template>
  <form class="form-signin">
    <img
      class="mb-4"
      src="https://getbootstrap.com/docs/4.6/assets/brand/bootstrap-solid.svg"
      alt=""
      width="72"
      height="72"
    />
    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
    <label for="inputEmail" class="sr-only">Email address</label>
    <input
      type="email"
      id="inputEmail"
      class="form-control"
      placeholder="Email address"
      required
      autofocus
    />
    <label for="inputPassword" class="sr-only">Password</label>
    <input
      type="password"
      id="inputPassword"
      class="form-control"
      placeholder="Password"
      required
    />
    <div class="checkbox mb-3">
      <label> <input type="checkbox" value="remember-me" /> Remember me </label>
    </div>
    <button
      class="btn btn-lg btn-primary btn-block"
      type="button"
      @click="login"
    >
      Sign in
    </button>
    <p class="mt-5 mb-3 text-muted">
      <router-link :to="{ name: 'index' }">Home</router-link>
    </p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      account: '0904488452',
      token: '165d6b39ae5c7324011512ce06edba52',
    }
  },
  methods: {
    login: function() {
      this.$auth
        .login({ account: this.account, token: this.token })
        .then(res => {
          console.log('res', res)
          console.log('ath', this.$auth.isAuthenticated())
          console.log('getToken', this.$auth.getToken())
          // this.$router.push({ name: 'index' })
        })
    },
  },
}
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type='email'] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type='password'] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>
