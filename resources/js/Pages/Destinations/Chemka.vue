<template>
  <MainLayout>
    <Breadcrumb :items="breadcrumbItems" />
    
    <!-- Hero Section -->
    <section class="relative h-[60vh] overflow-hidden">
      <img :src="getImageUrl('images/walters-tours-safaris-denice-alex-LD6WgJlIpmk-unsplash.jpg')" 
           alt="Chemka Hot Springs" 
           class="w-full h-full object-cover ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-b from-safari-brown/70 via-safari-brown/50 to-safari-brown/90"></div>
      <div class="absolute inset-0 flex items-center justify-center text-center px-4">
        <div class="max-w-4xl">
          <h1 class="text-5xl md:text-6xl font-heading font-bold text-white mb-4">Chemka Hot Springs</h1>
          <p class="text-xl md:text-2xl text-white/90">Natural Oasis - Crystal Clear Waters</p>
        </div>
      </div>
    </section>
    
    <!-- Overview Section -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-heading font-bold text-safari-brown mb-6">Tanzania's Hidden Paradise</h2>
            <p class="text-lg text-gray-700 mb-4 leading-relaxed">
              Chemka Hot Springs (also known as Kikuletwa Hot Springs) is a stunning natural oasis located 
              about 70 km from Arusha. This hidden gem features crystal-clear turquoise waters fed by 
              underground springs from Mount Kilimanjaro, maintaining a perfect temperature year-round.
            </p>
            <p class="text-lg text-gray-700 mb-6 leading-relaxed">
              Surrounded by lush vegetation and towering fig trees, the springs offer a refreshing escape 
              from the African heat. The water is so clear you can see the bottom, and the natural setting 
              creates a magical atmosphere perfect for swimming, relaxation, and photography.
            </p>
            
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-safari-orange/10 p-4 rounded-lg">
                <div class="text-3xl font-bold text-safari-orange mb-1">24-26�C</div>
                <div class="text-sm text-gray-600">Water Temp</div>
              </div>
              <div class="bg-safari-orange/10 p-4 rounded-lg">
                <div class="text-3xl font-bold text-safari-orange mb-1">6m Deep</div>
                <div class="text-sm text-gray-600">Maximum Depth</div>
              </div>
              <div class="bg-safari-orange/10 p-4 rounded-lg">
                <div class="text-3xl font-bold text-safari-orange mb-1">70 km</div>
                <div class="text-sm text-gray-600">From Arusha</div>
              </div>
              <div class="bg-safari-orange/10 p-4 rounded-lg">
                <div class="text-3xl font-bold text-safari-orange mb-1">Year-Round</div>
                <div class="text-sm text-gray-600">Open Daily</div>
              </div>
            </div>
          </div>
          
          <div class="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img :src="getImageUrl('images/walters-tours-safaris-sammy-wong-wzeGc7Uqopc-unsplash.jpg')" 
                 alt="Chemka Hot Springs Waters" 
                 class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Activities Section -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-12">Activities & Experiences</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="activity in activities" :key="activity.name" class="bg-safari-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
            <div class="relative h-48 overflow-hidden group">
              <img :src="getImageUrl(activity.image)" :alt="activity.name" 
                   class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-heading font-bold text-safari-brown mb-2">{{ activity.name }}</h3>
              <p class="text-gray-600">{{ activity.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Key Features -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-brown text-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-center mb-12">Why Visit Chemka Hot Springs</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="feature in features" :key="feature.title" class="text-center">
            <div class="w-16 h-16 bg-safari-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">{{ feature.title }}</h3>
            <p class="text-white/80">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- What to Bring -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-12">What to Bring</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-safari-orange rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-2xl font-heading font-bold text-safari-brown">Essentials</h3>
            </div>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-safari-orange mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Swimsuit and towel</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-safari-orange mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Sunscreen and sunglasses</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-safari-orange mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Camera (waterproof if possible)</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-safari-orange mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Water and snacks</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-safari-orange mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Change of clothes</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-safari-orange rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-2xl font-heading font-bold text-safari-brown">Good to Know</h3>
            </div>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-safari-orange mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Changing facilities available</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-safari-orange mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Lockers for valuables</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-safari-orange mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Rope swing for adventurous visitors</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-safari-orange mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Best visited in the morning</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-safari-orange mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Can be combined with other day trips</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-orange">
      <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-4xl font-heading font-bold text-white mb-6">Ready to Visit Chemka Hot Springs?</h2>
        <p class="text-xl text-white/90 mb-8">
          Perfect day trip for relaxation and refreshment after your safari
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a :href="$basePath + '/safaris/day-trips'" class="bg-white text-safari-orange px-8 py-4 rounded-lg font-semibold hover:bg-safari-white transition transform hover:scale-105">
            View Day Trips
          </a>
          <a :href="$basePath + '/contact'" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-safari-orange transition">
            Contact Us
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
  { label: 'Destinations', href: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { label: 'Chemka Hot Springs', href: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' }
];

const activities = [
  {
    name: 'Swimming',
    description: 'Dive into the crystal-clear turquoise waters. Perfect temperature year-round at 24-26�C.',
    image: 'images/walters-tours-safaris-denice-alex-LD6WgJlIpmk-unsplash.jpg'
  },
  {
    name: 'Photography',
    description: 'Capture stunning underwater shots and the beautiful natural surroundings. Instagram-worthy location!',
    image: 'images/walters-tours-safaris-sammy-wong-wzeGc7Uqopc-unsplash.jpg'
  },
  {
    name: 'Relaxation',
    description: 'Unwind in the shade of ancient fig trees. Perfect spot for picnics and peaceful moments.',
    image: 'images/walters-tours-safaris-magdalena-kula-manchee-nVUZO1gc_-o-unsplash.jpg'
  }
];

const features = [
  {
    title: 'Crystal Clear Waters',
    description: 'Incredibly clear turquoise water fed by underground springs'
  },
  {
    title: 'Perfect Temperature',
    description: 'Comfortable 24-26�C water temperature all year'
  },
  {
    title: 'Natural Beauty',
    description: 'Surrounded by lush vegetation and towering trees'
  },
  {
    title: 'Great for All Ages',
    description: 'Safe and enjoyable for families and groups'
  },
  {
    title: 'Unique Experience',
    description: 'One of Tanzania\'s most beautiful natural pools'
  },
  {
    title: 'Easy Day Trip',
    description: 'Perfect addition to your safari itinerary'
  }
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
