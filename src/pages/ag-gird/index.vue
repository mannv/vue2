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
      :default-col-def="defaultColDef"
      :pagination="true"
      :pagination-page-size="10"
      :grid-options="gridOptions"
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
      defaultColDef: {
        flex: 1,
      },
      gridOptions: {
        localeText: {
          // Text Filter
          contains: 'A Contains',
          notContains: 'A Not contains',
          startsWith: 'A Starts with',
          endsWith: 'A Ends with',

          // Number Filter & Text Filter
          filterOoo: 'B Filter...',
          equals: 'B Equals',
          notEqual: 'B Not equal',
          empty: 'B Choose One',
        },
      },
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
      this.rowData = _.map(data, (item) => {
        const dateObj = new Date(item.createdAt.substring(0, 10))
        item.createdAt = `${
          dateObj.getMonth() + 1
        }/${dateObj.getDate()}/${dateObj.getFullYear()}`
        return item
      })

      this.columnDefs = [
        { headerName: 'ID', field: 'id', maxWidth: 50 },
        { headerName: 'TITLE', field: 'title' },
        { headerName: 'VIEWS', field: 'views' },
        {
          headerName: 'createdAt',
          field: 'createdAt',
          filter: 'agDateColumnFilter',
          filterParams: {
            buttons: ['clear', 'apply'],
            comparator: function (filterLocalDateAtMidnight, cellValue) {
              var dateAsString = cellValue
              if (dateAsString == null) return -1
              var dateParts = dateAsString.split('/')
              var cellDate = new Date(
                Number(dateParts[2]),
                Number(dateParts[1]) - 1,
                Number(dateParts[0])
              )
              console.log(
                '%d - %d',
                filterLocalDateAtMidnight.getTime(),
                cellDate.getTime()
              )
              if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
                return 0
              }
              if (cellDate < filterLocalDateAtMidnight) {
                return -1
              }
              if (cellDate > filterLocalDateAtMidnight) {
                return 1
              }
              return 1
            },
            browserDatePicker: true,
          },
        },
      ]
    },
  },
}
</script>

<style scoped></style>
