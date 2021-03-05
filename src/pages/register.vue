<template>
  <div class="row">
    <!-- left column -->
    <div class="col-md-6">
      <!-- jquery validation -->
      <div class="card card-primary">
        <div class="card-header">
          <h3 class="card-title">
            Register account
          </h3>
        </div>
        <!-- /.card-header -->
        <!-- form start -->
        <form @submit.prevent="submitRegister">
          <div class="card-body">
            <FormElement :el="$v.form.name" label="Your name" />
          </div>
          <!-- /.card-body -->
          <div class="card-footer">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
      <!-- /.card -->
    </div>
    <!--/.col (left) -->
    <div class="col-md-6">
      <pre>{{ $v }}</pre>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
import BasePage from '@/components/BasePage'
import FormElement from '@/components/Form/FormElement'
export default {
  extends: BasePage,
  mixins: [validationMixin],
  components: { FormElement },
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
      this.$store.dispatch('header/setTitle', 'Register')
      this.$store.dispatch('header/setBreadcrumb', [
        { name: 'Home', route: 'index' },
        { name: 'Register' },
      ])
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
