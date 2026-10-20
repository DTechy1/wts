<template>
  <MainLayout>
    <Breadcrumb :breadcrumbs="[
      { name: 'Itineraries', href: '/itineraries' },
      { name: '15-Day Tanzania Safari Adventure' }
    ]" />

    <!-- Hero -->
    <section class="relative h-[70vh] min-h-[520px] overflow-hidden">
      <img :src="getImageUrl('images/serengeti/pexels-bgbennett-20095156.jpg')"
           alt="15-Day Tanzania Safari Adventure" class="w-full h-full object-cover ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-b from-safari-brown/50 via-safari-brown/60 to-safari-brown/95"></div>
      <div class="absolute inset-0 flex items-end pb-16 px-4 md:px-8 lg:px-12">
        <div class="container mx-auto max-w-7xl">
          <div class="inline-flex items-center gap-2 bg-safari-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Wildlife, Culture, Nature & Unforgettable Experiences
          </div>
          <h1 class="text-4xl md:text-7xl font-heading font-bold text-white mb-4 leading-tight">15-Day Tanzania Safari Adventure</h1>
          <p class="text-xl md:text-2xl text-white/90 max-w-2xl mb-8">Tarangire · Lake Manyara · Serengeti · Ngorongoro · Maasai · Materuni · Chemka</p>
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

    <!-- Overview & Route -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-10">
          <div class="inline-block bg-safari-orange/10 text-safari-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Overview</div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-safari-brown mb-6">Northern Tanzania Safari Circuit</h2>
        </div>
        <div class="max-w-4xl mx-auto space-y-4 text-gray-600 leading-relaxed">
          <p>Discover the extraordinary beauty of Tanzania on this unforgettable 15-day safari adventure. Explore world-famous national parks, encounter Africa's magnificent wildlife, experience authentic Maasai culture, and discover breathtaking landscapes.</p>
          <p>From the elephant-filled plains of Tarangire National Park to the endless savannahs of Serengeti National Park, the spectacular Ngorongoro Crater, and the beautiful shores of Lake Manyara, this journey offers an incredible variety of wildlife and natural wonders.</p>
          <p>Your adventure also includes a visit to a traditional Maasai village, a relaxing experience at Chemka Hot Springs, and a memorable excursion to Materuni Waterfall.</p>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-2 md:gap-0 mt-12">
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
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown mb-4">Wildlife, Culture & Nature</h2>
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
              <div :class="[index % 2 === 0 ? 'lg:col-start-1 lg:pr-16' : 'lg:col-start-2 lg:pl-16']">
                <div class="group bg-safari-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-safari-orange/30">
                  <div v-if="day.image" class="relative h-48 overflow-hidden">
                    <img :src="getImageUrl(day.image)" :alt="day.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div class="absolute inset-0 bg-gradient-to-t from-safari-brown/60 to-transparent"></div>
                    <div class="absolute bottom-4 left-4 lg:hidden">
                      <span class="bg-safari-orange text-white text-xs font-bold px-3 py-1 rounded-full">Day {{ day.day }}</span>
                    </div>
                  </div>
                  <div class="p-6 md:p-8">
                    <div class="flex items-start gap-3 mb-3">
                      <span v-if="!day.image" class="lg:hidden w-10 h-10 rounded-xl bg-safari-orange text-white font-heading font-bold flex items-center justify-center flex-shrink-0">{{ day.day }}</span>
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
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-white">What Is Included?</h2>
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
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown">What Is Excluded?</h2>
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
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-safari-brown mb-4">Book Your 15-Day Tanzania Safari</h2>
          <p class="text-gray-600 text-lg mb-8 max-w-xl mx-auto">Make your African dream a reality with Tanzania Safari Zanzibar.</p>
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

const heroBadges = ['15 Days / 14 Nights', 'Private Safari', 'Wildlife & Culture'];

const quickStats = [
  { value: '15', label: 'Days' },
  { value: '4', label: 'National Parks' },
  { value: 'Big 5', label: 'Wildlife' },
  { value: 'Private', label: '4x4 Vehicle' },
];

const routeStops = ['Arusha', 'Tarangire', 'Lake Manyara', 'Serengeti', 'Ngorongoro', 'Maasai', 'Materuni', 'Chemka', 'Departure'];

