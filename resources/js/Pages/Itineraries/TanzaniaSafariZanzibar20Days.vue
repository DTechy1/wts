<template>
  <MainLayout>
    <Breadcrumb :breadcrumbs="[
      { name: 'Itineraries', href: '/itineraries' },
      { name: '20 Days Tanzania Safari & Zanzibar Excursions' }
    ]" />

    <!-- Hero -->
    <section class="relative h-[70vh] min-h-[520px] overflow-hidden">
      <img :src="getImageUrl('images/zanzibar/pexels-rufaro-6707821.jpg')"
           alt="20 Days Tanzania Safari & Zanzibar Excursions" class="w-full h-full object-cover ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-b from-safari-brown/50 via-safari-brown/60 to-safari-brown/95"></div>
      <div class="absolute inset-0 flex items-end pb-16 px-4 md:px-8 lg:px-12">
        <div class="container mx-auto max-w-7xl">
          <div class="inline-flex items-center gap-2 bg-safari-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Wildlife Safari · Cultural Tourism · Adventure · Beach Holiday
          </div>
          <h1 class="text-4xl md:text-6xl font-heading font-bold text-white mb-4 leading-tight">20 Days Tanzania Safari & Zanzibar Excursions</h1>
          <p class="text-xl md:text-2xl text-white/90 max-w-3xl mb-8">Wildlife Safari, Cultural Experiences, Waterfalls & Tropical Beach Holidays</p>
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

    <!-- Tour Overview -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-10">
          <div class="inline-block bg-safari-orange/10 text-safari-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Tour Overview</div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-safari-brown mb-6">The Grand Tanzania & Zanzibar Experience</h2>
        </div>
        <div class="max-w-4xl mx-auto space-y-4 text-gray-600 leading-relaxed text-lg">
          <p>Experience the very best of Tanzania on this unforgettable 20-day adventure combining spectacular wildlife safaris in Northern Tanzania with authentic cultural encounters and relaxing excursions in Zanzibar.</p>
          <p>Explore the famous Serengeti National Park, discover the elephant-rich landscapes of Tarangire, descend into the breathtaking Ngorongoro Crater, and enjoy the natural beauty of Lake Manyara.</p>
          <p>Connect with local communities through Maasai cultural experiences, discover traditional coffee preparation and beautiful waterfalls in Materuni, and swim in the crystal-clear waters of Chemka Hot Springs.</p>
          <p>Finish your journey in Zanzibar, where pristine beaches, historic Stone Town, traditional dhow boats, tropical islands, and turquoise waters create the perfect ending to your Tanzanian adventure.</p>
        </div>

        <div class="mt-12 text-center">
          <div class="inline-block bg-safari-orange/10 text-safari-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-6">Journey Route</div>
          <div class="flex flex-wrap items-center justify-center gap-2 md:gap-3 max-w-6xl mx-auto">
            <template v-for="(stop, index) in routeStops" :key="stop">
              <div class="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-safari-orange/20 text-xs md:text-sm font-semibold text-safari-brown">
                <span class="w-6 h-6 rounded-full bg-safari-orange text-white text-xs font-bold flex items-center justify-center">{{ index + 1 }}</span>
                <span>{{ stop }}</span>
              </div>
              <svg v-if="index < routeStops.length - 1" class="hidden md:block w-4 h-4 text-safari-orange/40 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </template>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-white">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-16">
          <div class="inline-block bg-safari-orange/10 text-safari-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Gallery</div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown mb-4">Safaris, Waterfalls & Tropical Coast</h2>
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
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-16">
          <div class="inline-block bg-safari-orange/10 text-safari-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Day by Day</div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown">Detailed Day-by-Day Itinerary</h2>
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
                <div class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-safari-orange/30">
                  <div v-if="day.image" class="relative h-56 overflow-hidden">
                    <img :src="getImageUrl(day.image)" :alt="day.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div class="absolute inset-0 bg-gradient-to-t from-safari-brown/60 to-transparent"></div>
                    <div class="absolute bottom-4 left-4 lg:hidden">
                      <span class="bg-safari-orange text-white text-xs font-bold px-3 py-1 rounded-full">Day {{ day.day }}</span>
                    </div>
                  </div>
                  <div class="p-6 md:p-8">
                    <div class="flex items-start gap-3 mb-4">
                      <span v-if="!day.image" class="lg:hidden w-10 h-10 rounded-xl bg-safari-orange text-white font-heading font-bold flex items-center justify-center flex-shrink-0">{{ day.day }}</span>
                      <div>
                        <span class="inline-block text-xs font-semibold uppercase tracking-wider text-safari-orange mb-1">{{ day.location }}</span>
                        <h3 class="text-xl md:text-2xl font-heading font-bold text-safari-brown">{{ day.title }}</h3>
                      </div>
                    </div>
                    <div class="text-gray-600 leading-relaxed whitespace-pre-line text-sm md:text-base">{{ day.description }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Accommodation Options -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-white">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-14">
          <div class="inline-block bg-safari-orange/10 text-safari-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Accommodation Options</div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown mb-4">Tailored to Your Travel Style</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">We can customise this itinerary to suit different budgets and travel styles.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-safari-white rounded-3xl p-8 border border-gray-100 shadow-md flex flex-col justify-between">
            <div>
              <div class="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-bold uppercase mb-4">Budget Package</div>
              <h3 class="text-2xl font-heading font-bold text-safari-brown mb-4">Comfortable & Authentic</h3>
              <ul class="space-y-3 text-gray-600 text-sm">
                <li class="flex items-start gap-2"><span class="text-safari-orange">•</span> Comfortable budget hotels.</li>
                <li class="flex items-start gap-2"><span class="text-safari-orange">•</span> Selected safari campsites or budget lodges.</li>
                <li class="flex items-start gap-2"><span class="text-safari-orange">•</span> Practical accommodation options with essential facilities.</li>
              </ul>
            </div>
          </div>
          <div class="bg-safari-white rounded-3xl p-8 border-2 border-safari-orange shadow-xl relative flex flex-col justify-between">
            <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-safari-orange text-white text-xs font-bold uppercase px-4 py-1 rounded-full">Most Popular</div>
            <div>
              <div class="inline-block bg-safari-orange/20 text-safari-orange px-3 py-1 rounded-full text-xs font-bold uppercase mb-4">Mid-Range Package</div>
              <h3 class="text-2xl font-heading font-bold text-safari-brown mb-4">Elevated Comfort & Value</h3>
              <ul class="space-y-3 text-gray-600 text-sm">
                <li class="flex items-start gap-2"><span class="text-safari-orange">•</span> Comfortable safari lodges and tented camps.</li>
                <li class="flex items-start gap-2"><span class="text-safari-orange">•</span> Well-appointed Zanzibar beach hotels.</li>
                <li class="flex items-start gap-2"><span class="text-safari-orange">•</span> Private safari vehicle and personalised service.</li>
              </ul>
            </div>
          </div>
          <div class="bg-safari-white rounded-3xl p-8 border border-gray-100 shadow-md flex flex-col justify-between">
            <div>
              <div class="inline-block bg-safari-brown text-white px-3 py-1 rounded-full text-xs font-bold uppercase mb-4">Luxury Package</div>
              <h3 class="text-2xl font-heading font-bold text-safari-brown mb-4">Exclusive Elegance</h3>
              <ul class="space-y-3 text-gray-600 text-sm">
                <li class="flex items-start gap-2"><span class="text-safari-orange">•</span> Premium safari lodges and luxury tented camps.</li>
                <li class="flex items-start gap-2"><span class="text-safari-orange">•</span> Upscale Zanzibar beachfront resorts.</li>
                <li class="flex items-start gap-2"><span class="text-safari-orange">•</span> Enhanced private experiences and selected premium activities.</li>
              </ul>
            </div>
          </div>
        </div>
        <p class="text-center text-xs text-gray-500 mt-6">Accommodation depends on availability, travel dates, group size, and the final quotation.</p>
      </div>
    </section>

    <!-- Price Includes -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-brown">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-14">
          <div class="inline-block bg-safari-orange/20 text-safari-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Package Inclusions</div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-white">What Is Included?</h2>
          <p class="text-white/80 max-w-2xl mx-auto mt-2 text-sm">Depending on the final package selected, the tour can include:</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <div v-for="item in priceIncludes" :key="item.label"
               class="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-safari-orange/40 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-safari-orange/20 flex items-center justify-center mb-4 group-hover:bg-safari-orange/30 transition-colors">
              <svg class="w-6 h-6 text-safari-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon"/>
              </svg>
            </div>
            <p class="text-white font-semibold leading-snug text-sm">{{ item.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Price Excludes -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-14">
          <div class="inline-block bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Package Exclusions</div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown mb-2">What Is Excluded?</h2>
          <p class="text-gray-500 text-sm max-w-xl mx-auto">Unless specifically included in your confirmed quotation, the following are excluded:</p>
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

    <!-- Why Book With Us -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-white">
      <div class="container mx-auto max-w-5xl">
        <div class="text-center mb-12">
          <div class="inline-block bg-safari-orange/10 text-safari-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-3">Why Us</div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-safari-brown">Why Book With Tanzania Safari Zanzibar?</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div v-for="reason in whyBookWithUs" :key="reason" class="flex items-start gap-3 p-5 rounded-2xl bg-safari-white border border-gray-100 shadow-sm">
            <div class="w-8 h-8 rounded-full bg-safari-orange/20 text-safari-orange flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <p class="text-sm font-medium text-gray-700">{{ reason }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-safari-orange to-safari-orange/80">
      <div class="container mx-auto max-w-4xl">
        <div class="bg-white rounded-3xl shadow-2xl p-10 md:p-14 text-center">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-safari-brown mb-4">Book Your 20-Day Tanzania Adventure</h2>
          <p class="text-gray-600 text-lg mb-4 max-w-2xl mx-auto">Make your dream African holiday a reality with Tanzania Safari Zanzibar. From the endless plains of the Serengeti to the white-sand beaches of Zanzibar, this journey offers an unforgettable combination of wildlife, culture, nature, and relaxation.</p>
          <p class="text-gray-500 text-sm mb-8">Prices are provided on request and depend on travel dates, number of travellers, accommodation category, flight availability, and selected activities.</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a :href="$basePath + '/contact'"
               class="bg-safari-orange text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-safari-orange/90 transition transform hover:scale-105 shadow-lg">
              Request Quotation & Reserve
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

const heroBadges = ['20 Days / 19 Nights', 'Wildlife Safari & Zanzibar Beach', 'Private Tour & Excursions'];

const quickStats = [
  { value: '20', label: 'Days' },
  { value: '8', label: 'Destinations' },
  { value: 'Big 5', label: 'Wildlife' },
  { value: 'Private', label: '4x4 Vehicle' },
];

const routeStops = [
  'Arusha',
  'Tarangire',
  'Serengeti',
  'Ngorongoro',
  'Lake Manyara',
  'Maasai Village',
  'Materuni Waterfalls',
  'Chemka Hot Springs',
  'Stone Town',
  'Prison Island & Nakupenda',
  'Mnemba Island',
  'Jozani Forest',
  'Paje Beach',
  'Blue Lagoon & Michamvi',
  'Spice Farm',
  'Departure'
];

const galleryImages = [
  { src: 'images/zanzibar/pexels-rufaro-6707821.jpg', alt: 'Zanzibar Turquoise Waters' },
  { src: 'images/serengeti/pexels-bgbennett-20095156.jpg', alt: 'Serengeti Lions & Wildlife' },
  { src: 'images/hotprings/Rundugai_Hotsprings_Kilimanjaro.jpg', alt: 'Chemka Hot Springs' },
  { src: 'images/walters-tours-safaris-materuni-waterfall.png', alt: 'Materuni Waterfalls' },
];

const itinerary = [
  {
    "day": 1,
    "title": "ARRIVAL IN ARUSHA – TANZANIA",
    "location": "Arusha",
    "description": "Upon arrival at Kilimanjaro International Airport, your professional driver will welcome you and transfer you to your hotel in Arusha.\n\nDepending on your arrival time, relax at your hotel or enjoy a short exploration of the city.\n\nActivities:\n\n- Airport pickup and private transfer.\n\n- Hotel check-in and relaxation.\n\n- Optional Arusha city exploration.\n\n- Safari briefing with your guide.\n\nAccommodation: Hotel in Arusha.\n\nMeals: Dinner, depending on arrival time and package.",
    "image": "images/Arusha/arusha-airport.jpeg"
  },
  {
    "day": 2,
    "title": "ARUSHA CITY TOUR & LOCAL CULTURAL EXPERIENCE",
    "location": "Arusha City",
    "description": "Discover the vibrant city of Arusha, known as the gateway to Tanzania's famous national parks.\n\nExplore local markets, experience everyday Tanzanian life, and learn about the city's history and cultural diversity.\n\nActivities:\n\n- Guided Arusha city tour.\n\n- Visit local markets and craft shops.\n\n- Discover Tanzanian food and traditions.\n\n- Optional visit to a cultural heritage centre.\n\nAccommodation: Hotel in Arusha.\n\nMeals: Breakfast and dinner.",
    "image": "images/9 days safari cultural/pexels-droneafrica-15373903.jpg"
  },
  {
    "day": 3,
    "title": "ARUSHA TO TARANGIRE NATIONAL PARK",
    "location": "Tarangire National Park",
    "description": "After breakfast, depart for Tarangire National Park, famous for its large elephant herds, ancient baobab trees, and diverse wildlife.\n\nEnjoy a game drive through the park in search of elephants, giraffes, zebras, wildebeest, lions, and other wildlife.\n\nHighlights:\n\n- Full-day wildlife viewing.\n\n- Elephant herds and giant baobab trees.\n\n- Picnic lunch in the park.\n\n- Excellent wildlife photography opportunities.\n\nAccommodation: Lodge or tented camp near Tarangire.\n\nMeals: Breakfast, lunch, and dinner.",
    "image": "images/tarangire/pexels-bgbennett-19986844.jpg"
  },
  {
    "day": 4,
    "title": "TARANGIRE TO SERENGETI NATIONAL PARK",
    "location": "Serengeti National Park",
    "description": "After breakfast, travel towards the legendary Serengeti National Park, enjoying scenic landscapes along the way.\n\nArrive in the Serengeti and begin your wildlife adventure across its endless plains.\n\nDepending on the route and road conditions, enjoy a game drive en route to your accommodation.\n\nHighlights:\n\n- Scenic journey through northern Tanzania.\n\n- Wildlife viewing along the way.\n\n- First exploration of the Serengeti plains.\n\n- Sunset over the African savannah.\n\nAccommodation: Lodge or tented camp in the Serengeti.\n\nMeals: Breakfast, lunch, and dinner.",
    "image": "images/serengeti/pexels-bgbennett-20095156.jpg"
  },
  {
    "day": 5,
    "title": "FULL-DAY SERENGETI GAME DRIVE",
    "location": "Central Serengeti",
    "description": "Spend a full day exploring Serengeti National Park, one of Africa's most celebrated wildlife destinations.\n\nYour guide will help you search for lions, leopards, cheetahs, elephants, buffaloes, giraffes, zebras, and many other animals.\n\nDepending on the season, you may also witness part of the spectacular Great Migration.\n\nHighlights:\n\n- Morning and afternoon game drives.\n\n- Big Five wildlife viewing opportunities.\n\n- Scenic landscapes and open grasslands.\n\n- Picnic lunch during the safari.\n\nAccommodation: Lodge or tented camp in the Serengeti.\n\nMeals: Breakfast, lunch, and dinner.",
    "image": "images/serengeti/pexels-alex-ning-523843601-33650533.jpg"
  },
  {
    "day": 6,
    "title": "SERENGETI SUNRISE & GAME DRIVE",
    "location": "Serengeti Plains",
    "description": "Begin the day with an early morning game drive when wildlife is often active.\n\nContinue exploring different areas of the Serengeti, following your guide's advice on recent wildlife sightings.\n\nReturn to camp for relaxation or enjoy an afternoon game drive.\n\nOptional experience: Hot-air balloon safari, subject to availability and additional cost.\n\nHighlights:\n\n- Early-morning wildlife viewing.\n\n- Photography opportunities.\n\n- Predator and plains-game sightings.\n\n- Beautiful African sunset.\n\nAccommodation: Lodge or tented camp in the Serengeti.\n\nMeals: Breakfast, lunch, and dinner.",
    "image": "images/serengeti/pexels-mikeknibbs-17849789.jpg"
  },
  {
    "day": 7,
    "title": "SERENGETI TO NGORONGORO CONSERVATION AREA",
    "location": "Serengeti to Ngorongoro",
    "description": "After breakfast, enjoy a morning game drive before travelling towards the Ngorongoro Conservation Area.\n\nExperience changing landscapes as you leave the Serengeti plains and approach the Ngorongoro highlands.\n\nDepending on the route, enjoy wildlife viewing along the way.\n\nHighlights:\n\n- Morning game drive.\n\n- Scenic savannah and highland landscapes.\n\n- Wildlife photography.\n\n- Overnight near the Ngorongoro Crater.\n\nAccommodation: Lodge or camp near Ngorongoro.\n\nMeals: Breakfast, lunch, and dinner.",
    "image": "images/ngorongoro/pexels-1093389518-30980273.jpg"
  },
  {
    "day": 8,
    "title": "NGORONGORO CRATER SAFARI",
    "location": "Ngorongoro Crater",
    "description": "Descend into the magnificent Ngorongoro Crater for an exciting game drive in one of Africa's most remarkable wildlife habitats.\n\nSearch for lions, elephants, buffaloes, zebras, hippos, and other animals. The crater is also one of the places where visitors have a chance to see the endangered black rhinoceros, although sightings are not guaranteed.\n\nEnjoy a picnic lunch during your crater adventure before returning to your accommodation.\n\nHighlights:\n\n- Game drive on the crater floor.\n\n- Big Five viewing opportunities.\n\n- Scenic crater walls and grasslands.\n\n- Picnic lunch in the designated area.\n\nAccommodation: Lodge or camp near Ngorongoro.\n\nMeals: Breakfast, lunch, and dinner.",
    "image": "images/ngorongoro/pexels-lan-yao-324969-20847561.jpg"
  },
  {
    "day": 9,
    "title": "LAKE MANYARA NATIONAL PARK",
    "location": "Lake Manyara National Park",
    "description": "After breakfast, travel to Lake Manyara National Park for a wildlife safari.\n\nExplore its varied habitats, including groundwater forests, open areas, and lakeshore environments. Look for elephants, baboons, giraffes, zebras, and a wide variety of birds.\n\nLake Manyara is also known for occasional sightings of tree-climbing lions.\n\nHighlights:\n\n- Wildlife game drive.\n\n- Beautiful forest scenery.\n\n- Birdwatching opportunities.\n\n- Rift Valley landscapes.\n\nAccommodation: Lodge or hotel in the Lake Manyara or Karatu area.\n\nMeals: Breakfast, lunch, and dinner.",
    "image": "images/9 days safari cultural/pexels-kureng-workx-2546437-13242022.jpg"
  },
  {
    "day": 10,
    "title": "MAASAI CULTURAL EXPERIENCE",
    "location": "Maasai Community",
    "description": "Today, discover aspects of Maasai culture through a visit arranged with a local Maasai community.\n\nLearn about traditional lifestyles, distinctive clothing, local customs, livestock traditions, and the importance of community in Maasai society.\n\nYour visit will be conducted respectfully, with opportunities to interact with community members and purchase locally made crafts where available.\n\nHighlights:\n\n- Guided Maasai cultural visit.\n\n- Traditional homes and community life, where permitted.\n\n- Cultural storytelling and traditional dances, subject to arrangement.\n\n- Opportunities to support local artisans.\n\nAccommodation: Lodge or hotel in the Karatu or Arusha area, depending on the next day's route.\n\nMeals: Breakfast and dinner, with lunch included according to the selected package.",
    "image": "images/walters-tours-safaris-hadza-tribe-cultural.png"
  },
  {
    "day": 11,
    "title": "MATERUNI WATERFALLS & COFFEE EXPERIENCE",
    "location": "Materuni Village & Waterfall",
    "description": "Travel towards the slopes of Mount Kilimanjaro for a memorable excursion to Materuni Village.\n\nEnjoy a guided walk through lush vegetation to Materuni Waterfalls, where you can admire the impressive natural scenery and take photographs.\n\nContinue with a traditional Chagga coffee experience, learning how locally grown coffee is prepared using traditional methods.\n\nHighlights:\n\n- Guided walk to Materuni Waterfalls.\n\n- Views of Mount Kilimanjaro when weather permits.\n\n- Traditional Chagga coffee-making experience.\n\n- Cultural interaction with local residents.\n\nAccommodation: Lodge or hotel in Moshi.\n\nMeals: Breakfast and lunch, with dinner according to the selected package.\n\nNote: The waterfall hike involves uneven paths and may be slippery. Suitable walking shoes are recommended.",
    "image": "images/walters-tours-safaris-materuni-waterfall.png"
  },
  {
    "day": 12,
    "title": "CHEMKA HOT SPRINGS & TRANSFER TO ZANZIBAR",
    "location": "Chemka Hot Springs & Zanzibar",
    "description": "After breakfast, travel to Kikuletwa, commonly known as Chemka Hot Springs.\n\nEnjoy time swimming in the clear natural pool surrounded by trees and beautiful scenery.\n\nRelax, take photographs, and enjoy a picnic lunch before transferring to Kilimanjaro International Airport for your flight to Zanzibar.\n\nOn arrival in Zanzibar, meet your driver and transfer to your hotel.\n\nHighlights:\n\n- Swimming at Chemka Hot Springs.\n\n- Relaxation and nature photography.\n\n- Flight to Zanzibar.\n\n- Hotel transfer and beach-holiday check-in.\n\nAccommodation: Hotel in Zanzibar.\n\nMeals: Breakfast and lunch.\n\nNote: The flight to Zanzibar should be booked at a suitable time to allow for the excursion and airport transfer.",
    "image": "images/hotprings/Rundugai_Hotsprings_Kilimanjaro.jpg"
  },
  {
    "day": 13,
    "title": "ZANZIBAR STONE TOWN HISTORICAL TOUR",
    "location": "Zanzibar Stone Town",
    "description": "Discover Stone Town, the historic heart of Zanzibar and a UNESCO World Heritage Site.\n\nWalk through its narrow streets with a local guide and learn about the island's Swahili heritage and its connections to African, Arab, Indian, and European cultures.\n\nVisit historic landmarks and explore traditional markets and craft shops.\n\nHighlights:\n\n- Guided Stone Town walking tour.\n\n- Visit historic buildings and landmarks.\n\n- Explore local markets and souvenir shops.\n\n- Discover Zanzibar's cultural heritage.\n\nAccommodation: Hotel in Stone Town or Zanzibar.\n\nMeals: Breakfast.",
    "image": "images/zanzibar/pexels-rufaro-6707821.jpg"
  },
  {
    "day": 14,
    "title": "PRISON ISLAND & NAKUPENDA SANDBANK EXCURSION",
    "location": "Prison Island & Nakupenda",
    "description": "Enjoy a boat excursion from Zanzibar to Prison Island and Nakupenda Sandbank, weather and sea conditions permitting.\n\nOn Prison Island, discover its history and see the famous Aldabra giant tortoises.\n\nContinue to Nakupenda Sandbank, where you can relax on the white sand, swim in the turquoise water, and enjoy a seafood or local-style lunch arranged for your trip.\n\nHighlights:\n\n- Traditional boat excursion.\n\n- Visit to Prison Island.\n\n- Giant tortoise viewing.\n\n- Swimming and relaxation at Nakupenda Sandbank.\n\n- Beach photography and lunch.\n\nAccommodation: Hotel in Zanzibar.\n\nMeals: Breakfast and excursion lunch.",
    "image": "images/2 days zanzibar/danai-tsoutreli-gdaHl7mDrpw-unsplash.jpg"
  },
  {
    "day": 15,
    "title": "MNEMBA ISLAND MARINE EXCURSION",
    "location": "Mnemba Island",
    "description": "Explore Zanzibar's beautiful northern coastline on a marine excursion around the Mnemba Island area.\n\nDepending on weather, sea conditions, and local regulations, enjoy a guided snorkelling experience in suitable nearby marine waters.\n\nDiscover colourful reef fish and coral environments while enjoying the clear waters of the Indian Ocean.\n\nHighlights:\n\n- Boat excursion.\n\n- Snorkelling in designated areas.\n\n- Marine-life viewing.\n\n- Relaxation on the northern coast.\n\nAccommodation: Hotel in Zanzibar.\n\nMeals: Breakfast.\n\nNote: Mnemba Island itself is privately managed, and access to the island or its beaches is not guaranteed. The excursion focuses on permitted nearby marine activities.",
    "image": "images/zanzibar/pexels-saila-holidays-zanzibar-1351717875-25706804.jpg"
  },
  {
    "day": 16,
    "title": "JOZANI FOREST & PAJE BEACH",
    "location": "Jozani Forest & Paje",
    "description": "After breakfast, travel to Jozani Chwaka Bay National Park to explore Zanzibar's remarkable forest ecosystem.\n\nWith a local guide, look for the endemic Zanzibar red colobus monkey and discover the area's rich plant life.\n\nContinue to Paje Beach on the southeast coast, known for its white sand, turquoise water, and kitesurfing culture.\n\nHighlights:\n\n- Guided nature walk in Jozani Forest.\n\n- Opportunity to see Zanzibar red colobus monkeys.\n\n- Explore Paje Beach.\n\n- Relaxation and photography.\n\nAccommodation: Beach hotel in Zanzibar.\n\nMeals: Breakfast.",
    "image": "images/7 days zanzibar/pexels-chechil-orifa-224183752-14401141.jpg"
  },
  {
    "day": 17,
    "title": "BLUE LAGOON & THE ROCK RESTAURANT AREA",
    "location": "Blue Lagoon & Michamvi",
    "description": "Discover the beautiful southeast coast of Zanzibar on an optional marine and coastal excursion.\n\nVisit the Blue Lagoon area near Michamvi for snorkelling when conditions are suitable, then enjoy time exploring the surrounding coastline.\n\nYou can also visit the famous Rock Restaurant area for photographs or arrange a meal at the restaurant, subject to availability and reservation.\n\nHighlights:\n\n- Coastal scenery and photography.\n\n- Optional snorkelling, depending on conditions.\n\n- Visit the Michamvi area.\n\n- Optional dining experience at The Rock Restaurant.\n\nAccommodation: Beach hotel in Zanzibar.\n\nMeals: Breakfast.\n\nNote: Restaurant meals and optional marine activities may require additional payment. Sea conditions and tides affect the day's activities.",
    "image": "images/5 days zanzibar safari/florentine-horn-uUtj4ouh-UE-unsplash.jpg"
  },
  {
    "day": 18,
    "title": "ZANZIBAR SPICE FARM & CULTURAL EXPERIENCE",
    "location": "Zanzibar Spice Farm",
    "description": "Experience Zanzibar's historic spice-growing traditions on a guided spice farm tour.\n\nLearn about cloves, cinnamon, nutmeg, vanilla, pepper, and other tropical plants. Depending on the season, you may see how certain spices and fruits grow and are harvested.\n\nInteract with local guides, sample seasonal tropical fruits, and learn about the role of spices in Zanzibar's history and cuisine.\n\nHighlights:\n\n- Guided spice farm visit.\n\n- Learn about tropical spices and plants.\n\n- Seasonal fruit tasting, where available.\n\n- Discover local traditions and culinary heritage.\n\nAccommodation: Hotel in Zanzibar.\n\nMeals: Breakfast.",
    "image": "images/zanzibar/pexels-dajana-reci-289671698-30125137.jpg"
  },
  {
    "day": 19,
    "title": "FULL DAY AT ZANZIBAR BEACH",
    "location": "Zanzibar Coast",
    "description": "Enjoy a relaxing day on Zanzibar's beautiful coastline.\n\nSpend the day swimming, sunbathing, reading, or enjoying the ocean views from your hotel.\n\nFor travellers seeking more adventure, optional activities can be arranged, including kayaking, stand-up paddleboarding, diving, or a sunset dhow cruise.\n\nHighlights:\n\n- Leisure time on the beach.\n\n- Swimming and relaxation.\n\n- Optional water sports.\n\n- Optional sunset dhow cruise.\n\nAccommodation: Beach hotel in Zanzibar.\n\nMeals: Breakfast.",
    "image": "images/zanzibar/pexels-photobymau-photobymau-2154512590-33629185.jpg"
  },
  {
    "day": 20,
    "title": "DEPARTURE FROM ZANZIBAR",
    "location": "Zanzibar Departure",
    "description": "Enjoy your final breakfast in Zanzibar before checking out of your hotel.\n\nDepending on your flight schedule, you may have time for a short beach walk or last-minute souvenir shopping.\n\nYour driver will transfer you to Abeid Amani Karume International Airport for your onward flight.\n\nHighlights:\n\n- Breakfast at the hotel.\n\n- Optional short leisure time.\n\n- Private airport transfer.\n\n- End of your unforgettable Tanzania adventure.\n\nMeals: Breakfast.",
    "image": "images/2 days flying safari/pexels-qarim-zam-814182490-29822667.jpg"
  }
];

const priceIncludes = [
  { label: 'Airport transfers in Arusha and Zanzibar', icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8' },
  { label: 'Private safari transport in a 4x4 safari vehicle with a pop-up roof', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
  { label: 'Professional English-speaking safari driver-guide', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  { label: 'Accommodation for 19 nights', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { label: 'Meals as specified in the itinerary', icon: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7' },
  { label: 'National park entry fees for the listed safari parks', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { label: 'Ngorongoro Conservation Area and crater-related fees applicable to the itinerary', icon: 'M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z' },
  { label: 'Game drives in Tarangire, Serengeti, Ngorongoro, and Lake Manyara', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
  { label: 'Arranged Maasai cultural visit', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
  { label: 'Materuni Waterfalls and coffee experience', icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' },
  { label: 'Chemka Hot Springs excursion', icon: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z' },
  { label: 'Domestic flight from northern Tanzania to Zanzibar', icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8' },
  { label: 'Zanzibar excursions listed in the final confirmed package', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
  { label: 'Boat transfers and excursion guides where specified', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { label: 'Hotel transfers in Zanzibar', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
];

const priceExcludes = [
  'International flights to and from Tanzania',
  'Visa fees',
  'Travel insurance',
  'Tips for guides, drivers, and hotel staff',
  'Personal expenses and souvenirs',
  'Alcoholic and premium beverages',
  'Optional hot-air balloon safari in the Serengeti',
  'Optional activities not listed as included',
  'Additional restaurant meals and special dining experiences',
  'Diving, specialist water sports, and equipment rentals',
  'Zanzibar infrastructure, tourism, or hotel taxes and levies payable by the traveller where applicable',
  'Any accommodation or services outside the confirmed itinerary',
];

const whyBookWithUs = [
  'Discover Tanzania\'s iconic national parks.',
  'Experience authentic local culture and traditions.',
  'Combine wildlife, adventure, and beach relaxation in one holiday.',
  'Enjoy private safari options and personalised itineraries.',
  'Explore Zanzibar with locally arranged excursions.',
  'Customise your trip to suit your budget and interests.',
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
