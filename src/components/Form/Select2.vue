<!-- https://select2.org/ -->
<template>
  <div>
    <select
      :id="randomId"
      class="form-control select2"
      :multiple="multiple"
      :disabled="disabled"
      style="width: 100%;"
    >
      <option v-if="!multiple"></option>
      <option
        v-for="(opt, index) in options"
        :key="index"
        :value="opt.id"
        :selected="checkSelected(opt.id)"
      >
        {{ opt.text }}
      </option>
    </select>
    <lte-error-message
      :el="el"
      :messages="messages"
      :label="label"
    ></lte-error-message>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  props: {
    el: {
      type: Object,
      default: () => {
        return {}
      },
    },
    label: {
      type: String,
      default: null,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Object,
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
  data() {
    return {
      randomId: '',
    }
  },
  created() {
    this.randomId = `select_${_.uniqueId()}`
  },
  mounted() {
    /* eslint-disable */
    $('#' + this.randomId).select2({
      placeholder: '-- Select --',
      theme: 'bootstrap4',
      allowClear: !this.disabled,
    })

    $('#' + this.randomId).on('select2:select', e => {
      const { id } = e.params.data
      if (this.multiple) {
        if (!_.includes(this.el.$model, id)) {
          this.el.$model.push(id)
        }
      } else {
        this.el.$model = id
      }
    })
    $('#' + this.randomId).on('select2:unselect', e => {
      const { id } = e.params.data
      if (this.multiple) {
        this.el.$model = _.filter(this.el.$model, vl => {
          return vl !== id
        })
      } else {
        this.el.$model = null
      }
    })
    $('#' + this.randomId).on('select2:clear', e => {
      if (this.multiple) {
        this.el.$model = []
      } else {
        this.el.$model = null
      }
    })
    /* eslint-enable */
  },
  methods: {
    checkSelected(id) {
      if (this.multiple) {
        return _.includes(this.el.$model, id)
      }
      return this.el.$model === id
    },
  },
}
</script>

<style scoped>
.datetimepicker-input {
  background: white;
}
</style>
