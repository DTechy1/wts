<template>
  <MainLayout>
    <Breadcrumb :breadcrumbs="[
      { name: 'Destinations', href: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
      { name: 'Why You Must Visit Serengeti' }
    ]" />
    
    <!-- Hero Section -->
    <section class="relative h-[600px] overflow-hidden">
      <img :src="getImageUrl('images/walters-tours-safaris-magdalena-kula-manchee-nVUZO1gc_-o-unsplash.jpg')" 
           alt="Serengeti National Park" 
           class="w-full h-full object-cover animate-ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-r from-safari-brown/95 via-safari-brown/80 to-safari-brown/60"></div>
      <div class="absolute inset-0 flex items-center px-4 md:px-8 lg:px-12">
        <div class="container mx-auto max-w-7xl">
          <div class="max-w-4xl">
            <h1 class="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              WHY! YOU MUST VISIT SERENGETI
            </h1>
            <p class="text-xl md:text-2xl text-white/95 leading-relaxed">
              One of the Seven Natural Wonders of the World
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Introduction -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="max-w-5xl mx-auto">
          <p class="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            <span class="font-bold text-safari-brown">Serengeti National Park in Tanzania</span>, is one of the best wildlife 
            destinations in Tanzania and Africa, a premier conservation area which is why the Serengeti is so important to the world 
            being one of the few places on earth where wild animals and their ecosystem exist in a highly protected environment.
          </p>
          <p class="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            The park is famous for its exceptional wildlife such as large populations of 
            <span class="font-bold text-safari-orange">Lion, Cheetah, Elephant, African Buffalo and Rhino</span>, 
            a few amongst the hundreds of animal and bird species that inhabit the reserve. Serengeti National Park is also where the 
            annual <span class="font-bold text-safari-orange">Great Migration</span> happens, an amazing event of Nature, an important 
            reason why Serengeti is recognised as one of the <span class="font-bold text-safari-brown">Seven Natural Wonders of the world</span>.
          </p>
          <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
            Below are some of the reasons why Serengeti is so important and worth a visit.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Wildlife Conservation Section -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-brown">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Wildlife Conservation and Wilderness Area
            </h2>
            <p class="text-lg text-white/90 leading-relaxed mb-6">
              Serengeti National Park is one of the best known and important wildlife conservation and wilderness areas in Africa. 
              It is globally renowned for its wildlife with approximately <span class="font-bold text-safari-orange">25% of Tanzania's wildlife</span>.
            </p>
            <p class="text-lg text-white/90 leading-relaxed mb-6">
              It hosts more than <span class="font-bold text-safari-orange">95 mammal species</span> besides being a recognized 
              Important Bird Area (IBA) with close to <span class="font-bold text-safari-orange">550 bird species</span>.
            </p>
          </div>
          <div class="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
            <img :src="getImageUrl('images/walters-tours-safaris-humphrey-m-e5hzQubIb68-unsplash.jpg')" 
                 alt="Serengeti Wildlife" 
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Great Migration Section -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group order-2 lg:order-1">
            <img :src="getImageUrl('images/walters-tours-safaris-hu-chen-t-7Mlatf9iI-unsplash.jpg')" 
                 alt="Great Migration" 
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-safari-brown/80 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-8">
              <h3 class="text-3xl font-heading font-bold text-white mb-2">The Great Migration</h3>
              <p class="text-white/90 text-lg">Nature's Greatest Show on Earth</p>
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown mb-6">
              The Annual Great Migration
            </h2>
            <p class="text-lg text-gray-700 leading-relaxed mb-6">
              Serengeti � Mara ecosystem is best known for the annual wildebeest migration which unfolds between the months of 
              <span class="font-bold text-safari-orange">July-October</span>, as large herds of over 
              <span class="font-bold text-safari-orange">a million plus wildebeest</span> or gnu as they are also known, 
              migrate north into Masai Mara, crossing the Crocodile-infested Mara River on the way.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed">
              The perilous crossing is an iconic moment of the migration, capturing the attention of wildlife enthusiasts the world over.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Highlights Grid -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-safari-orange/5 to-safari-brown/5">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown text-center mb-16">
          Why Serengeti is Unmissable
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="highlight in highlights" :key="highlight.title" 
               class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-xl flex items-center justify-center mb-6">
              <div v-html="highlight.icon" class="text-safari-orange"></div>
            </div>
            <h3 class="text-2xl font-heading font-bold text-safari-brown mb-4">{{ highlight.title }}</h3>
            <p class="text-gray-700 leading-relaxed">{{ highlight.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Wildlife Stats -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-brown">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-white text-center mb-16">
          Serengeti by Numbers
        </h2>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="stat in stats" :key="stat.number" class="text-center">
            <div class="text-5xl md:text-6xl font-heading font-bold text-safari-orange mb-3">
              {{ stat.number }}
            </div>
            <div class="text-xl text-white/90">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Gallery Section -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown text-center mb-16">
          Experience the Serengeti
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(image, index) in galleryImages" :key="index" 
               class="relative h-80 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
            <img :src="image.src" :alt="image.alt" 
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-safari-brown/90 via-safari-brown/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 class="text-white font-heading font-bold text-xl">{{ image.caption }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-r from-safari-brown to-safari-brown/90">
      <div class="container mx-auto max-w-7xl text-center">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
          Ready to Witness the Serengeti?
        </h2>
        <p class="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          Join us on an unforgettable journey to one of the world's most spectacular wildlife destinations. 
          Experience the Great Migration, encounter the Big Five, and create memories that will last a lifetime.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a :href="$basePath + '/contact'" class="bg-safari-orange text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-safari-orange/90 transition transform hover:scale-105 shadow-xl">
            Plan Your Serengeti Safari
          </a>
          <a :href="$basePath + '/itineraries'" class="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-safari-brown transition shadow-xl">
            View Safari Packages
          </a>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../Layouts/MainLayout.vue';
import Breadcrumb from '../Components/Breadcrumb.vue';
import { useAssets } from '../composables/useAssets';

const { getImageUrl } = useAssets();

const highlights = [
  {
    title: 'The Big Five',
    description: 'Home to Lion, Leopard, Elephant, Buffalo, and Rhino. Serengeti offers exceptional opportunities to see all of Africa\'s most iconic animals in their natural habitat.',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"/></svg>'
  },
  {
    title: 'Great Migration',
    description: 'Witness over 1.5 million wildebeest and 200,000 zebras on their annual journey. This spectacular natural phenomenon is considered one of the greatest wildlife shows on Earth.',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clip-rule="evenodd"/></svg>'
  },
  {
    title: 'Diverse Ecosystems',
    description: 'From endless grasslands to riverine forests, rocky outcrops to acacia woodlands. The park\'s varied landscapes support an incredible diversity of wildlife.',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>'
  },
  {
    title: 'UNESCO Heritage',
    description: 'Recognized as a UNESCO World Heritage Site for its outstanding universal value and exceptional natural beauty, protecting one of the world\'s most important ecosystems.',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>'
  },
  {
    title: 'Year-Round Wildlife',
    description: 'Unlike many parks, Serengeti offers exceptional game viewing throughout the year. Each season brings unique wildlife experiences and photographic opportunities.',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/></svg>'
  },
  {
    title: 'Rich Cultural Heritage',
    description: 'Experience the Maasai culture and learn about the harmonious coexistence between traditional communities and wildlife conservation efforts.',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/></svg>'
  }
];

const stats = [
  { number: '14,763', label: 'Square Kilometers' },
  { number: '1.5M+', label: 'Wildebeest' },
  { number: '550+', label: 'Bird Species' },
  { number: '95+', label: 'Mammal Species' }
];

const galleryImages = [
  { src: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/', alt: 'Serengeti Plains', caption: 'Endless Serengeti Plains' },
  { src: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/', alt: 'Wildlife', caption: 'Majestic Wildlife' },
  { src: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/', alt: 'Great Migration', caption: 'The Great Migration' },
  { src: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/', alt: 'Sunset Safari', caption: 'Golden Hour Safari' },
  { src: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/', alt: 'Big Cats', caption: 'Predators in Action' },
  { src: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/', alt: 'Landscape', caption: 'Breathtaking Landscapes' }
];
</script>

<style scoped>
@keyframes ken-burns {
  0% {
    transform: scale(1) translate(0, 0);
  }
  100% {
    transform: scale(1.1) translate(-20px, -20px);
  }
}

.animate-ken-burns {
  animation: ken-burns 20s ease-in-out infinite alternate;
}
</style>
