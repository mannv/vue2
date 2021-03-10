<template>
  <div v-if="el.$error">
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
          style="display: block"
        >
          {{ defaultErrorMessage(key) }}
        </span>
      </template>
    </template>
  </div>
</template>

<script>
import _ from 'lodash'
import * as util from '@/config/validate-message'

export default {
  props: {
    label: {
      type: String,
      default: null,
    },
    el: {
      type: Object,
      default: () => {
        return {}
      },
    },
    messages: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  computed: {
    validateOptions() {
      const keys = Object.keys(this.el)
      return _.filter(keys, item => {
        return !_.startsWith(item, '$')
      })
    },
  },
  methods: {
    defaultErrorMessage(key) {
      const label = this.label ?? 'This field'
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
        return util.format(key, label)
      }

      if (_.includes(['minLength', 'minValue'], key)) {
        return util.format(key, label, this.el.$params[key].min)
      }

      if (_.includes(['maxLength', 'maxValue'], key)) {
        return util.format(key, label, this.el.$params[key].max)
      }

      if (key === 'between') {
        return util.format(
          key,
          label,
          this.el.$params.between.min,
          this.el.$params.between.max
        )
      }
    },
  },
}
</script>

<style scoped></style>
