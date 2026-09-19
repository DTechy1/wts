<template>
  <MainLayout>
    <Breadcrumb :breadcrumbs="[{ name: 'Best Itineraries Collection' }]" />
    
    <section class="relative h-[500px] overflow-hidden">
      <img :src="getImageUrl('images/walters-tours-safaris-magdalena-kula-manchee-nVUZO1gc_-o-unsplash.jpg')" 
           alt="Best Itineraries" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-r from-safari-brown/95 to-safari-brown/70"></div>
      <div class="absolute inset-0 flex items-center px-4 md:px-8 lg:px-12">
        <div class="container mx-auto max-w-7xl">
          <h1 class="text-5xl md:text-7xl font-heading font-bold text-white mb-6">Best Itineraries Collection</h1>
          <p class="text-xl md:text-2xl text-white/95 max-w-3xl">Carefully crafted journeys for unforgettable experiences</p>
        </div>
      </div>
    </section>
    
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-heading font-bold text-safari-brown mb-4">Our Curated Itineraries</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Explore our handpicked collection of the best safari and adventure itineraries in Tanzania</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="itinerary in paginatedItineraries" :key="itinerary.name" 
               class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between">
            <div>
              <div class="relative h-72 overflow-hidden group">
                <img :src="itinerary.image" :alt="itinerary.name" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-safari-brown/95 via-safari-brown/50 to-transparent"></div>
                <div class="absolute top-4 right-4">
                  <span class="bg-safari-orange text-white px-4 py-2 rounded-full text-sm font-semibold">{{ itinerary.duration }}</span>
                </div>
                <div class="absolute bottom-0 left-0 right-0 p-6">
                  <h3 class="text-2xl font-heading font-bold text-white mb-2">{{ itinerary.name }}</h3>
                  <p class="text-white/90 text-sm">{{ itinerary.subtitle }}</p>
                </div>
              </div>
              <div class="p-6 pb-0">
                <p class="text-gray-700 mb-4 leading-relaxed text-sm">{{ itinerary.description }}</p>
                
                <div class="space-y-2 mb-6">
                  <div v-for="highlight in itinerary.highlights" :key="highlight" class="flex items-start gap-2">
                    <svg class="w-5 h-5 text-safari-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span class="text-sm text-gray-600">{{ highlight }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-6 pt-0">
              <a :href="itinerary.link" 
                 class="block w-full bg-safari-orange text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-safari-orange/90 transition">
                View Itinerary
              </a>
            </div>
          </div>
        </div>

        <!-- Pagination Controls -->
        <div v-if="totalPages > 1" class="flex justify-center items-center gap-2 mt-12">
          <button 
            @click="setPage(currentPage - 1)" 
            :disabled="currentPage === 1"
            class="px-4 py-2 rounded-lg font-semibold bg-white border border-gray-200 text-safari-brown hover:bg-safari-orange/10 hover:text-safari-orange disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Previous
          </button>
          <button 
            v-for="page in totalPages" 
            :key="page" 
            @click="setPage(page)"
            :class="['px-4 py-2 rounded-lg font-semibold transition', currentPage === page ? 'bg-safari-orange text-white' : 'bg-white border border-gray-200 text-safari-brown hover:bg-safari-orange/10 hover:text-safari-orange']"
          >
            {{ page }}
          </button>
          <button 
            @click="setPage(currentPage + 1)" 
            :disabled="currentPage === totalPages"
            class="px-4 py-2 rounded-lg font-semibold bg-white border border-gray-200 text-safari-brown hover:bg-safari-orange/10 hover:text-safari-orange disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Next
          </button>
        </div>
      </div>
    </section>
    
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-brown">
      <div class="container mx-auto max-w-7xl text-center">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Ready to Start Your Adventure?</h2>
        <p class="text-xl text-white/95 mb-10 max-w-3xl mx-auto">Let our experts help you customize the perfect itinerary for your Tanzania adventure</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a :href="$basePath + '/contact'" class="bg-safari-orange text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-safari-orange/90 transition transform hover:scale-105 shadow-xl">
            Contact Our Experts
          </a>
          <a :href="$basePath + '/itineraries'" class="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-safari-brown transition shadow-xl">
            View All Packages
          </a>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import { ref, computed } from 'vue';
import MainLayout from '../Layouts/MainLayout.vue';
import Breadcrumb from '../Components/Breadcrumb.vue';
import { useAssets } from '../composables/useAssets';

