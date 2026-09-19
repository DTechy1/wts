<template>
  <MainLayout>
    <Breadcrumb :breadcrumbs="[{ name: 'Top Best Tanzania Parks To Visit' }]" />
    
    <!-- Hero Section -->
    <section class="relative h-[500px] overflow-hidden">
      <img :src="getImageUrl('images/walters-tours-safaris-magdalena-kula-manchee-nVUZO1gc_-o-unsplash.jpg')" 
           alt="Tanzania Parks" 
           class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-r from-safari-brown/95 to-safari-brown/75"></div>
      <div class="absolute inset-0 flex items-center px-4 md:px-8 lg:px-12">
        <div class="container mx-auto max-w-7xl">
          <h1 class="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            Top Best Tanzania Parks To Visit
          </h1>
          <p class="text-xl text-white/90 max-w-3xl leading-relaxed">
            A safari is one of Africa's greatest wildlife adventures and Tanzania is one of the best countries 
            to experience a walk on the wild side. It's an iconic safari destination, home to all of Africa's 
            'Big Five', scores of rare and endangered species, and the Great Migration, renowned as the greatest 
            show on earth.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Introduction -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="max-w-4xl mx-auto text-center mb-12">
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            With <span class="font-bold text-safari-orange">38% of its land reserved as protected wildlife areas</span>, 
            Tanzania offers a wide choice of national parks and game reserves, all designed for different interests 
            and travel preferences.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">
            Before you head off on your luxury or budget safari holiday in Tanzania, you'll need to know which parks 
            and reserves are best suited to you. There are two main safari circuits: the popular 
            <span class="font-bold text-safari-brown">Northern Circuit</span> boasts the stars of Tanzania including 
            the Serengeti and Ngorongoro Crater, while the quieter <span class="font-bold text-safari-brown">Southern Circuit</span> 
            offers a remote wilderness experience away from the crowds.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Parks Grid -->
    <section class="py-20 px-4 md:px-8 lg:px-12">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-12">
          Our Favourite National Parks
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="park in parks" :key="park.name" 
               class="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="relative h-64 overflow-hidden group">
              <img :src="park.image" :alt="park.name" 
                   class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-safari-brown/90 via-safari-brown/40 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <h3 class="text-3xl font-heading font-bold text-white mb-2">{{ park.name }}</h3>
                <p class="text-white/90 text-sm">{{ park.subtitle }}</p>
              </div>
            </div>
            
            <div class="p-6">
              <p class="text-gray-700 mb-4 leading-relaxed">{{ park.description }}</p>
              
              <div class="space-y-3 mb-6">
                <div class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-safari-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-sm text-gray-600">{{ park.highlight1 }}</span>
                </div>
                <div class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-safari-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-sm text-gray-600">{{ park.highlight2 }}</span>
                </div>
              </div>
              
              <a :href="park.link" 
                 class="block w-full bg-safari-orange text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-safari-orange/90 transition">
                Explore {{ park.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-brown">
      <div class="container mx-auto max-w-7xl text-center">
        <h2 class="text-4xl font-heading font-bold text-white mb-6">
          Ready to Explore Tanzania's Wildlife?
        </h2>
        <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Let us help you plan your perfect safari adventure across Tanzania's magnificent national parks
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a :href="$basePath + '/contact'" class="bg-safari-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-safari-orange/90 transition transform hover:scale-105">
            Plan Your Safari
          </a>
          <a :href="$basePath + '/itineraries'" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-safari-brown transition">
            View Packages
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

const parks = [
  {
    name: 'Serengeti National Park',
    subtitle: 'The Great Migration',
    image: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/',
    description: 'Home to the world-famous Great Migration, where millions of wildebeest and zebras traverse the plains in search of fresh grazing.',
    highlight1: 'Witness the Great Migration (seasonal)',
    highlight2: 'Big Five game viewing year-round',
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/'
  },
  {
    name: 'Ngorongoro Crater',
    subtitle: 'Natural Wonder',
    image: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/',
    description: 'The world\'s largest intact volcanic caldera, offering unparalleled wildlife viewing in a stunning natural amphitheater.',
    highlight1: 'Highest concentration of wildlife in Africa',
    highlight2: 'UNESCO World Heritage Site',
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/'
  },
  {
    name: 'Tarangire National Park',
    subtitle: 'Elephant Paradise',
    image: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/',
    description: 'Famous for its large elephant herds and iconic baobab trees, offering a classic African safari experience.',
    highlight1: 'Largest elephant population in Tanzania',
    highlight2: 'Ancient baobab trees and diverse birdlife',
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/'
  },
  {
    name: 'Lake Manyara National Park',
    subtitle: 'Tree-Climbing Lions',
    image: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/',
    description: 'A compact gem known for its tree-climbing lions, flamingos, and diverse ecosystems from groundwater forest to soda lake.',
    highlight1: 'Famous tree-climbing lions',
    highlight2: 'Thousands of flamingos on the lake',
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/'
  },
  {
    name: 'Arusha National Park',
    subtitle: 'Gateway to Adventure',
    image: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/',
    description: 'A diverse park featuring Mount Meru, Momella Lakes, and Ngurdoto Crater, perfect for walking safaris and canoeing.',
    highlight1: 'Walking safaris and canoeing available',
    highlight2: 'Stunning views of Mount Meru',
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/'
  },
  {
    name: 'Kilimanjaro National Park',
    subtitle: 'Roof of Africa',
    image: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/',
    description: 'Home to Africa\'s highest peak at 5,895 meters, offering challenging treks and breathtaking alpine scenery.',
    highlight1: 'Summit Africa\'s highest mountain',
    highlight2: 'Multiple trekking routes available',
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/'
  },
];
</script>
