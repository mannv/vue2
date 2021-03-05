<template>
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>{{ title }}</h1>
        </div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li
              v-for="(item, index) in breadcrumb"
              :key="index"
              class="breadcrumb-item"
            >
              <router-link v-if="item.route" :to="{ name: item.route }">
                {{ item.name }}
              </router-link>
              <a v-else class="active">{{ item.name }}</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
    <!-- /.container-fluid -->
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('header', ['title', 'breadcrumb']),
  },
}
</script>

<style scoped></style>
