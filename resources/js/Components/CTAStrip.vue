<template>
  <section class="relative py-20 md:py-24 overflow-hidden">
    <div class="absolute inset-0">
      <img :src="getImageUrl('images/gallery/2026-01-24.webp')" alt="Safari" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-safari-orange/90"></div>
    </div>
    <div class="container mx-auto max-w-7xl relative z-10 px-4 md:px-8 lg:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="text-white">
          <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-6">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            <span class="font-semibold text-white">Limited Time Offer</span>
          </div>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Start Your Safari Adventure Today
          </h2>
          <p class="text-xl text-white/90 mb-8 max-w-lg">
            Book now and get 10% off your first safari. Experience the magic of Tanzania with our expert guides.
          </p>
        </div>
        <div>
          <BookingForm 
            button-text="Order Now"
            button-class="group bg-white text-safari-orange px-12 py-5 rounded-xl text-xl font-bold hover:bg-gray-100 transition transform hover:scale-105 shadow-xl flex items-center justify-center gap-3 w-full"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useAssets } from '../composables/useAssets';
import BookingForm from './BookingForm.vue';

const { getImageUrl } = useAssets();
</script>
