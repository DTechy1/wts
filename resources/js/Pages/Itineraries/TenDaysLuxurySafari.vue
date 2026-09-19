<template>
  <MainLayout>
    <Breadcrumb :breadcrumbs="[
      { name: 'Itineraries', href: '/itineraries' },
      { name: '10 Days Luxury Safari Experience' }
    ]" />

    <!-- Hero -->
    <section class="relative h-[70vh] min-h-[520px] overflow-hidden">
      <img :src="getImageUrl('images/serengeti/pexels-alex-ning-523843601-33650533.jpg')"
           alt="10 Days Luxury Safari" class="w-full h-full object-cover ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-b from-safari-brown/50 via-safari-brown/60 to-safari-brown/95"></div>
      <div class="absolute inset-0 flex items-end pb-16 px-4 md:px-8 lg:px-12">
        <div class="container mx-auto max-w-7xl">
          <div class="inline-flex items-center gap-2 bg-safari-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
            </svg>
            Luxury Safari Experience
          </div>
          <h1 class="text-5xl md:text-7xl font-heading font-bold text-white mb-4 leading-tight">10 Days Luxury Safari</h1>
          <p class="text-xl md:text-2xl text-white/90 max-w-2xl mb-8">Ultimate Tanzania · Serengeti · Ngorongoro · Tarangire</p>
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
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-safari-brown">The Complete Tanzania Route</h2>
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
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown mb-4">Luxury Safari Experience</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Experience the best of Tanzania's wildlife through stunning imagery from Serengeti, Tarangire, and Ngorongoro</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(image, index) in galleryImages" :key="index" 
               class="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
               :class="index === 0 || index === 3 ? 'md:row-span-2' : ''">
            <img :src="getImageUrl(image.src)" :alt="image.alt" 
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 :class="index === 0 || index === 3 ? 'min-h-[400px] md:min-h-[500px]' : 'h-64 md:h-80'" />
            
            <!-- Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
              <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 class="text-white font-bold text-xl mb-2">{{ image.alt }}</h3>
                <div class="flex items-center gap-2 text-white/80 text-sm">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                  <span>View Full Size</span>
                </div>
              </div>
            </div>
            
            <!-- Floating badge -->
            <div class="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
              </svg>
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
          <!-- Timeline line -->
          <div class="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-safari-orange via-safari-brown/30 to-safari-orange -translate-x-1/2"></div>

          <div class="space-y-12 lg:space-y-0">
            <div v-for="(day, index) in itinerary" :key="day.day"
                 class="relative lg:grid lg:grid-cols-2 lg:gap-12 lg:mb-16 lg:items-center">

              <!-- Timeline dot (desktop) -->
              <div class="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10 w-14 h-14 rounded-full bg-safari-orange text-white font-heading font-bold text-lg items-center justify-center shadow-lg ring-4 ring-white">
                {{ day.day }}
              </div>

              <!-- Content card -->
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

    <!-- Accommodations -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-14">
          <div class="inline-block bg-safari-orange/10 text-safari-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Where You'll Stay</div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown">Luxury Accommodations</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="accommodation in accommodations" :key="accommodation.days"
               class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-safari-orange/30">
            <div class="p-6">
              <div class="flex items-start gap-3 mb-3">
                <div class="w-10 h-10 rounded-xl bg-safari-orange/10 flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-safari-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                  </svg>
                </div>
                <div class="flex-1">
                  <span class="inline-block text-xs font-semibold uppercase tracking-wider text-safari-orange mb-1">{{ accommodation.days }}</span>
                  <h3 class="text-lg font-heading font-bold text-safari-brown mb-1">{{ accommodation.lodge }}</h3>
                  <p class="text-sm text-gray-600 flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    {{ accommodation.location }}
                  </p>
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
          <div class="inline-block bg-safari-orange/20 text-safari-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-4">All-Inclusive Luxury Package</div>
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
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-safari-brown mb-4">Ready for Your 10-Day Luxury Safari?</h2>
          <p class="text-gray-600 text-lg mb-8 max-w-xl mx-auto">Experience the ultimate Tanzania adventure with luxury accommodations and exclusive wildlife encounters</p>
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

const heroBadges = ['10 Days / 9 Nights', 'Luxury Lodges', 'Four Seasons Serengeti'];

const quickStats = [
  { value: '10', label: 'Days' },
  { value: '5', label: 'National Parks' },
  { value: 'Luxury', label: 'Accommodations' },
  { value: 'Private', label: '4x4 Vehicle' },
];

const routeStops = ['Arusha', 'Waterfall', 'Lake Manyara', 'Lake Eyasi', 'Serengeti', 'Ngorongoro', 'Tarangire', 'Departure'];

const galleryImages = [
  { src: 'images/serengeti/pexels-bgbennett-20095156.jpg', alt: 'Serengeti Plains' },
  { src: 'images/tarangire/pexels-dirk-pothen-2149332904-32509132.jpg', alt: 'Elephant Herd' },
  { src: 'images/ngorongoro/pexels-1093389518-30980273.jpg', alt: 'Crater Rim View' },
  { src: 'images/serengeti/pexels-alex-ning-523843601-33650533.jpg', alt: 'Wildlife Safari' },
];

