<template>
  <MainLayout>
    <Breadcrumb :items="breadcrumbItems" />
    
    <!-- Hero Section -->
    <section class="relative h-[60vh] overflow-hidden">
      <img :src="getImageUrl('images/walters-tours-safaris-camping-tents.png')" 
           alt="5 Days Camping Safari Group Sharing Budget" 
           class="w-full h-full object-cover ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-b from-safari-brown/70 via-safari-brown/50 to-safari-brown/90"></div>
      <div class="absolute inset-0 flex items-center justify-center text-center px-4">
        <div class="max-w-4xl">
          <div class="inline-flex items-center gap-2 bg-safari-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            5 Days / 4 Nights
          </div>
          <h1 class="text-5xl md:text-6xl font-heading font-bold text-white mb-4 leading-tight">5 Days Camping Safari</h1>
          <p class="text-xl md:text-2xl text-white/90">Group Sharing Budget � Authentic African Adventure</p>
        </div>
      </div>
    </section>
    
    <!-- Overview Stats -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div class="w-14 h-14 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-3 text-safari-orange">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-safari-brown mb-1">5 Days</h3>
            <p class="text-gray-500 text-sm">Duration</p>
          </div>
          <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div class="w-14 h-14 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-3 text-safari-orange">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-safari-brown mb-1">Group Sharing</h3>
            <p class="text-gray-500 text-sm">Budget Friendly</p>
          </div>
          <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div class="w-14 h-14 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-3 text-safari-orange">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-safari-brown mb-1">3 Top Parks</h3>
            <p class="text-gray-500 text-sm">Tarangire, Serengeti, Ngorongoro</p>
          </div>
          <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div class="w-14 h-14 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-3 text-safari-orange">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-safari-brown mb-1">Camp Nights</h3>
            <p class="text-gray-500 text-sm">Authentic Campsite Stays</p>
          </div>
        </div>
        
        <div>
          <h2 class="text-4xl font-heading font-bold text-safari-brown mb-6">About This Safari</h2>
          <p class="text-lg text-gray-700 mb-4 leading-relaxed">
            This 5-day camping safari is the perfect adventure for budget-conscious travelers who want to experience Tanzania's most iconic national parks without compromising on the quality of wildlife viewing. By sharing costs in a group, you get to explore Tarangire, the vast Serengeti, and the legendary Ngorongoro Crater � all while sleeping under the African stars in comfortable campsites.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">
            Tarangire is often called the elephant playground of Tanzania. The Serengeti offers wildlife encounters that are unmatched anywhere on earth. And Ngorongoro Crater � often referred to as a World Wonder � holds one of the highest concentrations of wildlife on the continent.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Day by Day Itinerary -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-12">Day by Day Itinerary</h2>
        
        <div class="space-y-6">
          <div v-for="(day, index) in itinerary" :key="index" class="bg-safari-white rounded-2xl overflow-hidden shadow-lg">
            <div class="bg-safari-orange text-white p-6">
              <h3 class="text-2xl font-heading font-bold">Day {{ day.day }}: {{ day.title }}</h3>
              <p class="text-white/80 text-sm mt-1">{{ day.location }}</p>
            </div>
            <div class="p-6">
              <p class="text-gray-700 leading-relaxed">{{ day.description }}</p>
              <div v-if="day.highlight" class="mt-4 p-4 bg-safari-orange/5 border-l-4 border-safari-orange rounded-r-xl">
                <p class="text-sm text-safari-brown italic">{{ day.highlight }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Inclusions & Exclusions -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-brown text-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-center mb-12">Safari Details</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
              <svg class="w-7 h-7 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              Included
            </h3>
            <ul class="space-y-3">
              <li v-for="item in included" :key="item" class="flex items-start gap-3">
                <svg class="w-5 h-5 text-safari-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
              <svg class="w-7 h-7 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
              </svg>
              Not Included
            </h3>
            <ul class="space-y-3">
              <li v-for="item in notIncluded" :key="item" class="flex items-start gap-3">
                <svg class="w-5 h-5 text-safari-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                </svg>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-orange">
      <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-4xl font-heading font-bold text-white mb-6">Join the Next Group Departure</h2>
        <p class="text-xl text-white/90 mb-8">
          Send us an enquiry to check available dates and group availability
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <BookingForm
            package-slug="camping-safari-5-days"
            package-name="5 Days Camping Safari Group Sharing Budget"
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
  { label: '5 Days Camping Safari Budget', href: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' }
];

const itinerary = [
  {
    day: 1,
    title: 'Tarangire National Park',
    location: 'Arusha ? Tarangire ? Panorama Campsite',
    description: 'Early today we start driving from our hotel in Arusha/Airport to Tarangire National Park for a game drive until afternoon where we break for a picnic lunch. After lunch we continue with the game drive until evening, exit from the park and drive to Panorama Campsite for dinner and overnight.',
    highlight: 'Tarangire is referred to as the playground of Elephants but is also known as home of Buffalo, Lions, Wildebeests, Zebra, and Gazelle in dry season. Along the shore of Lake Burunge attract a lot of mammals and various bird species.'
  },
  {
    day: 2,
    title: 'To Serengeti National Park',
    location: 'Tarangire ? Serengeti ? Seronera Campsite',
    description: 'Today after breakfast you start a 4-hour drive with lunch boxes to Serengeti National Park. We break for a picnic lunch before reaching Serengeti, then enter the park for an evening game drive before heading to Seronera Campsite � center of the Serengeti � for dinner and overnight.',
    highlight: null
  },
  {
    day: 3,
    title: 'Full Day Game Drive in Serengeti',
    location: 'Serengeti ? Simba Public Campsite',
    description: 'Today we have a full day in the most beautiful park in the world. After breakfast we start our game drive and late afternoon stop for a picnic lunch before continuing until sunset. Dinner and overnight at Simba Public Campsite.',
    highlight: 'Serengeti offers stunning scenery, ever-changing light and entertaining wildlife. Animals here don\'t walk on any schedule so we may find Lions, Leopard, Elephant, Zebra, Cheetah, Antelope, Gazelle, Hippos, and many species of birds and reptiles.'
  },
  {
    day: 4,
    title: 'Ngorongoro Crater Game Drive',
    location: 'Serengeti ? Ngorongoro Crater ? Panorama Campsite',
    description: 'After breakfast we do game viewing on-route while driving toward Ngorongoro Crater, often referred to as a wonder of the world. We descend into the crater for a game drive, break for a picnic lunch, and late evening ascend and drive to Panorama Campsite for dinner and overnight.',
    highlight: 'The world\'s largest intact volcanic caldera � full of grassland, forest and swamp � supports a resident population of more than 25,000 large mammals including Lions, Waterbuck, Hippos, Baboons, Black Rhino, Leopard, Hyena, Jackal, Buffalo and more.'
  },
  {
    day: 5,
    title: 'Lake Manyara & Return to Arusha',
    location: 'Ngorongoro ? Lake Manyara ? Arusha/Airport',
    description: 'After an early breakfast we head to Lake Manyara National Park for a short morning game drive. Lake Manyara is home to flamingos, tree-climbing lions, and an abundance of birdlife. After the game drive we return to Arusha or proceed to the airport for your onward journey.',
    highlight: null
  }
];

const included = [
  'All national park entrance fees',
  'Transport in a shared 4x4 safari vehicle with pop-up roof',
  'All accommodations while on safari (public campsites)',
  'All meals as specified (breakfast, lunch, dinner)',
  'Government taxes (VAT 18%)',
  'Crater services fees',
  'Professional English-speaking driver/guide'
];

const notIncluded = [
  'Personal items (beer, cigarettes, souvenirs)',
  'Balloon safari in Serengeti (optional)',
  'International or domestic flight tickets',
  'Tips for guides and campsite staff',
  'Hotel nights in Arusha before or after the safari'
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
