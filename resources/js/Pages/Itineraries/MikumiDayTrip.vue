<template>
  <MainLayout>
    <Breadcrumb :items="breadcrumbItems" />

    <!-- Hero Section -->
    <section class="relative h-[60vh] overflow-hidden">
      <img :src="getImageUrl('images/walters-tours-safaris-mikumi-safari.png')"
           alt="Mikumi National Park Day Trip with Flight"
           class="w-full h-full object-cover ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-b from-safari-brown/70 via-safari-brown/50 to-safari-brown/90"></div>
      <div class="absolute inset-0 flex items-center justify-center text-center px-4">
        <div class="max-w-4xl">
          <div class="inline-flex items-center gap-2 bg-safari-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
            </svg>
            Day Trip � 9 Hours
          </div>
          <h1 class="text-5xl md:text-6xl font-heading font-bold text-white mb-4 leading-tight">Mikumi National Park</h1>
          <p class="text-xl md:text-2xl text-white/90">Fly from Zanzibar � Game Drive in the Wild Heart of Tanzania</p>
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
            <h3 class="text-2xl font-bold text-safari-brown mb-2">9 Hours</h3>
            <p class="text-gray-600">Full Day Trip</p>
          </div>
          <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 text-safari-orange">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-safari-brown mb-2">Fly from Zanzibar</h3>
            <p class="text-gray-600">Direct flight to Mikumi airstrip</p>
          </div>
          <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 text-safari-orange">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-safari-brown mb-2">Big 5 Sightings</h3>
            <p class="text-gray-600">Elephants, lions, leopards & more</p>
          </div>
        </div>

        <div>
          <h2 class="text-4xl font-heading font-bold text-safari-brown mb-6">About the Trip</h2>
          <p class="text-lg text-gray-700 leading-relaxed mb-4">
            One of the most unique wildlife experiences in East Africa � a flying day trip from Zanzibar directly into Mikumi National Park. Pick-up is at 5:30 am from your hotel in Zanzibar for the 07:00 flight. On arrival at the airstrip inside Mikumi, your game drive begins immediately.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">
            Expect elephants, giraffes, buffalo, Burchell's zebras, Liechtenstein's hartebeest, lions, leopards, spotted hyenas, jackals, and yellow baboons. After a picnic lunch at a shaded site in the park, return flights bring you back to Zanzibar by evening � dropped off at your hotel.
          </p>
        </div>
      </div>
    </section>

    <!-- Wildlife Section -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-12">Wildlife to Expect</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="animal in wildlife" :key="animal" class="bg-safari-white rounded-xl p-4 text-center shadow">
            <div class="w-12 h-12 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-3 text-safari-orange">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
            </div>
            <p class="font-semibold text-safari-brown text-sm">{{ animal }}</p>
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
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-orange">
      <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-4xl font-heading font-bold text-white mb-6">Book Your Mikumi Flying Safari</h2>
        <p class="text-xl text-white/90 mb-8">A one-day adventure unlike any other � fly in, game drive, fly out</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <BookingForm
            package-slug="mikumi-day-trip"
            package-name="Mikumi National Park with Flight Day Trip"
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
  { label: 'Mikumi Day Trip with Flight', href: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' }
];

const wildlife = [
  'African Elephants', 'Masai Giraffes', 'African Buffalo', "Burchell's Zebras",
  "Liechtenstein's Hartebeest", 'African Lions', 'Leopards', 'Spotted Hyenas',
  'Black-backed Jackals', 'Yellow Baboons', 'Warthogs', 'Various Bird Species'
];

const included = [
  'Return flight tickets Zanzibar ? Mikumi airstrip',
  'National park entrance fees',
  'Airport and hotel taxi transfers in Zanzibar',
  '4x4 land cruiser game drive vehicle inside the park',
  'Picnic lunch and drinking water in the park',
  'Professional English-speaking driver/guide'
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