const { getImageUrl } = useAssets();

const currentPage = ref(1);
const itemsPerPage = 9;

const paginatedItineraries = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return itineraries.slice(start, start + itemsPerPage);
});

const totalPages = computed(() => Math.ceil(itineraries.length / itemsPerPage));

const setPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    window.scrollTo({ top: 350, behavior: 'smooth' });
  }
};

const itineraries = [
  {
    name: 'Arusha National Park Safari',
    duration: 'Day Trip',
    subtitle: 'Walking Safari & Wildlife',
    image: getImageUrl('images/Arusha/etienne-delorieux-NZpl4yxYcMg-unsplash.jpg'),
    description: 'Located between Kilimanjaro and Mount Meru, Arusha National Park offers impressive variety despite its small size. Perfect for families and walking safaris.',
    highlights: [
      'Only 10-40 minutes from Arusha city',
      'Walking safari with armed ranger available',
      'See Mount Meru, Momella Lakes & Ngurdoto Crater',
      'No big predators - perfect for family safaris'
    ],
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/itineraries/arusha-serengeti-central'
  },
  {
    name: '2 Days Big 5 Safari from Zanzibar',
    duration: '2 Days',
    subtitle: 'Ngorongoro & Tarangire',
    image: getImageUrl('images/ngorongoro/pexels-alexandra-karnasopoulos-1962842-7205279.jpg'),
    description: 'Experience the best of Tanzania\'s wildlife in just 2 days! Fly from Zanzibar to explore Tarangire\'s elephant herds and descend into Ngorongoro Crater to see the Big 5.',
    highlights: [
      'Flight tickets from Zanzibar included',
      'See the Big 5 in Ngorongoro Crater',
      'Giant elephant herds in Tarangire',
      'Lodge accommodation & all meals included'
    ],
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/itineraries/ngorongoro-tarangire-zanzibar'
  },
  {
    name: '2 Days Ndutu with Tarangire',
    duration: '2 Days',
    subtitle: 'Great Migration & Elephant Paradise',
    image: getImageUrl('images/tarangire/pexels-tanzania-wild-sky-986912744-20179671.jpg'),
    description: 'Witness the Great Migration calving season in Ndutu and explore Tarangire\'s elephant herds. Perfect timing between January-March for predator action and newborn wildebeest.',
    highlights: [
      '6 species of big cats in Ndutu',
      'Great Migration route (Feb-April)',
      'Massive elephant herds in Tarangire',
      '4x4 Land Cruiser & professional guide'
    ],
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/itineraries/two-days-ndutu-tarangire'
  },
  {
    name: '5 Days Tanzania Safari',
    duration: '5 Days',
    subtitle: 'Tarangire, Serengeti, Ngorongoro & Lake Manyara',
    image: getImageUrl('images/serengeti/pexels-bgbennett-20095156.jpg'),
    description: 'The ultimate Tanzania safari experience! Journey through four incredible national parks - from elephant paradise of Tarangire to the endless Serengeti plains, Ngorongoro Crater, and Lake Manyara.',
    highlights: [
      'Visit 4 national parks in 5 days',
      'See the Big 5 and Great Migration route',
      'Private luxury 4x4 safari vehicle',
      'All meals, accommodation & park fees included'
    ],
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/itineraries/five-days-tanzania-safari'
  },
  {
    name: '10 Days Luxury Safari Experience',
    duration: '10 Days',
    subtitle: 'The Ultimate Tanzania Journey',
    image: getImageUrl('images/serengeti/pexels-alex-ning-523843601-33650533.jpg'),
    description: 'The complete luxury safari experience! Visit 5 national parks, meet the Hadzabe tribe, explore waterfalls, spend 3 days in Serengeti, and stay in premium lodges including Four Seasons.',
    highlights: [
      'Luxury lodges including Four Seasons Serengeti',
      'Cultural experience with Hadzabe tribe',
      '3 full days exploring Serengeti',
      'Visit 5 parks: Serengeti, Ngorongoro, Manyara, Tarangire, Eyasi'
    ],
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/itineraries/ten-days-luxury-safari'
  },
  {
    name: 'Ngorongoro Crater Day Trip',
    duration: 'Day Trip',
    subtitle: 'World\'s Largest Unbroken Caldera',
    image: getImageUrl('images/ngorongoro/pexels-alexandra-karnasopoulos-1962842-7205279.jpg'),
    description: 'Experience the eighth wonder of the world in a single day! Early morning descent into the crater floor for a 6-hour game drive. See the Big 5 including rare black rhinos and enjoy lunch at the hippo pool.',
    highlights: [
      'Descend 600m into the crater floor',
      'Spot rare black rhinoceros',
      'Picnic lunch at Hippo Pool',
      'Private 4x4 Land Cruiser with expert guide'
    ],
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/itineraries/ngorongoro-crater-day-trip'
  },
  {
    name: '7 Days Zanzibar',
    duration: '7 Days',
    subtitle: 'Spice Farms, Dolphins, Stone Town & Beach Paradise',
    image: getImageUrl('images/7 days zanzibar/pexels-kenneth-christopher-248506783-16571478.jpg'),
    description: 'Experience the complete Zanzibar adventure with this comprehensive 7-day package. From the historic Stone Town to pristine beaches, from swimming with dolphins to exploring spice farms.',
    highlights: [
      'Visit Prison Island with giant tortoises',
      'Snorkel at Mnemba Island with dolphins',
      'Enjoy Safari Blue trip in Menai Bay',
      'Dine at the iconic Rock Restaurant'
    ],
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/itineraries/zanzibar-7-days'
  },
  {
    name: '2 Days Budget Vacation Zanzibar',
    duration: '2 Days',
    subtitle: 'Stone Town, Prison Island, Dolphins & Turtles',
    image: getImageUrl('images/2 days zanzibar/danai-tsoutreli-gdaHl7mDrpw-unsplash.jpg'),
    description: 'Experience the highlights of Zanzibar in just 2 days with this budget-friendly package. Explore the historic Stone Town, visit Prison Island with giant tortoises, and swim with dolphins.',
    highlights: [
      'Explore authentic culture in Stone Town',
      'Feed giant tortoises on Prison Island',
      'Swim with dolphins at Mnemba Island',
      'Affordable private tour'
    ],
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/itineraries/zanzibar-2-days-budget'
  },
  {
    name: '5 Days Couple Experience Zanzibar',
    duration: '5 Days',
    subtitle: 'Romantic Beaches, Dolphins & Sunset Cruises',
    image: getImageUrl('images/couple safari/lidia-stawinska-Oc4u_mYkimk-unsplash.jpg'),
    description: 'Experience the perfect romantic getaway in Zanzibar with this 5-day couple package designed for love and adventure. From swimming with dolphins to sunset dhow cruises.',
    highlights: [
      'Visit Prison Island with giant tortoises',
      'Relax on Nakupenda sandbank',
      'Mnemba Island dolphins tour',
      'Safari Blue trip'
    ],
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/itineraries/zanzibar-5-days-couple'
  },
  {
    name: '10 Days Paradise Zanzibar',
    duration: '10 Days',
    subtitle: 'Complete Zanzibar Experience - Culture, Nature & Beaches',
    image: getImageUrl('images/10 days paradise/nichika-sakurai-eci0Mwtbzcw-unsplash.jpg'),
    description: 'Discover the definition of paradise with this comprehensive 10-day Zanzibar itinerary. From the historic Stone Town to pristine northern beaches, from rare red colobus monkeys to dolphin safaris.',
    highlights: [
      'Spice & Fruit Plantation Tour',
      'Visit Prison Island with giant tortoises',
      'Jozani Forest red colobus monkeys',
      'Mnemba Island Atoll snorkeling'
    ],
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/itineraries/zanzibar-10-days-paradise'
  },
  {
    name: '1 Day Tarangire Safari',
    duration: 'Day Trip',
    subtitle: 'Elephant Paradise & Baobab Trees',
    image: getImageUrl('images/tarangire/pexels-dirk-pothen-2149332904-32509132.jpg'),
    description: 'Experience Tarangire National Park, famous for its giant baobab trees and large elephant herds. This full-day safari offers incredible wildlife viewing including lions, giraffes, zebras, and over 500 bird species.',
    highlights: [
      'Famous for giant baobab trees',
      'Large elephant herds',
      'Big Five wildlife viewing',
      'Morning and afternoon game drives'
    ],
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/itineraries/tarangire-1-day'
  },
  {
    name: 'Day to Serval Wildlife Zoo',
    duration: 'Day Trip',
    subtitle: 'Luxury Eco-Tourism Lodge & Wildlife Haven',
    image: getImageUrl('images/walters-tours-safaris-serval-wildlife.png'),
    description: 'A luxury Eco-tourism lodge and wildlife haven tucked away in the Siha District of Kilimanjaro Region. Offering unforgettable direct interactions with a variety of free-roaming wild animals.',
    highlights: [
      'Meet African Lions and Masai Giraffes',
      'See Colobus Monkeys and Bat-eared Foxes',
      '5-Star Villas with Mount Kilimanjaro views',
      '3000+ endemic flora species'
    ],
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/itineraries/serval-wildlife-zoo'
  },
  {
    name: '3 Days Dar es Salaam to Nyerere Park',
    duration: '3 Days',
    subtitle: 'Selous Game Reserve - Boat Safari & Game Drives',
    image: getImageUrl('images/walters-tours-safaris-sammy-wong-wzeGc7Uqopc-unsplash.jpg'),
    description: 'Experience the pristine wilderness of Nyerere (Selous) Game Reserve, one of Africa\'s largest protected areas. This 3-day safari offers incredible wildlife viewing including boat safaris on the Rufiji River.',
    highlights: [
      'Boat safari on Rufiji River',
      'Spot hippos, crocodiles, and elephants',
      'Full-day game drives',
      'Walking safari with bush man'
    ],
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/itineraries/nyerere-park-3-days'
  },
  {
    name: '15 Day Safari and Zanzibar',
    duration: '15 Days',
    subtitle: 'Ultimate Tanzania Safari & Zanzibar Beach Experience',
    image: getImageUrl('images/walters-tours-safaris-sammy-wong-wzeGc7Uqopc-unsplash.jpg'),
    description: 'Experience the ultimate Tanzania adventure with this comprehensive 15-day safari and Zanzibar package. From the vast Serengeti plains to the pristine beaches of Zanzibar, witness the Big Five and the Great Migration.',
    highlights: [
      'Visit Tarangire, Lake Manyara, Serengeti, Ngorongoro',
      'Witness the Big Five and Great Migration',
      'Relax on Zanzibar\'s northern and eastern beaches',
      'Explore Stone Town UNESCO World Heritage Site'
    ],
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/itineraries/safari-zanzibar-15-days'
  },
  {
    name: 'Day Hiking Kilimanjaro',
    duration: 'Day Trip',
    subtitle: 'Mandara Hut & Maundi Crater - No Summit Required',
    image: getImageUrl('images/walters-tours-safaris-kilimanjaro-summit.png'),
    description: 'Experience the beauty of Mount Kilimanjaro without committing to a full summit climb. This day hike takes you through the lush rainforest to Mandara Hut with stunning views of Mount Kilimanjaro and Kenya from Maundi Crater.',
    highlights: [
      'Hike to Mandara Hut (2700m)',
      'Spot black and white colobus monkeys',
      'Stunning views from Maundi Crater',
      'No summit required - perfect for all fitness levels'
    ],
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/itineraries/kilimanjaro-day-hike'
  },
  {
    name: '4 Days Materuni Waterfall and Safari',
    duration: '4 Days',
    subtitle: 'Waterfalls, Coffee Plantation, Safari & Hot Springs',
    image: getImageUrl('images/walters-tours-safaris-materuni-waterfall.png'),
    description: 'Experience the perfect blend of wildlife safari and cultural immersion. Visit Materuni waterfalls, explore coffee plantations with the Chagga tribe, enjoy game drives in Tarangire and Lake Manyara, and relax at Kikuletwa hot springs.',
    highlights: [
      'Hike to Materuni waterfalls',
      'Coffee plantation tour with Chagga tribe',
      'Game drives in Tarangire and Lake Manyara',
      'Relax at Kikuletwa hot springs'
    ],
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/itineraries/materuni-waterfall-safari-4-days'
  },
  {
    name: 'Camping Safari Budget Serengeti & Chemka',
    duration: '4 Days',
    subtitle: 'Serengeti, Ngorongoro & Kikuletwa Hot Springs',
    image: getImageUrl('images/serengeti/pexels-bgbennett-20095156.jpg'),
    description: 'Experience the ultimate budget camping safari adventure through Serengeti National Park, Ngorongoro Crater, and Kikuletwa Hot Springs. This 4-day budget camping safari offers incredible wildlife viewing including the Big Five.',
    highlights: [
      'Private land cruiser',
      'All park entrance fees included',
      'Budget camping accommodation',
      'Kikuletwa hot springs relaxation'
    ],
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/itineraries/camping-safari-serengeti-chemka'
  }
];
</script>
