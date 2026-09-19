<template>
  <MainLayout>
    <Breadcrumb :breadcrumbs="[
      { name: 'Safaris', href: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
      { name: 'Budget Safaris' }
    ]" />
    
    <!-- Hero Section -->
    <section class="relative h-[600px] overflow-hidden">
      <img :src="getImageUrl('images/walters-tours-safaris-hu-chen-t-7Mlatf9iI-unsplash.jpg')" 
           alt="Budget Safari" class="w-full h-full object-cover animate-ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-r from-safari-brown/95 to-safari-brown/60"></div>
      <div class="absolute inset-0 flex items-center px-4 md:px-8 lg:px-12">
        <div class="container mx-auto max-w-7xl">
          <div class="inline-block bg-safari-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Affordable Adventure
          </div>
          <h1 class="text-5xl md:text-7xl font-heading font-bold text-white mb-6">Budget Safaris</h1>
          <p class="text-2xl text-white/95 max-w-3xl mb-8">Amazing Wildlife Adventures Without Breaking the Bank</p>
          <a :href="$basePath + '/contact'" class="inline-block bg-safari-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-safari-orange/90 transition transform hover:scale-105">
            Get Your Quote
          </a>
        </div>
      </div>
    </section>
    
    <!-- Overview -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-heading font-bold text-safari-brown mb-4">Affordable Safari Adventures</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience Tanzania's incredible wildlife without compromising on quality. Our budget safaris offer 
            excellent value with comfortable camping, experienced guides, and unforgettable wildlife encounters.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-20 h-20 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold text-safari-brown mb-2">Great Value</h3>
            <p class="text-gray-600">Quality at affordable prices</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold text-safari-brown mb-2">Group Sharing</h3>
            <p class="text-gray-600">Meet fellow travelers</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold text-safari-brown mb-2">Expert Guides</h3>
            <p class="text-gray-600">Knowledgeable professionals</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold text-safari-brown mb-2">Top Parks</h3>
            <p class="text-gray-600">Visit best destinations</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- What's Included -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-safari-orange/5 to-safari-brown/5">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-12">What's Included</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-xl p-8 shadow-lg">
            <h3 class="text-2xl font-heading font-bold text-safari-brown mb-6">Accommodations & Meals</h3>
            <ul class="space-y-3">
              <li v-for="item in accommodations" :key="item" class="flex items-start gap-3">
                <svg class="w-6 h-6 text-safari-orange mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span class="text-gray-700">{{ item }}</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-white rounded-xl p-8 shadow-lg">
            <h3 class="text-2xl font-heading font-bold text-safari-brown mb-6">Services & Activities</h3>
            <ul class="space-y-3">
              <li v-for="item in services" :key="item" class="flex items-start gap-3">
                <svg class="w-6 h-6 text-safari-orange mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span class="text-gray-700">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Budget Packages -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-4">Popular Budget Packages</h2>
        <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Affordable adventures to Tanzania's best parks</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="pkg in packages" :key="pkg.title"
               class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
            <div class="relative h-48 overflow-hidden group">
              <img :src="getImageUrl(pkg.image)" :alt="pkg.title" 
                   class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div class="absolute top-4 right-4">
                <span class="bg-safari-orange text-white px-3 py-1 rounded-full text-sm font-semibold">{{ pkg.days }}</span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-heading font-bold text-safari-brown mb-2">{{ pkg.title }}</h3>
              <p class="text-gray-600 mb-4">{{ pkg.description }}</p>
              <div class="text-safari-orange font-semibold mb-4">From ${{ pkg.price }}/person</div>
              <BookingForm
                :package-slug="pkg.slug"
                :package-name="pkg.title"
                button-text="Order Now"
                button-class="w-full bg-safari-orange text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-safari-orange/90 transition"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Why Choose Budget Safari -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-brown">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-heading font-bold text-white mb-6">Why Choose Budget Safari?</h2>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-safari-orange mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <div>
                  <div class="font-semibold text-white">Same Wildlife Experience</div>
                  <div class="text-white/80">Visit the same parks as luxury safaris</div>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-safari-orange mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <div>
                  <div class="font-semibold text-white">Authentic Experience</div>
                  <div class="text-white/80">Camping under the stars in the wild</div>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-safari-orange mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <div>
                  <div class="font-semibold text-white">Social Adventure</div>
                  <div class="text-white/80">Meet travelers from around the world</div>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-safari-orange mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <div>
                  <div class="font-semibold text-white">Flexible Options</div>
                  <div class="text-white/80">Various durations and destinations</div>
                </div>
              </div>
            </div>
          </div>
          <div class="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img :src="getImageUrl('images/walters-tours-safaris-8287.jpg')" 
                 alt="Budget Safari" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-r from-safari-orange to-safari-orange/90">
      <div class="container mx-auto max-w-7xl text-center">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Start Your Budget Safari Adventure</h2>
        <p class="text-xl text-white/95 mb-10 max-w-3xl mx-auto">Affordable doesn't mean compromising on experience</p>
        <a :href="$basePath + '/contact'" class="inline-block bg-white text-safari-orange px-10 py-4 rounded-lg font-semibold text-lg hover:bg-safari-white transition transform hover:scale-105 shadow-xl">
          Get Free Quote
        </a>
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

