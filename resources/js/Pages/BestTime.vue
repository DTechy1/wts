<template>
  <MainLayout>
    <Breadcrumb :breadcrumbs="[{ name: 'Best Time to Visit Tanzania' }]" />
    
    <section class="relative h-[500px] overflow-hidden">
      <img :src="getImageUrl('images/walters-tours-safaris-magdalena-kula-manchee-nVUZO1gc_-o-unsplash.jpg')" 
           alt="Best Time to Visit" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-r from-safari-brown/95 to-safari-brown/70"></div>
      <div class="absolute inset-0 flex items-center px-4 md:px-8 lg:px-12">
        <div class="container mx-auto max-w-7xl">
          <h1 class="text-5xl md:text-7xl font-heading font-bold text-white mb-6">Best Time to Visit Tanzania</h1>
          <p class="text-xl md:text-2xl text-white/95 max-w-3xl">Plan your perfect safari adventure with our seasonal guide</p>
        </div>
      </div>
    </section>
    
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h2 class="text-4xl font-heading font-bold text-safari-brown mb-6">When Should You Visit?</h2>
          <p class="text-lg text-gray-700 leading-relaxed">
            So you've been wondering when is the right time to visit Tanzania? Each season offers unique experiences, 
            from the Great Migration to perfect trekking conditions. Let us guide you through the year.
          </p>
        </div>
      </div>
    </section>
    
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-brown">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-heading font-bold text-white mb-6">High Season: June - September</h2>
            <p class="text-lg text-white/90 leading-relaxed mb-6">
              June through September is Tanzania's cooler, dry, high season. The wildebeest are hoofing it northwards 
              on their migration towards the greener grasses of Kenya's Masai Mara, Kilimanjaro's lower slopes are 
              mud-free and Zanzibar's beaches beckon.
            </p>
            <p class="text-lg text-white/90 leading-relaxed">
              Overall, it's a wonderful time to travel, with the only real downsides being peak prices and larger crowds.
            </p>
          </div>
          <div class="relative h-96 rounded-2xl overflow-hidden shadow-2xl group">
            <img :src="getImageUrl('images/walters-tours-safaris-humphrey-m-e5hzQubIb68-unsplash.jpg')" 
                 alt="High Season" 
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-16">Season by Season Guide</h2>
        
        <div class="space-y-12">
          <div v-for="season in seasons" :key="season.title" 
               class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
              <div class="lg:col-span-1">
                <div class="inline-block bg-safari-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {{ season.months }}
                </div>
                <h3 class="text-3xl font-heading font-bold text-safari-brown mb-3">{{ season.title }}</h3>
                <p class="text-safari-orange font-semibold">{{ season.subtitle }}</p>
              </div>
              <div class="lg:col-span-2">
                <div class="space-y-4">
                  <p v-for="(paragraph, index) in season.description" :key="index" 
                     class="text-gray-700 leading-relaxed">
                    {{ paragraph }}
                  </p>
                </div>
                <div v-if="season.highlights" class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div v-for="highlight in season.highlights" :key="highlight" 
                       class="flex items-start gap-2">
                    <svg class="w-5 h-5 text-safari-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span class="text-sm text-gray-600">{{ highlight }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-safari-orange/5 to-safari-brown/5">
      <div class="container mx-auto max-w-7xl">
        <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div class="text-center mb-8">
            <h2 class="text-4xl font-heading font-bold text-safari-brown mb-4">Important Booking Information</h2>
            <p class="text-xl text-gray-700">
              Especially for safaris, Kilimanjaro treks and island getaways, it's essential to book in advance.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-safari-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 class="text-xl font-heading font-bold text-safari-brown mb-2">Book Early</h3>
              <p class="text-gray-600">Secure best rates and availability</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-safari-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="text-xl font-heading font-bold text-safari-brown mb-2">Best Prices</h3>
              <p class="text-gray-600">Early booking discounts available</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-safari-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="text-xl font-heading font-bold text-safari-brown mb-2">Guaranteed</h3>
              <p class="text-gray-600">Confirmed accommodations and permits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-brown">
      <div class="container mx-auto max-w-7xl text-center">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Ready to Plan Your Visit?</h2>
        <p class="text-xl text-white/95 mb-10 max-w-3xl mx-auto">Contact our experts to help you choose the perfect time for your Tanzania adventure</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a :href="$basePath + '/contact'" class="bg-safari-orange text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-safari-orange/90 transition transform hover:scale-105 shadow-xl">
            Contact Our Experts
          </a>
          <a :href="$basePath + '/itineraries'" class="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-safari-brown transition shadow-xl">
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

