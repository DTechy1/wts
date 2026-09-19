<template>
  <MainLayout>
    <Breadcrumb :breadcrumbs="[{ name: 'Our Top Destinations' }]" />
    
    <section class="relative h-[500px] overflow-hidden">
      <img :src="getImageUrl('images/walters-tours-safaris-magdalena-kula-manchee-nVUZO1gc_-o-unsplash.jpg')" 
           alt="Top Destinations" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-r from-safari-brown/95 to-safari-brown/70"></div>
      <div class="absolute inset-0 flex items-center px-4 md:px-8 lg:px-12">
        <div class="container mx-auto max-w-7xl">
          <h1 class="text-5xl md:text-7xl font-heading font-bold text-white mb-6">Our Top Destinations</h1>
          <p class="text-xl md:text-2xl text-white/95 max-w-3xl">Discover Tanzania's most spectacular locations</p>
        </div>
      </div>
    </section>
    
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-heading font-bold text-safari-brown mb-4">Explore Tanzania's Finest</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">From Africa's highest peak to pristine beaches, discover the destinations that make Tanzania unforgettable</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="destination in destinations" :key="destination.name" 
               class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="relative h-80 overflow-hidden group">
              <img :src="destination.image" :alt="destination.name" 
                   class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-safari-brown/95 via-safari-brown/50 to-transparent"></div>
              <div class="absolute top-4 right-4">
                <span class="bg-safari-orange text-white px-4 py-2 rounded-full text-sm font-semibold">{{ destination.category }}</span>
              </div>
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <h3 class="text-3xl font-heading font-bold text-white mb-2">{{ destination.name }}</h3>
                <p class="text-white/90">{{ destination.subtitle }}</p>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-700 mb-6 leading-relaxed">{{ destination.description }}</p>
              
              <div class="space-y-2 mb-6">
                <div v-for="highlight in destination.highlights" :key="highlight" class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-safari-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-sm text-gray-600">{{ highlight }}</span>
                </div>
              </div>
              
              <a :href="destination.link" 
                 class="block w-full bg-safari-orange text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-safari-orange/90 transition">
                Explore {{ destination.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-brown">
      <div class="container mx-auto max-w-7xl text-center">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Ready to Explore These Destinations?</h2>
        <p class="text-xl text-white/95 mb-10 max-w-3xl mx-auto">Let us create the perfect itinerary combining your favorite destinations</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a :href="$basePath + '/contact'" class="bg-safari-orange text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-safari-orange/90 transition transform hover:scale-105 shadow-xl">
            Plan Your Journey
          </a>
          <a :href="$basePath + '/itineraries'" class="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-safari-brown transition shadow-xl">
            View Packages
          </a>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../Layouts/MainLayout.vue';
import Breadcrumb from '../Components/Breadcrumb.vue';
import { useAssets } from '../composables/useAssets';

const { getImageUrl } = useAssets();

const destinations = [
  {
    name: 'Mt. Kilimanjaro',
    subtitle: 'Roof of Africa',
    category: 'Mountain',
    image: getImageUrl('images/Kilimanjaro/pexels-balazsimon-15994023.jpg'),
    description: 'Conquer Africa\'s highest peak at 5,895 meters. Experience diverse ecosystems from rainforest to arctic summit.',
    highlights: [
      'Africa\'s highest mountain',
      'Multiple trekking routes',
      'No technical climbing required',
      'UNESCO World Heritage Site'
    ],
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/destinations/kilimanjaro'
  },
  {
    name: 'Tarangire',
    subtitle: 'Elephant Paradise',
    category: 'National Park',
    image: getImageUrl('images/tarangire/pexels-bgbennett-19986844.jpg'),
    description: 'Famous for its large elephant herds and iconic baobab trees. Experience authentic African wilderness.',
    highlights: [
      'Largest elephant population',
      'Ancient baobab trees',
      'Diverse wildlife',
      'Excellent bird watching'
    ],
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/destinations/tarangire'
  },
  {
    name: 'Lake Duluti',
    subtitle: 'Hidden Gem',
    category: 'Lake',
    image: getImageUrl('images/lake-duluti/Duluti-09-1440x1200.webp'),
    description: 'Serene crater lake perfect for canoeing and nature walks. A peaceful escape near Arusha.',
    highlights: [
      'Canoeing adventures',
      'Forest walks',
      'Bird watching paradise',
      'Close to Arusha'
    ],
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/destinations/lake-duluti'
  },
  {
    name: 'Zanzibar',
    subtitle: 'Spice Island',
    category: 'Beach',
    image: getImageUrl('images/2026-01-07.webp'),
    description: 'Pristine beaches, historic Stone Town, and rich cultural heritage. The perfect post-safari relaxation.',
    highlights: [
      'White sand beaches',
      'Stone Town UNESCO site',
      'Spice plantation tours',
      'Water sports paradise'
    ],
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/destinations/zanzibar'
  },
  {
    name: 'Hot Spring',
    subtitle: 'Chemka Oasis',
    category: 'Natural Wonder',
    image: getImageUrl('images/hotprings/5f43aab27b880.avif'),
    description: 'Crystal clear natural hot springs surrounded by lush vegetation. Perfect for swimming and relaxation.',
    highlights: [
      'Natural hot springs',
      'Crystal clear water',
      'Swimming paradise',
      'Unique ecosystem'
    ],
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/destinations/chemka'
  },
  {
    name: 'Serengeti',
    subtitle: 'Endless Plains',
    category: 'National Park',
    image: getImageUrl('images/serengeti/pexels-bgbennett-20095156.jpg'),
    description: 'Home to the Great Migration and abundant wildlife. Tanzania\'s most famous national park.',
    highlights: [
      'Great Migration spectacle',
      'Big Five viewing',
      'Endless savannah plains',
      'World-class safari experience'
    ],
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/destinations/serengeti'
  }
];
</script>
