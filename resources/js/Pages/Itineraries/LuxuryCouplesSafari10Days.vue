<template>
  <MainLayout>
    <Breadcrumb :breadcrumbs="[
      { name: 'Itineraries', href: '/itineraries' },
      { name: '10-Day Luxury Tanzania Safari for Couples' }
    ]" />

    <!-- Hero -->
    <section class="relative h-[70vh] min-h-[520px] overflow-hidden">
      <img :src="getImageUrl('images/couple safari/lidia-stawinska-Oc4u_mYkimk-unsplash.jpg')"
           alt="10-Day Luxury Tanzania Safari for Couples" class="w-full h-full object-cover ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-b from-safari-brown/50 via-safari-brown/60 to-safari-brown/95"></div>
      <div class="absolute inset-0 flex items-end pb-16 px-4 md:px-8 lg:px-12">
        <div class="container mx-auto max-w-7xl">
          <div class="inline-flex items-center gap-2 bg-safari-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            Romantic Safari & Beach Holiday
          </div>
          <h1 class="text-5xl md:text-7xl font-heading font-bold text-white mb-4 leading-tight">10-Day Luxury Safari for Couples</h1>
          <p class="text-xl md:text-2xl text-white/90 max-w-2xl mb-8">Arusha · Tarangire · Serengeti · Ngorongoro · Zanzibar</p>
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
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-safari-brown">The Romantic Safari Route</h2>
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
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown mb-4">Luxury Safari for Two</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Discover the beauty of Tanzania on a private luxury safari designed for two. Experience spectacular wildlife, elegant lodges, intimate dinners, breathtaking landscapes and the tropical beaches of Zanzibar.</p>
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
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-white">What's Included</h2>
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
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown">What's Excluded</h2>
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
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-safari-brown mb-4">Book Your Luxury Tanzania Safari for Two</h2>
          <p class="text-gray-600 text-lg mb-8 max-w-xl mx-auto">Make your honeymoon, anniversary or romantic holiday unforgettable with Tanzania Safari Zanzibar.</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a :href="$basePath + '/contact'"
               class="bg-safari-orange text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-safari-orange/90 transition transform hover:scale-105 shadow-lg">
              Request Your Personalized Quotation
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

const heroBadges = ['10 Days / 9 Nights', 'Luxury Safari', 'Couples & Honeymooners'];

const quickStats = [
  { value: '10', label: 'Days' },
  { value: '3', label: 'National Parks' },
  { value: 'Luxury', label: 'Accommodation' },
  { value: 'Private', label: 'Safari Vehicle' },
];

const routeStops = ['Arusha', 'Tarangire', 'Serengeti', 'Ngorongoro', 'Zanzibar', 'Departure'];

const galleryImages = [
  { src: 'images/luxury-couples-safari/romantic-sunset-veranda-giraffe.jpeg', alt: 'Romantic Sunset Veranda with Savannah Giraffe' },
  { src: 'images/luxury-couples-safari/luxury-tent-golden-hour.jpeg', alt: 'Luxury Safari Tented Suite' },
  { src: 'images/luxury-couples-safari/luxury-safari-tented-suite.jpeg', alt: 'Exclusive Bush Tented Lodge' },
  { src: 'images/zanzibar/pexels-saila-holidays-zanzibar-1351717875-25706804.jpg', alt: 'Zanzibar Beach Paradise' },
];

