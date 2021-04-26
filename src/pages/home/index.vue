<template>
  <div>
    <h1>
      Home: <span class="text-primary">{{ name }}</span>
    </h1>
    <pre>
      isLogin: {{ isLogin }}
    </pre>
    <button class="btn btn-success" @click="demo">Demo</button>
    <button class="btn btn-danger" @click="logout">Logout</button>
    <button class="btn btn-info" @click="category">Category</button>
    <hr />
    <button class="btn btn-info" @click="exportExcel">Export excel</button>
    <hr />
    <CKEditor />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import XLSX from 'xlsx'
import CKEditor from '@/components/CKEditor'
export default {
  components: { CKEditor },
  computed: {
    ...mapGetters('auth', ['name']),
    isLogin() {
      return this.$auth.isAuthenticated()
    },
  },
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
      console.log('this.data', this.data)
      // var worksheet = XLSX.utils.aoa_to_sheet(this.data)
      const worksheet = XLSX.readFile('@/assets/template.xlsx')
      console.log(worksheet)
      // var new_workbook = XLSX.utils.book_new()
      // XLSX.utils.book_append_sheet(new_workbook, worksheet, 'SheetJS')
      // XLSX.writeFile(new_workbook, 'sheetjs.xlsx')
    },
    // ...mapActions('auth', ['loadProfile']),
    demo() {
      console.log(this.$auth.getToken())
      console.log(this.$auth.getPayload())
    },
    logout() {
      this.$store.dispatch('auth/logout')
      this.$auth.logout()
      this.$router.push({ name: 'login' })
    },
    async category() {
      // let categories = await this.axios.get('/category/v1/list')
      // let userProfile = await this.axios.get('/user/v1/profile')
      // console.log('categories', categories)
      // console.log('userProfile', userProfile)
      await this.$store.dispatch('auth/loadProfile')
    },
  },
}
</script>

<style scoped></style>
