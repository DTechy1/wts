<template>
  <MainLayout>
    <Breadcrumb :items="breadcrumbItems" />

    <!-- Hero Section -->
    <section class="relative h-[60vh] overflow-hidden">
      <img :src="getImageUrl('images/walters-tours-safaris-serval-wildlife.png')"
           alt="Serval Wildlife Zoo Day Trip"
           class="w-full h-full object-cover ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-b from-safari-brown/70 via-safari-brown/50 to-safari-brown/90"></div>
      <div class="absolute inset-0 flex items-center justify-center text-center px-4">
        <div class="max-w-4xl">
          <div class="inline-flex items-center gap-2 bg-safari-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
            </svg>
            Day Trip or Overnight
          </div>
          <h1 class="text-5xl md:text-6xl font-heading font-bold text-white mb-4 leading-tight">Serval Wildlife Zoo</h1>
          <p class="text-xl md:text-2xl text-white/90">Luxury Eco-Tourism Lodge � Kilimanjaro Region</p>
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
            <h3 class="text-2xl font-bold text-safari-brown mb-2">Siha, Kilimanjaro</h3>
            <p class="text-gray-600">35 min from KIA, 60 min from Moshi, 90 min from Arusha</p>
          </div>
          <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 text-safari-orange">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-safari-brown mb-2">5-Star Eco Lodge</h3>
            <p class="text-gray-600">Views of Meru & Kilimanjaro</p>
          </div>
          <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 text-safari-orange">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-safari-brown mb-2">Animal Interactions</h3>
            <p class="text-gray-600">Free-roaming animals, keeper-supervised</p>
          </div>
        </div>

        <div>
          <h2 class="text-4xl font-heading font-bold text-safari-brown mb-6">About Serval Wildlife</h2>
          <p class="text-lg text-gray-700 leading-relaxed mb-4">
            Whether you are a couple, solo traveler, family or group � Serval Wildlife in the Kilimanjaro Region offers an exclusive, captivating, and unparalleled experience. This luxury eco-tourism lodge and wildlife haven is tucked away in Siha District, with over 3,000 hand-planted endemic flora carefully curated to benefit the resident animals.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">
            Animal interactions are carefully monitored by trusted and experienced keepers who prioritize safety, health, and animal welfare. Guests must wait for animals to approach on their own terms � offering a genuinely natural and respectful encounter. Enjoy panoramic views of both Mount Meru and Mount Kilimanjaro from the 5-star villas. This trip can be done as a day visit or an overnight stay at the lodge.
          </p>
        </div>
      </div>
    </section>

    <!-- Animals -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-12">Resident Wildlife</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div v-for="animal in animals" :key="animal.name" class="bg-safari-white rounded-2xl p-5 text-center shadow">
            <div class="w-12 h-12 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-3 text-safari-orange">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
            </div>
            <p class="font-bold text-safari-brown">{{ animal.name }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ animal.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Included -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-brown text-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-center mb-12">Tour Inclusions</h2>
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
              Cash payment accepted on day of trip after arrival. Overnight options available � enquire for details.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-orange">
      <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-4xl font-heading font-bold text-white mb-6">Meet Africa's Animals Up Close</h2>
        <p class="text-xl text-white/90 mb-8">A luxurious wildlife encounter available as a day trip or overnight at Serval Wildlife</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <BookingForm
            package-slug="serval-wildlife"
            package-name="Serval Wildlife Zoo Visit"
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
  { label: 'Serval Wildlife Zoo', href: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' }
];

const animals = [
  { name: 'African Lions', desc: 'Majestic apex predators' },
  { name: 'Colobus Monkeys', desc: 'Calm and gentle primates' },
  { name: 'Masai Giraffes', desc: 'Graceful tall residents' },
  { name: 'Bat-eared Foxes', desc: 'Rare nocturnal creatures' },
  { name: 'Elands', desc: 'Exquisite large antelopes' },
  { name: 'Ostriches', desc: "World's largest bird" },
  { name: 'Blue Monkeys', desc: 'Mischievous jungle dwellers' },
  { name: 'Vervet Monkeys', desc: 'Playful & curious primates' }
];

const included = [
  'Private transport (pick-up and drop-off)',
  'Entrance fee to Serval Wildlife',
  'Soft drinks during the visit',
  'Supervised animal interaction experiences',
  'Scenic views of Mount Meru and Kilimanjaro'
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
