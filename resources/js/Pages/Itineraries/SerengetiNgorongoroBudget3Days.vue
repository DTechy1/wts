<template>
  <MainLayout>
    <Breadcrumb :breadcrumbs="[
      { name: 'Itineraries', href: '/itineraries' },
      { name: '3-Day Budget Safari: Serengeti & Ngorongoro' }
    ]" />

    <!-- Hero -->
    <section class="relative h-[70vh] min-h-[520px] overflow-hidden">
      <img :src="getImageUrl('images/serengeti/pexels-mikeknibbs-17849789.jpg')"
           alt="3-Day Budget Safari Serengeti and Ngorongoro" class="w-full h-full object-cover ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-b from-safari-dark/50 via-safari-dark/60 to-safari-dark/95"></div>
      <div class="absolute inset-0 flex items-end pb-16 px-4 md:px-8 lg:px-12">
        <div class="container mx-auto max-w-7xl">
          <div class="inline-flex items-center gap-2 bg-safari-green text-white px-4 py-2 rounded-full text-sm font-semibold mb-5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Budget Safari
          </div>
          <h1 class="text-4xl md:text-7xl font-heading font-bold text-white mb-4 leading-tight">3-Day Budget Safari</h1>
          <p class="text-xl md:text-2xl text-white/90 max-w-2xl mb-8">2 Nights Serengeti + 1 Day Ngorongoro Crater</p>
          <div class="flex flex-wrap gap-4">
            <span v-for="badge in heroBadges" :key="badge"
                  class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
              {{ badge }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Stats -->
    <section class="py-10 px-4 md:px-8 lg:px-12 bg-safari-green">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="stat in quickStats" :key="stat.label" class="text-center text-white">
            <div class="text-3xl md:text-4xl font-heading font-bold mb-1">{{ stat.value }}</div>
            <div class="text-sm text-white/80 font-medium">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Route Map -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-light">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-10">
          <div class="inline-block bg-safari-green/10 text-safari-green px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Your Journey</div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-safari-dark">The Safari Route</h2>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-2 md:gap-0">
          <template v-for="(stop, index) in routeStops" :key="stop">
            <div class="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-md border border-safari-green/20">
              <span class="w-7 h-7 rounded-full bg-safari-green text-white text-xs font-bold flex items-center justify-center">{{ index + 1 }}</span>
              <span class="text-sm font-semibold text-safari-dark">{{ stop }}</span>
            </div>
            <svg v-if="index < routeStops.length - 1" class="hidden md:block w-8 h-8 text-safari-green/40 mx-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </template>
        </div>
      </div>
    </section>

    <!-- Itinerary Timeline -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-white">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-16">
          <div class="inline-block bg-safari-green/10 text-safari-green px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Day by Day</div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-dark">Complete Itinerary</h2>
        </div>

        <div class="relative">
          <div class="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-safari-green via-safari-dark/30 to-safari-green -translate-x-1/2"></div>

          <div class="space-y-12 lg:space-y-0">
            <div v-for="(day, index) in itinerary" :key="day.day"
                 class="relative lg:grid lg:grid-cols-2 lg:gap-12 lg:mb-16 lg:items-center">
              <div class="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10 w-14 h-14 rounded-full bg-safari-green text-white font-heading font-bold text-lg items-center justify-center shadow-lg ring-4 ring-white">
                {{ day.day }}
              </div>
              <div :class="[
                index % 2 === 0 ? 'lg:col-start-1 lg:pr-16' : 'lg:col-start-2 lg:pl-16'
              ]">
                <div class="group bg-safari-light rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-safari-green/30">
                  <div class="relative h-48 overflow-hidden">
                    <img :src="getImageUrl(day.image)" :alt="day.title"
                         class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div class="absolute inset-0 bg-gradient-to-t from-safari-dark/60 to-transparent"></div>
                    <div class="absolute bottom-4 left-4 lg:hidden">
                      <span class="bg-safari-green text-white text-xs font-bold px-3 py-1 rounded-full">Day {{ day.day }}</span>
                    </div>
                  </div>
                  <div class="p-6 md:p-8">
                    <span class="inline-block text-xs font-semibold uppercase tracking-wider text-safari-green mb-1">{{ day.location }}</span>
                    <h3 class="text-xl md:text-2xl font-heading font-bold text-safari-dark mb-4">{{ day.title }}</h3>
                    <ul class="space-y-2 mb-4">
                      <li v-for="point in day.points" :key="point" class="flex items-start gap-2 text-gray-600 leading-relaxed">
                        <svg class="w-5 h-5 text-safari-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span>{{ point }}</span>
                      </li>
                    </ul>
                    <p class="text-sm font-semibold text-safari-dark bg-white rounded-lg px-4 py-2 inline-block">{{ day.overnight }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Price Includes -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-dark">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-14">
          <div class="inline-block bg-safari-green/20 text-safari-green px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Package Inclusions</div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-white">What's Included</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <div v-for="item in priceIncludes" :key="item.label"
               class="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-safari-green/40 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-safari-green/20 flex items-center justify-center mb-4 group-hover:bg-safari-green/30 transition-colors">
              <svg class="w-6 h-6 text-safari-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon"/>
              </svg>
            </div>
            <p class="text-white font-semibold leading-snug">{{ item.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Price Excludes -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-light">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-14">
          <div class="inline-block bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Not Included</div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-dark">What's Excluded</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <div v-for="item in priceExcludes" :key="item"
               class="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <svg class="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
            <span class="text-sm text-gray-600">{{ item }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-safari-green to-safari-green/80">
      <div class="container mx-auto max-w-4xl">
        <div class="bg-white rounded-3xl shadow-2xl p-10 md:p-14 text-center">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-safari-dark mb-4">Book Your 3-Day Budget Safari</h2>
          <p class="text-gray-600 text-lg mb-8 max-w-xl mx-auto">See the Serengeti and the Ngorongoro Crater in three days without overspending.</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a :href="$basePath + '/contact'"
               class="bg-safari-green text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-safari-green/90 transition transform hover:scale-105 shadow-lg">
              Request a Quotation
            </a>
            <a href="https://wa.me/255686526171" target="_blank"
               class="border-2 border-safari-dark text-safari-dark px-10 py-4 rounded-xl font-semibold text-lg hover:bg-safari-dark hover:text-white transition flex items-center justify-center gap-2">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat with Walter
            </a>
          </div>
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

const heroBadges = ['3 Days / 2 Nights', 'Starts & Ends in Arusha', 'Budget Tented Lodges'];

const quickStats = [
  { value: '3', label: 'Days' },
  { value: '2', label: 'Nights in Serengeti' },
  { value: '4×4', label: 'Safari Jeep' },
  { value: 'Full', label: 'Board Meals' },
];

const routeStops = ['Arusha', 'Serengeti', 'Ngorongoro Crater', 'Arusha'];

const itinerary = [
  {
    day: 1,
    title: 'Arusha → Serengeti',
    location: 'Serengeti National Park',
    image: 'images/serengeti/pexels-bgbennett-20095156.jpg',
    points: [
      'Early 7:00 AM departure from Arusha towards Serengeti National Park.',
      'Drive through the Great Rift Valley and the Ngorongoro Conservation Area before continuing to the Serengeti.',
      'Arrive in the Serengeti for an afternoon game drive looking for lions, elephants, giraffes, zebras, wildebeest, leopards and other wildlife.',
    ],
    overnight: '🌙 Dinner & overnight: Lodge in Serengeti',
  },
  {
    day: 2,
    title: 'Full Day in the Serengeti',
    location: 'Serengeti Plains',
    image: 'images/serengeti/pexels-vik-joshi-63702791-8150758.jpg',
    points: [
      'Wake up for an early morning game drive, one of the best times to see predators and active wildlife.',
      'Return for breakfast, then continue with a full-day game drive across the Serengeti plains.',
      'Enjoy a picnic lunch in the park before continuing your safari until late afternoon.',
    ],
    overnight: '🌙 Dinner & overnight: Lodge in Serengeti',
  },
  {
    day: 3,
    title: 'Serengeti → Ngorongoro Crater → Arusha',
    location: 'Ngorongoro Crater',
    image: 'images/ngorongoro/pexels-lan-yao-324969-20847561.jpg',
    points: [
      'Early breakfast and departure from the Serengeti towards Ngorongoro.',
      'Descend into the Ngorongoro Crater for an extended game drive.',
      'Look for the Big Five, hippos, zebras, wildebeest, buffalo, flamingos and many other animals.',
      'Enjoy a picnic lunch inside the crater.',
      'After the crater game drive, ascend and continue to Arusha, arriving in the evening.',
    ],
    overnight: '🏁 Safari ends in Arusha',
  },
];

const priceIncludes = [
  { label: '2 nights accommodation in Serengeti (budget tented lodge)', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { label: '4×4 safari jeep', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
  { label: 'Professional English-speaking safari guide', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
  { label: 'Serengeti park fees', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { label: 'Ngorongoro fees', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { label: '3 days of game drives', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' },
  { label: 'Breakfast, lunch & dinner, including picnic lunches', icon: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7' },
  { label: 'Drinking water, soda & beer', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
  { label: 'Arusha pickup & drop-off', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
];

const priceExcludes = [
  'International or local flights',
  'Visa',
  'Travel insurance',
  'Tips',
  'Personal expenses',
  'Optional activities',
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