const accommodations = [
  'Comfortable camping with quality tents',
  'Sleeping bags and camping mattresses',
  'Public campsites in national parks',
  'All meals included (breakfast, lunch, dinner)',
  'Drinking water throughout the safari',
  'Camp chef preparing fresh meals'
];

const services = [
  'Experienced safari guide/driver',
  'Safari vehicle with pop-up roof',
  'Park entrance fees included',
  'Game drives in all parks',
  'Airport pickup and drop-off',
  'Camping equipment provided',
  'Basic first aid kit',
  'Binoculars for wildlife viewing'
];

const packages = [
  {
    slug: '5-day-camping-safari',
    title: '5-Day Camping Safari',
    days: '5 Days',
    description: 'Serengeti, Ngorongoro, Tarangire - group sharing',
    price: '1,200',
    image: 'images/walters-tours-safaris-hu-chen-t-7Mlatf9iI-unsplash.jpg'
  },
  {
    slug: '3-day-budget-safari',
    title: '3-Day Budget Safari',
    days: '3 Days',
    description: 'Ngorongoro Crater and Lake Manyara',
    price: '750',
    image: 'images/walters-tours-safaris-4779.jpg'
  },
  {
    slug: '7-day-northern-circuit',
    title: '7-Day Northern Circuit',
    days: '7 Days',
    description: 'Complete northern Tanzania camping safari',
    price: '1,650',
    image: 'images/walters-tours-safaris-humphrey-m-e5hzQubIb68-unsplash.jpg'
  },
  {
    slug: '4-day-serengeti-special',
    title: '4-Day Serengeti Special',
    days: '4 Days',
    description: 'Focus on Serengeti and Ngorongoro',
    price: '950',
    image: 'images/walters-tours-safaris-magdalena-kula-manchee-nVUZO1gc_-o-unsplash.jpg'
  },
  {
    slug: '6-day-wildlife-explorer',
    title: '6-Day Wildlife Explorer',
    days: '6 Days',
    description: 'Tarangire, Serengeti, Ngorongoro, Manyara',
    price: '1,400',
    image: 'images/walters-tours-safaris-denice-alex-LD6WgJlIpmk-unsplash.jpg'
  },
  {
    slug: '2-day-quick-safari',
    title: '2-Day Quick Safari',
    days: '2 Days',
    description: 'Tarangire and Ngorongoro Crater',
    price: '550',
    image: 'images/walters-tours-safaris-sammy-wong-wzeGc7Uqopc-unsplash.jpg'
  }
];
</script>
