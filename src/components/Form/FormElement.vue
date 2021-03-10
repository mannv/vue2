<template>
  <div class="form-group">
    <label :class="{ 'text-danger': el.$error }">
      {{ label }}
    </label>
    <!-- Input, Email, Password -->
    <input
      v-if="renderTextField"
      :type="type"
      class="form-control"
      :class="{ 'is-invalid': el.$error }"
      v-model.trim="el.$model"
    />

    <!-- Checkbox -->
    <template v-if="renderCheckBoxField">
      <div :class="{ 'is-invalid': el.$error }">
        <div
          v-for="(opt, optIndex) in options"
          :key="optIndex"
          :class="`icheck-${checkboxType} d-inline`"
        >
          <input
            type="checkbox"
            :id="`checkout_${name}_${optIndex}`"
            :checked="setCheckedCheckbox(opt)"
            @click="clickCheckBox(opt)"
          />
          <label :for="`checkout_${name}_${optIndex}`">{{ opt.text }}</label>
        </div>
      </div>
    </template>

    <!-- Checkbox -->
    <template v-if="renderRadioField">
      <div :class="{ 'is-invalid': el.$error }">
        <div
          v-for="(opt, optIndex) in options"
          :key="optIndex"
          :class="`icheck-${checkboxType} d-inline`"
        >
          <input
            :name="name"
            type="radio"
            :id="`checkout_${name}_${optIndex}`"
            :checked="setCheckedRadio(opt)"
            @click="clickRadio(opt)"
          />
          <label :for="`checkout_${name}_${optIndex}`">{{ opt.text }}</label>
        </div>
      </div>
    </template>

    <!-- ERROR Message -->
    <template v-if="el.$error">
      <template v-for="(key, index) in validateOptions">
        <template v-if="!el[key]">
          <span
            v-if="messages.hasOwnProperty(key)"
            :key="`validate_${index}`"
            class="error invalid-feedback"
          >
            {{ messages[key] }}
          </span>
          <span
            v-else
            :key="`validate_${index}`"
            class="error invalid-feedback"
            >{{ defaultErrorMessage(key) }}</span
          >
        </template>
      </template>
    </template>
    <!--    <pre>{{ validateOptions }}</pre>-->
    <!--    <pre>{{ messages }}</pre>-->
    <!--    <pre>{{ el }}</pre>-->
  </div>
</template>

<script>
import _ from 'lodash'
import * as util from '@/config/validate-message'
export default {
  computed: {
    validateOptions() {
      const keys = Object.keys(this.el)
      return _.filter(keys, item => {
        return !_.startsWith(item, '$')
      })
    },
    renderTextField() {
      return _.includes(['text', 'email', 'password'], _.lowerCase(this.type))
    },
    renderCheckBoxField() {
      return _.lowerCase(this.type) === 'checkbox'
    },
    renderRadioField() {
      return _.lowerCase(this.type) === 'radio'
    },
  },
  props: {
    //https://bantikyan.github.io/icheck-bootstrap/
    checkboxType: {
      type: String,
      default: 'primary',
    },
    name: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      default: '',
    },
    el: {
      type: Object,
      default: () => {
        return {}
      },
    },
    options: {
      type: Array,
      default: () => {
        return []
      },
    },
    messages: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  methods: {
    defaultErrorMessage(key) {
      if (
        _.includes(
          [
            'required',
            'requiredIf',
            'requiredUnless',
            'alpha',
            'alphaNum',
            'numeric',
            'integer',
            'decimal',
            'email',
            'ipAddress',
            'macAddress',
            'sameAs',
            'url',
            'or',
            'and',
            'not',
            'withParams',
          ],
          key
        )
      ) {
        return util.format(key, this.label)
      }

      if (_.includes(['minLength', 'minValue'], key)) {
        return util.format(key, this.label, this.el.$params[key].min)
      }

      if (_.includes(['maxLength', 'maxValue'], key)) {
        return util.format(key, this.label, this.el.$params[key].max)
      }

      if (key === 'between') {
        return util.format(
          key,
          this.label,
          this.el.$params.between.min,
          this.el.$params.between.max
        )
      }
    },

    //radio
    setCheckedRadio(opt) {
      return this.el.$model === opt.id
    },
    clickRadio(opt) {
      this.el.$model = opt.id
    },

    //checkbox
    setCheckedCheckbox(opt) {
      return _.includes(this.el.$model, opt.id)
    },
    clickCheckBox(opt) {
      if (!_.includes(this.el.$model, opt.id)) {
        this.el.$model.push(opt.id)
      } else {
        this.el.$model = _.filter(this.el.$model, vl => {
          return vl !== opt.id
        })
      }
    },
  },
}
</script>

<style scoped></style>
