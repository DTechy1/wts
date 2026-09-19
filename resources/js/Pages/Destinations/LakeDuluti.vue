<template>
  <MainLayout>
    <Breadcrumb :items="breadcrumbItems" />
    
    <!-- Hero Section -->
    <section class="relative h-[60vh] overflow-hidden">
      <img :src="getImageUrl('images/lake-duluti/Duluti-16-1920x1200.webp')" 
           alt="Lake Duluti" 
           class="w-full h-full object-cover ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-b from-safari-brown/70 via-safari-brown/50 to-safari-brown/90"></div>
      <div class="absolute inset-0 flex items-center justify-center text-center px-4">
        <div class="max-w-4xl">
          <h1 class="text-5xl md:text-6xl font-heading font-bold text-white mb-4">Lake Duluti</h1>
          <p class="text-xl md:text-2xl text-white/90">Hidden Gem - Volcanic Crater Lake</p>
        </div>
      </div>
    </section>
    
    <!-- Overview Section -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-heading font-bold text-safari-brown mb-6">Serene Volcanic Crater Lake</h2>
            <p class="text-lg text-gray-700 mb-4 leading-relaxed">
              Lake Duluti is a stunning volcanic crater lake located just 14 km from Arusha town. This hidden 
              gem offers a peaceful escape from the bustling safari circuits, perfect for a relaxing day trip 
              or a gentle introduction to Tanzania's natural beauty.
            </p>
            <p class="text-lg text-gray-700 mb-6 leading-relaxed">
              Surrounded by lush forest and towering trees, the lake is home to diverse birdlife and offers 
              activities like canoeing, forest walks, and bird watching. The tranquil atmosphere makes it 
              ideal for nature lovers seeking a quieter experience.
            </p>
            
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-safari-orange/10 p-4 rounded-lg">
                <div class="text-3xl font-bold text-safari-orange mb-1">63 hectares</div>
                <div class="text-sm text-gray-600">Lake Size</div>
              </div>
              <div class="bg-safari-orange/10 p-4 rounded-lg">
                <div class="text-3xl font-bold text-safari-orange mb-1">130+ Species</div>
                <div class="text-sm text-gray-600">Bird Species</div>
              </div>
              <div class="bg-safari-orange/10 p-4 rounded-lg">
                <div class="text-3xl font-bold text-safari-orange mb-1">14 km</div>
                <div class="text-sm text-gray-600">From Arusha</div>
              </div>
              <div class="bg-safari-orange/10 p-4 rounded-lg">
                <div class="text-3xl font-bold text-safari-orange mb-1">1,350m</div>
                <div class="text-sm text-gray-600">Altitude</div>
              </div>
            </div>
          </div>
          
          <div class="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img :src="getImageUrl('images/lake-duluti/Duluti-2-1920x1200.webp')" 
                 alt="Lake Duluti Scenery" 
                 class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Activities Section -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-12">Activities at Lake Duluti</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="activity in activities" :key="activity.name" class="bg-safari-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
            <div class="relative h-48 overflow-hidden group">
              <img :src="getImageUrl(activity.image)" :alt="activity.name" 
                   class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-heading font-bold text-safari-brown mb-2">{{ activity.name }}</h3>
              <p class="text-gray-600">{{ activity.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Key Features -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-brown text-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-center mb-12">Why Visit Lake Duluti</h2>
        
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
    
    <!-- Wildlife & Nature -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-12">Wildlife & Nature</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-safari-orange rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-heading font-bold text-safari-brown">Birdlife</h3>
            </div>
            <p class="text-gray-700 mb-4">
              Lake Duluti is a paradise for bird watchers with over 130 recorded species. The surrounding 
              forest and lake attract both resident and migratory birds.
            </p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-safari-orange mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Silvery-cheeked Hornbill</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-safari-orange mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>African Fish Eagle</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-safari-orange mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Crowned Eagle</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-safari-orange mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Various Sunbird species</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-safari-orange rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-2xl font-heading font-bold text-safari-brown">Forest & Flora</h3>
            </div>
            <p class="text-gray-700 mb-4">
              The crater is surrounded by dense indigenous forest with towering trees and diverse plant life, 
              creating a lush green sanctuary.
            </p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-safari-orange mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Ancient fig trees</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-safari-orange mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Blue monkeys in the canopy</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-safari-orange mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Medicinal plants used by locals</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-safari-orange mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Colorful butterflies</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Photo Gallery -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-brown">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-white text-center mb-4">Lake Duluti in Pictures</h2>
        <p class="text-white/70 text-center mb-12 max-w-2xl mx-auto">A serene volcanic crater lake surrounded by lush forest � Arusha's hidden gem</p>

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
        <h2 class="text-4xl font-heading font-bold text-white mb-6">Ready to Explore Lake Duluti?</h2>
        <p class="text-xl text-white/90 mb-8">
          Perfect for a relaxing day trip or pre/post-safari experience
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a :href="$basePath + '/itineraries'" class="bg-white text-safari-orange px-8 py-4 rounded-lg font-semibold hover:bg-safari-white transition transform hover:scale-105">
            View Day Trips
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
  { label: 'Lake Duluti', href: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' }
];

const activities = [
  {
    name: 'Canoeing',
    description: 'Paddle across the serene crater lake and enjoy the peaceful atmosphere. Perfect for couples and families.',
    image: 'images/lake-duluti/Duluti-09-1440x1200.webp'
  },
  {
    name: 'Forest Walks',
    description: 'Guided nature walks through the indigenous forest surrounding the lake. Learn about local flora and fauna.',
    image: 'images/lake-duluti/Lake-Duluti-1-scaled.jpg'
  },
  {
    name: 'Bird Watching',
    description: 'Spot over 130 bird species including hornbills, eagles, and colorful sunbirds in their natural habitat.',
    image: 'images/lake-duluti/fish-eagle-1.jpg'
  }
];

const galleryPhotos = [
  { image: 'images/lake-duluti/Duluti-16-1920x1200.webp', caption: 'Lake Duluti from Above' },
  { image: 'images/lake-duluti/Duluti-2-1920x1200.webp', caption: 'Serene Lake Waters' },
  { image: 'images/lake-duluti/Duluti-09-1440x1200.webp', caption: 'Canoeing on the Lake' },
  { image: 'images/lake-duluti/Lake-Duluti-1-scaled.jpg', caption: 'Lush Crater Rim' },
  { image: 'images/lake-duluti/fish-eagle-1.jpg', caption: 'African Fish Eagle' },
  { image: 'images/lake-duluti/BWA_2015_1JEH_2923_5D_3746-Kopie-2048x1366.webp', caption: 'Forest Canopy Walk' },
  { image: 'images/lake-duluti/Lake_Duluti_Blue_Monkey_25.jpg', caption: 'Blue Monkeys in the Trees' },
  { image: 'images/lake-duluti/Lake_Duluti_Coffee_Plantations_23.jpg', caption: 'Coffee Plantations' },
  { image: 'images/lake-duluti/Lake_Duluti_x_66.jpg', caption: 'Tranquil Lake Views' },
  { image: 'images/lake-duluti/Monitor-Lizard-scaled.jpg', caption: 'Monitor Lizard Sighting' }
];

const features = [
  {
    title: 'Close to Arusha',
    description: 'Just 14 km from town - perfect for a half-day trip'
  },
  {
    title: 'Peaceful Atmosphere',
    description: 'Escape the crowds and enjoy tranquil nature'
  },
  {
    title: 'Family Friendly',
    description: 'Safe and suitable for all ages and fitness levels'
  },
  {
    title: 'Affordable',
    description: 'Budget-friendly day trip option'
  },
  {
    title: 'Year-Round',
    description: 'Visit any time of year for a great experience'
  },
  {
    title: 'Cultural Experience',
    description: 'Learn about local traditions and medicinal plants'
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
