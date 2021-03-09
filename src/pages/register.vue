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
            <FormElement
              :el="$v.form.name"
              :messages="messages.name"
              label="Your name"
            />
            <hr />
            <FormElement :el="$v.form.email" label="Your email" />
            <hr />
            <FormElement
              name="interests"
              :el="$v.form.interests"
              :options="interests"
              :messages="messages.interests"
              label="Sở thích"
              type="checkbox"
              checkbox-type="carrot"
            />
            <hr />
            <FormElement
              name="salaryType"
              :el="$v.form.salaryType"
              :options="salaryType"
              label="Tính lương theo"
              type="radio"
              checkbox-type="success"
            />
          </div>
          <!-- /.card-body -->
          <div class="card-footer">
            <button type="submit" class="btn btn-primary">Submit</button>
            <pre>{{ form }}</pre>
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
import {
  required,
  email,
  minLength,
  maxLength,
  between,
} from 'vuelidate/lib/validators'
import BasePage from '@/components/BasePage'
import FormElement from '@/components/Form/FormElement'
export default {
  extends: BasePage,
  mixins: [validationMixin],
  components: { FormElement },
  data() {
    return {
      form: {
        name: 'mannv',
        email: '',
        password: '',
        rePassword: '',
        interests: [2],
        salaryType: null,
        age: 0,
      },
      interests: [
        { id: 1, text: 'Du lịch' },
        { id: 2, text: 'Thể thao' },
        { id: 3, text: 'Xem Phim' },
      ],
      salaryType: [
        { id: 1, text: 'Gross' },
        { id: 2, text: 'NET' },
      ],
      messages: {
        name: {
          required: `Vui lòng nhập tên`,
          minLength: `Tên ít nhất phải có 4 ký tự`,
          maxLength: `Tên dài nhất chỉ được nhập 32 ký tự`,
          isUnique: `Tên đã được sử dụng`,
        },
        interests: {
          maxOption: `Chỉ được chọn tối đa 2 lựa chọn`,
        },
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
        isUnique(value) {
          return value.length !== 10
        },
      },
      email: {
        required,
        email,
      },
      interests: {
        required,
        maxOption(vl) {
          return vl.length <= 2
        },
      },
      salaryType: { required },
      age: {
        between: between(20, 30),
      },
    },
  },
}
</script>

<style scoped></style>
