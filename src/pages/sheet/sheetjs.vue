<template>
  <div>
    <button class="btn btn-info" @click="exportExcel">Export excel</button>
  </div>
</template>

<script>
import XLSX from 'xlsx'

export default {
  data() {
    return {
      cols: [
        { name: 'A', key: 0 },
        { name: 'B', key: 1 },
        { name: 'C', key: 2 },
      ],
      data: [
        ['id', 'name', 'value'],
        [1, 'sheetjs', 7262],
        [2, 'js-xlsx', 6969],
      ],
    }
  },
  methods: {
    exportExcel() {
      const worksheet = XLSX.utils.aoa_to_sheet(this.data)
      worksheet['A1'].s = {
        // set the style for target cell
        font: {
          bold: true,
          color: { rgb: 'FFFFAA00' },
        },
      }
      worksheet['A3'].l = {
        Target: 'http://sheetjs.com',
        Tooltip: 'Find us @ SheetJS.com!',
      }
      console.log('worksheet', worksheet)

      // var worksheet = XLSX.utils.json_to_sheet(
      //   [
      //     { A: 'S', B: 'h', C: 'e', D: 'e', E: 't', F: 'J', G: 'S' },
      //     { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7 },
      //     { A: 2, B: 3, C: 4, D: 5, E: 6, F: 7, G: 8 },
      //   ],
      //   { header: ['A', 'B', 'C', 'D', 'E', 'F', 'G'] }
      // )

      const new_workbook = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(new_workbook, worksheet, 'SheetJS')
      XLSX.writeFile(new_workbook, 'sheetjs.xlsx')
    },
  },
}
</script>

<style scoped></style>
