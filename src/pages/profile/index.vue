<template>
  <div class="row">
    <!-- left column -->
    <div class="col-md-6">
      <!-- jquery validation -->
      <div class="card card-primary">
        <div class="card-header">
          <h3 class="card-title">Profile</h3>
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
      <button
        type="button"
        class="btn btn-default"
        data-toggle="modal"
        data-target="#modal-default"
      >
        Launch Default Modal
      </button>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#modal-primary"
      >
        Launch Primary Modal
      </button>
    </div>

    <portal to="bt-modal">
      <div class="modal fade" id="modal-primary">
        <div class="modal-dialog">
          <div class="modal-content bg-primary">
            <div class="modal-header">
              <h4 class="modal-title">Primary Modal</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>One fine body&hellip;</p>
            </div>
            <div class="modal-footer justify-content-between">
              <button
                type="button"
                class="btn btn-outline-light"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-outline-light">
                Save changes
              </button>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
    </portal>

    <portal to="bt-modal">
      <div class="modal fade" id="modal-default">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Default Modal</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>One fine body&hellip;</p>
            </div>
            <div class="modal-footer justify-content-between">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
    </portal>
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
