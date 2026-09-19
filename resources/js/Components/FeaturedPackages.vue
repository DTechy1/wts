<template>
  <section class="py-20 px-4 md:px-8 lg:px-12">
    <div class="container mx-auto max-w-7xl">
      <h2 class="text-4xl md:text-5xl font-heading font-bold text-center mb-4">Featured Safari Packages</h2>
      <p class="text-center text-gray-600 mb-12">Handpicked adventures for unforgettable experiences</p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="pkg in packages" :key="pkg.id" 
             class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <div class="relative overflow-hidden h-64 group">
            <img :src="pkg.image" :alt="pkg.name" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute top-4 right-4 bg-safari-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
              {{ pkg.duration }}
            </div>
            <button class="absolute top-4 left-4 text-white hover:text-safari-orange transition">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
              </svg>
            </button>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-heading font-bold mb-2">{{ pkg.name }}</h3>
            <p class="text-gray-600 mb-4">{{ pkg.description }}</p>
            
            <!-- Booking Button -->
            <BookingForm
              :package-id="pkg.id"
              :package-slug="pkg.slug"
              :package-name="pkg.name"
              button-text="Order Now"
              button-class="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BookingForm from './BookingForm.vue';

defineProps({
  packages: {
    type: Array,
    default: () => [
      { id: 1, slug: 'serengeti-explorer', name: 'Serengeti Explorer', duration: '5 Days', image: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/', description: 'Witness the great migration' },
      { id: 2, slug: 'ngorongoro-crater', name: 'Ngorongoro Crater', duration: '3 Days', image: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/', description: 'Explore the crater paradise' },
      { id: 3, slug: 'kilimanjaro-trek', name: 'Kilimanjaro Trek', duration: '7 Days', image: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/', description: 'Conquer Africa\'s highest peak' },
    ]
  }
});
</script>
