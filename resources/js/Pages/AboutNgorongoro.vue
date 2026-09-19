<template>
  <MainLayout>
    <Breadcrumb :breadcrumbs="[
      { name: 'Destinations', href: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
      { name: 'About Ngorongoro Crater' }
    ]" />
    
    <!-- Hero Section -->
    <section class="relative h-[600px] overflow-hidden">
      <img :src="getImageUrl('images/walters-tours-safaris-hu-chen-t-7Mlatf9iI-unsplash.jpg')" 
           alt="Ngorongoro Crater" 
           class="w-full h-full object-cover animate-ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-r from-safari-brown/95 via-safari-brown/80 to-safari-brown/60"></div>
      <div class="absolute inset-0 flex items-center px-4 md:px-8 lg:px-12">
        <div class="container mx-auto max-w-7xl">
          <div class="max-w-4xl">
            <h1 class="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              ABOUT NGORONGORO
            </h1>
            <p class="text-xl md:text-2xl text-white/95 leading-relaxed mb-4">
              The World's Largest Unbroken Caldera
            </p>
            <p class="text-lg text-white/90 leading-relaxed">
              A UNESCO World Heritage Site & Natural Wonder of Africa
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
            <span class="font-bold text-safari-brown">Ngorongoro Crater</span>, nestled in the heart of Tanzania, 
            is a geological wonder and a haven for biodiversity. Created by the collapse of a massive volcano millions 
            of years ago, the crater spans <span class="font-bold text-safari-orange">260 square kilometers (100 square miles)</span> 
            and plunges to depths of around <span class="font-bold text-safari-orange">610 meters (2,000 feet)</span>.
          </p>
          <p class="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            Encircled by steep walls, this natural amphitheater shelters a thriving ecosystem, making it a 
            <span class="font-bold text-safari-orange">UNESCO World Heritage Site</span> and one of Africa's most 
            sought-after safari destinations. As the largest unbroken caldera in the world, the crater is a natural 
            wonder that serves as a fishbowl of wildlife.
          </p>
          <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
            The crater's floor hosts an impressive array of wildlife, including elephants, lions, and a dense population 
            of flamingos in the soda lake. Its unique microclimate sustains diverse habitats, from grasslands to forests, 
            fostering a rich tapestry of flora and fauna. Ngorongoro Crater exemplifies the delicate balance between 
            geological forces and the intricate dance of life, drawing visitors into an immersive and unforgettable 
            encounter with the wild beauty of East Africa.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Geological Wonder Section -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-brown">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              A Geological Marvel
            </h2>
            <p class="text-lg text-white/90 leading-relaxed mb-6">
              Formed approximately <span class="font-bold text-safari-orange">2-3 million years ago</span> when a giant 
              volcano exploded and collapsed on itself, Ngorongoro Crater is the world's largest intact and unfilled 
              volcanic caldera.
            </p>
            <p class="text-lg text-white/90 leading-relaxed mb-6">
              The crater's walls rise <span class="font-bold text-safari-orange">400-610 meters</span> above the floor, 
              creating a natural enclosure that has preserved one of the most unique ecosystems on Earth.
            </p>
            <div class="grid grid-cols-2 gap-6 mt-8">
              <div class="bg-white/10 rounded-xl p-6">
                <div class="text-4xl font-heading font-bold text-safari-orange mb-2">260</div>
                <div class="text-white/90">Square Kilometers</div>
              </div>
              <div class="bg-white/10 rounded-xl p-6">
                <div class="text-4xl font-heading font-bold text-safari-orange mb-2">610m</div>
                <div class="text-white/90">Crater Depth</div>
              </div>
            </div>
          </div>
          <div class="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
            <img :src="getImageUrl('images/walters-tours-safaris-humphrey-m-e5hzQubIb68-unsplash.jpg')" 
                 alt="Ngorongoro Landscape" 
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Wildlife Paradise Section -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown text-center mb-16">
          A Wildlife Paradise
        </h2>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div class="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl group">
            <img :src="getImageUrl('images/walters-tours-safaris-denice-alex-LD6WgJlIpmk-unsplash.jpg')" 
                 alt="Ngorongoro Wildlife" 
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-safari-brown/80 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-8">
              <h3 class="text-3xl font-heading font-bold text-white mb-2">Dense Wildlife Population</h3>
              <p class="text-white/90 text-lg">One of the highest concentrations in Africa</p>
            </div>
          </div>
          <div>
            <p class="text-lg text-gray-700 leading-relaxed mb-6">
              The crater floor is home to approximately <span class="font-bold text-safari-orange">25,000-30,000 animals</span>, 
              making it one of the most densely populated wildlife areas in Africa. The permanent water supply and lush 
              vegetation support a year-round resident population.
            </p>
            <div class="space-y-4">
              <div v-for="animal in wildlifeHighlights" :key="animal.name" class="flex items-start gap-4">
                <div class="w-12 h-12 bg-safari-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-safari-brown mb-1">{{ animal.name }}</h4>
                  <p class="text-gray-600 text-sm">{{ animal.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Features Grid -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-safari-orange/5 to-safari-brown/5">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown text-center mb-16">
          What Makes Ngorongoro Special
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="feature in features" :key="feature.title" 
               class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-xl flex items-center justify-center mb-6">
              <div v-html="feature.icon" class="text-safari-orange"></div>
            </div>
            <h3 class="text-2xl font-heading font-bold text-safari-brown mb-4">{{ feature.title }}</h3>
            <p class="text-gray-700 leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Gateway to Serengeti -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-brown">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
            <img :src="getImageUrl('images/walters-tours-safaris-magdalena-kula-manchee-nVUZO1gc_-o-unsplash.jpg')" 
                 alt="Serengeti Plains" 
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-safari-brown/90 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-8">
              <h3 class="text-3xl font-heading font-bold text-white mb-2">Gateway to Serengeti</h3>
              <p class="text-white/90 text-lg">Continue your adventure to the endless plains</p>
            </div>
          </div>
          <div>
            <h2 class="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Did You Know?
            </h2>
            <p class="text-lg text-white/90 leading-relaxed mb-6">
              After crossing Ngorongoro, you enter <span class="font-bold text-safari-orange">Serengeti National Park</span> 
              - the paradise of predators and best wildlife viewing destination after Ngorongoro Crater.
            </p>
            <p class="text-lg text-white/90 leading-relaxed mb-8">
              Many safari itineraries combine both destinations, offering you the chance to experience the concentrated 
              wildlife viewing of the crater and the vast, endless plains of the Serengeti in one unforgettable journey.
            </p>
            <a :href="$basePath + '/why-serengeti'" 
               class="inline-flex items-center gap-2 bg-safari-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-safari-orange/90 transition transform hover:scale-105">
              <span>Discover Serengeti</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Wildlife Stats -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown text-center mb-16">
          Ngorongoro by Numbers
        </h2>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="stat in stats" :key="stat.number" class="text-center">
            <div class="text-5xl md:text-6xl font-heading font-bold text-safari-orange mb-3">
              {{ stat.number }}
            </div>
            <div class="text-xl text-gray-700">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Experience Gallery -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-safari-brown/5 to-safari-orange/5">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown text-center mb-16">
          Experience the Crater
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="(image, index) in galleryImages" :key="index" 
               :class="['relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer', 
                        index === 0 ? 'md:col-span-2 h-96' : 'h-80']">
            <img :src="image.src" :alt="image.alt" 
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-safari-brown/90 via-safari-brown/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 class="text-white font-heading font-bold text-2xl mb-2">{{ image.caption }}</h3>
              <p class="text-white/90">{{ image.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-r from-safari-brown to-safari-brown/90">
      <div class="container mx-auto max-w-7xl text-center">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
          Ready to Explore Ngorongoro Crater?
        </h2>
        <p class="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          Experience the world's largest unbroken caldera and witness one of the highest concentrations of wildlife in Africa. 
          Combine your visit with Serengeti for the ultimate Tanzanian safari adventure.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a :href="$basePath + '/contact'" class="bg-safari-orange text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-safari-orange/90 transition transform hover:scale-105 shadow-xl">
            Plan Your Crater Safari
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

const wildlifeHighlights = [
  {
    name: 'The Big Five',
    description: 'One of the few places in Africa where you can see all Big Five animals in a single day'
  },
  {
    name: 'Black Rhino',
    description: 'Home to one of the densest populations of black rhinos in Africa'
  },
  {
    name: 'Flamingos',
    description: 'Thousands of flamingos grace the soda lake, creating a pink spectacle'
  },
  {
    name: 'Predators',
    description: 'High concentration of lions, cheetahs, and hyenas due to abundant prey'
  }
];

const features = [
  {
    title: 'Natural Enclosure',
    description: 'The crater walls create a natural barrier, keeping most animals within the caldera year-round, ensuring exceptional game viewing opportunities.',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>'
  },
  {
    title: 'Unique Microclimate',
    description: 'The crater creates its own weather system, supporting diverse habitats from grasslands to forests, swamps to lakes.',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/></svg>'
  },
  {
    title: 'Year-Round Water',
    description: 'Permanent water sources ensure wildlife remains in the crater throughout the year, unlike seasonal migration patterns elsewhere.',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.404 14.596A6.5 6.5 0 1116.5 10a1.25 1.25 0 01-2.5 0 4 4 0 10-.571 2.06A2.75 2.75 0 0018 10a6.5 6.5 0 00-12.596 4.596z" clip-rule="evenodd"/></svg>'
  },
  {
    title: 'UNESCO Heritage',
    description: 'Recognized for its outstanding universal value, protecting both natural wonders and archaeological sites including early human fossils.',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>'
  },
  {
    title: 'Maasai Culture',
    description: 'The Ngorongoro Conservation Area allows Maasai pastoralists to live alongside wildlife, showcasing sustainable coexistence.',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/></svg>'
  },
  {
    title: 'Photographic Paradise',
    description: 'The dramatic crater walls and concentrated wildlife create unparalleled photographic opportunities for both amateur and professional photographers.',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/></svg>'
  }
];

const stats = [
  { number: '260', label: 'Square Kilometers' },
  { number: '30,000', label: 'Animals' },
  { number: '610m', label: 'Crater Depth' },
  { number: '2-3M', label: 'Years Old' }
];

const galleryImages = [
  { 
    src: getImageUrl('images/walters-tours-safaris-hu-chen-t-7Mlatf9iI-unsplash.jpg'), 
    alt: 'Ngorongoro Crater Overview', 
    caption: 'The Magnificent Crater',
    description: 'Panoramic view of the world\'s largest unbroken caldera'
  },
  { 
    src: getImageUrl('images/walters-tours-safaris-lake-manyara-flamingos.png'), 
    alt: 'Wildlife in Crater', 
    caption: 'Abundant Wildlife',
    description: 'Experience close encounters with diverse species'
  },
  { 
    src: getImageUrl('images/walters-tours-safaris-denice-alex-LD6WgJlIpmk-unsplash.jpg'), 
    alt: 'Crater Landscape', 
    caption: 'Diverse Ecosystems',
    description: 'From grasslands to forests within the crater'
  },
  { 
    src: getImageUrl('images/walters-tours-safaris-sammy-wong-wzeGc7Uqopc-unsplash.jpg'), 
    alt: 'Predators', 
    caption: 'Predator Paradise',
    description: 'High concentration of lions and other predators'
  }
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
