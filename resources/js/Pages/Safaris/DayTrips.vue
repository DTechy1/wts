<template>
  <MainLayout>
    <Breadcrumb :items="breadcrumbItems" />
    
    <!-- Hero Section -->
    <section class="relative h-[60vh] overflow-hidden">
      <img :src="getImageUrl('images/walters-tours-safaris-humphrey-m-e5hzQubIb68-unsplash.jpg')" 
           alt="Day Trips" class="w-full h-full object-cover ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-r from-safari-brown/95 to-safari-brown/60"></div>
      <div class="absolute inset-0 flex items-center px-4 md:px-8 lg:px-12">
        <div class="container mx-auto max-w-7xl">
          <div class="inline-block bg-safari-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Quick Adventures
          </div>
          <h1 class="text-5xl md:text-6xl font-heading font-bold text-white mb-6">Day Trip Safaris</h1>
          <p class="text-xl md:text-2xl text-white/95 max-w-3xl mb-8">Perfect for Short Visits - Maximum Wildlife in Minimum Time</p>
          <a :href="$basePath + '/contact'" class="inline-block bg-safari-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-safari-orange/90 transition transform hover:scale-105">
            Book Your Day Trip
          </a>
        </div>
      </div>
    </section>
    
    <!-- Overview -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-heading font-bold text-safari-brown mb-4">Experience Tanzania in a Day</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Short on time? Our day trips offer incredible wildlife experiences perfect for travelers with limited schedules. 
            Depart early morning and return by evening with unforgettable memories.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-20 h-20 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold text-safari-brown mb-2">Time Efficient</h3>
            <p class="text-gray-600">Full day adventure</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold text-safari-brown mb-2">Great Value</h3>
            <p class="text-gray-600">Affordable pricing</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold text-safari-brown mb-2">All Inclusive</h3>
            <p class="text-gray-600">Meals & transport included</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold text-safari-brown mb-2">Small Groups</h3>
            <p class="text-gray-600">Personalized experience</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-orange">
      <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-4xl font-heading font-bold text-white mb-6">Ready for Your Day Trip?</h2>
        <p class="text-xl text-white/90 mb-8">
          Experience the best of Tanzania's wildlife in just one day
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a :href="$basePath + '/contact'" class="bg-white text-safari-orange px-8 py-4 rounded-lg font-semibold hover:bg-safari-white transition transform hover:scale-105">
            Contact Us
          </a>
          <a :href="$basePath + '/itineraries'" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-safari-orange transition">
            View All Packages
          </a>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../../Layouts/MainLayout.vue';
import Breadcrumb from '../../Components/Breadcrumb.vue';
import { useAssets } from '../../composables/useAssets';

const { getImageUrl } = useAssets();

const breadcrumbItems = [
  { label: 'Home', href: '/wts' },
  { label: 'Safaris', href: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { label: 'Day Trips', href: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' }
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
