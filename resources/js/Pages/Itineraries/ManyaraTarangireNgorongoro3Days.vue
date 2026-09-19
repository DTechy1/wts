<template>
  <MainLayout>
    <Breadcrumb :items="breadcrumbItems" />
    
    <!-- Hero Section -->
    <section class="relative h-[60vh] overflow-hidden">
      <img :src="getImageUrl('images/walters-tours-safaris-hu-chen-t-7Mlatf9iI-unsplash.jpg')" 
           alt="3 Days Lake Manyara Tarangire Ngorongoro Safari" 
           class="w-full h-full object-cover ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-b from-safari-brown/70 via-safari-brown/50 to-safari-brown/90"></div>
      <div class="absolute inset-0 flex items-center justify-center text-center px-4">
        <div class="max-w-4xl">
          <div class="inline-flex items-center gap-2 bg-safari-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"/>
            </svg>
            3 Days / 2 Nights
          </div>
          <h1 class="text-5xl md:text-6xl font-heading font-bold text-white mb-4 leading-tight">3 Days Manyara, Tarangire & Ngorongoro</h1>
          <p class="text-xl md:text-2xl text-white/90">Premium Mid-Range Safari Package</p>
        </div>
      </div>
    </section>
    
    <!-- Overview Section -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 text-safari-orange">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-safari-brown mb-2">3 Days</h3>
            <p class="text-gray-600">Duration</p>
          </div>
          
          <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 text-safari-orange">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-safari-brown mb-2">Mid-Range Comfort</h3>
            <p class="text-gray-600">Selected Mid-Range Lodges & Camps</p>
          </div>
          
          <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 text-safari-orange">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-safari-brown mb-2">Compact Experience</h3>
            <p class="text-gray-600">Ideal for short holiday breaks</p>
          </div>
        </div>
        
        <div class="prose max-w-none">
          <h2 class="text-4xl font-heading font-bold text-safari-brown mb-6">About the Safari</h2>
          <p class="text-lg text-gray-700 leading-relaxed">
            This mid-range safari is designed for travelers who want to see the best of Tanzania's northern parks in a shorter amount of time without compromising comfort. Explore Lake Manyara, known for its rich birdlife and climbing lions, descend into the world-famous volcanic caldera of Ngorongoro Crater, and see massive elephant herds in Tarangire National Park.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Day by Day Itinerary -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-12">Day by Day Itinerary</h2>
        
        <div class="space-y-6">
          <div v-for="(day, index) in itinerary" :key="index" class="bg-safari-white rounded-2xl overflow-hidden shadow-lg">
            <div class="bg-safari-orange text-white p-6">
              <div class="flex items-center justify-between">
                <h3 class="text-2xl font-heading font-bold">Day {{ day.day }}: {{ day.title }}</h3>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-700 leading-relaxed">{{ day.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Inclusions & Exclusions -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-brown text-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-center mb-12">Safari Logistics & Details</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
              <svg class="w-8 h-8 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              Included
            </h3>
            <ul class="space-y-3">
              <li v-for="item in included" :key="item" class="flex items-start gap-3">
                <svg class="w-5 h-5 text-safari-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
              <svg class="w-8 h-8 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
              </svg>
              Not Included
            </h3>
            <ul class="space-y-3">
              <li v-for="item in notIncluded" :key="item" class="flex items-start gap-3">
                <svg class="w-5 h-5 text-safari-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                </svg>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-orange">
      <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-4xl font-heading font-bold text-white mb-6">Start Planning Your Custom Route</h2>
        <p class="text-xl text-white/90 mb-8">
          Send us your enquiry and request booking options for your preferred travel dates
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <BookingForm
            package-slug="manyara-tarangire-ngorongoro-3-days"
            package-name="3 Days Manyara, Tarangire & Ngorongoro Mid Range Safari"
            button-text="Enquire Now"
            button-class="bg-white text-safari-orange px-8 py-4 rounded-lg font-semibold hover:bg-safari-white transition transform hover:scale-105"
          />
          <a :href="$basePath + '/itineraries'" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-safari-orange transition">
            View Other Routes
          </a>
        </div>
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

const breadcrumbItems = [
  { label: 'Home', href: '/wts' },
  { label: 'Itineraries', href: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { label: 'Manyara, Tarangire & Ngorongoro 3 Days', href: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' }
];

const itinerary = [
  {
    day: 1,
    title: 'Lake Manyara',
    description: 'You will be picked up in Arusha by our safari guide and driver. From there you will be driven 3-4 hours to Lake Manyara entrance gate. Manyara�s main attractions are its rich bird life such as the thousands of flamingos at certain times of the year, and the rare sighted tree climbing lions. You may be lucky to spot one of these. After an adventurous game drive we stop over for lunch, then return to our accommodation.'
  },
  {
    day: 2,
    title: 'Ngorongoro Crater',
    description: 'After breakfast we will drive 30-60 minutes to the magnificent Ngorongoro Conservation Area to take a half-day game drive in the crater. The Ngorongoro crater is frequently described as one of the world wonders, not only because of its geology, but because it serves as an extraordinary natural sanctuary for some of Africa�s largest populations of large mammals.'
  },
  {
    day: 3,
    title: 'Tarangire National Park',
    description: 'After driving 30-60 minutes we will have our last morning game drive at Tarangire National Park. This park offers wide panoramas of open acacia woodland and grass savanna, where huge herds of Elephants (often two hundred strong) and other unique wildlife, such as fringe-eared Oryx and Lesser Kudu roam free. Big cats like Lions, Cheetahs and Leopards can be spotted, so keep your eyes open! In the afternoon we will return to Arusha or airport.'
  }
];

const included = [
  'All safari activities as noted in the itinerary',
  'All ground transportation in private 4x4 vehicles with pop-up viewing roof',
  'Services of professional English-speaking driver/guide and lodge/camp staff',
  'All selected accommodations',
  'All meals as specified',
  'All National Park entrance fees',
  'Government taxes',
  '1 liter of bottled water per daily per person in the vehicle'
];

const notIncluded = [
  'Tips for guides and lodge staffs',
  'Beverages at the lodges',
  'Hotel nights before or after the safari',
  'Optional visit to Oldupai Gorge and a Maasai village',
  'Personal expenses (laundry, telephone, souvenirs, etc.)'
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
