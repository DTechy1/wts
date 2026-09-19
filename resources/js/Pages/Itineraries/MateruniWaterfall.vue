<template>
  <MainLayout>
    <Breadcrumb :items="breadcrumbItems" />

    <!-- Hero Section -->
    <section class="relative h-[60vh] overflow-hidden">
      <img :src="getImageUrl('images/walters-tours-safaris-materuni-waterfall.png')"
           alt="Materuni Waterfall Day Trip"
           class="w-full h-full object-cover ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-b from-safari-brown/70 via-safari-brown/50 to-safari-brown/90"></div>
      <div class="absolute inset-0 flex items-center justify-center text-center px-4">
        <div class="max-w-4xl">
          <div class="inline-flex items-center gap-2 bg-safari-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"/>
            </svg>
            Day Trip from Arusha
          </div>
          <h1 class="text-5xl md:text-6xl font-heading font-bold text-white mb-4 leading-tight">Materuni Waterfall</h1>
          <p class="text-xl md:text-2xl text-white/90">Waterfall Trek � Chagga Coffee Experience � Local Lunch</p>
        </div>
      </div>
    </section>

    <!-- Overview -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 text-safari-orange">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-safari-brown mb-2">Materuni Village</h3>
            <p class="text-gray-600">Slopes of Mount Kilimanjaro</p>
          </div>
          <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 text-safari-orange">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-safari-brown mb-2">~45 min Hike</h3>
            <p class="text-gray-600">Through lush vegetation to the falls</p>
          </div>
          <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 text-safari-orange">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-safari-brown mb-2">Full Cultural Day</h3>
            <p class="text-gray-600">Coffee tour, Chagga food & singing</p>
          </div>
        </div>

        <div>
          <h2 class="text-4xl font-heading font-bold text-safari-brown mb-6">About the Day Trip</h2>
          <p class="text-lg text-gray-700 leading-relaxed mb-4">
            Your driver/guide will pick you up from your hotel in Arusha at around 10:00 am and drive to Materuni village on the slopes of Kilimanjaro. After registering at the village office, the adventure begins with a beautiful 45-minute walk through narrow paths and lush vegetation to the waterfall.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">
            On a clear day you may see Kilimanjaro itself! At the waterfall, rest and swim if you dare � the water is crisp and cold. Walk back on a different path through the jungle, then enjoy an immersive coffee experience where your guide explains the growing, drying, and roasting process � and you get to execute every step yourself while locals sing and dance around you. End the day with a delicious local Chagga lunch prepared by the village mamas.
          </p>
        </div>
      </div>
    </section>

    <!-- Highlights Timeline -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-12">Your Day at a Glance</h2>
        <div class="space-y-6 max-w-3xl mx-auto">
          <div v-for="(step, i) in timeline" :key="i" class="flex items-start gap-6">
            <div class="w-12 h-12 bg-safari-orange text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
              {{ i + 1 }}
            </div>
            <div class="bg-safari-white rounded-xl p-5 shadow flex-1">
              <h3 class="font-bold text-safari-brown mb-1">{{ step.title }}</h3>
              <p class="text-gray-600 text-sm">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Included -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-brown text-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-center mb-12">What's Included</h2>
        <div class="max-w-2xl mx-auto bg-white/10 rounded-2xl p-8">
          <ul class="space-y-3">
            <li v-for="item in included" :key="item" class="flex items-start gap-3">
              <svg class="w-5 h-5 text-safari-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-orange">
      <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-4xl font-heading font-bold text-white mb-6">Discover Chagga Culture & Nature</h2>
        <p class="text-xl text-white/90 mb-8">An unforgettable day connecting with Tanzania's local village life and waterfalls</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <BookingForm
            package-slug="materuni-waterfall"
            package-name="Materuni Waterfall Day Trip"
            button-text="Enquire Now"
            button-class="bg-white text-safari-orange px-8 py-4 rounded-lg font-semibold hover:bg-safari-white transition transform hover:scale-105"
          />
          <a :href="$basePath + '/itineraries'" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-safari-orange transition">
            View Other Routes
          </a>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../../Layouts/MainLayout.vue';
import Breadcrumb from '../../Components/Breadcrumb.vue';
import BookingForm from '../../Components/BookingForm.vue';
import { useAssets } from '../../composables/useAssets';

const { getImageUrl } = useAssets();

const breadcrumbItems = [
  { label: 'Home', href: '/wts' },
  { label: 'Itineraries', href: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { label: 'Materuni Waterfall Day Trip', href: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' }
];

const timeline = [
  {
    title: 'Pick-up from Arusha (~10:00 am)',
    description: 'Your guide picks you up from your hotel and drives to Materuni village on the slopes of Kilimanjaro.'
  },
  {
    title: 'Register & Begin the Waterfall Hike',
    description: 'Sign in at the village office, then set off on a scenic 45-minute walk through narrow jungle paths.'
  },
  {
    title: 'Arrive at the Waterfall',
    description: 'Relax, take photos, and enjoy a swim in the natural pool at the base of the stunning Materuni waterfall.'
  },
  {
    title: 'Return Hike via Alternate Path',
    description: 'Walk back through the village on a different route, taking in more lush scenery and Chagga culture stories from your guide.'
  },
  {
    title: 'Coffee Farm Experience',
    description: 'Learn how coffee beans are grown, dried, roasted and ground � then do it yourself while the locals sing and dance around you!'
  },
  {
    title: 'Chagga Lunch',
    description: 'Enjoy a freshly prepared local Chagga meal � banana stew, pilau, rice and beans � made by the village mamas.'
  },
  {
    title: 'Return to Arusha or Airport',
    description: 'Transfer back to your hotel or directly to Kilimanjaro International Airport.'
  }
];

const included = [
  'Private transport from Arusha (pick-up and drop-off)',
  'Local Chagga lunch at the village',
  'Village and waterfall gate fees',
  'Coffee experience (hands-on tour of growing, roasting, grinding)',
  'Professional English-speaking tour guide'
];
</script>

<style scoped>
.ken-burns {
  animation: kenBurns 20s ease-in-out infinite alternate;
}
@keyframes kenBurns {
  0% { transform: scale(1) translate(0, 0); }
  100% { transform: scale(1.1) translate(-2%, -2%); }
}
</style>
