<template>
  <MainLayout>
    <Breadcrumb :items="breadcrumbItems" />

    <!-- Hero Section -->
    <section class="relative h-[60vh] overflow-hidden">
      <img :src="getImageUrl('images/hotprings/Rundugai_Hotsprings_Kilimanjaro.jpg')"
           alt="Chemka Kikuletwa Hot Springs Day Trip"
           class="w-full h-full object-cover ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-b from-safari-brown/70 via-safari-brown/50 to-safari-brown/90"></div>
      <div class="absolute inset-0 flex items-center justify-center text-center px-4">
        <div class="max-w-4xl">
          <div class="inline-flex items-center gap-2 bg-safari-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"/>
            </svg>
            Day Trip
          </div>
          <h1 class="text-5xl md:text-6xl font-heading font-bold text-white mb-4 leading-tight">Chemka Hot Springs</h1>
          <p class="text-xl md:text-2xl text-white/90">Tanzania's Hidden Jungle Oasis � 1.5 Hours from Arusha & Moshi</p>
        </div>
      </div>
    </section>

    <!-- Overview -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 text-safari-orange">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-safari-brown mb-2">1.5 hrs from Arusha</h3>
            <p class="text-gray-600">Also accessible from Moshi</p>
          </div>
          <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 text-safari-orange">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-safari-brown mb-2">All-Day Relaxation</h3>
            <p class="text-gray-600">Swim, swing, tube & jump</p>
          </div>
          <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 text-safari-orange">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-safari-brown mb-2">Crystal Clear Water</h3>
            <p class="text-gray-600">Natural spring-fed tropical pool</p>
          </div>
        </div>

        <div>
          <h2 class="text-4xl font-heading font-bold text-safari-brown mb-6">A Hidden Gem of Tanzania</h2>
          <p class="text-lg text-gray-700 leading-relaxed mb-4">
            Travelers who base in Arusha or Moshi in between safaris and hiking trips know there is no better way to recover than a day trip to the Chemka Hot Springs � also known as the Kikuletwa Hot Springs. A true jungle oasis with crystal-clear water fed by natural underground springs.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">
            Spend the day swimming, relaxing, rope swinging, tire tubing, and jumping from the trees into the refreshing spring water � all surrounded by lush tropical vegetation. A hot lunch and local beer are included, making this the most relaxing day trip in northern Tanzania.
          </p>
        </div>
      </div>
    </section>

    <!-- Activities -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-12">What to Expect</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="act in activities" :key="act.title" class="bg-safari-white rounded-2xl p-6 shadow flex items-start gap-5">
            <div class="w-12 h-12 bg-safari-orange/10 rounded-xl flex items-center justify-center flex-shrink-0 text-safari-orange">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="act.icon"/>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-safari-brown mb-1">{{ act.title }}</h3>
              <p class="text-gray-600 text-sm">{{ act.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Included -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-brown text-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-center mb-12">What's Covered</h2>
        <div class="max-w-2xl mx-auto bg-white/10 rounded-2xl p-8">
          <ul class="space-y-3">
            <li v-for="item in included" :key="item" class="flex items-start gap-3">
              <svg class="w-5 h-5 text-safari-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>{{ item }}</span>
            </li>
          </ul>
          <div class="mt-6 p-4 bg-white/5 rounded-xl border border-white/20">
            <p class="text-sm text-white/70 italic">
              <svg class="w-4 h-4 inline mr-1 text-safari-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Cash payment accepted on the morning of the trip after pick-up.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-orange">
      <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-4xl font-heading font-bold text-white mb-6">Escape to the Jungle Oasis</h2>
        <p class="text-xl text-white/90 mb-8">The perfect day off between your safari and mountain adventures</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <BookingForm
            package-slug="hotsprings-day-trip"
            package-name="Chemka Hot Springs Day Trip"
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
  { label: 'Hot Springs Day Trip', href: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' }
];

const activities = [
  {
    title: 'Swimming in Natural Springs',
    description: 'The crystal-clear spring water stays naturally warm and refreshing all year round.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
  },
  {
    title: 'Rope Swings & Tire Tubing',
    description: 'Fly off rope swings and glide across the water on inflatable tubes.',
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'Tree Jumping',
    description: 'For the adventurous � leap into the pool from natural tree platforms along the bank.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    title: 'Relax in Jungle Surroundings',
    description: 'Lush tropical vegetation, birdsong, and complete peace in this hidden oasis.',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064'
  }
];

const included = [
  'Private transport from Arusha or Moshi (pick-up and drop-off)',
  'Entrance fee to Chemka Hot Springs',
  'Hot lunch at the springs',
  'Local beer (1 included)',
  'Professional tour guide'
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
