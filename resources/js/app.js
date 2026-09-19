import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '../css/app.css';

const app = createApp(App);

app.use(router);

// Ensure base path is globally available across all components and templates
const getBasePath = () => {
  if (typeof window !== 'undefined') {
    if (window.APP_BASE_PATH) {
      return window.APP_BASE_PATH;
    }
    const path = window.location.pathname;
    if (path.startsWith('/wts/') || path === '/wts') {
      window.APP_BASE_PATH = '/wts';
      return '/wts';
    }
  }
  return '';
};

app.config.globalProperties.$basePath = getBasePath();

// Intercept internal link clicks so standard <a href="..."> navigate smoothly via router.push()
if (typeof window !== 'undefined') {
  document.addEventListener('click', (e) => {
    const target = e.target.closest('a');
    if (!target) return;

    const href = target.getAttribute('href');
    if (!href) return;

    // Ignore external links, mailto, tel, whatsapp, hash links or target="_blank"
    if (
      href.startsWith('http://') ||
      href.startsWith('https://') ||
      href.startsWith('//') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('#') ||
      target.getAttribute('target') === '_blank' ||
      target.hasAttribute('download')
    ) {
      return;
    }

    // Handle relative internal links
    const basePath = window.APP_BASE_PATH || '';
    let routePath = href;
    if (basePath && routePath.startsWith(basePath)) {
      routePath = routePath.slice(basePath.length);
    }
    if (!routePath.startsWith('/')) {
      routePath = '/' + routePath;
    }

    e.preventDefault();
    router.push(routePath).catch(() => {});
  });
}

app.mount('#app');
