<template>
  <MainLayout>
    <Breadcrumb :items="breadcrumbItems" />
    
    <!-- Hero Section -->
    <section class="relative h-[70vh] overflow-hidden">
      <img :src="getImageUrl('images/walters-tours-safaris-meru-trekking.png')" 
           alt="Mountain Meru 4 Days Trek" 
           class="w-full h-full object-cover ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-b from-safari-brown/60 via-safari-brown/50 to-safari-brown/90"></div>
      <div class="absolute inset-0 flex items-center justify-center text-center px-4">
        <div class="max-w-4xl">
          <div class="inline-flex items-center gap-2 bg-safari-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            4 Days / 3 Nights Trekking
          </div>
          <h1 class="text-5xl md:text-7xl font-heading font-bold text-white mb-4 leading-tight">Mountain Meru<br class="hidden md:block"/> 4 Days</h1>
          <p class="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">Tanzania's Second Highest Peak � 4,566 m / 14,980 ft</p>
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
            <h3 class="text-2xl font-bold text-safari-brown mb-2">4 Days</h3>
            <p class="text-gray-600">Duration</p>
          </div>
          <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 text-safari-orange">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-safari-brown mb-2">4,566 m / 14,980 ft</h3>
            <p class="text-gray-600">Summit Altitude</p>
          </div>
          <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 text-safari-orange">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-safari-brown mb-2">Wildlife on Trail</h3>
            <p class="text-gray-600">Giraffes, Buffaloes & More</p>
          </div>
        </div>
        
        <div>
          <h2 class="text-4xl font-heading font-bold text-safari-brown mb-6">About Mountain Meru</h2>
          <p class="text-lg text-gray-700 mb-4 leading-relaxed">
            Mountain Meru is Tanzania's second highest peak and a formidable but rewarding challenge for any trekker. Located in Arusha National Park, the mountain offers spectacular views of Kilimanjaro � Africa's highest peak � on clear days, along with a unique opportunity to encounter wildlife on the trail itself, including giraffes, buffaloes and various antelope species.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">
            Meru is also an excellent acclimatization climb for those planning to summit Kilimanjaro, as it shares similar altitude profiles and vegetation zones. The 4-day itinerary follows the mountain's main Momela route, ascending via huts and reaching the crater rim at Big Meru summit.
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
            <div class="bg-safari-orange text-white p-6 flex items-center justify-between">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span class="text-white font-heading font-bold text-lg">{{ index + 1 }}</span>
                </div>
                <div>
                  <h3 class="text-xl font-heading font-bold text-white">{{ day.title }}</h3>
                  <p class="text-white/80 text-sm">{{ day.stats }}</p>
                </div>
              </div>
              <div class="hidden md:block text-right">
                <div class="text-white/80 text-sm">{{ day.elevation }}</div>
                <div class="text-white/80 text-sm">{{ day.altGain }}</div>
              </div>
            </div>
            <div class="p-6">
              <div class="flex flex-wrap gap-2 mb-4 md:hidden">
                <span class="bg-safari-orange/10 text-safari-orange text-xs font-semibold px-3 py-1 rounded-full">{{ day.elevation }}</span>
              </div>
              <p class="text-gray-700 leading-relaxed mb-4">{{ day.description }}</p>
              <div class="flex flex-wrap gap-4 text-sm text-gray-500 pt-4 border-t border-gray-100">
                <span class="flex items-center gap-1.5">
                  <svg class="w-4 h-4 text-safari-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                  </svg>
                  {{ day.accommodation }}
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
        <h2 class="text-4xl font-heading font-bold text-center mb-12">Trekking Package Details</h2>
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
        <h2 class="text-4xl font-heading font-bold text-white mb-6">Ready to Climb Mountain Meru?</h2>
        <p class="text-xl text-white/90 mb-8">Contact us for available dates and group options for your Mountain Meru adventure</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <BookingForm
            package-slug="mountain-meru-4-days"
            package-name="Mountain Meru � 4 Days Trek"
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
  { label: 'Mountain Meru 4 Days', href: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' }
];

const itinerary = [
  {
    title: 'Momela Gate ? Miriakamba Huts',
    stats: '13.8 km / 8.6 mi � approx. 3� hours',
    elevation: '1,597 m / 5,240 ft ? 2,503 m / 8,212 ft',
    altGain: 'Altitude gained: 906 m',
    accommodation: 'Miriakamba Hut',
    description: 'After breakfast, depart Moshi/Arusha at around 8:30 am and drive to Momela Gate inside Arusha National Park. Make payment and begin the climb with a picnic lunch toward the first hut � Miriakamba Hut. Wildlife is commonly encountered on this section of trail including giraffes, buffaloes, and various antelope. Dinner and overnight at Miriakamba Hut.'
  },
  {
    title: 'Miriakamba Huts ? Saddle Huts',
    stats: '6.1 km / 3.8 mi � approx. 2� hours',
    elevation: '2,503 m / 8,212 ft ? 3,560 m / 11,680 ft',
    altGain: 'Altitude gained: 1,057 m',
    accommodation: 'Saddle Hut',
    description: 'After breakfast, proceed with a climb to the second hut called Saddle Hut. This section is significantly steeper than the first. During the afternoon, if conditions allow, clients can optionally attempt climbing Little Meru peak and return. Dinner and overnight at Saddle Hut.'
  },
  {
    title: 'Saddle Hut ? Summit ? Saddle Hut',
    stats: '5.5 km / 3.4 mi to summit � descend same day',
    elevation: '3,560 m / 11,680 ft ? 4,566 m / 14,980 ft ? back to 3,560 m',
    altGain: 'Altitude gained: 1,006 m / lost: 1,006 m',
    accommodation: 'Saddle Hut',
    description: 'Wake up at midnight and have a cup of tea before starting the attempt on Big Meru Peak. Proceed to the summit crossing a rocky path in darkness, guided by your expert guide. After summiting, return to Saddle Hut for a full breakfast. The rest of the day is spent resting and recovering. Lunch, dinner and overnight at Saddle Hut.'
  },
  {
    title: 'Saddle Hut ? Momela Gate ? Arusha',
    stats: '6.5 km / 4 mi � descent',
    elevation: '3,560 m / 11,680 ft ? 1,597 m / 5,240 ft',
    altGain: 'Altitude lost: 1,963 m',
    accommodation: 'Kilimanjaro Wonders Hotel (4 stars, B&B)',
    description: 'Leave Saddle Hut and descend to Momela Gate via the first hut (Miriakamba), where you will be transferred to Arusha or Moshi. Overnight at Kilimanjaro Wonders Hotel (4-star, Bed & Breakfast) before being transferred for your onward journey � whether home, to your safari, or on a relaxing trip to Zanzibar.'
  }
];

const included = [
  'Mountain Meru trekking according to the itinerary',
  'Professional English-speaking Wilderness First Responder & CPR certified Guide',
  'Proper ration of mountain crew (Cook & Porters)',
  'Pre and post accommodations (2 nights Bed and Breakfast)',
  'Airport transfers and gate transfers',
  'All meals according to the itinerary',
  'Drinking water and Full Board meals on the mountain',
  'All National Park & Hut fees, crew permits, and VAT',
  'Rescue fees and Emergency Evacuation Coverage (AMREF)',
  'Fair and sustainable salary crew wages',
  'Complimentary Oxygen Cylinder'
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
