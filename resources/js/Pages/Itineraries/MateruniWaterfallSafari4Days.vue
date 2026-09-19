<template>
  <MainLayout>
    <Breadcrumb :breadcrumbs="[
      { name: 'Itineraries', href: '/itineraries' },
      { name: '4 Days Materuni Waterfall and Safari' }
    ]" />

    <!-- Hero -->
    <section class="relative h-[70vh] min-h-[520px] overflow-hidden">
      <img :src="getImageUrl('images/walters-tours-safaris-materuni-waterfall.png')"
           alt="4 Days Materuni Waterfall and Safari" class="w-full h-full object-cover ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-b from-safari-brown/50 via-safari-brown/60 to-safari-brown/95"></div>
      <div class="absolute inset-0 flex items-end pb-16 px-4 md:px-8 lg:px-12">
        <div class="container mx-auto max-w-7xl">
          <div class="inline-flex items-center gap-2 bg-safari-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            </svg>
            Cultural & Safari
          </div>
          <h1 class="text-5xl md:text-7xl font-heading font-bold text-white mb-4 leading-tight">4 Days Materuni Waterfall and Safari</h1>
          <p class="text-xl md:text-2xl text-white/90 max-w-2xl mb-8">Waterfalls · Coffee Plantation · Safari · Hot Springs</p>
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
    <section class="py-10 px-4 md:px-8 lg:px-12 bg-safari-orange">
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
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-10">
          <div class="inline-block bg-safari-orange/10 text-safari-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Your Journey</div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-safari-brown">The Adventure Route</h2>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-2 md:gap-0">
          <template v-for="(stop, index) in routeStops" :key="stop">
            <div class="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-md border border-safari-orange/20">
              <span class="w-7 h-7 rounded-full bg-safari-orange text-white text-xs font-bold flex items-center justify-center">{{ index + 1 }}</span>
              <span class="text-sm font-semibold text-safari-brown">{{ stop }}</span>
            </div>
            <svg v-if="index < routeStops.length - 1" class="hidden md:block w-8 h-8 text-safari-orange/40 mx-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div class="inline-block bg-safari-orange/10 text-safari-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Day by Day</div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown">Itinerary</h2>
        </div>

        <div class="relative">
          <!-- Timeline line -->
          <div class="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-safari-orange via-safari-brown/30 to-safari-orange -translate-x-1/2"></div>

          <div class="space-y-12 lg:space-y-0">
            <div v-for="(day, index) in itinerary" :key="day.day"
                 class="relative lg:grid lg:grid-cols-2 lg:gap-12 lg:mb-16 lg:items-center">

              <!-- Timeline dot (desktop) -->
              <div class="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10 w-14 h-14 rounded-full bg-safari-orange text-white font-heading font-bold text-lg items-center justify-center shadow-lg ring-4 ring-white">
                {{ day.day }}
              </div>

              <!-- Content card -- alternates left / right -->
              <div :class="[
                index % 2 === 0 ? 'lg:col-start-1 lg:pr-16' : 'lg:col-start-2 lg:pl-16'
              ]">
                <div class="group bg-safari-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-safari-orange/30">
                  <div class="p-6 md:p-8">
                    <div class="flex items-start gap-3 mb-3">
                      <span class="lg:hidden w-10 h-10 rounded-xl bg-safari-orange text-white font-heading font-bold flex items-center justify-center flex-shrink-0">
                        {{ day.day }}
                      </span>
                      <div>
                        <span class="inline-block text-xs font-semibold uppercase tracking-wider text-safari-orange mb-1">{{ day.location }}</span>
                        <h3 class="text-xl md:text-2xl font-heading font-bold text-safari-brown">{{ day.title }}</h3>
                      </div>
                    </div>
                    <p class="text-gray-600 leading-relaxed">{{ day.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Price Includes -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-brown">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-14">
          <div class="inline-block bg-safari-orange/20 text-safari-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-4">All-Inclusive Package</div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-white">Price Includes</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <div v-for="item in priceIncludes" :key="item.label"
               class="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-safari-orange/40 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-safari-orange/20 flex items-center justify-center mb-4 group-hover:bg-safari-orange/30 transition-colors">
              <svg class="w-6 h-6 text-safari-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon"/>
              </svg>
            </div>
            <p class="text-white font-semibold leading-snug">{{ item.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-safari-orange to-safari-orange/80">
      <div class="container mx-auto max-w-4xl">
        <div class="bg-white rounded-3xl shadow-2xl p-10 md:p-14 text-center">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-safari-brown mb-4">Ready for Your Materuni Waterfall & Safari Adventure?</h2>
          <p class="text-gray-600 text-lg mb-8 max-w-xl mx-auto">Experience waterfalls, coffee plantations, safari, and hot springs in one amazing trip</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a :href="$basePath + '/contact'"
               class="bg-safari-orange text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-safari-orange/90 transition transform hover:scale-105 shadow-lg">
              Get Your Free Quote
            </a>
            <a href="https://wa.me/255686526171" target="_blank"
               class="border-2 border-safari-brown text-safari-brown px-10 py-4 rounded-xl font-semibold text-lg hover:bg-safari-brown hover:text-white transition flex items-center justify-center gap-2">
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

const heroBadges = ['4 Days / 3 Nights', 'Cultural & Safari', 'Hot Springs'];

const quickStats = [
  { value: '4', label: 'Days' },
  { value: '2', label: 'Parks' },
  { value: 'Coffee', label: 'Tour' },
  { value: 'Hot', label: 'Springs' },
];

const routeStops = ['Arusha', 'Tarangire', 'Manyara', 'Materuni', 'Kikuletwa'];

const itinerary = [
  {
    day: 1,
    title: 'Arusha to Tarangire National Park',
    location: 'Tarangire',
    description: 'Park is known for its majestic baobab trees that dot the landscape, dwarfing the animals that feed beneath them. The Tarangire River is the centerpiece of this park which is famous for some of the largest herds of elephants in Africa. Here you may see lion, leopard, cheetah, lesser kudu, buffalo, Oryx, eland, giraffe and zebra. By mid afternoon take lunch at picnic site, and game drive continue till evening and you will be dropped at Lodge in Lake Manyara area.'
  },
  {
    day: 2,
    title: 'Lake Manyara National Park to Arusha',
    location: 'Lake Manyara',
    description: 'Pick up at 8:00 AM from your hotel and depart for Lake Manyara National Park for wildlife viewing and afternoon at a picnic lunch, later a full day game in the park. Lush forests of Acacia and Mahogany trees begin to set the mood for what is waiting ahead. The game drive will go on till evening with a small break for picnic lunch. During the game drive watch out for buffaloes, giraffes, impalas, baboons and the blue monkeys. Another spectacle of Lake Manyara National park is the tree climbing lions, however spotting them is a game of luck. In the right season, you can see the shoreline turning pink with millions of flamingos flocking there. After the game drive, you will heading to visit Famous Maasai village for cultural Activities and evening Returns to Arusha or Moshi.'
  },
  {
    day: 3,
    title: 'Hike experience to the highest waterfall in Kilimanjaro village Materuni',
    location: 'Materuni',
    description: 'Hike to Materuni waterfall and coffee plantation with local lunch and fruits with Chaggas tribes meals experience and evening stay at Moshi.'
  },
  {
    day: 4,
    title: 'Last day visit the oasis Island the Kikuletwa hotsprings',
    location: 'Kikuletwa',
    description: 'Visit the oasis Island the Kikuletwa hotsprings, a hidden gem surrounded by a beautiful green forest with natural hot springs, ideal for taking a relaxing dip or simply to use as a backdrop for a tranquil picnic with Mount Kilimanjaro view near you.'
  }
];

const priceIncludes = [
  { label: 'All park entrance fee', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { label: 'Land cruiser private', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
  { label: 'Meals drinks', icon: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7' },
  { label: 'Accommodation', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { label: 'Government taxes', icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
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