const galleryImages = [
  { src: 'images/15 days safari adventure/elephants-sunset-savannah.jpeg', alt: 'Tarangire Sunset Elephants' },
  { src: 'images/15 days safari adventure/safari-tourist-elephant.jpeg', alt: 'Safari Game Drive Experience' },
  { src: 'images/15 days safari adventure/giraffe-zebras-waterhole.jpeg', alt: 'Giraffe & Zebras at Waterhole' },
  { src: 'images/ngorongoro/pexels-alexandra-karnasopoulos-1962842-7205279.jpg', alt: 'Ngorongoro Crater' },
];

const itinerary = [
  {
    day: 1, title: 'Arrival at Kilimanjaro International Airport – Transfer to Arusha', location: 'Arusha',
    description: 'Upon arrival at Kilimanjaro International Airport, you will be welcomed by your safari representative and transferred to your hotel in Arusha. Depending on your arrival time, you can relax at your accommodation or enjoy an optional Arusha city tour. Your guide will provide a safari briefing and explain the exciting adventure ahead. Accommodation: Arusha hotel or lodge. Meals: Dinner, depending on arrival time.',
    image: 'images/Arusha/arusha-airport.jpeg',
  },
  {
    day: 2, title: 'Arusha to Tarangire National Park – Full-Day Game Drive', location: 'Tarangire National Park',
    description: 'After breakfast, depart for Tarangire National Park, famous for its large elephant herds, ancient baobab trees, and beautiful African landscapes. Enjoy a game drive through the park in search of elephants, lions, giraffes, zebras, wildebeest, buffaloes, and many species of birds. Tarangire is particularly spectacular during the dry season, when wildlife gathers around the Tarangire River. Enjoy a picnic lunch inside the park before continuing your afternoon game drive. In the late afternoon, transfer to your lodge or campsite for dinner and relaxation. Accommodation: Karatu or Tarangire area. Meals: Breakfast, lunch, and dinner.',
    image: 'images/15 days safari adventure/elephants-sunset-savannah.jpeg',
  },
  {
    day: 3, title: 'Tarangire to Lake Manyara National Park', location: 'Lake Manyara National Park',
    description: 'After breakfast, depart for Lake Manyara National Park, a beautiful wildlife destination known for its groundwater forest, open plains, and alkaline lake. Enjoy a game drive in search of elephants, giraffes, zebras, baboons, hippos, and a wide variety of birdlife. Lake Manyara is also known for its tree-climbing lions, although sightings are not guaranteed. Depending on availability and your selected package, you may enjoy an optional treetop walkway experience in the Lake Manyara area. After the safari, continue to your accommodation in Karatu. Accommodation: Karatu lodge or campsite. Meals: Breakfast, lunch, and dinner.',
    image: 'images/15 days safari adventure/safari-tourist-elephant.jpeg',
  },
  {
    day: 4, title: 'Lake Manyara Area to Serengeti National Park', location: 'Serengeti National Park',
    description: 'After breakfast, depart for the legendary Serengeti National Park, travelling through the spectacular landscapes of the Ngorongoro Conservation Area. Enjoy wildlife viewing along the way as you enter the Serengeti ecosystem. The Serengeti is world-famous for its enormous open plains, abundant predators, and the Great Wildebeest Migration. During your afternoon game drive, look out for lions, elephants, giraffes, zebras, cheetahs, and other wildlife. Arrive at your camp or lodge in time to relax and enjoy dinner beneath the African sky. Accommodation: Serengeti camp or lodge. Meals: Breakfast, lunch, and dinner.',
    image: 'images/serengeti/pexels-bgbennett-20095156.jpg',
  },
  {
    day: 5, title: 'Full-Day Game Drive in Serengeti National Park', location: 'Serengeti Plains',
    description: 'Spend a full day exploring the extraordinary Serengeti ecosystem. With your professional safari guide, explore different areas of the park in search of its famous wildlife. Watch for lions resting on rocky outcrops, cheetahs scanning the plains, leopards resting in trees, and herds of zebras and wildebeest moving across the grasslands. Enjoy a picnic lunch during your game drive, allowing more time to discover the park. Depending on the season, your guide may take you to areas where the Great Wildebeest Migration is occurring. Accommodation: Serengeti camp or lodge. Meals: Breakfast, lunch, and dinner.',
    image: 'images/serengeti/pexels-alex-ning-523843601-33650533.jpg',
  },
  {
    day: 6, title: 'Serengeti National Park – Morning and Afternoon Game Drives', location: 'Serengeti Plains',
    description: 'Enjoy another unforgettable day in Serengeti National Park. Start early with a morning game drive when many animals are active and the light is ideal for photography. Return to your accommodation for breakfast or continue with a full-day game drive and picnic lunch, depending on your preferred schedule. In the afternoon, explore additional wildlife areas and look for predators, grazing herds, and fascinating bird species. Every game drive offers a different opportunity to observe wildlife in its natural environment. Accommodation: Serengeti camp or lodge. Meals: Breakfast, lunch, and dinner.',
    image: 'images/serengeti/pexels-vik-joshi-63702791-8150758.jpg',
  },
  {
    day: 7, title: 'Serengeti National Park – Northern or Central Serengeti Exploration', location: 'Central or Northern Serengeti',
    description: 'After breakfast, continue your Serengeti adventure with a game drive through the central or northern regions, depending on the season and wildlife movements. Central Serengeti is known for its resident predators and the Seronera River area. The northern Serengeti is particularly popular during parts of the Great Wildebeest Migration, when herds may gather near the Mara River. River crossings are natural events and cannot be guaranteed. Enjoy wildlife viewing along the route and arrive at your selected accommodation for dinner and an overnight stay. Accommodation: Serengeti camp or lodge. Meals: Breakfast, lunch, and dinner.',
    image: 'images/15 days safari adventure/giraffe-zebras-waterhole.jpeg',
  },
  {
    day: 8, title: 'Serengeti National Park – Ngorongoro Conservation Area', location: 'Ngorongoro Conservation Area',
    description: 'Enjoy an early morning game drive in the Serengeti before travelling towards the Ngorongoro Conservation Area. Continue observing wildlife as you leave the plains of the Serengeti and travel through the beautiful highlands. Depending on your route, you may enjoy additional wildlife viewing along the way. Arrive at your lodge or camp near the Ngorongoro Crater rim or in the Karatu area. Relax and prepare for the following day\'s crater safari. Accommodation: Ngorongoro area or Karatu. Meals: Breakfast, lunch, and dinner.',
    image: 'images/ngorongoro/pexels-1093389518-30980273.jpg',
  },
  {
    day: 9, title: 'Ngorongoro Crater – Full-Day Safari', location: 'Ngorongoro Crater',
    description: 'After an early breakfast, descend into the spectacular Ngorongoro Crater for an unforgettable game drive. This remarkable volcanic caldera supports a rich variety of wildlife within its grasslands, forests, lakes, and wetlands. Search for lions, elephants, buffaloes, zebras, wildebeest, hippos, and other fascinating species. Ngorongoro is also one of the best places in Tanzania to look for the endangered black rhinoceros, although sightings are not guaranteed. Enjoy a picnic lunch at a designated site before continuing your exploration. In the afternoon, ascend from the crater and return to your accommodation. Accommodation: Karatu lodge or campsite. Meals: Breakfast, lunch, and dinner.',
    image: 'images/ngorongoro/pexels-lan-yao-324969-20847561.jpg',
  },
  {
    day: 10, title: 'Maasai Cultural Experience – Karatu and Ngorongoro Highlands', location: 'Maasai Community',
    description: 'After breakfast, enjoy a cultural experience with a local Maasai community. Learn about traditional Maasai lifestyles, cattle keeping, clothing, customs, and the importance of livestock in Maasai society. Depending on the experience arranged, you may visit a traditional homestead, learn about local crafts, and interact with community members. This experience offers an opportunity to understand Tanzania\'s cultural heritage while supporting locally organised tourism. Later, enjoy the beautiful scenery of the Ngorongoro Highlands and return to your accommodation. Accommodation: Karatu lodge or campsite. Meals: Breakfast, lunch, and dinner.',
    image: 'images/walters-tours-safaris-maasai-village-cultural.png',
  },
  {
    day: 11, title: 'Karatu to Arusha – Relaxation and City Experience', location: 'Arusha',
    description: 'After breakfast, travel back to Arusha. On arrival, enjoy a relaxed afternoon or take an optional guided city tour. Discover local markets, cultural attractions, and opportunities to purchase Tanzanian souvenirs. You may also visit a local coffee shop or explore selected cultural sites, depending on your interests and schedule. Accommodation: Arusha hotel or lodge. Meals: Breakfast and lunch; dinner depending on your package.',
  },
  {
    day: 12, title: 'Materuni Waterfall and Coffee Experience', location: 'Materuni Village',
    description: 'After breakfast, travel towards Materuni Village, located on the slopes of Mount Kilimanjaro. Enjoy a guided walk through the village and surrounding countryside to Materuni Waterfall. Admire the lush vegetation, mountain scenery, and beautiful waterfall. Depending on conditions, you may have time to relax and take photographs. You can also participate in a traditional Chagga coffee experience, learning about local coffee preparation from bean to cup. After the excursion, return to Arusha or Moshi for an overnight stay. Accommodation: Arusha or Moshi hotel. Meals: Breakfast and lunch.',
    image: 'images/walters-tours-safaris-materuni-waterfall.png',
  },
  {
    day: 13, title: 'Chemka Hot Springs – Relaxation and Nature', location: 'Chemka Hot Springs',
    description: 'Today, enjoy an excursion to Chemka Hot Springs, also known as Kikuletwa Hot Springs. Travel through the beautiful countryside towards this natural oasis, known for its clear water and surrounding vegetation. Spend time relaxing beside the water, swimming if conditions permit, and enjoying the peaceful atmosphere. This is an excellent opportunity to unwind after several days of safari and take memorable photographs. In the afternoon, return to Arusha or Moshi. Accommodation: Arusha or Moshi hotel. Meals: Breakfast and lunch.',
    image: 'images/walters-tours-safaris-chemka-hotsprings.png',
  },
  {
    day: 14, title: 'Arusha – Cultural Activities and Leisure Day', location: 'Arusha',
    description: 'Enjoy a relaxed day in Arusha after your wildlife and cultural adventures. Choose from optional activities such as: An Arusha city tour. A visit to a local market. A Tanzanian cooking experience. A local coffee tour. A cultural heritage experience. Shopping for souvenirs and handmade crafts. Alternatively, spend the day relaxing at your hotel. Your guide can help arrange optional activities according to your interests, budget, and available time. Accommodation: Arusha hotel or lodge. Meals: Breakfast.',
  },
  {
    day: 15, title: 'Departure from Tanzania', location: 'Departure',
    description: 'Enjoy breakfast at your hotel before checking out. At the agreed time, your driver will transfer you to Kilimanjaro International Airport or Arusha Airport for your onward journey. If you are continuing to Zanzibar, a flight connection can be arranged separately according to your travel plans. Your 15-day Tanzania adventure concludes with unforgettable memories of wildlife, landscapes, and cultural experiences. Meals: Breakfast. Airport transfer: Included according to your confirmed package.',
    image: 'images/Arusha/arusha-airport.jpeg',
  },
];

const priceIncludes = [
  { label: 'Airport transfers as specified in the itinerary', icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8' },
  { label: 'Private 4x4 safari vehicle with a pop-up roof', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
  { label: 'Professional English-speaking safari driver-guide', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  { label: 'Park entrance and conservation fees for the included activities', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { label: 'Accommodation for 14 nights', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { label: 'Meals as specified in the itinerary', icon: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7' },
  { label: 'Game drives in the listed national parks', icon: 'M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5' },
  { label: 'Drinking water during safari activities', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
  { label: 'Arranged cultural visits and excursions listed in the confirmed package', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
];

const priceExcludes = [
  'International flights',
  'Visa fees',
  'Travel insurance',
  'Tips for your safari guide and lodge staff',
  'Alcoholic beverages and personal expenses',
  'Optional activities not listed in your confirmed itinerary',
  'Laundry services',
  'Additional accommodation before or after the tour',
  'Any services not specifically listed under inclusions',
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
