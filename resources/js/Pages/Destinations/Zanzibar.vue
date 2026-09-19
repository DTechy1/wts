<template>
  <MainLayout>
    <Breadcrumb :breadcrumbs="[
      { name: 'Destinations', href: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
      { name: 'Zanzibar' }
    ]" />
    
    <!-- Hero Section -->
    <section class="relative h-[600px] overflow-hidden">
      <img :src="getImageUrl('images/zanzibar/pexels-saila-holidays-zanzibar-1351717875-25706804.jpg')" 
           alt="Zanzibar" class="w-full h-full object-cover animate-ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-r from-safari-brown/95 to-safari-brown/60"></div>
      <div class="absolute inset-0 flex items-center px-4 md:px-8 lg:px-12">
        <div class="container mx-auto max-w-7xl">
          <div class="inline-block bg-safari-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Beach Paradise
          </div>
          <h1 class="text-5xl md:text-7xl font-heading font-bold text-white mb-6">Zanzibar</h1>
          <p class="text-2xl text-white/95 max-w-3xl mb-8">The Spice Island - Where Paradise Meets Culture</p>
          <a :href="$basePath + '/contact'" class="inline-block bg-safari-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-safari-orange/90 transition transform hover:scale-105">
            Plan Your Escape
          </a>
        </div>
      </div>
    </section>
    
    <!-- Overview -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-heading font-bold text-safari-brown mb-6">Island Paradise</h2>
            <p class="text-lg text-gray-700 mb-4 leading-relaxed">
              Zanzibar is a semi-autonomous archipelago off the coast of Tanzania, famous for its pristine white-sand beaches, turquoise waters, and rich cultural heritage. The main island, Unguja, is commonly referred to as Zanzibar.
            </p>
            <p class="text-lg text-gray-700 mb-6 leading-relaxed">
              Known as the "Spice Island," Zanzibar has a fascinating history as a major trading hub for spices, ivory, and slaves. Today, it's the perfect destination to relax after an adventurous safari, offering world-class beaches, historic Stone Town, and vibrant marine life.
            </p>
            <div class="grid grid-cols-2 gap-6">
              <div class="bg-white p-6 rounded-xl shadow-md">
                <div class="text-3xl font-bold text-safari-orange mb-2">25�C</div>
                <div class="text-gray-600">Avg Temperature</div>
              </div>
              <div class="bg-white p-6 rounded-xl shadow-md">
                <div class="text-3xl font-bold text-safari-orange mb-2">Year-Round</div>
                <div class="text-gray-600">Beach Season</div>
              </div>
            </div>
          </div>
          <div class="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img :src="getImageUrl('images/zanzibar/pexels-ana-kenk-2159501753-36468231.jpg')" 
                 alt="Zanzibar Beach" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Experiences -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-safari-orange/5 to-safari-brown/5">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-4">Zanzibar Experiences</h2>
        <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Discover the magic of the Spice Island</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="experience in experiences" :key="experience.title"
               class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
            <div class="relative h-48 overflow-hidden group">
              <img :src="getImageUrl(experience.image)" :alt="experience.title" 
                   class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-heading font-bold text-safari-brown mb-3">{{ experience.title }}</h3>
              <p class="text-gray-600">{{ experience.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Stone Town -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img :src="getImageUrl('images/zanzibar/pexels-chechil-orifa-224183752-14401141.jpg')" 
                 alt="Stone Town" class="w-full h-full object-cover" />
          </div>
          <div>
            <h2 class="text-4xl font-heading font-bold text-safari-brown mb-6">Historic Stone Town</h2>
            <p class="text-lg text-gray-700 mb-6 leading-relaxed">
              Stone Town, the old quarter of Zanzibar City, is a UNESCO World Heritage Site. Its winding alleys, bustling bazaars, mosques, and grand Arab houses reflect the island's diverse cultural influences from Africa, Arabia, India, and Europe.
            </p>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-safari-orange mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <div>
                  <div class="font-semibold text-safari-brown">UNESCO Heritage Site</div>
                  <div class="text-gray-600">Protected historic architecture and culture</div>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-safari-orange mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <div>
                  <div class="font-semibold text-safari-brown">Forodhani Gardens</div>
                  <div class="text-gray-600">Famous night food market by the waterfront</div>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-safari-orange mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <div>
                  <div class="font-semibold text-safari-brown">House of Wonders</div>
                  <div class="text-gray-600">Iconic palace and museum</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Beach Areas -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-brown">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-white text-center mb-12">Best Beach Areas</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="beach in beaches" :key="beach.name"
               class="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
            <h3 class="text-xl font-heading font-bold text-white mb-3">{{ beach.name }}</h3>
            <p class="text-white/80 mb-4">{{ beach.description }}</p>
            <div class="text-safari-orange font-semibold text-sm">{{ beach.bestFor }}</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Activities -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-12">Things to Do</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="activity in activities" :key="activity.title"
               class="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-xl flex items-center justify-center mb-4">
              <div v-html="activity.icon" class="text-safari-orange"></div>
            </div>
            <h3 class="text-xl font-heading font-bold text-safari-brown mb-3">{{ activity.title }}</h3>
            <p class="text-gray-600">{{ activity.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Photo Gallery -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-brown">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-white text-center mb-4">Zanzibar in Pictures</h2>
        <p class="text-white/70 text-center mb-12 max-w-2xl mx-auto">Turquoise waters, white sands, spice farms and Swahili culture � paradise captured</p>

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
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Experience Zanzibar Magic</h2>
        <p class="text-xl text-white/95 mb-10 max-w-3xl mx-auto">Combine your safari with a relaxing beach holiday in paradise</p>
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

const experiences = [
  {
    title: 'Pristine Beaches',
    description: 'Powder-white sand beaches and crystal-clear turquoise waters',
    image: 'images/zanzibar/pexels-attila-lojek-619364315-32365031.jpg'
  },
  {
    title: 'Spice Tours',
    description: 'Explore spice plantations and learn about cloves, vanilla, and cinnamon',
    image: 'images/zanzibar/pexels-dajana-reci-289671698-30125137.jpg'
  },
  {
    title: 'Snorkeling & Diving',
    description: 'Discover vibrant coral reefs and diverse marine life',
    image: 'images/zanzibar/pexels-limonovdigital-9122382.jpg'
  },
  {
    title: 'Stone Town Tours',
    description: 'Wander through historic streets and bustling markets',
    image: 'images/zanzibar/pexels-chechil-orifa-224183752-14401141.jpg'
  },
  {
    title: 'Dhow Cruises',
    description: 'Sail on traditional wooden boats at sunset',
    image: 'images/zanzibar/pexels-qarim-zam-814182490-19394617.jpg'
  },
  {
    title: 'Jozani Forest',
    description: 'Meet the rare red colobus monkeys in their natural habitat',
    image: 'images/zanzibar/pexels-rufaro-6707821.jpg'
  }
];

const galleryPhotos = [
  { image: 'images/zanzibar/pexels-saila-holidays-zanzibar-1351717875-25706804.jpg', caption: 'Zanzibar Shoreline' },
  { image: 'images/zanzibar/pexels-ana-kenk-2159501753-36468231.jpg', caption: 'Crystal Clear Waters' },
  { image: 'images/zanzibar/pexels-attila-lojek-619364315-32365031.jpg', caption: 'White Sand Beach' },
  { image: 'images/zanzibar/pexels-dajana-reci-289671698-30125137.jpg', caption: 'Spice Farm Tour' },
  { image: 'images/zanzibar/pexels-limonovdigital-9122382.jpg', caption: 'Snorkeling in the Reef' },
  { image: 'images/zanzibar/pexels-chechil-orifa-224183752-14401141.jpg', caption: 'Historic Stone Town' },
  { image: 'images/zanzibar/pexels-qarim-zam-814182490-19394617.jpg', caption: 'Dhow at Sunset' },
  { image: 'images/zanzibar/pexels-rufaro-6707821.jpg', caption: 'Jozani Forest Colobus Monkeys' },
  { image: 'images/zanzibar/pexels-photobymau-photobymau-2154512590-33629185.jpg', caption: 'Ocean Horizon' }
];

const beaches = [
  {
    name: 'Nungwi',
    description: 'Northern tip with stunning sunsets and vibrant nightlife',
    bestFor: 'Best for: Nightlife & Water Sports'
  },
  {
    name: 'Kendwa',
    description: 'Pristine beach with minimal tidal changes',
    bestFor: 'Best for: Swimming & Relaxation'
  },
  {
    name: 'Paje',
    description: 'East coast paradise for kite surfing enthusiasts',
    bestFor: 'Best for: Kite Surfing'
  },
  {
    name: 'Matemwe',
    description: 'Quiet and secluded with traditional fishing villages',
    bestFor: 'Best for: Peace & Authenticity'
  }
];

const activities = [
  {
    title: 'Scuba Diving',
    description: 'Explore world-class dive sites including Mnemba Atoll',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.5 2a3.5 3.5 0 101.665 6.58L8.585 10l-1.42 1.42a3.5 3.5 0 101.414 1.414l8.128-8.127a1 1 0 00-1.414-1.414L10 8.586l-1.42-1.42A3.5 3.5 0 005.5 2zM4 5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd"/></svg>'
  },
  {
    title: 'Dolphin Tours',
    description: 'Swim with wild dolphins in Kizimkazi',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/></svg>'
  },
  {
    title: 'Sunset Dhow Cruise',
    description: 'Romantic sailing on traditional wooden boats',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/></svg>'
  },
  {
    title: 'Prison Island',
    description: 'Visit giant tortoises and enjoy snorkeling',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>'
  },
  {
    title: 'Seafood Dining',
    description: 'Fresh catch prepared with Swahili spices',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/></svg>'
  },
  {
    title: 'Cultural Tours',
    description: 'Experience Swahili culture and traditions',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/></svg>'
  }
];
</script>
