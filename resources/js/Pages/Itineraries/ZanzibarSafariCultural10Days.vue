<template>
  <MainLayout>
    <Breadcrumb :breadcrumbs="[
      { name: 'Itineraries', href: '/itineraries' },
      { name: '10 Days Zanzibar, Safari & Cultural Experience' }
    ]" />

    <!-- Hero -->
    <section class="relative h-[70vh] min-h-[520px] overflow-hidden">
      <img :src="getImageUrl('images/zanzibar/pexels-rufaro-6707821.jpg')"
           alt="10 Days Zanzibar Safari Cultural Experience" class="w-full h-full object-cover ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-b from-safari-brown/50 via-safari-brown/60 to-safari-brown/95"></div>
      <div class="absolute inset-0 flex items-end pb-16 px-4 md:px-8 lg:px-12">
        <div class="container mx-auto max-w-7xl">
          <div class="inline-flex items-center gap-2 bg-safari-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            </svg>
            Zanzibar, Safari & Culture
          </div>
          <h1 class="text-5xl md:text-7xl font-heading font-bold text-white mb-4 leading-tight">10 Days Zanzibar, Safari & Cultural Experience</h1>
          <p class="text-xl md:text-2xl text-white/90 max-w-2xl mb-8">Zanzibar · Tarangire · Serengeti · Ngorongoro · Maasai · Materuni</p>
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
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-safari-brown">Zanzibar to Safari Route</h2>
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

    <!-- Image Gallery -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-safari-brown/5 to-safari-orange/5">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-14">
          <div class="inline-flex items-center gap-2 bg-safari-orange/10 text-safari-orange px-5 py-2 rounded-full text-sm font-semibold mb-5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            Gallery
          </div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown mb-4">Zanzibar, Safari & Culture</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Experience the best of Tanzania! Discover the beautiful beaches of Zanzibar, explore the famous Serengeti plains, encounter elephants in Tarangire National Park, descend into the spectacular Ngorongoro Crater, and experience the rich traditions of the Maasai people.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(image, index) in galleryImages" :key="index"
               class="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
               :class="index === 0 || index === 3 ? 'md:row-span-2' : ''">
            <img :src="getImageUrl(image.src)" :alt="image.alt"
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 :class="index === 0 || index === 3 ? 'min-h-[400px] md:min-h-[500px]' : 'h-64 md:h-80'" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
              <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 class="text-white font-bold text-xl mb-2">{{ image.alt }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Itinerary Timeline -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-white">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-16">
          <div class="inline-block bg-safari-orange/10 text-safari-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Day by Day</div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown">Complete Itinerary</h2>
        </div>

        <div class="relative">
          <div class="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-safari-orange via-safari-brown/30 to-safari-orange -translate-x-1/2"></div>

          <div class="space-y-12 lg:space-y-0">
            <div v-for="(day, index) in itinerary" :key="day.day"
                 class="relative lg:grid lg:grid-cols-2 lg:gap-12 lg:mb-16 lg:items-center">
              <div class="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10 w-14 h-14 rounded-full bg-safari-orange text-white font-heading font-bold text-lg items-center justify-center shadow-lg ring-4 ring-white">
                {{ day.day }}
              </div>
              <div :class="[
                index % 2 === 0 ? 'lg:col-start-1 lg:pr-16' : 'lg:col-start-2 lg:pl-16'
              ]">
                <div class="group bg-safari-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-safari-orange/30">
                  <div v-if="day.image" class="relative h-48 overflow-hidden">
                    <img :src="getImageUrl(day.image)" :alt="day.title"
                         class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div class="absolute inset-0 bg-gradient-to-t from-safari-brown/60 to-transparent"></div>
                    <div class="absolute bottom-4 left-4 lg:hidden">
                      <span class="bg-safari-orange text-white text-xs font-bold px-3 py-1 rounded-full">Day {{ day.day }}</span>
                    </div>
                  </div>
                  <div class="p-6 md:p-8">
                    <div class="flex items-start gap-3 mb-3">
                      <span v-if="!day.image" class="lg:hidden w-10 h-10 rounded-xl bg-safari-orange text-white font-heading font-bold flex items-center justify-center flex-shrink-0">
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
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-white">Package Inclusions</h2>
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

    <!-- Price Excludes -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-14">
          <div class="inline-block bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Not Included</div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown">Package Exclusions</h2>
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
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-safari-orange to-safari-orange/80">
      <div class="container mx-auto max-w-4xl">
        <div class="bg-white rounded-3xl shadow-2xl p-10 md:p-14 text-center">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-safari-brown mb-4">Ready for Your 10-Day Tanzania Adventure?</h2>
          <p class="text-gray-600 text-lg mb-8 max-w-xl mx-auto">Experience the best of Tanzania — beaches, wildlife, and culture</p>
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

