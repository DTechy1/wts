<template>
  <MainLayout>
    <Breadcrumb :items="breadcrumbItems" />
    
    <!-- Hero Section -->
    <section class="relative h-[60vh] overflow-hidden">
      <img :src="getImageUrl('images/walters-tours-safaris-humphrey-m-e5hzQubIb68-unsplash.jpg')" 
           alt="5 Days in Zanzibar" 
           class="w-full h-full object-cover ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-b from-safari-brown/70 via-safari-brown/50 to-safari-brown/90"></div>
      <div class="absolute inset-0 flex items-center justify-center text-center px-4">
        <div class="max-w-4xl">
          <div class="inline-flex items-center gap-2 bg-safari-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"/>
            </svg>
            5 Days / 4 Nights
          </div>
          <h1 class="text-5xl md:text-6xl font-heading font-bold text-white mb-4 leading-tight">5 Days in Zanzibar</h1>
          <p class="text-xl md:text-2xl text-white/90">Tropical Beaches, Dolphins, Stone Town & Spice Farms</p>
        </div>
      </div>
    </section>
    
    <!-- Overview Section -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 text-safari-orange">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-safari-brown mb-2">5 Days</h3>
            <p class="text-gray-600">Duration</p>
          </div>
          
          <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 text-safari-orange">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-safari-brown mb-2">Zanzibar Island</h3>
            <p class="text-gray-600">Stone Town, Prison Island & Nungwi Beaches</p>
          </div>
          
          <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 text-safari-orange">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-safari-brown mb-2">Ocean Excursions</h3>
            <p class="text-gray-600">Snorkeling, Dolphin Spotting & Kwale Sandbank</p>
          </div>
        </div>
        
        <div class="prose max-w-none">
          <h2 class="text-4xl font-heading font-bold text-safari-brown mb-6">About the Zanzibar Tour</h2>
          <p class="text-lg text-gray-700 leading-relaxed mb-4">
            Discover the magical spice island of Zanzibar with this curated 5-day package. You will sail along stunning mangroves, snorkel at pristine coral reefs in Menai Bay, swim with dolphins at Mnemba Island, and sample fresh exotic fruits and seafood.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">
            In addition to ocean adventures, explore the rich history of Stone Town with a professional guide, experience the aromas of a local spice farm, and meet the giant tortoises of Prison Island.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Day by Day Itinerary -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-12">Day by Day Itinerary</h2>
        
        <div class="space-y-6">
          <div v-for="(day, index) in itinerary" :key="index" class="bg-safari-white rounded-2xl overflow-hidden shadow-lg">
            <div class="bg-safari-orange text-white p-6">
              <div class="flex items-center justify-between">
                <h3 class="text-2xl font-heading font-bold">Day {{ day.day }}: {{ day.title }}</h3>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-700 leading-relaxed">{{ day.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Inclusions & Exclusions -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-brown text-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-center mb-12">Tour Inclusions</h2>
        
        <div class="max-w-3xl mx-auto bg-white/10 rounded-2xl p-8">
          <h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
            <svg class="w-8 h-8 text-safari-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            This includes:
          </h3>
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
    
    <!-- CTA Section -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-orange">
      <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-4xl font-heading font-bold text-white mb-6">Plan Your Dream Zanzibar Getaway</h2>
        <p class="text-xl text-white/90 mb-8">
          Contact our team today to get current booking options for your specific travel dates
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <BookingForm
            package-slug="zanzibar-5-days"
            package-name="5 Days in Zanzibar Tour"
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
  { label: '5 Days in Zanzibar', href: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' }
];

const itinerary = [
  {
    day: 1,
    title: 'Transfer to Hotel',
    description: 'Arrive at Zanzibar International Airport. Upon arrival, you will meet our driver just outside the arrival hall, holding a sign board with your name. Safe transfer to your hotel with no extra costs.'
  },
  {
    day: 2,
    title: 'Full-Day Safari Blue Trip',
    description: 'Enjoy a full day of sailing in a traditional dhow boat around mangroves and snorkeling along Menai Bay, one of Zanzibar\'s best coral reefs. Relax on a sandbank, swim, and sail to Kwale Island. Feast on a fresh seafood barbecue of lobster, octopus, squids, calamari, and fish, followed by a tasting of fresh exotic fruits (banana, mangoes, pineapple, watermelon).'
  },
  {
    day: 3,
    title: 'Half Day � Mnemba Dolphins & Snorkeling',
    description: 'Head to the north coast of Zanzibar (Matemwe Beach) to swim with dolphins and take stunning photos. Explore and snorkel around the famous coral reefs of Mnemba Island to witness tropical fish and marine creatures.'
  },
  {
    day: 4,
    title: 'Stone Town, Spice Farm & Prison Island',
    description: 'Explore a local spice farm, tasting and smelling cardamoms, cinnamon, black pepper, and cloves. Learn the history and culture of local Zanzibaris with a professional tour guide in the historic Stone Town. Enjoy a delicious spiced rice lunch on the farm, and visit Prison Island to see the Aldabra giant tortoises.'
  },
  {
    day: 5,
    title: 'Transfer to the Airport, Goodbye!',
    description: 'After an amazing Zanzibar vacation, check out from your hotel. The driver will pick you up based on your flight timings to transfer you back to Zanzibar International Airport for your journey home.'
  }
];

const included = [
  'Selected hotel accommodations in Zanzibar',
  'Return airport-to-hotel transfers',
  'Full board meals (Breakfast, Lunch, Dinner)',
  'Private transport during all excursions',
  'All park, reserve, and historical site entrance fees',
  'Drinking water while on excursions',
  'Professional English-speaking driver/guide',
  'All local government taxes and VAT',
  'Local SIM Cards for connectivity'
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
