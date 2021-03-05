<template>
  <div>
    <div class="wrapper">
      <!-- Navbar -->
      <Navbar />
      <!-- /.navbar -->

      <!-- Main Sidebar Container -->
      <Sidebar />

      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <Breadcrumb />
        <!-- Main content -->
        <section class="content">
          <div class="container-fluid">
            <slot />
            <!-- /.row -->
          </div>
          <!-- /.container-fluid -->
        </section>
        <!-- /.content -->
      </div>
      <!-- /.content-wrapper -->
      <Footer />
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/layouts/AdminLTE/Navbar'
import Footer from '@/components/layouts/AdminLTE/Footer'
import Sidebar from '@/components/layouts/AdminLTE/Sidebar'
import Breadcrumb from '@/components/layouts/AdminLTE/Breadcrumb'
export default {
  components: {
    Navbar,
    Footer,
    Sidebar,
    Breadcrumb,
  },
}
</script>