const heroBadges = ['10 Days / 9 Nights', 'Private Safari', 'Beach & Wildlife'];

const quickStats = [
  { value: '10', label: 'Days' },
  { value: '4', label: 'National Parks' },
  { value: 'Big 5', label: 'Wildlife' },
  { value: 'Private', label: '4x4 Vehicle' },
];

const routeStops = ['Zanzibar', 'Stone Town', 'Arusha', 'Tarangire', 'Serengeti', 'Ngorongoro', 'Maasai', 'Materuni', 'Departure'];

const galleryImages = [
  { src: 'images/zanzibar/pexels-saila-holidays-zanzibar-1351717875-25706804.jpg', alt: 'Zanzibar Beach Paradise' },
  { src: 'images/10 days zanzibar safari/safari-vehicle-track.jpeg', alt: 'Safari 4x4 Game Drive Adventure' },
  { src: 'images/10 days zanzibar safari/serengeti-lion-wildlife.jpeg', alt: 'Serengeti Wildlife & Lions' },
  { src: 'images/10 days zanzibar safari/maasai-cultural-handicrafts.jpeg', alt: 'Maasai Cultural Handicrafts' },
];

const itinerary = [
  {
    day: 1,
    title: 'Arrival in Zanzibar',
    location: 'Zanzibar',
    description: 'Welcome to Zanzibar, the beautiful Spice Island of Tanzania! Airport pickup and transfer to your hotel. Check in and relax at the beach. Enjoy the turquoise waters and white sandy beaches. Optional sunset beach walk. Accommodation: Zanzibar hotel or beach resort.',
    image: 'images/zanzibar/pexels-rufaro-6707821.jpg',
  },
  {
    day: 2,
    title: 'Stone Town & Spice Farm Tour',
    location: 'Stone Town & Spice Farm',
    description: 'Discover Zanzibar\'s history, culture, and spices. Explore historic Stone Town. Visit the Old Fort and the historic town streets. Enjoy a guided spice farm tour. Learn about cloves, cinnamon, vanilla, and other tropical spices. Return to your hotel. Accommodation: Zanzibar hotel.',
    image: 'images/zanzibar/pexels-dajana-reci-289671698-30125137.jpg',
  },
  {
    day: 3,
    title: 'Zanzibar Beach Experience',
    location: 'Zanzibar Beach',
    description: 'Enjoy a relaxing day in paradise. Breakfast at the hotel. Optional boat excursion to Prison Island. Discover the giant Aldabra tortoises. Enjoy swimming, snorkeling, or a traditional dhow sunset cruise, depending on your chosen excursion. Relax at the beach. Accommodation: Zanzibar hotel.',
    image: 'images/zanzibar/pexels-saila-holidays-zanzibar-1351717875-25706804.jpg',
  },
  {
    day: 4,
    title: 'Zanzibar to Arusha – Begin Your Safari',
    location: 'Zanzibar to Arusha',
    description: 'Today, your African wildlife adventure begins. Breakfast at the hotel. Transfer to Zanzibar Airport. Flight to Arusha. Meet your professional safari guide. Enjoy an Arusha city tour, depending on your arrival time. Visit a local market and experience the atmosphere of northern Tanzania. Accommodation: Arusha lodge or hotel. Note: The flight and city tour schedule will depend on flight availability and arrival time.',
    image: 'images/Arusha/arusha-airport.jpeg',
  },
  {
    day: 5,
    title: 'Arusha to Tarangire National Park',
    location: 'Tarangire - The Land of Giants',
    description: 'The Land of Giants — Elephants & Ancient Baobab. Depart for Tarangire National Park. Activities: Morning drive to Tarangire. Full-day game drive through the park. Search for elephants, giraffes, zebras, wildebeest, and lions. Enjoy a picnic lunch in a designated area. Photograph the beautiful baobab trees and African landscapes. Accommodation: Safari lodge or tented camp in the Tarangire/Karatu area.',
    image: 'images/10 days zanzibar safari/safari-vehicle-track.jpeg',
  },
  {
    day: 6,
    title: 'Tarangire to Serengeti National Park',
    location: 'Serengeti - Journey to the Endless Plains',
    description: 'Journey to the Endless Plains. After breakfast, travel towards the world-famous Serengeti National Park. Activities: Scenic drive through the Ngorongoro Conservation Area. Wildlife viewing along the way. Enjoy a picnic lunch. Afternoon game drive in the Serengeti. Search for lions, elephants, cheetahs, leopards, and other wildlife. Accommodation: Serengeti tented camp or safari lodge. Wildlife sightings depend on the season and natural conditions.',
    image: 'images/serengeti/pexels-bgbennett-20095156.jpg',
  },
  {
    day: 7,
    title: 'Full-Day Serengeti Safari',
    location: 'Serengeti Plains',
    description: 'An Unforgettable African Wildlife Experience. Spend the entire day exploring the Serengeti with your professional safari guide. Activities: Early morning game drive. Search for predators and other wildlife. Explore the vast savannah plains. Enjoy a picnic lunch during the safari. Continue your afternoon game drive. Optional hot-air balloon safari at an additional cost, subject to availability. Accommodation: Serengeti tented camp or safari lodge.',
    image: 'images/10 days zanzibar safari/serengeti-lion-wildlife.jpeg',
  },
  {
    day: 8,
    title: 'Serengeti to Ngorongoro Crater',
    location: 'Ngorongoro',
    description: 'Explore One of Africa\'s Most Spectacular Wildlife Destinations. After breakfast, enjoy a final morning game drive in the Serengeti before travelling towards the Ngorongoro area. Activities: Morning wildlife viewing. Scenic drive towards Ngorongoro. Enjoy the changing landscapes of northern Tanzania. Arrive at your lodge and relax. Accommodation: Ngorongoro-area lodge.',
    image: 'images/ngorongoro/pexels-1093389518-30980273.jpg',
  },
  {
    day: 9,
    title: 'Ngorongoro Crater & Maasai Cultural Experience',
    location: 'Ngorongoro & Maasai Village',
    description: 'Wildlife, Landscapes & Traditional Culture. Wake up early and drive to the magnificent Ngorongoro Crater. Activities: Descend into the crater for a game drive. Search for elephants, buffaloes, zebras, hippos, lions, and the endangered black rhino. Enjoy a picnic lunch at a designated site. Visit an authentic Maasai community or cultural village, subject to local arrangements and permission. Learn about Maasai traditions, traditional homes, clothing, livestock, and daily life. Accommodation: Arusha hotel or lodge, depending on your departure arrangements.',
    image: 'images/10 days zanzibar safari/maasai-cultural-handicrafts.jpeg',
  },
  {
    day: 10,
    title: 'Materuni Waterfall & Coffee Experience – Departure',
    location: 'Materuni Village & Kilimanjaro Region',
    description: 'Discover the Beauty of the Kilimanjaro Region. After breakfast, travel towards Materuni Village near Mount Kilimanjaro. Activities: Guided walk through the village and surrounding landscape. Hike to beautiful Materuni Waterfall. Enjoy the natural scenery and take photographs. Experience traditional Chagga coffee preparation. Enjoy a local coffee experience before returning to Arusha or Kilimanjaro International Airport. Departure: Airport transfer for your onward flight. Important: Day 10 requires a suitable departure time. If your flight leaves early, Materuni should be visited on another day.',
    image: 'images/walters-tours-safaris-materuni-waterfall.png',
  },
];

