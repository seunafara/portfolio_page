import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/work',
    name: 'Work',
    component: () => import('../views/Work.vue'),
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () => import('../views/Skills.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});


function getRoutesList(routes, pre) {
  return routes.reduce((array, route) => {
    const path = `${pre}${route.path}`;

    if (route.path !== '*') {
      array.push(path);
    }

    if (route.children) {
      array.push(...getRoutesList(route.children, `${path}/`));
    }

    // console.log(array)
    return array;
  }, []);
}

getRoutesList(router.options.routes, 'https://afaraseun.com');


function getRoutesXML() {
  const list = getRoutesList(router.options.routes, 'https://afaraseun.com')
    .map(route => `<url><loc>${route}</loc></url>`)
    .join('\r\n');
  return `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${list}
  </urlset>`;
}

getRoutesXML();

export default router;
