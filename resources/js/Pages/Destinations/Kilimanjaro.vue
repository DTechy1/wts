<template>
  <MainLayout>
    <Breadcrumb :breadcrumbs="[
      { name: 'Destinations', href: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
      { name: 'Mount Kilimanjaro' }
    ]" />
    
    <!-- Hero Section -->
    <section class="relative h-[600px] overflow-hidden">
      <!-- Slides -->
      <div v-for="(slide, index) in heroSlides" :key="index"
           class="absolute inset-0 transition-opacity duration-1000"
           :class="index === currentSlide ? 'opacity-100' : 'opacity-0'">
        <img :src="getImageUrl(slide.image)" :alt="slide.caption"
             class="w-full h-full object-cover"
             :class="index === currentSlide ? 'animate-slow-zoom' : ''" />
      </div>

      <div class="absolute inset-0 bg-gradient-to-r from-safari-brown/95 to-safari-brown/60"></div>
      <div class="absolute inset-0 flex items-center px-4 md:px-8 lg:px-12">
        <div class="container mx-auto max-w-7xl relative z-10">
          <div class="inline-block bg-safari-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Mountain
          </div>
          <h1 class="text-5xl md:text-7xl font-heading font-bold text-white mb-6">Mount Kilimanjaro</h1>
          <p class="text-2xl text-white/95 max-w-3xl mb-8">Roof of Africa - The World's Tallest Free-Standing Mountain</p>
          <a :href="$basePath + '/contact'" class="inline-block bg-safari-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-safari-orange/90 transition transform hover:scale-105">
            Start Your Climb
          </a>
        </div>
      </div>

      <!-- Slide Indicator dots -->
      <div class="absolute bottom-6 right-6 flex gap-2 z-20">
        <button v-for="(slide, index) in heroSlides" :key="'dot-'+index"
                @click="currentSlide = index"
                class="w-2.5 h-2.5 rounded-full transition-all duration-300"
                :class="index === currentSlide ? 'bg-safari-orange scale-125' : 'bg-white/50 hover:bg-white/80'" />
      </div>
    </section>
    
    <!-- Overview -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-heading font-bold text-safari-brown mb-6">Africa's Highest Peak</h2>
            <p class="text-lg text-gray-700 mb-4 leading-relaxed">
              Mount Kilimanjaro stands at 5,895 meters (19,341 feet) above sea level, making it the highest mountain in Africa and the world's tallest free-standing mountain. Located in Tanzania near the Kenyan border, this dormant volcano is one of the Seven Summits.
            </p>
            <p class="text-lg text-gray-700 mb-6 leading-relaxed">
              Unlike other major peaks, Kilimanjaro requires no technical climbing skills, making it accessible to determined hikers. The mountain features five distinct climate zones, from tropical rainforest to arctic summit.
            </p>
            <div class="grid grid-cols-2 gap-6">
              <div class="bg-white p-6 rounded-xl shadow-md">
                <div class="text-3xl font-bold text-safari-orange mb-2">5,895m</div>
                <div class="text-gray-600">Summit Height</div>
              </div>
              <div class="bg-white p-6 rounded-xl shadow-md">
                <div class="text-3xl font-bold text-safari-orange mb-2">7 Routes</div>
                <div class="text-gray-600">To the Top</div>
              </div>
            </div>
          </div>
          <div class="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img :src="getImageUrl('images/Kilimanjaro/pexels-nirav-shah-6927042-15904775.jpg')" 
                 alt="Kilimanjaro Climb" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Climbing Routes -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-safari-orange/5 to-safari-brown/5">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-4">Climbing Routes</h2>
        <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Choose your path to the summit</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="route in routes" :key="route.name"
               class="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-heading font-bold text-safari-brown">{{ route.name }}</h3>
              <span class="bg-safari-orange text-white px-3 py-1 rounded-full text-sm font-semibold">{{ route.days }}</span>
            </div>
            <p class="text-gray-600 mb-4">{{ route.description }}</p>
            <div class="space-y-2">
              <div class="flex items-center gap-2 text-sm">
                <span class="text-gray-500">Difficulty:</span>
                <span class="font-semibold text-safari-brown">{{ route.difficulty }}</span>
              </div>
              <div class="flex items-center gap-2 text-sm">
                <span class="text-gray-500">Success Rate:</span>
                <span class="font-semibold text-safari-brown">{{ route.successRate }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Climate Zones -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-12">Five Climate Zones</h2>
        
        <div class="space-y-6">
          <div v-for="zone in climateZones" :key="zone.name"
               class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
            <div class="flex flex-col md:flex-row gap-6">
              <div class="md:w-1/4">
                <h3 class="text-2xl font-heading font-bold text-safari-brown mb-2">{{ zone.name }}</h3>
                <p class="text-safari-orange font-semibold">{{ zone.altitude }}</p>
              </div>
              <div class="md:w-3/4">
                <p class="text-gray-700">{{ zone.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Why Climb Kilimanjaro -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-brown">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-heading font-bold text-white mb-6">Why Climb Kilimanjaro?</h2>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-safari-orange mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <div>
                  <div class="font-semibold text-white">No Technical Skills Required</div>
                  <div class="text-white/80">Accessible to anyone with good fitness and determination</div>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-safari-orange mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <div>
                  <div class="font-semibold text-white">Stunning Scenery</div>
                  <div class="text-white/80">Experience five climate zones in one trek</div>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-safari-orange mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <div>
                  <div class="font-semibold text-white">Life Achievement</div>
                  <div class="text-white/80">Join the elite group who've reached the Roof of Africa</div>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-safari-orange mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <div>
                  <div class="font-semibold text-white">Year-Round Climbing</div>
                  <div class="text-white/80">Can be climbed any time of year</div>
                </div>
              </div>
            </div>
          </div>
          <div class="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img :src="getImageUrl('images/Kilimanjaro/pexels-mwauraken-29093739.jpg')" 
                 alt="Summit Success" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Stats -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-12">Kilimanjaro Facts</h2>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-5xl font-heading font-bold text-safari-orange mb-2">5,895m</div>
            <div class="text-gray-600">Uhuru Peak</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-heading font-bold text-safari-orange mb-2">35,000</div>
            <div class="text-gray-600">Climbers/Year</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-heading font-bold text-safari-orange mb-2">5-9</div>
            <div class="text-gray-600">Days to Summit</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-heading font-bold text-safari-orange mb-2">65%</div>
            <div class="text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Photo Gallery -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-brown">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-white text-center mb-4">Kilimanjaro in Pictures</h2>
        <p class="text-white/70 text-center mb-12 max-w-2xl mx-auto">From lush rainforest to the icy arctic summit � experience every climate zone</p>
        
        <!-- Featured large image -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <div class="relative h-96 rounded-2xl overflow-hidden group">
            <img :src="getImageUrl(galleryPhotos[0].image)" :alt="galleryPhotos[0].caption"
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <p class="text-white font-semibold text-lg">{{ galleryPhotos[0].caption }}</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="(photo, index) in galleryPhotos.slice(1, 5)" :key="index"
                 class="relative h-44 rounded-xl overflow-hidden group">
              <img :src="getImageUrl(photo.image)" :alt="photo.caption"
                   class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute bottom-0 left-0 right-0 p-3">
                  <p class="text-white font-semibold text-sm">{{ photo.caption }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom row -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div v-for="(photo, index) in galleryPhotos.slice(5)" :key="'bot-'+index"
               class="relative h-64 rounded-xl overflow-hidden group">
            <img :src="getImageUrl(photo.image)" :alt="photo.caption"
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-0 left-0 right-0 p-4">
                <p class="text-white font-semibold">{{ photo.caption }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-r from-safari-orange to-safari-orange/90">
      <div class="container mx-auto max-w-7xl text-center">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Ready to Conquer Kilimanjaro?</h2>
        <p class="text-xl text-white/95 mb-10 max-w-3xl mx-auto">Let our experienced guides lead you to the Roof of Africa</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a :href="$basePath + '/contact'" class="bg-white text-safari-orange px-10 py-4 rounded-lg font-semibold text-lg hover:bg-safari-white transition transform hover:scale-105 shadow-xl">
            Contact Us
          </a>
          <a :href="$basePath + '/itineraries'" class="bg-safari-brown text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-safari-brown/90 transition transform hover:scale-105 shadow-xl">
            View Itineraries
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
import { ref, onMounted, onUnmounted } from 'vue';

const { getImageUrl } = useAssets();

// Hero slideshow images
const heroSlides = [
  { image: 'images/Kilimanjaro/pexels-wladimir-kuhne-670646709-19171293.jpg', caption: 'Summit Above the Clouds' },
  { image: 'images/Kilimanjaro/pexels-marri-shyam-366418-7463697.jpg', caption: 'Glaciers at Uhuru Peak' },
  { image: 'images/Kilimanjaro/pexels-pawel-kosmala-18647583-36718623.jpg', caption: 'Lush Rainforest Zone' },
  { image: 'images/Kilimanjaro/pexels-balazsimon-15994023.jpg', caption: 'Alpine Desert Landscape' },
  { image: 'images/Kilimanjaro/pexels-edgar-okioga-221433-12333453.jpg', caption: 'Sunrise at High Camp' },
  { image: 'images/Kilimanjaro/pexels-mwauraken-29093739.jpg', caption: 'Climbers on the Route' },
  { image: 'images/Kilimanjaro/pexels-nirav-shah-6927042-15904775.jpg', caption: 'Trekking Through Moorland' },
  { image: 'images/Kilimanjaro/pexels-limonovdigital-9223230.jpg', caption: 'Barranco Wall Ascent' }
];

const currentSlide = ref(0);
let slideTimer = null;

onMounted(() => {
  slideTimer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % heroSlides.length;
  }, 5000);
});

onUnmounted(() => {
  if (slideTimer) clearInterval(slideTimer);
});

const galleryPhotos = [
  { image: 'images/Kilimanjaro/pexels-wladimir-kuhne-670646709-19171293.jpg', caption: 'Summit Above the Clouds' },
  { image: 'images/Kilimanjaro/pexels-nirav-shah-6927042-15904775.jpg', caption: 'Trekking Through Moorland' },
  { image: 'images/Kilimanjaro/pexels-mwauraken-29093739.jpg', caption: 'Climbers on the Route' },
  { image: 'images/Kilimanjaro/pexels-pawel-kosmala-18647583-36718623.jpg', caption: 'Lush Rainforest Zone' },
  { image: 'images/Kilimanjaro/pexels-marri-shyam-366418-7463697.jpg', caption: 'Glaciers at Uhuru Peak' },
  { image: 'images/Kilimanjaro/pexels-balazsimon-15994023.jpg', caption: 'Alpine Desert Landscape' },
  { image: 'images/Kilimanjaro/pexels-edgar-okioga-221433-12333453.jpg', caption: 'Sunrise at High Camp' },
  { image: 'images/Kilimanjaro/pexels-limonovdigital-9223230.jpg', caption: 'Barranco Wall Ascent' }
];

const routes = [
  {
    name: 'Machame Route',
    days: '6-7 Days',
    description: 'The most scenic route, known as the "Whiskey Route"',
    difficulty: 'Moderate',
    successRate: '85%'
  },
  {
    name: 'Marangu Route',
    days: '5-6 Days',
    description: 'The "Coca-Cola Route" with hut accommodation',
    difficulty: 'Moderate',
    successRate: '70%'
  },
  {
    name: 'Lemosho Route',
    days: '7-8 Days',
    description: 'Remote and beautiful with excellent acclimatization',
    difficulty: 'Moderate',
    successRate: '90%'
  },
  {
    name: 'Rongai Route',
    days: '6-7 Days',
    description: 'Approaches from the north, less crowded',
    difficulty: 'Moderate',
    successRate: '80%'
  },
  {
    name: 'Northern Circuit',
    days: '8-9 Days',
    description: 'Longest route with highest success rate',
    difficulty: 'Moderate',
    successRate: '95%'
  },
  {
    name: 'Umbwe Route',
    days: '6-7 Days',
    description: 'Shortest and steepest, for experienced trekkers',
    difficulty: 'Challenging',
    successRate: '60%'
  }
];

const climateZones = [
  {
    name: 'Cultivation Zone',
    altitude: '800-1,800m',
    description: 'Farmland and villages on the lower slopes with coffee and banana plantations'
  },
  {
    name: 'Rainforest Zone',
    altitude: '1,800-2,800m',
    description: 'Dense tropical rainforest with high rainfall, rich vegetation, and diverse wildlife including colobus monkeys'
  },
  {
    name: 'Heath & Moorland',
    altitude: '2,800-4,000m',
    description: 'Characterized by heather, grasses, and giant groundsels. Temperature drops significantly'
  },
  {
    name: 'Alpine Desert',
    altitude: '4,000-5,000m',
    description: 'Harsh environment with extreme temperature variations, sparse vegetation, and volcanic landscape'
  },
  {
    name: 'Arctic Summit',
    altitude: '5,000-5,895m',
    description: 'Permanent ice and snow, sub-zero temperatures, and thin air at the summit'
  }
];
</script>

<style scoped>
.animate-slow-zoom {
  animation: slowZoom 10s ease-in-out infinite alternate;
}
@keyframes slowZoom {
  0%   { transform: scale(1.05); }
  100% { transform: scale(1.15); }
}
</style>
