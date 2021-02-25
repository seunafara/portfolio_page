<template>
   <div class="port-home padder">
      <div class="fixed-top-div"></div>
      <div class="work-heading-intro">
         <h2 class="intro-big work-h2">My Works.</h2>
         <p class="work-p">
            Helping companies acquire more customers and revenue through web and
            mobile technology is nothing short of beautiful art. "Tech is the
            new oil", The latest human resource that creates wealth for
            communities and businesses faster. Harness the power of wealth
            creation by building a great web/mobile application for your
            business. Here's some of the companies I've built for:
         </p>
      </div>

      <div v-if="projects" class="work-list">
         <div v-for="project in projects" class="work-card" :key="project.id">
            <div class="work-card-header">o o o</div>
            <div class="work-card-body">
               <img v-lazy="project.image" alt="" />
            </div>
            <div class="work-card-info">
               <a style="color:white" :href="project.link" target="_blank"
                  ><h6>{{ project.name }}</h6></a
               >
               <p>{{ project.desc }}</p>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import json from '@/assets/data/projects.json';
export default {
   metaInfo() {
      return {
         title: `My Works`,
         titleTemplate: '%s | Afara Seun',
         meta: [
            {
               name: 'description',
               content:
                  'Check out my works. Helping companies acquire more customers and revenue through web and mobile technology is nothing short of beautiful art.',
            },
            { property: 'og:site_name', content: 'Afara Seun' },
            {
               property: 'og:description',
               content:
                  'Check out my works. Helping companies acquire more customers and revenue through web and mobile technology is nothing short of beautiful art.',
            },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'https://afaraseun.com/work' },
            {
               name: 'keywords',
               content:
                  'Contact Afara Seun, Afara Seun Abiola,About Afara Seun,Who is Afara Seun, Software engineer Afara seun',
            },
         ],
      };
   },
   data() {
      return {
         projects: json.projects,
      };
   },
};
</script>

<style scoped></style>
