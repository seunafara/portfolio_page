<template>
   <div class="port-home padder">
      <section class="section-hero about-hero">
         <h2 class="hero-intro about-intro">
            Afara Seun Abiola <br /><span class="intro-big"
               >Coding warrior.</span
            >
            <br />
            <span class="intro-sm">
               <span style="color: #BABBC2;"
                  >A full stack software engineer with more than 5 years of
                  coding experience.</span
               >
               <br />
               Responsible for turning just ideas into real-world products for
               clients such as Dangote, Vigowork, Triangle Nigeria, Dremo, PFI
               Capital and many others. And when Seun is not coding, he's
               reading books from great authors, e.g "Thinking, fast and slow",
               "Contagious, why things catch on", "The psychology of selling"
               and many more great books.</span
            >
         </h2>
         <img
            class="memoji-about"
            src="../../public/uploads/memoji_4.webp"
            alt=""
         />
      </section>
   </div>
</template>

<script>
export default {
   metaInfo() {
      return {
         title: `Afara Seun Abiola`,
         titleTemplate: '%s | Afara Seun',
         meta: [
            {
               name: 'description',
               content: 'Afara Seun Abiola Coding warrior',
            },
            {
               property: 'og:title',
               content: 'About Afara Seun Abiola | Afara Seun',
            },
            { property: 'og:site_name', content: 'Afara Seun' },
            {
               property: 'og:description',
               content: 'Afara Seun Abiola Coding warrior',
            },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'https://afaraseun.com/about' },
            {
               name: 'keywords',
               content:
                  'Afara Seun Abiola,About Afara Seun,Who is Afara Seun, Software engineer Afara seun',
            },
         ],
      };
   },
};
</script>

<style scoped></style>
