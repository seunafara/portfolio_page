<template>
  <div id="app">
    <TopNav />
    <vue-page-transition name="fade-in-right">
      <router-view />
    </vue-page-transition>
    <BtmNav />
  </div>
</template>

<script>
import TopNav from '@/components/Nav';
import BtmNav from '@/components/BottomNav';
export default {
  components: {
    TopNav,
    BtmNav,
  },
};
</script>
<style>
@import './assets/css/style.css';
</style>
