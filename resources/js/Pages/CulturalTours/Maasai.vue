<template>
  <MainLayout>
    <Breadcrumb :items="breadcrumbItems" />
    
    <!-- Hero Section -->
    <section class="relative h-[70vh] overflow-hidden">
      <img :src="getImageUrl('images/walters-tours-safaris-maasai-village-cultural.png')" 
           alt="Maasai Village Cultural Tour" class="w-full h-full object-cover ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-r from-safari-brown/95 via-safari-brown/70 to-transparent"></div>
      <div class="absolute inset-0 flex items-center px-4 md:px-8 lg:px-12">
        <div class="container mx-auto max-w-7xl">
          <div class="inline-flex items-center gap-2 bg-safari-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762z"/>
            </svg>
            Cultural Experience
          </div>
          <h1 class="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            Maasai Village<br class="hidden md:block" /> Visiting
          </h1>
          <p class="text-xl md:text-2xl text-white/95 max-w-3xl mb-8 leading-relaxed">
            Step into the world of East Africa's most iconic warrior tribe and experience their unique culture, customs and traditions firsthand
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a :href="$basePath + '/contact'" class="inline-block bg-safari-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-safari-orange/90 transition transform hover:scale-105 text-center">
              Book This Experience
            </a>
            <a href="#villages" class="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-safari-brown transition text-center">
              Explore Locations
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Introduction -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="inline-block bg-safari-orange/10 text-safari-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Meet the Maasai
            </div>
            <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown mb-6 leading-tight">
              The Iconic Warriors of East Africa
            </h2>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              A lot of us have grown up watching documentaries about the African wild on National Geographic or Discovery channel. Whenever the cameras descend into the plains of East Africa, one warrior tribe dressed in brilliant reds and blues, almost always pops up on screens � <strong class="text-safari-brown">the Maasai</strong>.
            </p>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              These semi-nomadic pastoralists live in and around the rift valley region of Northern Tanzania and Southern Kenya. On your safari trip, as you drive towards the national parks in this region, you will see the colorful Maasai herding their cattle or trying to sell you their artwork.
            </p>
            <p class="text-lg text-gray-600 leading-relaxed">
              But did you know you can also <strong class="text-safari-brown">visit their village on your safari tour</strong> and interact and get a glimpse into their unique culture, customs and practices? If that sounds interesting, read on to know more about what to expect on a Maasai village tour and see if you would like to add one to your itinerary.
            </p>
          </div>
          <div class="relative">
            <div class="rounded-2xl overflow-hidden shadow-2xl">
              <img :src="getImageUrl('images/walters-tours-safaris-maasai-village-cultural.png')" 
                   alt="Maasai warriors in traditional attire"
                   class="w-full h-[500px] object-cover" />
            </div>
            <!-- Floating stat card -->
            <div class="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border-l-4 border-safari-orange">
              <div class="text-3xl font-heading font-bold text-safari-brown">1,000+</div>
              <div class="text-gray-500 text-sm">Years of Culture & Heritage</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Village Locations -->
    <section id="villages" class="py-20 px-4 md:px-8 lg:px-12 bg-white">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-16">
          <div class="inline-block bg-safari-orange/10 text-safari-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Visit Locations
          </div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown mb-4">
            Where Can You Visit The Maasai Villages?
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover authentic Maasai village experiences at multiple locations across Northern Tanzania
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Ngorongoro -->
          <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
            <div class="relative h-56 overflow-hidden">
              <img :src="getImageUrl('images/walters-tours-safaris-hu-chen-t-7Mlatf9iI-unsplash.jpg')" 
                   alt="Ngorongoro Crater Rim"
                   class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-safari-brown/80 to-transparent"></div>
              <div class="absolute top-4 right-4 bg-safari-orange text-white px-3 py-1 rounded-full text-xs font-bold">
                Most Popular
              </div>
              <div class="absolute bottom-4 left-4">
                <h3 class="text-2xl font-heading font-bold text-white">Ngorongoro Crater Rim</h3>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-600 leading-relaxed mb-4">
                This is the most frequently visited Maasai village, easily accessible by tourists visiting Ngorongoro for crater tours or just passing through to get to Serengeti. Also the most scenic of all, given its location on the crater rim.
              </p>
              <div class="flex items-center gap-2 text-sm text-safari-orange font-semibold">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
                Near Ngorongoro Conservation Area
              </div>
            </div>
          </div>

          <!-- Lake Natron -->
          <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
            <div class="relative h-56 overflow-hidden">
              <img :src="getImageUrl('images/walters-tours-safaris-pexels-tanzania-wild-sky-986912744-20179685.jpg')" 
                   alt="Lake Natron Region"
                   class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-safari-brown/80 to-transparent"></div>
              <div class="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                Most Authentic
              </div>
              <div class="absolute bottom-4 left-4">
                <h3 class="text-2xl font-heading font-bold text-white">Lake Natron Region</h3>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-600 leading-relaxed mb-4">
                The Maasai villages here are permanent, making this visit feel more authentic compared to other locations. You'll see how cows are milked, witness the mudding of Maasai houses, see how they construct their stoves and get a chance to take part. Tours can last up to 6 hours.
              </p>
              <div class="flex items-center gap-2 text-sm text-safari-orange font-semibold">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
                Near Lake Natron
              </div>
            </div>
          </div>

          <!-- Other Locations -->
          <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
            <div class="relative h-56 overflow-hidden">
              <img :src="getImageUrl('images/walters-tours-safaris-denice-alex-LD6WgJlIpmk-unsplash.jpg')" 
                   alt="Other Maasai Village Locations"
                   class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-safari-brown/80 to-transparent"></div>
              <div class="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                Convenient
              </div>
              <div class="absolute bottom-4 left-4">
                <h3 class="text-2xl font-heading font-bold text-white">Other Locations</h3>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-600 leading-relaxed mb-4">
                Other Maasai villages can be found near Mto Wa Mbu, Tarangire, Arusha, Mikumi National Park, Serengeti-Ngorongoro border, and Moshi. These are mostly located on the way to important sites and are perfect if you can't fit the other locations into your itinerary.
              </p>
              <div class="flex items-center gap-2 text-sm text-safari-orange font-semibold">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
                Multiple Locations
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What to Expect -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-safari-brown to-safari-brown/95">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-16">
          <div class="inline-block bg-safari-orange text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            The Experience
          </div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            What to Expect on Your Visit
          </h2>
          <p class="text-lg text-white/80 max-w-2xl mx-auto">
            Immerse yourself in the vibrant Maasai culture with these authentic experiences
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(item, index) in experiences" :key="index" 
               class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 group">
            <div class="w-16 h-16 bg-safari-orange text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg v-if="item.id === 'village'" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
              <svg v-else-if="item.id === 'dance'" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <svg v-else-if="item.id === 'crafts'" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11a5 5 0 00-10 0c0 1.02.164 2 .465 2.922m1.965-1.965a10 10 0 0113.328-1.154l1.32 1.32m0 0l2-2m-2 2l2-2"/>
              </svg>
              <svg v-else-if="item.id === 'daily'" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"/>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold text-white mb-3">{{ item.title }}</h3>
            <p class="text-white/70 leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Photo Gallery Highlights -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-16">
          <div class="inline-block bg-safari-orange/10 text-safari-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Cultural Highlights
          </div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown mb-4">
            A Glimpse Into Maasai Life
          </h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="(highlight, index) in highlights" :key="index" 
               :class="['relative rounded-2xl overflow-hidden group cursor-pointer', index === 0 ? 'md:col-span-2 md:row-span-2' : '']">
            <img :src="highlight.image" :alt="highlight.title" 
                 :class="['w-full object-cover transition-transform duration-700 group-hover:scale-110', index === 0 ? 'h-full min-h-[300px]' : 'h-48 md:h-56']" />
            <div class="absolute inset-0 bg-gradient-to-t from-safari-brown/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h4 class="text-white font-heading font-bold">{{ highlight.title }}</h4>
              <p class="text-white/80 text-sm">{{ highlight.subtitle }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-orange relative overflow-hidden">
      <!-- Decorative -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div class="container mx-auto max-w-4xl text-center relative z-10">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
          Add a Maasai Village Visit to Your Safari
        </h2>
        <p class="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Experience the vibrant culture, traditional dances, and warm hospitality of the Maasai people � an unforgettable addition to any Tanzania safari itinerary
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a :href="$basePath + '/contact'" class="bg-white text-safari-orange px-8 py-4 rounded-lg font-semibold hover:bg-safari-white transition transform hover:scale-105">
            Plan Your Cultural Tour
          </a>
          <a :href="$basePath + '/cultural-tours/hadza'" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-safari-orange transition">
            Explore Hadzabe Tribe Visit ?
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
  { label: 'Cultural Tours', href: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { label: 'Maasai Village', href: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' }
];

const experiences = [
  {
    id: 'village',
    title: 'Village Tour',
    description: 'Walk through the traditional boma (village), see how homes are built with mud, sticks and cow dung, and learn about their community structure.'
  },
  {
    id: 'dance',
    title: 'Traditional Dances',
    description: 'Watch and participate in the iconic Maasai jumping dance (Adumu) and other traditional ceremonies performed by warriors.'
  },
  {
    id: 'crafts',
    title: 'Handmade Crafts',
    description: 'Browse and purchase beautiful handmade beadwork, jewelry, carvings and traditional artwork directly from Maasai artisans.'
  },
  {
    id: 'daily',
    title: 'Daily Life',
    description: 'See how cows are milked, witness house construction, learn about stove-building and participate in everyday Maasai activities.'
  },
];

const highlights = [
  {
    image: getImageUrl('images/walters-tours-safaris-maasai-village-cultural.png'),
    title: 'Maasai Warriors',
    subtitle: 'Traditional reds and blues'
  },
  {
    image: getImageUrl('images/walters-tours-safaris-hu-chen-t-7Mlatf9iI-unsplash.jpg'),
    title: 'Ngorongoro Crater',
    subtitle: 'Scenic village location'
  },
  {
    image: getImageUrl('images/walters-tours-safaris-denice-alex-LD6WgJlIpmk-unsplash.jpg'),
    title: 'Cattle Herding',
    subtitle: 'Pastoralist traditions'
  },
  {
    image: getImageUrl('images/walters-tours-safaris-pexels-tanzania-wild-sky-986912744-20179685.jpg'),
    title: 'Open Savanna',
    subtitle: 'The Rift Valley home'
  },
  {
    image: getImageUrl('images/walters-tours-safaris-magdalena-kula-manchee-nVUZO1gc_-o-unsplash.jpg'),
    title: 'Beadwork & Crafts',
    subtitle: 'Traditional artistry'
  },
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
