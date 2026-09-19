<template>
  <MainLayout>
    <Breadcrumb :breadcrumbs="[
      { name: 'Destinations', href: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
      { name: 'Serengeti National Park' }
    ]" />
    
    <!-- Hero Section -->
    <section class="relative h-[600px] overflow-hidden">
      <img :src="getImageUrl('images/serengeti/pexels-bgbennett-20095156.jpg')" 
           alt="Serengeti" class="w-full h-full object-cover animate-ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-r from-safari-brown/95 to-safari-brown/60"></div>
      <div class="absolute inset-0 flex items-center px-4 md:px-8 lg:px-12">
        <div class="container mx-auto max-w-7xl">
          <div class="inline-block bg-safari-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            National Park
          </div>
          <h1 class="text-5xl md:text-7xl font-heading font-bold text-white mb-6">Serengeti National Park</h1>
          <p class="text-2xl text-white/95 max-w-3xl mb-8">The Endless Plains - Home of the Great Migration</p>
          <a :href="$basePath + '/contact'" class="inline-block bg-safari-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-safari-orange/90 transition transform hover:scale-105">
            Plan Your Safari
          </a>
        </div>
      </div>
    </section>
    
    <!-- Overview -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-heading font-bold text-safari-brown mb-6">About Serengeti</h2>
            <p class="text-lg text-gray-700 mb-4 leading-relaxed">
              Serengeti National Park is Tanzania's oldest and most famous national park, renowned for its incredible wildlife and the annual Great Migration. The name "Serengeti" comes from the Maasai word "Siringet," meaning "endless plains."
            </p>
            <p class="text-lg text-gray-700 mb-6 leading-relaxed">
              Covering 14,763 square kilometers, the Serengeti is home to the largest concentration of plains game in Africa, including over 1.5 million wildebeest, 250,000 zebras, and countless other species.
            </p>
            <div class="grid grid-cols-2 gap-6">
              <div class="bg-white p-6 rounded-xl shadow-md">
                <div class="text-3xl font-bold text-safari-orange mb-2">14,763 km�</div>
                <div class="text-gray-600">Total Area</div>
              </div>
              <div class="bg-white p-6 rounded-xl shadow-md">
                <div class="text-3xl font-bold text-safari-orange mb-2">1.5M+</div>
                <div class="text-gray-600">Wildebeest</div>
              </div>
            </div>
          </div>
          <div class="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img :src="getImageUrl('images/serengeti/pexels-mikeknibbs-17849789.jpg')" 
                 alt="Serengeti Wildlife" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Great Migration -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-safari-orange/5 to-safari-brown/5">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-heading font-bold text-safari-brown mb-4">The Great Migration</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Witness one of nature's most spectacular events</p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div class="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img :src="getImageUrl('images/serengeti/pexels-vik-joshi-63702791-8150758.jpg')" 
                 alt="Great Migration" class="w-full h-full object-cover" />
          </div>
          <div>
            <p class="text-lg text-gray-700 mb-6 leading-relaxed">
              The Great Migration is a year-round circular movement of over 1.5 million wildebeest and hundreds of thousands of zebras and gazelles through the Serengeti-Mara ecosystem.
            </p>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-safari-orange mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <div>
                  <div class="font-semibold text-safari-brown">July-October: River Crossings</div>
                  <div class="text-gray-600">Dramatic Mara River crossings with crocodiles</div>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-safari-orange mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <div>
                  <div class="font-semibold text-safari-brown">January-March: Calving Season</div>
                  <div class="text-gray-600">500,000 calves born in southern Serengeti</div>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-safari-orange mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <div>
                  <div class="font-semibold text-safari-brown">Year-Round Movement</div>
                  <div class="text-gray-600">Following the rains and fresh grass</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Wildlife Highlights -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-12">Wildlife Highlights</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="highlight in wildlifeHighlights" :key="highlight.title"
               class="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-xl flex items-center justify-center mb-4">
              <div v-html="highlight.icon" class="text-safari-orange"></div>
            </div>
            <h3 class="text-xl font-heading font-bold text-safari-brown mb-3">{{ highlight.title }}</h3>
            <p class="text-gray-600">{{ highlight.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Photo Gallery -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-brown">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-white text-center mb-12">Experience Serengeti</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(photo, index) in photos" :key="index"
               class="relative h-64 rounded-xl overflow-hidden group">
            <img :src="getImageUrl(photo.image)" :alt="photo.caption" 
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-safari-brown/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div class="absolute bottom-0 left-0 right-0 p-4">
                <p class="text-white font-semibold">{{ photo.caption }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Photo Gallery -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-brown">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-white text-center mb-4">Serengeti in Pictures</h2>
        <p class="text-white/70 text-center mb-12 max-w-2xl mx-auto">Witness the endless plains, the Great Migration, and Africa's most iconic wildlife</p>

        <!-- Featured large + 4 grid -->
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
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-r from-safari-orange to-safari-orange/90">
      <div class="container mx-auto max-w-7xl text-center">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Ready to Explore Serengeti?</h2>
        <p class="text-xl text-white/95 mb-10 max-w-3xl mx-auto">Contact our safari experts to plan your unforgettable Serengeti adventure</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a :href="$basePath + '/contact'" class="bg-white text-safari-orange px-10 py-4 rounded-lg font-semibold text-lg hover:bg-safari-white transition transform hover:scale-105 shadow-xl">
            Contact Us
          </a>
          <a :href="$basePath + '/itineraries'" class="bg-safari-brown text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-safari-brown/90 transition transform hover:scale-105 shadow-xl">
            View Packages
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

const wildlifeHighlights = [
  {
    title: 'The Big Five',
    description: 'Lion, leopard, elephant, buffalo, and rhino all call Serengeti home',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/></svg>'
  },
  {
    title: 'Predator Capital',
    description: 'Highest concentration of predators in Africa including cheetahs and hyenas',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>'
  },
  {
    title: 'Bird Paradise',
    description: 'Over 500 bird species including ostriches, eagles, and flamingos',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" clip-rule="evenodd"/></svg>'
  },
  {
    title: 'Diverse Ecosystems',
    description: 'Grasslands, woodlands, riverine forests, and kopjes',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>'
  },
  {
    title: 'UNESCO Heritage',
    description: 'Recognized as a World Heritage Site for its ecological significance',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>'
  },
  {
    title: 'Year-Round Safari',
    description: 'Excellent wildlife viewing throughout the year',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/></svg>'
  }
];

const galleryPhotos = [
  { image: 'images/serengeti/pexels-bgbennett-20095156.jpg', caption: 'Endless Serengeti Plains' },
  { image: 'images/serengeti/pexels-mikeknibbs-17849789.jpg', caption: 'Wildlife Abundance' },
  { image: 'images/serengeti/pexels-vik-joshi-63702791-8150758.jpg', caption: 'Great Migration in Motion' },
  { image: 'images/serengeti/pexels-alex-ning-523843601-33650533.jpg', caption: 'Predator on the Prowl' },
  { image: 'images/serengeti/pexels-sk-movies-photos-5306496-18609145.jpg', caption: 'Golden Sunset Safari' }
];
</script>
