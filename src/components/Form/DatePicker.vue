<!-- https://getdatepicker.com/5-4/Usage/ -->
<template>
  <div>
    <div class="input-group date" :id="randomId" data-target-input="nearest">
      <input
        readonly
        type="text"
        class="form-control datetimepicker-input"
        data-toggle="datetimepicker"
        :data-target="`#${randomId}`"
      />
      <div
        class="input-group-append"
        :data-target="`#${randomId}`"
        data-toggle="datetimepicker"
      >
        <div class="input-group-text">
          <i class="fa fa-calendar"></i>
        </div>
      </div>
    </div>
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
    options: {
      type: Object,
      default: () => {
        return {
          format: 'YYYY-MM-DD',
        }
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
    this.randomId = `datepicker_${_.uniqueId()}`
  },
  mounted() {
    /* eslint-disable */
    $(`#${this.randomId}`).datetimepicker({
      ...this.options,
      ignoreReadonly: true,
      useCurrent: false,
      icons: {
        time: 'far fa-clock',
      },
    })
    $(`#${this.randomId}`).on('change.datetimepicker', e => {
      const format = this.options.format ?? 'YYYY-MM-DD'
      this.el.$model = e.date.format(format)
    })
    /* eslint-enable */
  },
}
</script>

<style scoped>
.datetimepicker-input {
  background: white;
}
</style>
