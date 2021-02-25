<template>
   <div class="port-home padder wrapper-height-cross">
      <div class="fixed-top-div"></div>
      <div class="work-heading-intro">
         <h2 class="intro-big work-h2">My Skills.</h2>
         <p class="work-p">
            Armed with over 5 years of professional coding experience, thousands
            of coffee cups and amazing long nights; I build world class
            applications everyday
         </p>
      </div>
      <div style="overflow: hidden;width: 100%;margin: auto;">
         <div class="slider">
            <div class="slide-track">
               <div v-for="skill in skills" :key="skill.id" class="slide">
                  <img height="80" width="80" :src="skill.image" />
                  <p class="slide-p">{{ skill.name }}</p>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import json from '@/assets/data/skills.json';
export default {
   metaInfo() {
      return {
         title: `My Skills`,
         titleTemplate: '%s | Afara Seun',
         meta: [
            {
               name: 'description',
               content:
                  'Armed with over 5 years of professional coding experience, thousands of coffee cups and amazing long nights. Check out my skills',
            },
            { property: 'og:site_name', content: 'Afara Seun' },
            {
               property: 'og:description',
               content:
                  'Armed with over 5 years of professional coding experience, thousands of coffee cups and amazing long nights. Check out my skills',
            },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'https://afaraseun.com/skills' },
            {
               name: 'keywords',
               content:
                  'Afara Seun Skills, Afara Seun Abiola,About Afara Seun,Who is Afara Seun, Software engineer Afara seun',
            },
         ],
      };
   },
   data() {
      return {
         skills: json.skills,
      };
   },
};
</script>

<style scoped></style>
