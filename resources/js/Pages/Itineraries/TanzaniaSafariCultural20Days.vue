<template>
  <MainLayout>
    <Breadcrumb :breadcrumbs="[
      { name: 'Itineraries', href: '/itineraries' },
      { name: '20 Days Tanzania Safari & Cultural Experience' }
    ]" />

    <!-- Hero -->
    <section class="relative h-[70vh] min-h-[520px] overflow-hidden">
      <img :src="getImageUrl('images/9 days safari cultural/pexels-alexn-33650626.jpg')"
           alt="20 Days Tanzania Safari & Cultural Experience" class="w-full h-full object-cover ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-b from-safari-brown/50 via-safari-brown/60 to-safari-brown/95"></div>
      <div class="absolute inset-0 flex items-end pb-16 px-4 md:px-8 lg:px-12">
        <div class="container mx-auto max-w-7xl">
          <div class="inline-flex items-center gap-2 bg-safari-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Wildlife • Maasai Culture • Hadzabe Tribe • Materuni Waterfalls • Mount Kilimanjaro
          </div>
          <h1 class="text-4xl md:text-6xl font-heading font-bold text-white mb-4 leading-tight">20 Days Tanzania Safari & Cultural Experience</h1>
          <p class="text-xl md:text-2xl text-white/90 max-w-2xl mb-8">Tarangire · Serengeti · Ngorongoro · Lake Manyara · Maasai · Hadzabe · Materuni · Arusha NP</p>
          <div class="flex flex-wrap gap-4">
            <span v-for="badge in heroBadges" :key="badge"
                  class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
              {{ badge }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Stats -->
    <section class="py-10 px-4 md:px-8 lg:px-12 bg-safari-orange">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="stat in quickStats" :key="stat.label" class="text-center text-white">
            <div class="text-3xl md:text-4xl font-heading font-bold mb-1">{{ stat.value }}</div>
            <div class="text-sm text-white/80 font-medium">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tour Overview -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-10">
          <div class="inline-block bg-safari-orange/10 text-safari-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Tour Overview</div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-safari-brown mb-6">The Complete Tanzania Route</h2>
        </div>
        <div class="max-w-4xl mx-auto space-y-4 text-gray-600 leading-relaxed">
          <p>Discover the very best of Tanzania on this unforgettable 20-day safari adventure. Explore world-famous national parks, encounter Africa's incredible wildlife, discover traditional cultures, and experience the spectacular landscapes of northern Tanzania.</p>
          <p>This journey combines exciting game drives in Tarangire, Serengeti, Ngorongoro Crater and Lake Manyara with authentic cultural experiences among the Maasai and Hadzabe communities.</p>
          <p>Enjoy a visit to Materuni Waterfalls, discover the traditions of the Chagga people, experience a traditional coffee-making demonstration, and admire breathtaking views of Mount Kilimanjaro.</p>
          <p>From the endless plains of the Serengeti to the ancient traditions of Tanzania's indigenous communities, this adventure offers an unforgettable combination of wildlife, culture, nature and discovery.</p>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-2 md:gap-0 mt-12">
          <template v-for="(stop, index) in routeStops" :key="stop">
            <div class="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-md border border-safari-orange/20">
              <span class="w-7 h-7 rounded-full bg-safari-orange text-white text-xs font-bold flex items-center justify-center">{{ index + 1 }}</span>
              <span class="text-sm font-semibold text-safari-brown">{{ stop }}</span>
            </div>
            <svg v-if="index < routeStops.length - 1" class="hidden md:block w-8 h-8 text-safari-orange/40 mx-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </template>
        </div>
      </div>
    </section>

    <!-- Image Gallery -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-safari-brown/5 to-safari-orange/5">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-14">
          <div class="inline-flex items-center gap-2 bg-safari-orange/10 text-safari-orange px-5 py-2 rounded-full text-sm font-semibold mb-5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            Gallery
          </div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown mb-4">Wildlife, Culture & Nature</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(image, index) in galleryImages" :key="index"
               class="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
               :class="index === 0 || index === 3 ? 'md:row-span-2' : ''">
            <img :src="getImageUrl(image.src)" :alt="image.alt"
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 :class="index === 0 || index === 3 ? 'min-h-[400px] md:min-h-[500px]' : 'h-64 md:h-80'" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
              <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 class="text-white font-bold text-xl mb-2">{{ image.alt }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Itinerary Timeline -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-white">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-16">
          <div class="inline-block bg-safari-orange/10 text-safari-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Day by Day</div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown">Detailed Day-by-Day Itinerary</h2>
        </div>
        <div class="relative">
          <div class="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-safari-orange via-safari-brown/30 to-safari-orange -translate-x-1/2"></div>
          <div class="space-y-12 lg:space-y-0">
            <div v-for="(day, index) in itinerary" :key="day.day"
                 class="relative lg:grid lg:grid-cols-2 lg:gap-12 lg:mb-16 lg:items-center">
              <div class="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10 w-14 h-14 rounded-full bg-safari-orange text-white font-heading font-bold text-lg items-center justify-center shadow-lg ring-4 ring-white">
                {{ day.day }}
              </div>
              <div :class="[index % 2 === 0 ? 'lg:col-start-1 lg:pr-16' : 'lg:col-start-2 lg:pl-16']">
                <div class="group bg-safari-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-safari-orange/30">
                  <div v-if="day.image" class="relative h-48 overflow-hidden">
                    <img :src="getImageUrl(day.image)" :alt="day.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div class="absolute inset-0 bg-gradient-to-t from-safari-brown/60 to-transparent"></div>
                    <div class="absolute bottom-4 left-4 lg:hidden">
                      <span class="bg-safari-orange text-white text-xs font-bold px-3 py-1 rounded-full">Day {{ day.day }}</span>
                    </div>
                  </div>
                  <div class="p-6 md:p-8">
                    <div class="flex items-start gap-3 mb-3">
                      <span v-if="!day.image" class="lg:hidden w-10 h-10 rounded-xl bg-safari-orange text-white font-heading font-bold flex items-center justify-center flex-shrink-0">{{ day.day }}</span>
                      <div>
                        <span class="inline-block text-xs font-semibold uppercase tracking-wider text-safari-orange mb-1">{{ day.location }}</span>
                        <h3 class="text-xl md:text-2xl font-heading font-bold text-safari-brown">{{ day.title }}</h3>
                      </div>
                    </div>
                    <p class="text-gray-600 leading-relaxed">{{ day.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Price Includes -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-brown">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-14">
          <div class="inline-block bg-safari-orange/20 text-safari-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-4">All-Inclusive Package</div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-white">What Is Included?</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <div v-for="item in priceIncludes" :key="item.label"
               class="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-safari-orange/40 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-safari-orange/20 flex items-center justify-center mb-4 group-hover:bg-safari-orange/30 transition-colors">
              <svg class="w-6 h-6 text-safari-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon"/>
              </svg>
            </div>
            <p class="text-white font-semibold leading-snug">{{ item.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Price Excludes -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-14">
          <div class="inline-block bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Not Included</div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown">What Is Excluded?</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <div v-for="item in priceExcludes" :key="item"
               class="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <svg class="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
            <span class="text-sm text-gray-600">{{ item }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-safari-orange to-safari-orange/80">
      <div class="container mx-auto max-w-4xl">
        <div class="bg-white rounded-3xl shadow-2xl p-10 md:p-14 text-center">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-safari-brown mb-4">Book Your Tanzania Adventure</h2>
          <p class="text-gray-600 text-lg mb-8 max-w-xl mx-auto">Experience the magic of Tanzania with Tanzania Safari Zanzibar. Contact us to customize your 20-day safari.</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a :href="$basePath + '/contact'"
               class="bg-safari-orange text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-safari-orange/90 transition transform hover:scale-105 shadow-lg">
              Get Your Free Quote
            </a>
            <a href="https://wa.me/255686526171" target="_blank"
               class="border-2 border-safari-brown text-safari-brown px-10 py-4 rounded-xl font-semibold text-lg hover:bg-safari-brown hover:text-white transition flex items-center justify-center gap-2">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat with Walter
            </a>
          </div>
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

const heroBadges = ['20 Days / 19 Nights', 'Private Guided Safari', 'Cultural Adventure'];

const quickStats = [
  { value: '20', label: 'Days' },
  { value: '5', label: 'National Parks' },
  { value: 'Big 5', label: 'Wildlife' },
  { value: 'Private', label: '4x4 Vehicle' },
];

const routeStops = ['Arusha', 'Tarangire', 'Serengeti', 'Ngorongoro', 'Lake Manyara', 'Maasai', 'Mto wa Mbu', 'Lake Eyasi', 'Hadzabe', 'Materuni', 'Arusha NP', 'Departure'];

const galleryImages = [
  { src: 'images/9 days safari cultural/pexels-alexn-33650626.jpg', alt: 'Cultural Experience' },
  { src: 'images/serengeti/pexels-bgbennett-20095156.jpg', alt: 'Serengeti Wildlife' },
  { src: 'images/walters-tours-safaris-hadza-tribe-cultural.png', alt: 'Hadzabe Tribe' },
  { src: 'images/walters-tours-safaris-materuni-waterfall.png', alt: 'Materuni Waterfalls' },
];

const itinerary = [
  {
    day: 1,
    title: 'Arrival at Kilimanjaro International Airport',
    location: 'Arusha',
    description: 'Upon arrival at Kilimanjaro International Airport, your professional safari representative will welcome you and transfer you to your hotel in Arusha. Meet your safari guide, receive a briefing about your upcoming adventure, and relax after your journey. Activities: Airport pickup and hotel transfer. Safari briefing. Relaxation at your hotel. Accommodation: Arusha hotel or lodge. Meals: Dinner, depending on arrival time and package.',
    image: 'images/Arusha/arusha-airport.jpeg',
  },
  {
    day: 2,
    title: 'Arusha City Tour & Tanzanian Culture',
    location: 'Arusha',
    description: 'After breakfast, explore Arusha, one of Tanzania\'s most important tourism cities. Visit local markets, discover Tanzanian arts and crafts, and learn about the city\'s history and cultural diversity. Enjoy opportunities to interact with local people and sample traditional Tanzanian food. Highlights: Arusha city sightseeing. Local markets and handicrafts. Tanzanian food and culture. Accommodation: Arusha. Meals: Breakfast and dinner, according to package.',
    image: 'images/9 days safari cultural/pexels-droneafrica-15373903.jpg',
  },
  {
    day: 3,
    title: 'Arusha to Tarangire National Park',
    location: 'Tarangire National Park',
    description: 'After breakfast, depart for Tarangire National Park, famous for its large elephant herds, ancient baobab trees and beautiful African landscapes. Enjoy a game drive through the park, searching for elephants, giraffes, zebras, wildebeest, buffaloes, antelopes and predators. Stop at a scenic location for a picnic lunch before continuing your wildlife adventure. Highlights: Elephant herds. Giant baobab trees. African savannah landscapes. Wildlife photography. Accommodation: Lodge or campsite near Tarangire. Meals: Breakfast, lunch and dinner.',
    image: 'images/tarangire/pexels-dirk-pothen-2149332904-32509132.jpg',
  },
  {
    day: 4,
    title: 'Full-Day Safari in Tarangire National Park',
    location: 'Tarangire National Park',
    description: 'Spend another day exploring Tarangire\'s diverse ecosystems. Your experienced safari guide will help you discover wildlife around the Tarangire River, an important water source for animals, particularly during the dry season. Enjoy morning and afternoon game drives with time for wildlife photography. Wildlife possibilities: Elephants, lions, zebras, giraffes, buffaloes, wildebeest and numerous bird species. Accommodation: Lodge or campsite. Meals: Breakfast, lunch and dinner.',
    image: 'images/tarangire/pexels-bgbennett-19986844.jpg',
  },
  {
    day: 5,
    title: 'Tarangire to Serengeti National Park',
    location: 'Serengeti National Park',
    description: 'After breakfast, depart for the legendary Serengeti National Park. Travel through spectacular landscapes and, depending on your chosen route, the Ngorongoro Conservation Area. Enjoy wildlife viewing along the way as you enter the Serengeti\'s vast grasslands. In the afternoon, embark on a game drive in search of lions, elephants, giraffes, zebras and other wildlife. Highlights: Scenic journey to the Serengeti. First Serengeti game drive. Endless plains and dramatic landscapes. Accommodation: Serengeti tented camp or lodge. Meals: Breakfast, lunch and dinner.',
    image: 'images/serengeti/pexels-bgbennett-20095156.jpg',
  },
  {
    day: 6,
    title: 'Full-Day Serengeti Wildlife Safari',
    location: 'Serengeti Plains',
    description: 'Spend a full day exploring the Serengeti, one of Africa\'s most celebrated wildlife destinations. Search for lions resting beneath acacia trees, cheetahs scanning the grasslands, leopards in suitable habitats, and large herds of grazing animals. Your guide will choose the best game-viewing areas based on the season and recent wildlife movements. Highlights: Morning and afternoon game drives. Big cat viewing opportunities. Wildebeest and zebra herds. Wildlife photography. Accommodation: Serengeti tented camp or lodge. Meals: Breakfast, lunch and dinner.',
    image: 'images/serengeti/pexels-alex-ning-523843601-33650533.jpg',
  },
  {
    day: 7,
    title: 'Serengeti National Park – Great Migration Experience',
    location: 'Serengeti Plains',
    description: 'Continue your wildlife adventure with another day in the Serengeti. Depending on the season, explore areas where large herds of wildebeest and zebras gather or migrate across the plains. The Great Migration changes location throughout the year, so sightings depend on seasonal movements and weather conditions. Enjoy a picnic lunch in the bush before continuing your game drive. Accommodation: Serengeti tented camp or lodge. Meals: Breakfast, lunch and dinner.',
    image: 'images/serengeti/pexels-vik-joshi-63702791-8150758.jpg',
  },
  {
    day: 8,
    title: 'Serengeti to Ngorongoro Conservation Area',
    location: 'Ngorongoro Conservation Area',
    description: 'After breakfast, enjoy a final morning game drive before travelling toward the Ngorongoro Conservation Area. Admire the changing scenery as you leave the Serengeti plains and approach the spectacular Ngorongoro Highlands. Depending on your route and timing, you may visit Olduvai Gorge, an important archaeological site associated with research into human evolution. Arrive at your lodge or camp and relax. Accommodation: Ngorongoro or Karatu area. Meals: Breakfast, lunch and dinner.',
    image: 'images/ngorongoro/pexels-1093389518-30980273.jpg',
  },
  {
    day: 9,
    title: 'Ngorongoro Crater Safari',
    location: 'Ngorongoro Crater',
    description: 'Wake up early for an unforgettable safari in Ngorongoro Crater. Descend into the crater for a game drive across grasslands, woodland and lakeside habitats. Search for elephants, buffaloes, zebras, wildebeest, hyenas, lions and, with luck, the endangered black rhinoceros. Enjoy a picnic lunch at a designated site before continuing your exploration. In the afternoon, ascend the crater and return to your accommodation. Highlights: Ngorongoro Crater scenery. Exceptional wildlife viewing. Possibility of seeing the Big Five. Photography and nature observation. Accommodation: Karatu or Ngorongoro area. Meals: Breakfast, lunch and dinner.',
    image: 'images/ngorongoro/pexels-lan-yao-324969-20847561.jpg',
  },
  {
    day: 10,
    title: 'Lake Manyara National Park',
    location: 'Lake Manyara',
    description: 'After breakfast, travel to Lake Manyara National Park for a wildlife adventure in a beautiful landscape of groundwater forest, open plains and lakeside habitats. Look for elephants, baboons, giraffes, zebras and numerous bird species. The park is also known for its tree-climbing lions, although sightings are never guaranteed. Depending on availability and the selected package, you may arrange a guided treetop walkway experience. Highlights: Forest and lakeside scenery. Birdwatching. Wildlife photography. Optional treetop walkway. Accommodation: Karatu or Mto wa Mbu. Meals: Breakfast, lunch and dinner.',
    image: 'images/walters-tours-safaris-lake-manyara-flamingos.png',
  },
  {
    day: 11,
    title: 'Maasai Cultural Experience',
    location: 'Maasai Community',
    description: 'Today, discover the traditions and daily life of the Maasai people through a visit arranged with a local community. Learn about traditional homes, pastoral lifestyles, beadwork, clothing and the importance of cattle in Maasai culture. With the community\'s permission, participate in cultural activities and listen to stories about local customs and traditions. This experience provides an opportunity to learn about Maasai heritage while supporting community-based tourism. Highlights: Guided Maasai community visit. Traditional homes and pastoral culture. Beadwork and local crafts. Cultural storytelling and interaction. Accommodation: Karatu or nearby lodge. Meals: Breakfast, lunch and dinner.',
    image: 'images/walters-tours-safaris-maasai-village-cultural.png',
  },
  {
    day: 12,
    title: 'Mto wa Mbu Village Cultural Tour',
    location: 'Mto wa Mbu',
    description: 'After breakfast, visit Mto wa Mbu, a vibrant community known for its cultural diversity and agricultural activities. Join a guided village walk to discover local farming, banana plantations, traditional food and everyday life. Depending on the arrangement, enjoy a traditional Tanzanian lunch and learn about the different communities living in the area. Activities: Village walking tour. Banana plantation visit. Local food experience. Cultural interaction and photography. Accommodation: Mto wa Mbu or Karatu. Meals: Breakfast, lunch and dinner.',
    image: 'images/9 days safari cultural/pexels-kureng-workx-2546437-13242022.jpg',
  },
  {
    day: 13,
    title: 'Karatu to Lake Eyasi',
    location: 'Lake Eyasi',
    description: 'After breakfast, travel to Lake Eyasi, a scenic region south of the Ngorongoro Highlands. The area is home to Hadzabe and Datoga communities, each with distinct cultural traditions and ways of life. Arrive at your lodge or camp and enjoy the surrounding landscapes. Your guide will introduce you to the following day\'s cultural experience and explain the importance of respectful community visits. Highlights: Scenic drive to Lake Eyasi. Local cultural introduction. Beautiful landscapes and birdlife. Accommodation: Lake Eyasi lodge or camp. Meals: Breakfast, lunch and dinner.',
    image: 'images/9 days safari cultural/pexels-laura-phillips-776558712-39034099.jpg',
  },
  {
    day: 14,
    title: 'Hadzabe Cultural Experience',
    location: 'Hadzabe Community',
    description: 'Rise early for a special cultural experience with members of the Hadzabe community, one of Tanzania\'s Indigenous hunter-gatherer peoples. Accompanied by a knowledgeable local guide, learn about traditional hunting and gathering practices, the use of natural resources, and the Hadzabe\'s relationship with their environment. Depending on community preferences and daily activities, you may observe demonstrations of traditional skills and learn about local plants used for food or other purposes. This is a valuable opportunity to learn directly from community members and appreciate the importance of protecting their cultural heritage. Highlights: Guided Hadzabe community experience. Introduction to traditional hunting and gathering. Indigenous knowledge of the environment. Cultural learning and photography, with permission. Accommodation: Lake Eyasi lodge or camp. Meals: Breakfast, lunch and dinner. Note: Activities depend on community consent, local arrangements and the traditions community members choose to share.',
    image: 'images/walters-tours-safaris-hadza-tribe-cultural.png',
  },
  {
    day: 15,
    title: 'Datoga Cultural Experience & Return to Arusha',
    location: 'Datoga Community & Arusha',
    description: 'After breakfast, visit a Datoga community with a local guide. Learn about traditional metalworking, beadwork and aspects of Datoga pastoral culture, depending on the activities available during your visit. Later, begin the journey back to Arusha, enjoying views of the rural countryside along the way. Arrive in Arusha in the late afternoon or evening. Highlights: Datoga cultural visit. Traditional craftsmanship. Scenic drive through northern Tanzania. Accommodation: Arusha. Meals: Breakfast, lunch and dinner, depending on arrival time.',
    image: 'images/9 days safari cultural/pexels-ygpixeltz-35425943.jpg',
  },
  {
    day: 16,
    title: 'Arusha to Moshi – Materuni Village',
    location: 'Materuni Village',
    description: 'After breakfast, depart for Moshi, located near Mount Kilimanjaro. Continue to Materuni Village, a traditional Chagga community surrounded by lush vegetation and coffee farms. Meet local hosts who will introduce you to Chagga culture and the region\'s agricultural traditions. Enjoy a guided coffee experience, learning about traditional coffee preparation from bean to cup. Depending on your chosen activities, you may participate in roasting, grinding and preparing locally grown coffee. Highlights: Materuni Village. Chagga cultural experience. Traditional coffee-making demonstration. Views of Mount Kilimanjaro when weather permits. Accommodation: Moshi or Materuni area. Meals: Breakfast, lunch and dinner, according to package.',
    image: 'images/walters-tours-safaris-materuni-waterfall.png',
  },
  {
    day: 17,
    title: 'Materuni Waterfall Hike',
    location: 'Materuni Waterfalls',
    description: 'Today, explore the natural beauty of Materuni Waterfalls. After breakfast, meet your local guide and hike through village paths, coffee farms and lush green landscapes. Reach the impressive waterfall, where water flows down into a scenic natural setting beneath the slopes of Mount Kilimanjaro. Enjoy time for photography, relaxation and appreciating the surrounding forest. Depending on trail conditions, you may have an opportunity to enjoy the cool water near the waterfall. Return to the village and transfer to your accommodation. Highlights: Guided Materuni Waterfalls hike. Beautiful forest and mountain scenery. Chagga village experience. Photography and nature walks. Accommodation: Moshi or Materuni area. Meals: Breakfast, lunch and dinner, according to package. Note: The hike involves uneven and sometimes slippery trails. Appropriate footwear and a reasonable level of fitness are recommended.',
    image: 'images/walters-tours-safaris-materuni-waterfall.png',
  },
  {
    day: 18,
    title: 'Kilimanjaro Foothills & Moshi Experience',
    location: 'Moshi',
    description: 'Enjoy a relaxed day exploring the Kilimanjaro region. Depending on your interests, visit Moshi town, explore local markets, learn more about Chagga traditions or enjoy a guided walk through the surrounding countryside. On a clear day, appreciate spectacular views of Mount Kilimanjaro, Africa\'s highest mountain. This day also provides time to rest after your waterfall hike. Optional activities: Moshi town tour. Local market visit. Additional coffee or cultural experience. Scenic countryside walk. Accommodation: Moshi. Meals: Breakfast and dinner, with lunch according to your selected package.',
    image: 'images/walters-tours-safaris-kilimanjaro-summit.png',
  },
  {
    day: 19,
    title: 'Arusha National Park Safari',
    location: 'Arusha National Park',
    description: 'After breakfast, travel to Arusha National Park for a final wildlife and nature adventure. Explore a beautiful landscape of forest, open grassland, crater scenery and the Momella Lakes. Look for giraffes, zebras, buffaloes, warthogs, monkeys and a variety of bird species. Subject to park regulations, availability and the appropriate arrangements, you may choose an optional guided walking safari with an authorized ranger. Return to Arusha in the afternoon. Highlights: Arusha National Park game drive. Mount Meru scenery. Momella Lakes. Optional guided walking safari. Accommodation: Arusha hotel or lodge. Meals: Breakfast, lunch and dinner.',
    image: 'images/Arusha/etienne-delorieux-NZpl4yxYcMg-unsplash.jpg',
  },
  {
    day: 20,
    title: 'Departure from Tanzania',
    location: 'Departure',
    description: 'Enjoy breakfast at your hotel before your transfer to Kilimanjaro International Airport or another agreed departure point. Your unforgettable journey through Tanzania\'s wildlife destinations, cultural communities and natural landscapes comes to an end. We hope you leave with wonderful memories of Tanzania and its people. Meals: Breakfast, depending on departure time. Airport transfer: Included according to your package.',
    image: 'images/Arusha/arusha-airport.jpeg',
  },
];

const priceIncludes = [
  { label: 'Airport transfers', icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8' },
  { label: 'Private 4x4 safari vehicle with a pop-up roof', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
  { label: 'Professional English-speaking safari guide', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  { label: 'National park entry fees', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { label: 'Ngorongoro Crater service fees', icon: 'M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z' },
  { label: 'Game drives in the listed national parks', icon: 'M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5' },
  { label: 'Accommodation for 19 nights', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { label: 'Meals as specified in the itinerary', icon: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7' },
  { label: 'Bottled drinking water during safari', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
  { label: 'Maasai cultural visit', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
  { label: 'Hadzabe cultural experience with a local guide', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
  { label: 'Datoga cultural visit', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
  { label: 'Materuni Village and coffee experience', icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' },
  { label: 'Materuni Waterfalls hike and local guide', icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' },
  { label: 'Arusha National Park activities as specified', icon: 'M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5' },
  { label: 'Village and cultural tour arrangements', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
];

const priceExcludes = [
  'International flights',
  'Visa fees',
  'Travel insurance',
  'Personal expenses and laundry',
  'Alcoholic and premium beverages',
  'Tips for guides, drivers and lodge staff',
  'Optional activities not listed as included',
  'Additional accommodation before or after the tour',
  'Any services not expressly stated in the final quotation',
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
