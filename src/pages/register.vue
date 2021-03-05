<template>
  <div class="my-5">
    <form @submit.prevent="submitRegister">
      <div class="row mb-3">
        <label
          class="col-sm-2 col-form-label"
          :class="{ 'text-danger': $v.form.name.$error }"
        >
          Full name
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            :class="{ 'is-invalid': $v.form.name.$error }"
            v-model.trim="$v.form.name.$model"
          />
          <div
            v-if="$v.form.name.$error && !$v.form.name.required"
            class="invalid-feedback"
          >
            Field is required.
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Age</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" />
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            v-model.trim="$v.form.email.$model"
          />
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" />
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Re-Password</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" />
        </div>
      </div>
      <div class="row mb-3">
        <div class="offset-sm-2 col-sm-10">
          <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
      </div>
    </form>
    <pre>{{ $v.form }}</pre>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
import BasePage from '@/components/BasePage'
export default {
  extends: BasePage,
  mixins: [validationMixin],
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        rePassword: '',
      },
    }
  },
  methods: {
    submitRegister() {
      this.$v.form.$touch()
      if (this.$v.form.$invalid) {
        return
      }
      alert('Submit')
    },
    setupHeader() {
      console.log('---> setupHeader 2')
    },
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(32),
      },
      email: {
        required,
        email,
      },
    },
  },
}
</script>

<style scoped></style>
