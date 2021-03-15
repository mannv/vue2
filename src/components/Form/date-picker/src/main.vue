<!--https://getdatepicker.com/5-4/Usage/-->
<template>
  <div>
    <div :id="randomId" class="input-group date" data-target-input="nearest">
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
export default {
  name: 'LteDatePicker',
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
    $(`#${this.randomId}`).datetimepicker({
      ...this.options,
      ignoreReadonly: true,
      useCurrent: false,
      icons: {
        time: 'far fa-clock',
      },
    })
    $(`#${this.randomId}`).on('change.datetimepicker', (e) => {
      const format = this.options.format ?? 'YYYY-MM-DD'
      this.el.$model = e.date.format(format)
    })
  },
}
</script>

<style scoped>
.datetimepicker-input {
  background: white;
}
</style>
