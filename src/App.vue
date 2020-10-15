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
  metaInfo() {
    return {
      
       title: `Full Stack Engineer`,
      titleTemplate: '%s | Afara Seun',
      meta: [
        {
          name: 'description',
          content:
            'A software engineer helping businesses get more clients with their web or mobile applications. If you\'re interested in helping your clients live happier by using your platform, I\'d love to help you grow your business.',
        },
        {
          property: 'og:title',
          content: 'Full Stack Engineer | Afara Seun',
        },
        { property: 'og:site_name', content: 'afaraseun' },
        { property: 'og:type', content: 'website' },
        { name: 'robots', content: 'index,follow' },
      ],
    };
  },
  components: {
    TopNav,
    BtmNav,
  },
};
</script>
<style>
@import './assets/css/style.css';
</style>
