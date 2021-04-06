<template>
  <div>
    <h1>Demo AG Gird</h1>

    <div
      class="btn-group mb-3 d-none"
      role="group"
      aria-label="Basic outlined example"
    >
      <button
        v-for="(item, index) in themes"
        :key="index"
        type="button"
        class="btn btn-outline-danger"
        :class="{ active: defaultTheme === item }"
        @click="changeTheme(item)"
      >
        {{ item }}
      </button>
    </div>

    <div v-loading="loading">
      <ag-grid-vue
        style="width: 100%; height: 420px"
        :context="context"
        :class="`ag-theme-${defaultTheme}`"
        :column-defs="columnDefs"
        :row-data="rowData"
        :default-col-def="defaultColDef"
        :grid-options="gridOptions"
        :suppress-row-click-selection="true"
      >
      </ag-grid-vue>
      <div
        v-if="totalPage > 1 && rowData.length > 0"
        class="d-flex justify-content-center mt-3"
      >
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRow"
          :per-page="perPage"
          @change="ChangePage"
        ></b-pagination>
      </div>
    </div>

    <div style="max-height: 300px; overflow-y: auto; background: #ebffd3">
      <pre>{{ rowData }}</pre>
    </div>
  </div>
</template>

<script>
import CustomCellId from '@/components/Gird/CustomCellId'
import StatusCellRenderer from '@/components/Gird/StatusCellRenderer'
export default {
  // eslint-disable-next-line
  components: { CustomCellId, StatusCellRenderer },
  data() {
    return {
      themes: [
        'gird',
        'alpine',
        'alpine-dark',
        'balham',
        'balham-dark',
        'blue',
        'bootstrap',
        'dark',
        'fresh',
        'material',
      ],
      context: null,
      defaultTheme: 'gird',
      rowData: [],
      columnDefs: null,
      defaultColDef: {
        flex: 1,
      },
      gridOptions: {
        unSortIcon: true,
        // icons: {
        //   sortAscending: '<i class="fa fa-sort-alpha-up"/>',
        //   sortDescending: '<i class="fa fa-sort-alpha-down"/>',
        // },
        onSortChanged: (e) => {
          this.sortChanged(e)
        },
      },
      sort: undefined,
      loading: false,
      //bootstrap vue pagination
      totalPage: 10,
      currentPage: 1,
      totalRow: 115,
      perPage: 10,
    }
  },
  beforeMount() {
    this.context = {
      componentParent: this,
    }
    this.columnDefs = [
      {
        headerName: 'ID',
        field: 'id',
        maxWidth: 80,
        sortable: true,
        cellRendererFramework: 'CustomCellId',
      },
      { headerName: 'Title', field: 'body', sortable: true },
      { headerName: 'Body', field: 'title', sortable: true },
      { headerName: 'Status', field: 'status_cd', sortable: true },
      { headerName: 'Label', field: 'label_cd', sortable: true },
      { headerName: 'Send date', field: 'send_date', sortable: true },
      {
        headerName: 'Change Status',
        field: 'id',
        cellRendererFramework: 'StatusCellRenderer',
      },
    ]
    this.loadData(1)
  },
  methods: {
    clickCellId(id) {
      console.log('clickCellId: %d', id)
      this.$swal.success({ text: `Click cell ID: ${id}` })
    },
    changeStatus(id) {
      console.log('changeStatus: %d', id)
      this.$swal.success({ text: `Change status ID: ${id}` })
    },
    sortChanged(e) {
      this.sort = _.head(e.api.getSortModel())
      this.currentPage = 1
      this.loadData(this.currentPage)
    },

    async ChangePage(page) {
      await this.loadData(page)
    },
    // dataRendered(e) {
    //   console.log('gridReady', e)
    //   console.log('paginationGetCurrentPage', e.api.paginationGetCurrentPage())
    //   // this.totalRow = e.api.paginationGetRowCount()
    //   // this.perPage = e.api.paginationGetPageSize()
    //   // this.totalPage = Math.ceil(this.totalRow / this.perPage)
    // },
    changeTheme(name) {
      this.defaultTheme = name
    },

    async loadData(page) {
      this.loading = true
      let params = { page: page, limit: this.perPage }

      if (typeof this.sort === 'object') {
        params.sortBy = this.sort.colId
        params.order = this.sort.sort
      }
      const { data } = await this.axios({
        url: 'https://605b08b027f0050017c05f19.mockapi.io/notifications',
        method: 'get',
        params,
      })
      this.rowData = data
      this.loading = false
    },
  },
}
</script>
<style lang="scss">
$header-background-color: green;
</style>
