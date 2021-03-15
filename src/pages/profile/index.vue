<template>
  <div class="row">
    <!-- left column -->
    <div class="col-md-6">
      <!-- jquery validation -->
      <div class="card card-primary">
        <div class="card-header">
          <h3 class="card-title">
            Profile
          </h3>
        </div>
        <!-- /.card-header -->
        <!-- form start -->
        <form @submit.prevent="submitRegister">
          <div class="card-body">
            <div class="form-group">
              <label :class="{ 'text-danger': $v.form.name.$error }">
                Tên của bạn
              </label>
              <lte-field
                type="text"
                :el="$v.form.name"
                label="Tên của bạn"
              ></lte-field>
            </div>

            <div class="form-group">
              <label :class="{ 'text-danger': $v.form.avatar.$error }">
                Avatar
              </label>
              <lte-file :el="$v.form.avatar" label="Avatar"></lte-file>
            </div>
          </div>
          <!-- /.card-body -->
          <div class="card-footer">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
      <!-- /.card -->
      <pre>{{ $v.form }}</pre>
    </div>
    <!--/.col (left) -->
    <div class="col-md-6">
      <pre>{{ form }}</pre>
    </div>
  </div>
</template>

<script>
import BasePage from '@/components/BasePage'
import { maxLength, minLength, required } from 'vuelidate/lib/validators'

export default {
  extends: BasePage,
  data() {
    return {
      form: {
        name: 'mannv',
        avatar: null,
      },
    }
  },
  methods: {
    setupHeader() {
      this.$store.dispatch('header/setTitle', 'Profile')
      this.$store.dispatch('header/setBreadcrumb', [
        { name: 'Home', route: 'index' },
        { name: 'Profile' },
      ])
    },
    submitRegister() {
      this.$v.form.$touch()
      if (this.$v.form.$invalid) {
        return null
      }
      this.submit()
    },
    async submit() {
      let formData = new FormData()
      _.forEach(this.form, (value, key) => {
        formData.append(key, value)
      })
      // var imagefile = document.querySelector('#file');
      // formData.append("image", imagefile.files[0]);
      // formData.append('avatar', this.form.avatar)
      // formData.append('name', this.form.name)
      await this.axios.post('/update-profile', this.form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
    },
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(32),
        isUnique(value) {
          return value.length !== 10
        },
      },
      avatar: { required },
    },
  },
}
</script>

<style scoped></style>
