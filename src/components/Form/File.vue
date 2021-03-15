<template>
  <div>
    <div class="custom-file">
      <input
        :id="randomId"
        type="file"
        class="custom-file-input"
        @change="onFileChange"
      />
      <label class="custom-file-label" :for="randomId">
        {{ placeholder }}
      </label>
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
    placeholder: {
      type: String,
      default: 'Choose file',
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
    this.randomId = `custom_file_${_.uniqueId()}`
  },
  mounted() {
    /* eslint-disable */
    bsCustomFileInput.init('#' + this.randomId)

    $('#' + this.randomId).bind('change', e => {
      const { files } = e.target
      this.el.$model = files[0]
    })
    /* eslint-enable */
  },
  methods: {
    onFileChange(e) {
      this.$log.debug(e)
    },
  },
}
</script>

<style scoped></style>
