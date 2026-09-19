<template>
  <MainLayout>
    <Breadcrumb :items="breadcrumbItems" />
    
    <!-- Hero Section -->
    <section class="relative h-[60vh] overflow-hidden">
      <img :src="getImageUrl('images/tarangire/pexels-dirk-pothen-2149332904-30629351.jpg')" 
           alt="Tarangire National Park" 
           class="w-full h-full object-cover ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-b from-safari-brown/70 via-safari-brown/50 to-safari-brown/90"></div>
      <div class="absolute inset-0 flex items-center justify-center text-center px-4">
        <div class="max-w-4xl">
          <h1 class="text-5xl md:text-6xl font-heading font-bold text-white mb-4">Tarangire National Park</h1>
          <p class="text-xl md:text-2xl text-white/90">Land of Giants - Elephant Paradise</p>
        </div>
      </div>
    </section>
    
    <!-- Overview Section -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-heading font-bold text-safari-brown mb-6">Elephant Capital of Tanzania</h2>
            <p class="text-lg text-gray-700 mb-4 leading-relaxed">
              Tarangire National Park is renowned for its massive elephant herds and iconic baobab trees. 
              During the dry season (June-October), the park hosts one of the highest concentrations of 
              elephants in Africa, with herds of up to 300 individuals gathering along the Tarangire River.
            </p>
            <p class="text-lg text-gray-700 mb-6 leading-relaxed">
              The park's diverse habitats support an incredible variety of wildlife, from tree-climbing lions 
              to rare antelope species. The ancient baobab trees create a dramatic landscape that's perfect 
              for photography and wildlife viewing.
            </p>
            
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-safari-orange/10 p-4 rounded-lg">
                <div class="text-3xl font-bold text-safari-orange mb-1">2,850 km�</div>
                <div class="text-sm text-gray-600">Park Size</div>
              </div>
              <div class="bg-safari-orange/10 p-4 rounded-lg">
                <div class="text-3xl font-bold text-safari-orange mb-1">3,000+</div>
                <div class="text-sm text-gray-600">Elephants</div>
              </div>
              <div class="bg-safari-orange/10 p-4 rounded-lg">
                <div class="text-3xl font-bold text-safari-orange mb-1">550+</div>
                <div class="text-sm text-gray-600">Bird Species</div>
              </div>
              <div class="bg-safari-orange/10 p-4 rounded-lg">
                <div class="text-3xl font-bold text-safari-orange mb-1">118 km</div>
                <div class="text-sm text-gray-600">From Arusha</div>
              </div>
            </div>
          </div>
          
          <div class="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img :src="getImageUrl('images/tarangire/pexels-bgbennett-19986844.jpg')" 
                 alt="Tarangire Elephants" 
                 class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Wildlife Section -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-12">Incredible Wildlife</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="animal in wildlife" :key="animal.name" class="bg-safari-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
            <div class="relative h-48 overflow-hidden group">
              <img :src="getImageUrl(animal.image)" :alt="animal.name" 
                   class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-heading font-bold text-safari-brown mb-2">{{ animal.name }}</h3>
              <p class="text-gray-600">{{ animal.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Key Features -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-brown text-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-center mb-12">Why Visit Tarangire</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="feature in features" :key="feature.title" class="text-center">
            <div class="w-16 h-16 bg-safari-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">{{ feature.title }}</h3>
            <p class="text-white/80">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Best Time to Visit -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-12">Best Time to Visit</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-safari-orange rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-2xl font-heading font-bold text-safari-brown">Dry Season (June-October)</h3>
            </div>
            <p class="text-gray-700 mb-4">
              The best time to visit Tarangire. Wildlife concentrates around the Tarangire River, making 
              game viewing exceptional. Massive elephant herds, predators, and diverse wildlife gather at 
              water sources.
            </p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-safari-orange mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Peak elephant viewing</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-safari-orange mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Excellent predator sightings</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-safari-orange mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Clear skies for photography</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-safari-orange/70 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-heading font-bold text-safari-brown">Wet Season (November-May)</h3>
            </div>
            <p class="text-gray-700 mb-4">
              The green season brings lush landscapes and excellent bird watching. Wildlife disperses across 
              the park, but you'll enjoy fewer crowds and lower prices. Great for photography with dramatic 
              skies.
            </p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-safari-orange mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Spectacular bird watching</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-safari-orange mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Lush green landscapes</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-safari-orange mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Lower rates and fewer tourists</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Photo Gallery -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-brown">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-white text-center mb-4">Tarangire in Pictures</h2>
        <p class="text-white/70 text-center mb-12 max-w-2xl mx-auto">Elephant paradise, ancient baobabs and remarkable wildlife � captured in the wild</p>

        <!-- Featured large + 4 grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <div class="relative h-96 rounded-2xl overflow-hidden group">
            <img :src="getImageUrl(galleryPhotos[0].image)" :alt="galleryPhotos[0].caption"
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <p class="text-white font-semibold text-lg">{{ galleryPhotos[0].caption }}</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="(photo, index) in galleryPhotos.slice(1, 5)" :key="index"
                 class="relative h-44 rounded-xl overflow-hidden group">
              <img :src="getImageUrl(photo.image)" :alt="photo.caption"
                   class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute bottom-0 left-0 right-0 p-3">
                  <p class="text-white font-semibold text-sm">{{ photo.caption }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom row -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div v-for="(photo, index) in galleryPhotos.slice(5)" :key="'bot-'+index"
               class="relative h-64 rounded-xl overflow-hidden group">
            <img :src="getImageUrl(photo.image)" :alt="photo.caption"
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-0 left-0 right-0 p-4">
                <p class="text-white font-semibold">{{ photo.caption }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-orange">
      <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-4xl font-heading font-bold text-white mb-6">Ready to Explore Tarangire?</h2>
        <p class="text-xl text-white/90 mb-8">
          Join us for an unforgettable safari experience in the land of giants
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a :href="$basePath + '/itineraries'" class="bg-white text-safari-orange px-8 py-4 rounded-lg font-semibold hover:bg-safari-white transition transform hover:scale-105">
            View Safari Packages
          </a>
          <a :href="$basePath + '/contact'" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-safari-orange transition">
            Contact Us
          </a>
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

const breadcrumbItems = [
  { label: 'Home', href: '/wts' },
  { label: 'Destinations', href: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { label: 'Tarangire', href: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' }
];

const wildlife = [
  {
    name: 'African Elephants',
    description: 'Home to over 3,000 elephants, the largest concentration in Tanzania. Witness massive herds gathering at the river.',
    image: 'images/tarangire/pexels-dirk-pothen-2149332904-32509132.jpg'
  },
  {
    name: 'Tree-Climbing Lions',
    description: 'Spot the rare behavior of lions resting in acacia trees, a unique sight in Tarangire.',
    image: 'images/tarangire/pexels-gsn-travel-28359728.jpg'
  },
  {
    name: 'Rare Antelope Species',
    description: 'See fringe-eared oryx, lesser kudu, and gerenuk - species rarely found in other northern parks.',
    image: 'images/tarangire/pexels-kureng-workx-2546437-13242021.jpg'
  }
];

const galleryPhotos = [
  { image: 'images/tarangire/pexels-dirk-pothen-2149332904-30629351.jpg', caption: 'Tarangire River at Sunset' },
  { image: 'images/tarangire/pexels-bgbennett-19986844.jpg', caption: 'Elephant Herd by the River' },
  { image: 'images/tarangire/pexels-dirk-pothen-2149332904-32509132.jpg', caption: 'Giants of Tarangire' },
  { image: 'images/tarangire/pexels-gsn-travel-28359728.jpg', caption: 'Lions in the Acacia' },
  { image: 'images/tarangire/pexels-kureng-workx-2546437-13242021.jpg', caption: 'Rare Antelope Species' },
  { image: 'images/tarangire/pexels-alex-ning-523843601-33650626.jpg', caption: 'Ancient Baobab Trees' },
  { image: 'images/tarangire/pexels-tanzania-wild-sky-986912744-20179671.jpg', caption: 'Dry Season Wildlife' },
  { image: 'images/tarangire/pexels-tanzania-wild-sky-986912744-20179674.jpg', caption: 'Birds of Tarangire' },
  { image: 'images/tarangire/pexels-uladzimir-shelhunou-1682630-12929517.jpg', caption: 'African Landscape' }
];

const features = [
  {
    title: 'Massive Elephant Herds',
    description: 'Witness herds of up to 300 elephants during the dry season'
  },
  {
    title: 'Ancient Baobab Trees',
    description: 'Iconic landscape with centuries-old baobab trees'
  },
  {
    title: 'Diverse Wildlife',
    description: 'Over 550 bird species and rare antelope varieties'
  },
  {
    title: 'Less Crowded',
    description: 'Enjoy a more intimate safari experience'
  },
  {
    title: 'Year-Round Destination',
    description: 'Great wildlife viewing in both wet and dry seasons'
  },
  {
    title: 'Easy Access',
    description: 'Just 2 hours drive from Arusha'
  }
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
