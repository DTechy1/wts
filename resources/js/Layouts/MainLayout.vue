<template>
  <div class="min-h-screen">
    <Navbar :forceBackground="forceBackground" />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '../Components/Navbar.vue';
import Footer from '../Components/Footer.vue';

const route = useRoute();

// Force navbar background on non-home pages
const forceBackground = computed(() => {
  return route.name !== 'home' && route.path !== '/';
});
</script>
