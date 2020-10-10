<template>
  <div id="app">
    <TopNav />
    <router-view />
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
