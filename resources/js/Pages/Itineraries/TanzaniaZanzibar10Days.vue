<template>
  <MainLayout>
    <Breadcrumb :items="breadcrumbItems" />
    
    <!-- Hero Section -->
    <section class="relative h-[60vh] overflow-hidden">
      <img :src="getImageUrl('images/walters-tours-safaris-humphrey-m-e5hzQubIb68-unsplash.jpg')" 
           alt="10 Days Tanzania Safari and Zanzibar" 
           class="w-full h-full object-cover ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-b from-safari-brown/70 via-safari-brown/50 to-safari-brown/90"></div>
      <div class="absolute inset-0 flex items-center justify-center text-center px-4">
        <div class="max-w-4xl">
          <div class="inline-flex items-center gap-2 bg-safari-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"/>
            </svg>
            10 Days / 9 Nights
          </div>
          <h1 class="text-5xl md:text-6xl font-heading font-bold text-white mb-4">10 Days Tanzania Safari & Zanzibar</h1>
          <p class="text-xl md:text-2xl text-white/90">The Ultimate Wildlife and Tropical Island Paradise Combo</p>
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
            <h3 class="text-2xl font-bold text-safari-brown mb-2">10 Days</h3>
            <p class="text-gray-600">Duration</p>
          </div>
          
          <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 text-safari-orange">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-safari-brown mb-2">Multi-Destinations</h3>
            <p class="text-gray-600">Arusha, Tarangire, Serengeti, Ngorongoro & Zanzibar</p>
          </div>
          
          <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 text-safari-orange">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-safari-brown mb-2">Highly Curated</h3>
            <p class="text-gray-600">Perfect Safari & Beach Mix</p>
          </div>
        </div>
        
        <div class="prose max-w-none">
          <h2 class="text-4xl font-heading font-bold text-safari-brown mb-6">About the Itinerary</h2>
          <p class="text-lg text-gray-700 mb-4 leading-relaxed">
            This exceptional 10-day itinerary offers the perfect blend of wildlife adventure and tropical relaxation. Start by exploring the famous parks of Tanzania�s Northern Circuit � including the elephant-rich Tarangire, the endless plains of the Serengeti, and the volcanic sanctuary of Ngorongoro Crater.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">
            Following your thrilling game drives, escape to the spice island of Zanzibar for days of white sand beaches, turquoise Indian Ocean waters, and rich Swahili culture.
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
    
    <!-- What's Included -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-brown text-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-center mb-12">Tour Inclusions</h2>
        
        <div class="max-w-3xl mx-auto bg-white/10 rounded-2xl p-8">
          <h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
            <svg class="w-8 h-8 text-safari-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            This includes:
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
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-orange">
      <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-4xl font-heading font-bold text-white mb-6">Ready to Book This Safari?</h2>
        <p class="text-xl text-white/90 mb-8">
          Contact our team today for details and a customized quote for your group
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <BookingForm
            package-slug="tanzania-zanzibar-10-days"
            package-name="10 Days Tanzania Safari & Zanzibar"
            button-text="Enquire Now"
            button-class="bg-white text-safari-orange px-8 py-4 rounded-lg font-semibold hover:bg-safari-white transition transform hover:scale-105"
          />
          <a :href="$basePath + '/itineraries'" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-safari-orange transition">
            View Other Itineraries
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
  { label: 'Tanzania & Zanzibar 10 Days', href: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' }
];

const itinerary = [
  {
    day: 1,
    title: 'Arrival in Arusha',
    description: 'Arrive at the airport where our team will welcome you. Transfer to your comfortable hotel in Arusha to rest, receive a brief orientation about your safari, and prepare for the journey ahead.'
  },
  {
    day: 2,
    title: 'Tarangire National Park',
    description: 'Set off in the morning for Tarangire National Park. Famous for its massive herds of elephants and majestic baobab trees, you will enjoy a full day of game viewing before checking in at your accommodation.'
  },
  {
    day: 3,
    title: 'Transfer to Serengeti National Park',
    description: 'Drive towards the endless plains of the Serengeti, passing through the scenic Ngorongoro Conservation highlands. Enjoy wildlife viewing en-route as you enter Tanzania\'s most famous park.'
  },
  {
    day: 4,
    title: 'Serengeti National Park',
    description: 'Spend the entire day exploring the Serengeti. You will have morning and afternoon game drives in search of the Big Five (lion, leopard, elephant, buffalo, rhino) and witness the diverse plains game and rich ecosystems.'
  },
  {
    day: 5,
    title: 'Transfer to Ngorongoro Crater',
    description: 'After a morning game drive in the Serengeti, transfer to the Ngorongoro Conservation Area rim. Relax and enjoy the breathtaking views of the volcanic caldera floor below.'
  },
  {
    day: 6,
    title: 'Ngorongoro Safari & Transfer to Zanzibar',
    description: 'Descend early into the Ngorongoro Crater for a half-day game drive. Experience the unique density of large mammals in this natural sanctuary. In the afternoon, ascend and drive to the airport for your flight to the tropical spice island of Zanzibar.'
  },
  {
    day: 7,
    title: 'Zanzibar - Free Day',
    description: 'Relax on the pristine white sand beaches of Zanzibar. Enjoy swimming, snorkeling, or exploring local Swahili villages at your own pace.'
  },
  {
    day: 8,
    title: 'Zanzibar - Free Day',
    description: 'Another day in paradise. You can choose to explore the historical UNESCO Stone Town, take a spice plantation tour, or go sailing on a traditional dhow boat.'
  },
  {
    day: 9,
    title: 'Zanzibar - Free Day',
    description: 'Relax at your beach resort, enjoy local fresh seafood dinners, or book optional water sports and excursions around the island.'
  },
  {
    day: 10,
    title: 'Depart from Zanzibar',
    description: 'After breakfast, transfer to the Zanzibar International Airport for your flight back home, carrying unforgettable memories of your Tanzanian safari.'
  }
];

const included = [
  'All national park entrance fees',
  'All accommodations as specified in the itinerary',
  'Three daily meals throughout the safari days',
  'Professional English-speaking driver/guide',
  'Private 4x4 land cruiser with pop-up roof for wildlife viewing',
  'Zanzibar domestic flight & beach hotel stays',
  'Airport transfers in Arusha and Zanzibar'
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
