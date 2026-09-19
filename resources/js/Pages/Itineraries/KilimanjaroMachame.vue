<template>
  <MainLayout>
    <Breadcrumb :items="breadcrumbItems" />
    
    <!-- Hero Section -->
    <section class="relative h-[70vh] overflow-hidden">
      <img :src="getImageUrl('images/walters-tours-safaris-kilimanjaro-summit.png')" 
           alt="Kilimanjaro Machame Route 7 Days" 
           class="w-full h-full object-cover ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-b from-safari-brown/60 via-safari-brown/50 to-safari-brown/90"></div>
      <div class="absolute inset-0 flex items-center justify-center text-center px-4">
        <div class="max-w-4xl">
          <div class="inline-flex items-center gap-2 bg-safari-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            7 Days / 6 Nights Trekking
          </div>
          <h1 class="text-5xl md:text-7xl font-heading font-bold text-white mb-4 leading-tight">Kilimanjaro<br class="hidden md:block"/> Machame Route</h1>
          <p class="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">The Whiskey Route � Most Scenic Path to the Roof of Africa at 19,341 ft</p>
        </div>
      </div>
    </section>
    
    <!-- Key Highlights -->
    <section class="py-12 px-4 md:px-8 lg:px-12 bg-safari-orange">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div v-for="highlight in keyHighlights" :key="highlight.label" class="flex items-center gap-3 text-white">
            <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="highlight.icon"/>
              </svg>
            </div>
            <span class="text-sm font-semibold leading-tight">{{ highlight.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Overview Stats -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 text-safari-orange">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-safari-brown mb-2">7 Days</h3>
            <p class="text-gray-600">Duration</p>
          </div>
          <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 text-safari-orange">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-safari-brown mb-2">5,895 m / 19,341 ft</h3>
            <p class="text-gray-600">Summit Altitude � Uhuru Peak</p>
          </div>
          <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 text-safari-orange">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-safari-brown mb-2">6 Eco-Zones</h3>
            <p class="text-gray-600">Rainforest to Arctic Summit</p>
          </div>
        </div>
        
        <div>
          <h2 class="text-4xl font-heading font-bold text-safari-brown mb-6">About the Machame Route</h2>
          <p class="text-lg text-gray-700 mb-4 leading-relaxed">
            Summit Mount Kilimanjaro � one of the Seven Summits of the world � via Kilimanjaro's Machame Route, the most scenic on the mountain. You will cross 6 ecological zones from lush rainforest to the harsh, beautiful arctic zone, guided by expert African guides full of knowledge of the mountain and its environs.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">
            The 7-day itinerary follows the "climb high, sleep low" acclimatization principle, dramatically increasing your chances of summit success. Our Signature Camping experience includes spacious tents, deluxe comfort, and amazing meals at every camp.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Day by Day Itinerary -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-white">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-12">
          <div class="inline-block bg-safari-orange/10 text-safari-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Full Itinerary</div>
          <h2 class="text-4xl font-heading font-bold text-safari-brown">Day by Day Schedule</h2>
        </div>
        
        <div class="space-y-6">
          <div v-for="(day, index) in itinerary" :key="index" class="bg-safari-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div :class="['p-6 flex items-center justify-between', day.isArrival ? 'bg-safari-brown' : 'bg-safari-orange']">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span class="text-white font-heading font-bold text-lg">{{ day.dayLabel }}</span>
                </div>
                <div>
                  <p class="text-white/80 text-xs font-semibold uppercase tracking-wider">{{ day.type }}</p>
                  <h3 class="text-xl font-heading font-bold text-white">{{ day.title }}</h3>
                </div>
              </div>
              <div class="text-right hidden md:block">
                <div v-if="day.elevation" class="text-white/80 text-sm">{{ day.elevation }}</div>
                <div v-if="day.distance" class="text-white/80 text-sm">{{ day.distance }} � {{ day.duration }}</div>
              </div>
            </div>
            <div class="p-6">
              <div v-if="day.elevation" class="flex flex-wrap gap-3 mb-4 md:hidden">
                <span class="bg-safari-orange/10 text-safari-orange text-xs font-semibold px-3 py-1 rounded-full">{{ day.elevation }}</span>
                <span v-if="day.distance" class="bg-safari-brown/10 text-safari-brown text-xs font-semibold px-3 py-1 rounded-full">{{ day.distance }} � {{ day.duration }}</span>
              </div>
              <p class="text-gray-700 leading-relaxed mb-4">{{ day.description }}</p>
              <div class="flex flex-wrap gap-4 text-sm text-gray-500 pt-4 border-t border-gray-100">
                <span class="flex items-center gap-1.5">
                  <svg class="w-4 h-4 text-safari-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                  </svg>
                  {{ day.accommodation }}
                </span>
                <span class="flex items-center gap-1.5">
                  <svg class="w-4 h-4 text-safari-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"/>
                  </svg>
                  Meals: {{ day.meals }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Included / Excluded -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-brown text-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-center mb-12">What's Included</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
              <svg class="w-7 h-7 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
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
              <svg class="w-7 h-7 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
              </svg>
              Not Included
            </h3>
            <ul class="space-y-3">
              <li v-for="item in notIncluded" :key="item" class="flex items-start gap-3">
                <svg class="w-5 h-5 text-safari-orange/60 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                </svg>
                <span class="text-white/80">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-orange">
      <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-4xl font-heading font-bold text-white mb-6">Ready to Climb Kilimanjaro?</h2>
        <p class="text-xl text-white/90 mb-8">Book your Machame Route adventure and conquer the Roof of Africa</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <BookingForm
            package-slug="kilimanjaro-machame"
            package-name="Kilimanjaro Machame Route � 7 Days"
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
  { label: 'Kilimanjaro Machame 7 Days', href: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' }
];

const keyHighlights = [
  { label: 'Summit at 19,341 ft', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
  { label: 'Most Scenic Route', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' },
  { label: '6 Ecological Zones', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064' },
  { label: 'Expert African Guides', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
  { label: 'Signature Camping', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' }
];

const itinerary = [
  {
    dayLabel: '0',
    type: 'Arrival Day',
    isArrival: true,
    title: 'Arrive in Arusha',
    elevation: null,
    distance: null,
    duration: null,
    accommodation: 'Mount Meru Hotel',
    meals: 'Breakfast',
    description: 'Arrive at Kilimanjaro International Airport where you are met after passing through customs. Transfer to Mount Meru Hotel and have a comprehensive briefing and equipment check with your climbing manager and your guide.'
  },
  {
    dayLabel: '1',
    type: 'Trek Day 1',
    isArrival: false,
    title: 'Arusha to Machame Camp',
    elevation: '5,380 ft ? 9,350 ft',
    distance: '7 miles',
    duration: '5�7 hours',
    accommodation: 'Kilimanjaro Camping � Machame Camp',
    meals: 'Breakfast, Lunch, Dinner',
    description: 'Drive from Arusha to Mt Kilimanjaro National Park, passing by the village of Machame to meet your climb crew at the Machame Gate. As you begin the gentle ascent, the trail winds through the verdant afromontane rainforest. Moss and lichen dangles from tall branches, tree ferns, begonias, and violas bloom year-round. Many species of birds � as well as colobus monkeys, blue monkeys and other creatures � can be seen and heard. The first camp is set amongst giant heather at Machame Camp.'
  },
  {
    dayLabel: '2',
    type: 'Trek Day 2',
    isArrival: false,
    title: 'Machame Camp to Shira Camp',
    elevation: '9,350 ft ? 12,500 ft',
    distance: '3 miles',
    duration: '4�6 hours',
    accommodation: 'Kilimanjaro Camping � Shira Camp',
    meals: 'Breakfast, Lunch, Dinner',
    description: 'Leaving the rainforest behind, you continue on an ascending path along a steep ridge onto heather-clad moorland � the heath zone. Attractive helichrysum and lobelia dominate the harsh landscape. Geological features range from lava tubes to glacial valleys. A picnic lunch is taken on trail. You continue up a rocky ridge onto the Shira Plateau, where the Western Breach and its stunning glaciers come into view. Your tent tonight is "a room with a view" looking out towards the snow-dusted Kibo peaks.'
  },
  {
    dayLabel: '3',
    type: 'Trek Day 3',
    isArrival: false,
    title: 'Shira Camp to Barranco Camp via Lava Tower',
    elevation: '12,500 ft ? 15,223 ft ? 13,044 ft',
    distance: '7 km',
    duration: '6�8 hours',
    accommodation: 'Kilimanjaro Camping � Barranco Camp',
    meals: 'Breakfast, Lunch, Dinner',
    description: 'Today is a walk-high, sleep-low day. You ascend into alpine desert towards Kibo Peak, where western glaciers become clearly visible. Lunch is a picnic en route. There is an optional ascent of the 300-foot Lava Tower before descending to Barranco Camp through the strange yet beautiful "Garden of the Senecios" � giant groundsels and lobelias. The Barranco Valley is one of the prettiest areas on the entire trail. A long day, but the next time you reach this altitude is in two days, making it a great acclimatization day.'
  },
  {
    dayLabel: '4',
    type: 'Trek Day 4',
    isArrival: false,
    title: 'Barranco Camp to Karanga Camp',
    elevation: '13,044 ft ? 13,123 ft',
    distance: '3 miles',
    duration: '4�5 hours',
    accommodation: 'Kilimanjaro Camping � Karanga Camp',
    meals: 'Breakfast, Lunch, Dinner',
    description: 'A relatively short day after conquering the intimidating Barranco Wall � be prepared to use all four limbs as you traverse the wall to the top of the Karanga Valley. From there, follow a path through many inclines and declines to Karanga Camp, arriving in the late afternoon. Significant time at altitude is essential for safe acclimatization. Sunsets are particularly spectacular with views of the southern glacial valleys and ice fields towering over 3,000 feet above you.'
  },
  {
    dayLabel: '5',
    type: 'Trek Day 5',
    isArrival: false,
    title: 'Karanga Camp to Barafu Camp',
    elevation: '13,123 ft ? 15,288 ft',
    distance: '2 miles',
    duration: '4�5 hours',
    accommodation: 'Kilimanjaro Camping � Barafu Camp',
    meals: 'Breakfast, Lunch, Dinner',
    description: 'Another half-day ascending to Barafu Camp. Lunch is taken in this high camp, allowing plenty of time to relax before the summit bid. Desolate alpine desert and strong winds rip over this camp, yet in the evenings splendid views of Mawenzi Peak are the norm. A relatively early dinner before resting for the evening in preparation for the midnight summit push.'
  },
  {
    dayLabel: '6',
    type: 'Trek Day 6 � SUMMIT',
    isArrival: false,
    title: 'Summit Ascent ? Uhuru Peak ? Mweka Camp',
    elevation: '15,288 ft ? 19,341 ft ? 12,467 ft',
    distance: '3 mi ascent / 7 mi descent',
    duration: '7�8 hrs up / 4�6 hrs down',
    accommodation: 'Kilimanjaro Camping � Mweka Camp',
    meals: 'Breakfast, Lunch, Dinner',
    description: 'Depart just before midnight for the final summit bid � patience and persistence are essential. By dawn, as the first rays of light appear over the Tanzanian landscape, you arrive near the crater rim at Stella Point (18,652 ft) for the most glorious sunrise you are ever likely to see, appearing over Mawenzi Peak. A short final section leads to Uhuru Peak � the Roof of Africa! Take as many pictures as you can. After a short celebration, begin the descent through beautiful rainforest scenery toward Mweka Camp. With every step the air has more oxygen � your legs will be jelly but your heart will be light.'
  },
  {
    dayLabel: '7',
    type: 'Trek Day 7',
    isArrival: false,
    title: 'Mweka Camp to Arusha',
    elevation: '12,467 ft ? 5,380 ft',
    distance: '6 miles',
    duration: '3�4 hours',
    accommodation: 'Hotel in Arusha',
    meals: 'Breakfast',
    description: 'After breakfast you descend once again through montane forest. At around midday, after saying farewell to your crew, you are picked up and transferred back to your hotel for a well-deserved shower and a celebratory dinner! Receive your summit certificate as a lasting memento of your incredible achievement.'
  }
];

const included = [
  'Kilimanjaro trekking according to the itinerary',
  'Professional English-speaking Wilderness First Responder & CPR certified Guide',
  'Proper ration of mountain crew (Cook & Porters)',
  'Pre and post accommodations (2 nights Bed and Breakfast)',
  'Airport transfers',
  'All meals according to the itinerary',
  'Drinking water and Full Board meals on the mountain',
  'All National Park & hut fees, crew permits, and VAT',
  'Rescue fees and Emergency Evacuation Coverage (AMREF)',
  'Fair and sustainable salary crew wages',
  'Complimentary Oxygen Cylinder',
  'Gate transfers'
];

const notIncluded = [
  'International flights',
  'Tanzania visa fees',
  'Travel insurance (required)',
  'Gamow bag',
  'Medication',
  'Tips for porters and mountain crew (20% industry standard recommended)',
  'Personal spending money for souvenirs etc.'
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
