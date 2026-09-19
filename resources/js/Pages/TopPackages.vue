<template>
  <MainLayout>
    <Breadcrumb :breadcrumbs="[{ name: 'Our Top Packages 2024-2025' }]" />
    
    <section class="relative h-[500px] overflow-hidden">
      <img :src="getImageUrl('images/walters-tours-safaris-magdalena-kula-manchee-nVUZO1gc_-o-unsplash.jpg')" 
           alt="Safari Packages" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-r from-safari-brown/95 to-safari-brown/70"></div>
      <div class="absolute inset-0 flex items-center px-4 md:px-8 lg:px-12">
        <div class="container mx-auto max-w-7xl">
          <h1 class="text-5xl md:text-7xl font-heading font-bold text-white mb-6">Our Top Packages 2024-2025</h1>
          <p class="text-xl md:text-2xl text-white/95 max-w-3xl">Discover our carefully curated safari experiences</p>
        </div>
      </div>
    </section>
    
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-4">Safari Packages</h2>
        <p class="text-center text-gray-600 mb-16 max-w-2xl mx-auto">Choose from our diverse range of safari experiences</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="pkg in safariPackages" :key="pkg.name" 
               class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="relative h-64 overflow-hidden group">
              <img :src="pkg.image" :alt="pkg.name" 
                   class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-safari-brown/90 via-safari-brown/40 to-transparent"></div>
              <div class="absolute top-4 right-4">
                <span class="bg-safari-orange text-white px-4 py-2 rounded-full text-sm font-semibold">{{ pkg.category }}</span>
              </div>
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <h3 class="text-2xl font-heading font-bold text-white">{{ pkg.name }}</h3>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-700 mb-4">{{ pkg.description }}</p>
              <a :href="pkg.link" class="block w-full bg-safari-orange text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-safari-orange/90 transition">View Details</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-brown">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-white text-center mb-4">Day Trips</h2>
        <p class="text-center text-white/90 mb-16 max-w-2xl mx-auto">Perfect for travelers with limited time</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div v-for="trip in dayTrips" :key="trip.name" class="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
            <h3 class="text-lg font-heading font-bold text-white mb-2">{{ trip.name }}</h3>
            <p class="text-white/80 text-sm mb-4">{{ trip.duration }}</p>
            <a :href="trip.link" class="text-safari-orange hover:text-white transition font-semibold text-sm">Learn More ?</a>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-4">Adventures</h2>
        <p class="text-center text-gray-600 mb-16 max-w-2xl mx-auto">Beyond safaris</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="activity in activities" :key="activity.name" class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
            <div class="relative h-48 overflow-hidden">
              <img :src="activity.image" :alt="activity.name" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-safari-brown/80 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-4">
                <h3 class="text-lg font-heading font-bold text-white">{{ activity.name }}</h3>
              </div>
            </div>
            <div class="p-5">
              <p class="text-gray-700 text-sm mb-4">{{ activity.description }}</p>
              <a :href="activity.link" class="text-safari-orange hover:text-safari-brown transition font-semibold text-sm">Explore ?</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-safari-orange/5 to-safari-brown/5">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-4">Cultural Experiences</h2>
        <p class="text-center text-gray-600 mb-16 max-w-2xl mx-auto">Immerse in culture</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="experience in culturalExperiences" :key="experience.name" class="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
            <h3 class="text-lg font-heading font-bold text-safari-brown mb-2">{{ experience.name }}</h3>
            <a :href="experience.link" class="text-safari-orange hover:text-safari-brown transition font-semibold text-sm">Book Now ?</a>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-brown">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-white text-center mb-16">Services</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.name" class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all">
            <div class="w-16 h-16 bg-safari-orange rounded-xl flex items-center justify-center mb-6">
              <div v-html="service.icon" class="text-white"></div>
            </div>
            <h3 class="text-2xl font-heading font-bold text-white mb-3">{{ service.name }}</h3>
            <p class="text-white/80 mb-6">{{ service.description }}</p>
            <a :href="service.link" class="text-safari-orange hover:text-white transition font-semibold">Learn More</a>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-r from-safari-orange to-safari-orange/90">
      <div class="container mx-auto max-w-7xl text-center">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Message Our Team</h2>
        <p class="text-xl text-white/95 mb-10 max-w-3xl mx-auto">Experts available 24 hours, get your special price</p>
        <a :href="$basePath + '/contact'" class="bg-white text-safari-orange px-10 py-4 rounded-lg font-semibold text-lg hover:bg-safari-white transition transform hover:scale-105 shadow-xl">Contact Experts</a>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../Layouts/MainLayout.vue';
import Breadcrumb from '../Components/Breadcrumb.vue';
import { useAssets } from '../composables/useAssets';

const { getImageUrl } = useAssets();

const safariPackages = [
  { name: 'Wildlife Safari Private', category: 'Private', image: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/', description: 'Exclusive private safari', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: 'Family Safari', category: 'Family', image: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/', description: 'Kid-friendly adventures', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: 'Honeymooners Safari', category: 'Romantic', image: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/', description: 'Romantic getaway', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: 'Budget Safari', category: 'Budget', image: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/', description: 'Affordable adventures', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: 'Midrange Safari', category: 'Midrange', image: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/', description: 'Balance of comfort', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: 'Tented Safari', category: 'Adventure', image: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/', description: 'Authentic bush', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: 'Luxury Safari', category: 'Luxury', image: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/', description: 'Ultimate luxury', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: 'Camping Safari Group', category: 'Group', image: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/', description: 'Join adventurers', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' }
];

const dayTrips = [
  { name: 'Tarangire National Park', duration: 'Day Trip', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: 'Arusha National Park', duration: 'Day Trip', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: 'Ngorongoro Crater', duration: 'Day Trip', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: 'Serengeti National Park', duration: '2 Days', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: 'Mikumi National Park', duration: 'Flights', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' }
];

const activities = [
  { name: 'Beach Holidays Zanzibar', image: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/', description: 'Relax on beaches', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: 'Mount Kilimanjaro', image: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/', description: 'Highest peak', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: 'Mount Meru', image: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/', description: 'Second highest', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: 'Oldoinyo Lengai', image: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/', description: 'Sacred mountain', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: 'Walking Safari', image: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/', description: 'On foot', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: 'Canoeing', image: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/', description: 'Paddle lakes', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: 'Desert Safari', image: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/', description: 'Explore deserts', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: 'Volunteering', image: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/', description: 'Make difference', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' }
];

const culturalExperiences = [
  { name: 'Cultural Tourism', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: 'Maasai Market', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: 'Arusha Museum', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: 'Culture Heritage', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: 'Snake Park', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: 'Chemka Hotsprings', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: 'Materuni Waterfall', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: 'Napuru Waterfall', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: 'Serval Zoo', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: 'Maasai Village', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: 'Coffee Plantation', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' }
];

const services = [
  { name: 'Airport Transfer', description: 'Reliable pickup', icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/></svg>', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: 'Accommodations', description: 'Wide range', icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: '24/7 Support', description: 'Always available', icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' }
];
</script>
