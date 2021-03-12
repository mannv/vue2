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
            <div class="form-group">
              <label :class="{ 'text-danger': $v.form.name.$error }">
                Tên của bạn
              </label>
              <lte-field
                type="text"
                :el="$v.form.name"
                :messages="messages.name"
                label="Tên của bạn"
              ></lte-field>
            </div>

            <div class="form-group">
              <label :class="{ 'text-danger': $v.form.email.$error }">
                Email
              </label>
              <lte-field
                type="email"
                :el="$v.form.email"
                label="Your email"
              ></lte-field>
            </div>

            <div class="form-group">
              <label :class="{ 'text-danger': $v.form.age.$error }">
                Age
              </label>
              <lte-field type="email" :el="$v.form.age" label="Age"></lte-field>
            </div>

            <div class="form-group">
              <label :class="{ 'text-danger': $v.form.status.$error }">
                Status
              </label>
              <br />
              <lte-switch :el="$v.form.status"></lte-switch>
            </div>

            <div class="form-group">
              <label :class="{ 'text-danger': $v.form.demoSwitch.$error }">
                demo Switch
              </label>
              <br />
              <lte-switch :el="$v.form.demoSwitch"></lte-switch>
            </div>
            <div class="form-group">
              <label :class="{ 'text-danger': $v.form.interests.$error }">
                Sở thích
              </label>
              <lte-checkbox-group
                label="Sở thích"
                name="checkbox_interests"
                :el="$v.form.interests"
                :options="interests"
                :messages="messages.interests"
              ></lte-checkbox-group>
            </div>
            <div class="form-group">
              <label :class="{ 'text-danger': $v.form.salaryType.$error }">
                Tính lương theo
              </label>
              <lte-radio-group
                label="Tính lương theo"
                name="radio_salary_type"
                :el="$v.form.salaryType"
                :options="salaryType"
                type="success"
              ></lte-radio-group>
            </div>
            <div class="form-group">
              <label :class="{ 'text-danger': $v.form.birthday.$error }">
                Sinh nhật
              </label>
              <lte-datepicker
                label="Sinh nhật"
                :el="$v.form.birthday"
              ></lte-datepicker>
            </div>
            <div class="form-group">
              <label :class="{ 'text-danger': $v.form.join.$error }">
                Join date
              </label>
              <lte-datepicker
                label="Join date"
                :el="$v.form.join"
                :options="{ format: '' }"
              ></lte-datepicker>
            </div>
            <div class="form-group">
              <label :class="{ 'text-danger': $v.form.city.$error }">
                Thành phố
              </label>
              <lte-select
                label="Thành phố"
                :el="$v.form.city"
                :multiple="true"
                :options="cities"
              ></lte-select>
            </div>

            <div class="form-group">
              <label :class="{ 'text-danger': $v.form.city2.$error }">
                Thành phố 2
              </label>
              <lte-select
                label="Thành phố"
                :el="$v.form.city2"
                :options="cities"
              ></lte-select>
            </div>
          </div>
          <!-- /.card-body -->
          <div class="card-footer">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
      <!-- /.card -->
      <pre>{{ $v.form.birthday }}</pre>
    </div>
    <!--/.col (left) -->
    <div class="col-md-6">
      <pre>{{ form }}</pre>
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
  // between,
  minValue,
  maxValue,
} from 'vuelidate/lib/validators'
import BasePage from '@/components/BasePage'
export default {
  extends: BasePage,
  mixins: [validationMixin],
  data() {
    return {
      form: {
        name: 'mannv',
        email: '',
        password: '',
        rePassword: '',
        interests: [2],
        salaryType: null,
        age: '',
        status: 0,
        demoSwitch: 1,
        birthday: '',
        join: '',
        city: [1, 5],
        city2: 3,
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
        interests: {
          maxOption: `Chỉ được chọn tối đa 2 lựa chọn`,
        },
      },
      cities: [
        { id: 1, text: 'Hà Nội' },
        { id: 2, text: 'TP. HCM' },
        { id: 3, text: 'Đà Nẵng' },
        { id: 4, text: 'Quảng Ninh' },
        { id: 5, text: 'Hải Phòng' },
        { id: 6, text: 'Bình Thuận' },
      ],
    }
  },
  mounted() {
    /* eslint-disable */
    // $.fn.bootstrapSwitch.defaults.onSwitchChange = (event, state) => {
    //   const ref = $(event.target).data('ref')
    //   if (!ref) {
    //     return
    //   }
    //   this.$refs[ref].clickSwitchButton(state)
    // }
    /* eslint-enable */
    // console.log(this.$el)
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
        required,
        minValue: minValue(10),
        maxValue: maxValue(20),
        // between: between(20, 30),
      },
      status: {},
      demoSwitch: {},
      birthday: {
        required,
      },
      join: { required },
      city: { required },
      city2: { required },
    },
  },
}
</script>

<style scoped></style>
