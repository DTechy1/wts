<template>
  <MainLayout>
    <Breadcrumb :items="breadcrumbItems" />
    
    <!-- Hero Section -->
    <section class="relative h-[60vh] overflow-hidden">
      <img :src="getImageUrl('images/walters-tours-safaris-kenya-tanzania-safari.png')" 
           alt="11 Days in Kenya and Tanzania" 
           class="w-full h-full object-cover ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-b from-safari-brown/70 via-safari-brown/50 to-safari-brown/90"></div>
      <div class="absolute inset-0 flex items-center justify-center text-center px-4">
        <div class="max-w-4xl">
          <div class="inline-flex items-center gap-2 bg-safari-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"/>
            </svg>
            11 Days / 10 Nights
          </div>
          <h1 class="text-5xl md:text-6xl font-heading font-bold text-white mb-4 leading-tight">11 Days in Kenya & Tanzania</h1>
          <p class="text-xl md:text-2xl text-white/90">Amboseli, Ngorongoro Crater, Serengeti, Masai Mara & Lake Nakuru</p>
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
            <h3 class="text-2xl font-bold text-safari-brown mb-2">11 Days</h3>
            <p class="text-gray-600">Duration</p>
          </div>
          
          <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 text-safari-orange">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-safari-brown mb-2">East Africa Combo</h3>
            <p class="text-gray-600">Amboseli, Serengeti, Ngorongoro & Masai Mara</p>
          </div>
          
          <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 text-safari-orange">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-safari-brown mb-2">Iconic Wildlife</h3>
            <p class="text-gray-600">Migration routes, Big Five & Flamingos</p>
          </div>
        </div>
        
        <div class="prose max-w-none">
          <h2 class="text-4xl font-heading font-bold text-safari-brown mb-6">About the Safari</h2>
          <p class="text-lg text-gray-700 leading-relaxed mb-4">
            Experience the ultimate East African safari linking the world-famous reserves of Kenya and Tanzania. Start under the shadows of Mount Kilimanjaro in Amboseli, cross the Namanga border into the geological wonder of the Ngorongoro Crater, and drive across the endless grasslands of the Serengeti.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">
            Cross back into Kenya to explore the Maasai Mara, home to the Great Migration and the Big Five. End your journey with bird watching at the pink flamingo-filled shores of Lake Nakuru before returning to Nairobi.
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
        <h2 class="text-4xl font-heading font-bold text-white mb-6">Plan Your Dual-Country Safari</h2>
        <p class="text-xl text-white/90 mb-8">
          Contact our team today to get current booking options for your specific travel dates
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <BookingForm
            package-slug="kenya-tanzania-11-days"
            package-name="11 Days in Kenya and Tanzania Safari"
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
  { label: '11 Days in Kenya & Tanzania', href: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' }
];

const itinerary = [
  {
    day: 1,
    title: 'Nairobi to Amboseli National Park',
    description: 'Meet and greet at Nairobi Jomo Kenyatta International Airport. After a briefing on what to expect, depart for Amboseli National Park, famous for its massive elephant herds at the foot of Mount Kilimanjaro. Enjoy a rewarding afternoon game drive after lunch.'
  },
  {
    day: 2,
    title: 'Amboseli National Park',
    description: 'Spend a full day exploring Amboseli reserve, viewing wildlife, birds, and taking photos of the beautiful scenic savanna landscape. Optional cultural visits to Maasai villages can be organized.'
  },
  {
    day: 3,
    title: 'Amboseli to Ngorongoro Crater Rim',
    description: 'After breakfast, drive to the Namanga border, clear customs and immigration, and join your Tanzanian driver/guide. Proceed via Arusha to the famous Ngorongoro Crater rim. Spend the afternoon at leisure taking guided walks or enjoying the lodge facilities.'
  },
  {
    day: 4,
    title: 'Ngorongoro Crater',
    description: 'Descend early into the crater floor for a full-day game drive with packed picnic lunches. Explore the crater floor which is home to the Big Five and numerous wildlife species, returning to the rim lodge for the night.'
  },
  {
    day: 5,
    title: 'Ngorongoro to Serengeti National Park',
    description: 'Depart after breakfast for the endless plains of Serengeti National Park. Spend the day game viewing with packed lunches en-route before checking into your lodge for dinner.'
  },
  {
    day: 6,
    title: 'Serengeti National Park',
    description: 'Enjoy morning and afternoon game drives in the Serengeti in search of lions, leopards, cheetahs, and massive plains game herds. Dinner and overnight at your lodge.'
  },
  {
    day: 7,
    title: 'Serengeti to Masai Mara National Reserve',
    description: 'Drive en-route through the Serengeti to the Isibania border, clear immigration, and enter Kenya\'s Masai Mara National Reserve. Check in and depart for an afternoon game drive.'
  },
  {
    day: 8,
    title: 'Masai Mara National Reserve',
    description: 'Spend a full day exploring the Masai Mara, searching for lions, leopards, rhinos, and elephants. Optional balloon safaris or Maasai village visits are available.'
  },
  {
    day: 9,
    title: 'Masai Mara to Lake Nakuru National Park',
    description: 'Depart after breakfast for Lake Nakuru National Park, a famous alkaline Rift Valley lake and bird sanctuary populated at times by flamingos. Enjoy an afternoon game drive.'
  },
  {
    day: 10,
    title: 'Lake Nakuru to Nairobi',
    description: 'Take a final morning game drive in Lake Nakuru, then return to Nairobi for lunch and relaxation at your hotel.'
  },
  {
    day: 11,
    title: 'Departure',
    description: 'After breakfast, check out and transfer to Nairobi Jomo Kenyatta International Airport for your outbound flight.'
  }
];

const included = [
  'Safari hotels and lodges booked throughout the itinerary',
  'Private transport in a 4x4 land cruiser safari vehicle with pop-up roof',
  'All national park and reserve entrance fees',
  'Full board meals (Breakfast, Lunch, Dinner) during safari days',
  'Professional bilingual driver/guide',
  'Airport transfers in Nairobi and border logistics'
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