const itinerary = [
  {
    day: 1,
    title: 'JRO to Arusha',
    location: 'Arusha',
    description: 'Upon your arrival at Kilimanjaro airport, your guide will pick you up and transfer you to your hotel in Arusha. Where you can relax and enjoy the African atmosphere – Tomorrow morning your safari will begin!',
    image: null,
  },
  {
    day: 2,
    title: 'Waterfalls & City Tour',
    location: 'Materuni',
    description: 'After breakfast, you will drive towards the waterfalls area where you will spent half day there enjoying the awesome vegetation and the amazing waterfalls which is 80+ meters higher. Then you will be back for hot lunch the in the Evening out for city tour.',
    image: 'images/2026-01-07 (5).webp',
  },
  {
    day: 3,
    title: 'Lake Manyara National Park',
    location: 'Lake Manyara',
    description: 'After breakfast, the tour departs to Lake Manyara. Lake Manyara National Park offers breathtaking views and a large variety of habitats. Acacia woodlands, water forests, baobab-strewn cliffs, algae-streaked hot springs, swamps and the lake itself. And thanks to this the small Park is able to support a large number of animal species and incredible bird life. Manyara has the largest concentration of baboons anywhere in the world and the lions here are also renowned for their tree climbing.',
    image: 'images/lake-duluti/Lake-Duluti-1-scaled.jpg',
  },
  {
    day: 4,
    title: 'Hadzabe',
    location: 'Lake Eyasi',
    description: 'After your breakfast, you will depart to Lake Eyasi where you will experience the different local tribe of Hadzabe and bushmen on their area. Here you will see how blacksmiths are on their daily duties. But on the following day you will do the hunting with a bushman.',
    image: null,
  },
  {
    day: 5,
    title: 'Serengeti National Park',
    location: 'Central Serengeti',
    description: 'After breakfast, depart for Serengeti National Park, via the beautiful high lying farmland of Karatu and the Ngorongoro Conservation Area. Leaving the highlands behind, we descend into the heart of wild Africa – the Serengeti National Park – with its endless plains, rolling into the distance as far as the eye can see. Then head to the central park area, known as the Seronera area, one of the richest wildlife habitats in the park, featuring the Seronera River, which provides a valuable water source to this area and therefore attracts wildlife well representative of most of the Serengeti\'s species. Arrive in time for lunch and enjoy an afternoon game drive in the Serengeti national park.',
    image: 'images/serengeti/pexels-sk-movies-photos-5306496-18609145.jpg',
  },
  {
    day: 6,
    title: 'Serengeti National Park',
    location: 'Serengeti Plains',
    description: 'Full-day Serengeti National Park game drive including following the wildebeest migrating to the west side of the Endless plain of Serengeti, where all balancing of nature takes place. Where all predators and prey are all to be seen easily.',
    image: 'images/serengeti/pexels-vik-joshi-63702791-8150758.jpg',
  },
  {
    day: 7,
    title: 'Serengeti National Park',
    location: 'Serengeti Plains',
    description: 'Full-day Serengeti National Park game drive including following the wildebeest migrating to the west side of the Endless plain of Serengeti, where all balancing of nature takes place. Where all predators and prey are all to be seen easily.',
    image: 'images/serengeti/pexels-alex-ning-523843601-33650533.jpg',
  },
  {
    day: 8,
    title: 'Ngorongoro Conservation Area',
    location: 'Ngorongoro Crater',
    description: 'After an early breakfast, You will descend over 600 meters into the crater to view wildlife. Supported by a year-round water supply and fodder, the Ngorongoro conservation Area supports a vast variety of animals, which include herds of wildebeest, zebra, buffalo, eland, warthog, hippo, and giant African elephants. Another big draw card to this picturesque national park, is it\'s dense population of predators, which include lions, hyenas, jackals, cheetahs and the ever-elusive leopard, which sometimes requires a trained eye to spot. We will visit Lake Magadi, a large but shallow alkaline lake in the southwestern corner, which is one of the main features of the crater. A large number of flamingos, hippos, and other water birds can usually be seen here. Late afternoon transfer to Karatu for dinner and overnight.',
    image: 'images/ngorongoro/pexels-alexandra-karnasopoulos-1962842-7205279.jpg',
  },
  {
    day: 9,
    title: 'Tarangire National Park',
    location: 'Tarangire',
    description: 'Early breakfast and a 1-hour transfer to Tarangire National Park. This park is often referred to as the "home of elephants", you have a great chance to spot elephants in large groups gathering around the Tarangire River. Other animals to be spotted include leopards, lions, giraffes and even tree-climbing pythons! Game drive until late afternoon then drives to the lodge.',
    image: 'images/tarangire/pexels-bgbennett-19986844.jpg',
  },
  {
    day: 10,
    title: 'Back to Arusha – Airport',
    location: 'Departure',
    description: 'After breakfast or Lunch. You drive to Arusha in the Hotel or at the Airport and this will be at the request of the clients where to stay on the last day.',
    image: null,
  },
];

const accommodations = [
  { days: 'Day 1-2', lodge: 'Arusha Legendary Lodge', location: 'Arusha' },
  { days: 'Day 3', lodge: 'Ngorongoro Neptune Lodge', location: 'Ngorongoro Highlands' },
  { days: 'Day 4', lodge: 'Ziwani Lodge', location: 'Lake Eyasi' },
  { days: 'Day 5-7', lodge: 'Four Season Serengeti', location: 'Central Serengeti' },
  { days: 'Day 8', lodge: 'Ngorongoro Neptune Lodge', location: 'Karatu' },
  { days: 'Day 9', lodge: 'Tarangire Kuro Camp', location: 'Tarangire' },
];

const priceIncludes = [
  { label: 'All park entrance fee', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { label: 'Accomodation lodges', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { label: 'Private Safari Jeep 4x4', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
  { label: 'Professional guide', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  { label: 'Governments VATS', icon: 'M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z' },
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