const itinerary = [
  {
    day: 1,
    title: 'Arrival in Tanzania – Luxury Welcome in Arusha',
    location: 'Arusha',
    description: 'Arrive at Kilimanjaro International Airport, where your private driver welcomes you and transfers you to your luxury lodge in Arusha. Relax after your international flight, enjoy the beautiful surroundings and prepare for your safari adventure. Depending on your arrival time, you can enjoy a relaxing afternoon at the lodge. Romantic experience: Welcome drinks and a special dinner for two. Overnight: Luxury lodge in Arusha.',
    image: 'images/Arusha/arusha-airport.jpeg',
  },
  {
    day: 2,
    title: 'Arusha to Tarangire National Park – Land of Giants',
    location: 'Tarangire National Park',
    description: 'After breakfast, travel to Tarangire National Park for your first exciting game drive. Explore a landscape filled with ancient baobab trees, open savannah and wildlife. Tarangire is renowned for its elephants, while giraffes, zebras, buffalo, wildebeest and predators may also be encountered. Enjoy a gourmet-style picnic lunch during your safari before continuing your afternoon game drive. In the evening, arrive at your luxury tented camp or lodge, where you can unwind and enjoy the African wilderness. Romantic experience: Sunset drinks overlooking the landscape, subject to the lodge\'s facilities. Overnight: Luxury lodge or tented camp near Tarangire.',
    image: 'images/luxury-couples-safari/tented-camp-sunset-glow.jpeg',
  },
  {
    day: 3,
    title: 'Tarangire to Serengeti National Park – Journey to the Endless Plains',
    location: 'Serengeti National Park',
    description: 'Enjoy breakfast before travelling towards the magnificent Serengeti National Park through the Ngorongoro highlands. Enjoy beautiful scenery and wildlife viewing along the route. After entering the Serengeti, embark on a game drive across its endless plains. Look for lions, elephants, giraffes, zebras, cheetahs and other animals. The Serengeti is also famous for the Great Wildebeest Migration, whose location varies with the season. Arrive at your luxury safari camp and enjoy a delicious dinner surrounded by the atmosphere of the African wilderness. Romantic experience: A private dining arrangement, subject to availability. Overnight: Luxury tented camp in the Serengeti.',
    image: 'images/luxury-couples-safari/luxury-tent-golden-hour.jpeg',
  },
  {
    day: 4,
    title: 'Full-Day Luxury Safari in the Serengeti',
    location: 'Serengeti Plains',
    description: 'Wake up to the sounds of the African wilderness and enjoy an early morning game drive when wildlife is often active. Explore different areas of the Serengeti with your private professional driver-guide. Search for lions, leopards, cheetahs, elephants and large herds of grazing animals. Return to camp for lunch and relaxation, or enjoy a full-day game drive with a picnic lunch. Spend the evening enjoying the views, fine dining and peaceful atmosphere of your luxury accommodation. Optional experience: Hot-air balloon safari with a champagne breakfast, subject to availability and weather conditions. Overnight: Luxury tented camp in the Serengeti.',
    image: 'images/serengeti/pexels-vik-joshi-63702791-8150758.jpg',
  },
  {
    day: 5,
    title: 'Another Magical Day in the Serengeti',
    location: 'Serengeti Plains',
    description: 'Enjoy another full day exploring the Serengeti at a relaxed, personalized pace. Your guide can adapt the day\'s route to recent wildlife sightings and the seasonal movement of animals. Photograph the magnificent landscapes, observe predators and enjoy the unforgettable feeling of being surrounded by nature. Between game drives, take time to relax at camp and enjoy the views. Romantic experience: Sundowner drinks and a private dinner, where offered by the property. Overnight: Luxury tented camp in the Serengeti.',
    image: 'images/luxury-couples-safari/romantic-sunset-veranda-giraffe.jpeg',
  },
  {
    day: 6,
    title: 'Serengeti to Ngorongoro Conservation Area',
    location: 'Ngorongoro Conservation Area',
    description: 'After breakfast, enjoy a final morning game drive before travelling towards the Ngorongoro Conservation Area. Enjoy the changing scenery as the open plains give way to the dramatic highlands. Depending on your chosen route, you may have opportunities for additional wildlife viewing along the way. Arrive at your luxury lodge near the crater rim or in the surrounding highlands. Relax and enjoy the spectacular scenery. Romantic experience: A peaceful evening with a scenic dinner overlooking the highlands, where available. Overnight: Luxury lodge near Ngorongoro Crater.',
    image: 'images/luxury-couples-safari/luxury-safari-tented-suite.jpeg',
  },
  {
    day: 7,
    title: 'Ngorongoro Crater Safari – A Natural Wonder',
    location: 'Ngorongoro Crater',
    description: 'Rise early for an unforgettable safari inside Ngorongoro Crater. Descend into the crater for a game drive across grasslands, woodland and wetland habitats. Look for buffalo, zebras, wildebeest, elephants, lions and, with luck, the endangered black rhino. Enjoy a picnic lunch in the designated area before ascending the crater. After your safari, return to your lodge to relax and celebrate the experiences you have shared. Overnight: Luxury lodge near Ngorongoro or Karatu.',
    image: 'images/ngorongoro/pexels-lan-yao-324969-20847561.jpg',
  },
  {
    day: 8,
    title: 'Fly to Zanzibar – From the African Wilderness to Paradise',
    location: 'Zanzibar',
    description: 'After breakfast, transfer to the appropriate airport or airstrip for your flight to Zanzibar. Depending on the flight schedule, this may require a road transfer to Arusha or another departure point. Upon arrival, meet your private driver and transfer to your luxury beachfront resort. Spend the rest of the day enjoying the Indian Ocean, swimming in the pool or relaxing on the beach. Romantic experience: A sunset walk on the beach and a special dinner for two. Overnight: Luxury beachfront resort in Zanzibar.',
    image: 'images/zanzibar/pexels-rufaro-6707821.jpg',
  },
  {
    day: 9,
    title: 'Zanzibar Romantic Island Experience',
    location: 'Zanzibar Island',
    description: 'Enjoy breakfast with beautiful tropical surroundings before spending a relaxing day in Zanzibar. Choose from optional experiences such as: A private dhow cruise at sunset. Snorkelling or a boat excursion, depending on sea conditions. A guided Stone Town tour. A spice farm visit. A couples\' spa treatment. A romantic beachfront dinner. You can also spend the day relaxing at your resort and enjoying the beach together. Overnight: Luxury beachfront resort in Zanzibar.',
    image: 'images/zanzibar/pexels-saila-holidays-zanzibar-1351717875-25706804.jpg',
  },
  {
    day: 10,
    title: 'Breakfast and Departure',
    location: 'Zanzibar - Departure',
    description: 'Enjoy your final breakfast in paradise before your private transfer to Zanzibar International Airport for your onward flight. If your international flight departs from another airport, additional flight arrangements will be required. Leave Tanzania with beautiful memories of wildlife, extraordinary landscapes and a romantic island escape. End of your 10-day luxury Tanzania safari and Zanzibar holiday.',
    image: 'images/zanzibar/pexels-dajana-reci-289671698-30125137.jpg',
  },
];

const priceIncludes = [
  { label: 'Private airport transfers as specified in your itinerary', icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8' },
  { label: 'Nine nights of accommodation in selected luxury lodges, tented camps and a Zanzibar resort', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { label: 'Private 4x4 safari vehicle with a professional English-speaking driver-guide during the safari', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
  { label: 'Park and conservation fees for the included itinerary', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { label: 'Meals as specified by the selected accommodation and package', icon: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7' },
  { label: 'Scheduled domestic flight to Zanzibar, as quoted', icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8' },
  { label: 'Ngorongoro Crater game drive and applicable fees', icon: 'M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5' },
  { label: 'Bottled drinking water during game drives', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
  { label: 'Zanzibar airport transfer', icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8' },
  { label: 'Assistance with planning a romantic experience for two', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
];

const priceExcludes = [
  'International flights to and from Tanzania',
  'Entry visas and applicable travel insurance',
  'Optional hot-air balloon safari',
  'Optional spa treatments, private cruises and special dinners unless specifically included',
  'Alcoholic beverages and personal expenses',
  'Tips for guides and lodge staff',
  'Any additional activities not stated in the confirmed itinerary',
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