const seasons = [
  {
    months: 'July - August',
    title: 'Prime Safari Season',
    subtitle: 'Peak Wildlife Viewing',
    description: [
      'As the dry season progresses, animals begin to concentrate around dwindling water sources and vegetation becomes more sparse. Wildlife is increasingly easy to spot and safari season is at its prime.',
      'Southern Tanzania\'s Ruaha National Park is full of animals, as is western Tanzania\'s Katavi, with massive pods of hippos fighting for space around the few remaining mud wallows. In Gombe and Mahale Mountains parks, chimpanzees move lower down the steep slopes, and tracking them is usually easier.',
      'The dry season is also ideal for trekking on Mt Kilimanjaro and on Mt Meru, in Arusha National Park, and for hiking in northeastern Tanzania\'s Usambara Mountains.'
    ],
    highlights: [
      'Best wildlife viewing',
      'Great Migration in full swing',
      'Perfect for Kilimanjaro treks',
      'Lower humidity on coast'
    ]
  },
  {
    months: 'October',
    title: 'Shoulder Season',
    subtitle: 'Fewer Crowds, Great Weather',
    description: [
      'The start of Tanzania\'s shoulder season brings sunny and mostly dry weather, making this another fine time for wildlife-watching, but with only a fraction of the high-season crowds.',
      'Parks such as Tarangire, that are at their best in the late dry season, are particularly good. October also brings jacarandas to bloom, especially in the north around Moshi and Arusha and in the southwest around Mbeya; it\'s magnificent to stroll beneath their purple canopies on a carpet of lavender blossoms.'
    ],
    highlights: [
      'Fewer tourists',
      'Excellent wildlife viewing',
      'Beautiful jacaranda blooms',
      'Better prices'
    ]
  },
  {
    months: 'November',
    title: 'Short Rains Begin',
    subtitle: 'Birding Season Starts',
    description: [
      'As the short rains get underway, mango season begins � watch for buckets of ripe fruit along the roadsides from late November. This is also the start of peak birding season, as the first of the migrants begin arriving from the north.'
    ],
    highlights: [
      'Peak birding season begins',
      'Mango season',
      'Lush green landscapes',
      'Shoulder season rates'
    ]
  },
  {
    months: 'December - January',
    title: 'Holiday Season',
    subtitle: 'Warm & Festive',
    description: [
      'During the Christmas and New Year\'s holiday period � roughly from mid-December through the first week in January � prices temporarily skyrocket, but on each side of this, many lodges and camps offer appealing shoulder-season rates.',
      'In northern Tanzania, the warm, dry period between December and February is ideal for Kilimanjaro treks, while on the coast, the shoulder season months are optimal.'
    ],
    highlights: [
      'Perfect for Kilimanjaro',
      'Warm weather',
      'Festive atmosphere',
      'Good for coast visits'
    ]
  },
  {
    months: 'February',
    title: 'Calving Season',
    subtitle: 'Hottest Month',
    description: [
      'Tanzania\'s hottest temperatures are generally in February, especially along the coast, but birding is at its peak countrywide and the southeastern Serengeti is full of activity, with the wildebeest calving season in full swing.',
      'February is also the best month for seeing the orchids in Kitulo National Park, and for admiring the surrounding highlands, which are blanketed with wildflowers.'
    ],
    highlights: [
      'Wildebeest calving season',
      'Peak birding',
      'Wildflowers in bloom',
      'Orchids in Kitulo'
    ]
  }
];
</script>
