<template>
  <div id="app">
    <Loader />
    <Navbar />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Loader from '@/components/Loader'
import Footer from '@/components/Footer'
export default {
  components: {
    Loader,
    Navbar,
    Footer
  },
  name: 'App'
}
</script>

<style>

</style>
