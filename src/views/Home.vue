<template>
   <div class="port-home">
      <section class="section-hero">
         <h2 class="hero-intro">
            Hi, my name is <br /><span class="intro-big">Afara Seun.</span>
            <br />
            <span class="intro-sm">
               A software engineer helping businesses get more clients with
               their web/mobile applications. If you're interested in helping
               your clients live happier by using your platform, I'd love to
               help you grow your business.</span
            >
         </h2>
         <img class="memoji" src="../../public/uploads/memoji_5.webp" alt="" />
      </section>
   </div>
</template>

<script>
// @ is an alias to /src

export default {
   metaInfo() {
      return {
         title: `Full Stack Engineer`,
         titleTemplate: '%s | Afara Seun',
         meta: [
            {
               name: 'description',
               content:
                  "A software engineer helping businesses get more clients with their web or mobile applications. If you're interested in helping your clients live happier by using your platform, I'd love to help you grow your business. Afara Seun",
            },
            { property: 'og:site_name', content: 'Afara Seun' },
            {
               property: 'og:description',
               content:
                  "A software engineer helping businesses get more clients with their web or mobile applications. If you're interested in helping your clients live happier by using your platform, I'd love to help you grow your business. Afara Seun",
            },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'https://afaraseun.com/' },
            {
               name: 'keywords',
               content:
                  'Afara Seun, Afara Seun Abiola,About Afara Seun,Who is Afara Seun, Software engineer Afara seun',
            },
         ],
      };
   },
};
</script>
