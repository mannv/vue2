<template>
  <div>
    <h1>Demo AG Gird</h1>

    <div
      class="btn-group mb-3"
      role="group"
      aria-label="Basic mixed styles example"
    >
      <router-link :to="{ name: 'index' }" class="btn btn-danger">
        Home
      </router-link>
      <router-link :to="{ name: 'ag-gird-full-row' }" class="btn btn-warning">
        Full Row
      </router-link>
      <router-link
        :to="{ name: 'ag-gird-custom-cell' }"
        class="btn btn-primary"
      >
        Custom Cell
      </router-link>
    </div>

    <ag-grid-vue
      style="width: 100%; height: 500px"
      class="ag-theme-alpine"
      :column-defs="columnDefs"
      :row-data="rowData"
      :pagination="true"
      :pagination-page-size="10"
    >
    </ag-grid-vue>

    <div style="max-height: 300px; overflow-y: auto; background: #ebffd3">
      <pre>{{ rowData }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rowData: [],
      columnDefs: null,
    }
  },
  beforeMount() {
    this.loadData()
  },
  methods: {
    async loadData() {
      const { data } = await this.axios.get(
        'https://mockend.com/mannv/vue2/posts'
      )
      this.rowData = data

      this.columnDefs = [
        { headerName: 'ID', field: 'id' },
        { headerName: 'TITLE', field: 'title' },
        { headerName: 'VIEWS', field: 'views' },
      ]
    },
  },
}
</script>

<style scoped></style>
