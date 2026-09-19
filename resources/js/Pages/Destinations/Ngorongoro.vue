<template>
  <MainLayout>
    <Breadcrumb :breadcrumbs="[
      { name: 'Destinations', href: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
      { name: 'Ngorongoro Crater' }
    ]" />
    
    <!-- Hero Section -->
    <section class="relative h-[600px] overflow-hidden">
      <img :src="getImageUrl('images/ngorongoro/pexels-alexandra-karnasopoulos-1962842-7205279.jpg')" 
           alt="Ngorongoro Crater" class="w-full h-full object-cover animate-ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-r from-safari-brown/95 to-safari-brown/60"></div>
      <div class="absolute inset-0 flex items-center px-4 md:px-8 lg:px-12">
        <div class="container mx-auto max-w-7xl">
          <div class="inline-block bg-safari-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Conservation Area
          </div>
          <h1 class="text-5xl md:text-7xl font-heading font-bold text-white mb-6">Ngorongoro Crater</h1>
          <p class="text-2xl text-white/95 max-w-3xl mb-8">Africa's Garden of Eden - The World's Largest Intact Caldera</p>
          <a :href="$basePath + '/contact'" class="inline-block bg-safari-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-safari-orange/90 transition transform hover:scale-105">
            Plan Your Visit
          </a>
        </div>
      </div>
    </section>
    
    <!-- Overview -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-heading font-bold text-safari-brown mb-6">The Natural Wonder</h2>
            <p class="text-lg text-gray-700 mb-4 leading-relaxed">
              Ngorongoro Crater is the world's largest intact volcanic caldera, formed when a giant volcano exploded and collapsed on itself 2-3 million years ago. The crater floor covers 260 square kilometers and is surrounded by 600-meter high walls.
            </p>
            <p class="text-lg text-gray-700 mb-6 leading-relaxed">
              This natural amphitheater is home to approximately 30,000 animals, making it one of the most densely populated wildlife areas in Africa. It's often called "Africa's Garden of Eden" for its stunning beauty and incredible biodiversity.
            </p>
            <div class="grid grid-cols-2 gap-6">
              <div class="bg-white p-6 rounded-xl shadow-md">
                <div class="text-3xl font-bold text-safari-orange mb-2">260 km�</div>
                <div class="text-gray-600">Crater Floor</div>
              </div>
              <div class="bg-white p-6 rounded-xl shadow-md">
                <div class="text-3xl font-bold text-safari-orange mb-2">30,000</div>
                <div class="text-gray-600">Animals</div>
              </div>
            </div>
          </div>
          <div class="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img :src="getImageUrl('images/ngorongoro/pexels-lan-yao-324969-20847561.jpg')" 
                 alt="Ngorongoro Wildlife" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Key Features -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-safari-orange/5 to-safari-brown/5">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-12">Why Visit Ngorongoro</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="feature in features" :key="feature.title"
               class="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-xl flex items-center justify-center mb-4">
              <div v-html="feature.icon" class="text-safari-orange"></div>
            </div>
            <h3 class="text-xl font-heading font-bold text-safari-brown mb-3">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Wildlife Section -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img :src="getImageUrl('images/ngorongoro/pexels-nadialovessingle-25950570.jpg')" 
                 alt="Ngorongoro Wildlife" class="w-full h-full object-cover" />
          </div>
          <div>
            <h2 class="text-4xl font-heading font-bold text-safari-brown mb-6">Wildlife Paradise</h2>
            <p class="text-lg text-gray-700 mb-6 leading-relaxed">
              The crater's unique ecosystem supports an incredible diversity of wildlife year-round, thanks to permanent water sources and lush grazing areas.
            </p>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-safari-orange mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <div>
                  <div class="font-semibold text-safari-brown">The Big Five</div>
                  <div class="text-gray-600">One of the few places to see all Big Five in one day</div>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-safari-orange mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <div>
                  <div class="font-semibold text-safari-brown">Black Rhinos</div>
                  <div class="text-gray-600">Best place in Tanzania to spot endangered black rhinos</div>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-safari-orange mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <div>
                  <div class="font-semibold text-safari-brown">Flamingos</div>
                  <div class="text-gray-600">Thousands of flamingos at Lake Magadi</div>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-safari-orange mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <div>
                  <div class="font-semibold text-safari-brown">Dense Predator Population</div>
                  <div class="text-gray-600">Lions, leopards, cheetahs, and hyenas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Stats Section -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-brown">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-white text-center mb-12">Ngorongoro by Numbers</h2>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-5xl font-heading font-bold text-safari-orange mb-2">610m</div>
            <div class="text-white/90">Crater Depth</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-heading font-bold text-safari-orange mb-2">2-3M</div>
            <div class="text-white/90">Years Old</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-heading font-bold text-safari-orange mb-2">25,000</div>
            <div class="text-white/90">Large Animals</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-heading font-bold text-safari-orange mb-2">500+</div>
            <div class="text-white/90">Bird Species</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Photo Gallery -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-12">Experience the Crater</h2>
        
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
        <h2 class="text-4xl font-heading font-bold text-white text-center mb-4">Ngorongoro in Pictures</h2>
        <p class="text-white/70 text-center mb-12 max-w-2xl mx-auto">Africa's Garden of Eden � a natural sanctuary unlike any other on earth</p>

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

        <!-- Bottom row -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Discover Ngorongoro Crater</h2>
        <p class="text-xl text-white/95 mb-10 max-w-3xl mx-auto">Experience one of Africa's most spectacular natural wonders</p>
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

const galleryPhotos = [
  { image: 'images/ngorongoro/pexels-alexandra-karnasopoulos-1962842-7205279.jpg', caption: 'Crater Rim Panorama' },
  { image: 'images/ngorongoro/pexels-lan-yao-324969-20847561.jpg', caption: 'Wildlife on Crater Floor' },
  { image: 'images/ngorongoro/pexels-lan-yao-324969-20847562.jpg', caption: 'Elephant Herds' },
  { image: 'images/ngorongoro/pexels-nadialovessingle-25950570.jpg', caption: 'Predator Sightings' },
  { image: 'images/ngorongoro/pexels-1093389518-30980273.jpg', caption: 'Lake Magadi Flamingos' },
  { image: 'images/ngorongoro/pexels-alex-ning-523843601-33650630.jpg', caption: 'Crater Sunset Views' },
  { image: 'images/ngorongoro/pexels-sam-hofman-817359426-20024158.jpg', caption: 'Lions of the Crater' }
];

const features = [
  {
    title: 'Natural Enclosure',
    description: 'Crater walls create a natural sanctuary where animals rarely migrate',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>'
  },
  {
    title: 'Unique Microclimate',
    description: 'Diverse habitats from grasslands to forests within the crater',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z" clip-rule="evenodd"/></svg>'
  },
  {
    title: 'Year-Round Water',
    description: 'Permanent water sources ensure wildlife stays year-round',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.5 2a3.5 3.5 0 101.665 6.58L8.585 10l-1.42 1.42a3.5 3.5 0 101.414 1.414l8.128-8.127a1 1 0 00-1.414-1.414L10 8.586l-1.42-1.42A3.5 3.5 0 005.5 2zM4 5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd"/></svg>'
  },
  {
    title: 'UNESCO Heritage',
    description: 'World Heritage Site and International Biosphere Reserve',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>'
  },
  {
    title: 'Maasai Culture',
    description: 'Coexistence with Maasai pastoralists adds cultural richness',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/></svg>'
  },
  {
    title: 'Photographic Paradise',
    description: 'Stunning landscapes and close wildlife encounters',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"/></svg>'
  }
];
</script>