const priceIncludes = [
  { label: 'Zanzibar airport transfers', icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8' },
  { label: 'Zanzibar accommodation for 3 nights', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { label: 'Domestic flight from Zanzibar to Arusha', icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8' },
  { label: 'Safari transportation in a 4×4 Land Cruiser with a pop-up roof', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
  { label: 'Professional English-speaking safari guide', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  { label: 'National park entrance fees', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { label: 'Ngorongoro Crater service fees', icon: 'M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z' },
  { label: 'Accommodation during the safari', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { label: 'Meals during the safari as specified', icon: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7' },
  { label: 'Picnic lunches during game drives', icon: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7' },
  { label: 'Maasai cultural visit', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
  { label: 'Materuni Waterfall and coffee experience', icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' },
  { label: 'Stone Town and spice farm tour', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
  { label: 'Airport transfers according to the itinerary', icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8' },
];

const priceExcludes = [
  'International flights to and from Tanzania',
  'Visa fees, where applicable',
  'Travel insurance',
  'Personal expenses and souvenirs',
  'Tips for guides and hotel staff',
  'Optional activities not specified in the package',
  'Alcoholic drinks and additional beverages',
  'Hot-air balloon safari',
  'Additional hotel nights or activities not listed',
  'The final inclusions depend on the accommodation category and selected package',
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
