<template>
  <MainLayout>
    <Breadcrumb :breadcrumbs="[
      { name: 'Itineraries', href: '/itineraries' },
      { name: 'Arusha National Park Safari' }
    ]" />

    <!-- Hero -->
    <section class="relative h-[70vh] min-h-[520px] overflow-hidden">
      <img :src="getImageUrl('images/Arusha/etienne-delorieux-NZpl4yxYcMg-unsplash.jpg')"
           alt="Arusha National Park" class="w-full h-full object-cover ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-b from-safari-brown/50 via-safari-brown/60 to-safari-brown/95"></div>
      <div class="absolute inset-0 flex items-end pb-16 px-4 md:px-8 lg:px-12">
        <div class="container mx-auto max-w-7xl">
          <div class="inline-flex items-center gap-2 bg-safari-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            </svg>
            Day Trip Safari
          </div>
          <h1 class="text-5xl md:text-7xl font-heading font-bold text-white mb-4 leading-tight">Arusha National Park</h1>
          <p class="text-xl md:text-2xl text-white/90 max-w-2xl mb-8">Tanzania's Hidden Gem for Walking Safaris</p>
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

    <!-- Overview -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-12">
          <div class="inline-block bg-safari-orange/10 text-safari-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-4">About the Park</div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-safari-brown">Tanzania's Best Kept Secret</h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <p class="text-lg text-gray-700 leading-relaxed mb-6">
              Located in northeastern Tanzania, between Kilimanjaro and Mount Meru, Arusha National Park is one of the least known parks in the country. Despite its relatively small size (137 km�), it offers an impressive variety of landscapes and wildlife, making it an ideal choice for a first safari with children, either by car or on foot.
            </p>
            
            <div class="bg-gradient-to-br from-safari-orange/5 to-safari-brown/5 rounded-2xl p-6 mb-6">
              <h3 class="text-2xl font-heading font-bold text-safari-brown mb-4">Is it worthwhile to go on safari in Arusha?</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                This is the question that many travelers ask us when they organize their trip to Tanzania with us. The answer is that it depends on the length of the trip, the budget and the parks you want to visit.
              </p>
              <p class="text-gray-700 leading-relaxed mb-3 font-semibold">As a general rule, we recommend visiting Arusha if:</p>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-safari-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  You do a 3-day safari (Tarangire, Ngorongoro, Lake Manyara) and you want to add a fourth day of Safari.
                </li>
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-safari-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  You like walking and want to live the experience of a walking safari in the park.
                </li>
              </ul>
            </div>
          </div>
          <div class="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img :src="getImageUrl('images/Arusha/william-warby-ODr2SzIPU3w-unsplash.jpg')"
                 alt="Arusha Wildlife" class="w-full h-full object-cover" />
          </div>
        </div>

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
              <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown mb-4">Arusha National Park</h2>
              <p class="text-gray-600 max-w-2xl mx-auto">Discover the hidden gem of Tanzania through stunning imagery</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div v-for="(image, index) in galleryImages" :key="index" 
                   class="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
                   :class="index === 0 || index === 3 ? 'md:row-span-2' : ''">
                <img :src="getImageUrl(image.src)" :alt="image.alt" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                     :class="index === 0 || index === 3 ? 'min-h-[400px] md:min-h-[500px]' : 'h-64 md:h-80'" />
                
                <!-- Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                  <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 class="text-white font-bold text-xl mb-2">{{ image.alt }}</h3>
                    <div class="flex items-center gap-2 text-white/80 text-sm">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                      </svg>
                      <span>View Full Size</span>
                    </div>
                  </div>
                </div>
                
                <!-- Floating badge -->
                <div class="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- What to See -->
        <div class="mb-12">
          <h3 class="text-3xl font-heading font-bold text-safari-brown text-center mb-10">What can we see in Arusha National Park?</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="item in highlights" :key="item.title"
                 class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <div class="w-12 h-12 bg-safari-orange/10 rounded-xl flex items-center justify-center mb-4 text-safari-orange">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon"/>
                </svg>
              </div>
              <h3 class="text-lg font-heading font-bold text-safari-brown mb-2">{{ item.title }}</h3>
              <p class="text-gray-600 text-sm">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Best Time & Pricing -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-brown">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-14">
          <div class="inline-block bg-safari-orange/20 text-safari-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Planning Your Visit</div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-white">Best Time & Pricing</h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 class="text-2xl font-heading font-bold text-white mb-6">Best Time to Visit</h3>
            <p class="text-white/90 mb-6">
              Arusha National Park is a fairly green park as it is in a rainier area than other parts of Tanzania. That makes it best to go during the dry months, when conditions are perfect for safaris, trekking and bird watching:
            </p>
            <ul class="space-y-3">
              <li class="flex items-center gap-3 text-white">
                <svg class="w-5 h-5 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                June to October
              </li>
              <li class="flex items-center gap-3 text-white">
                <svg class="w-5 h-5 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                December to early May
              </li>
            </ul>
          </div>

          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 class="text-2xl font-heading font-bold text-white mb-6">Practical Tips & Pricing</h3>
            <p class="text-white/90 mb-6 text-sm">
              Being very close to Arusha and especially to the heart of our travel agency, it is very quick to access the park (10 minutes by car from the airport and 40 minutes by car from Arusha city). Normally the Safari in Arusha National Park is the first safari that travelers do, as it is the one that is closer and we will not see the big predators such as lions or cheetahs.
            </p>
            <div class="space-y-4">
              <div class="flex justify-between items-center border-b border-white/20 pb-3">
                <span class="text-white">Park entrance fee</span>
                <span class="text-safari-orange font-bold">$59 per adult</span>
              </div>
              <div class="flex justify-between items-center border-b border-white/20 pb-3">
                <span class="text-white">Car & guide</span>
                <span class="text-safari-orange font-bold">$250-300 per vehicle</span>
              </div>
              <div class="flex justify-between items-center border-b border-white/20 pb-3">
                <span class="text-white">Walking safari (optional)</span>
                <span class="text-safari-orange font-bold">$30 adult + $30 ranger</span>
              </div>
              <p class="text-white/70 text-sm mt-4">
                <strong>The good news is</strong> that children pay much less (about half the price) and if they are under 5 years old they have free access.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-safari-orange to-safari-orange/80">
      <div class="container mx-auto max-w-4xl">
        <div class="bg-white rounded-3xl shadow-2xl p-10 md:p-14 text-center">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-safari-brown mb-4">Plan Your Arusha National Park Safari</h2>
          <p class="text-gray-600 text-lg mb-8 max-w-xl mx-auto">Perfect for families, walking safaris, and adding an extra day to your Tanzania adventure</p>
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

const heroBadges = ['Day Trip', 'Walking Safaris', 'Family Friendly', '10-40 mins from Arusha'];

const quickStats = [
  { value: '137', label: 'km� Park Size' },
  { value: '10-40', label: 'mins from Arusha' },
  { value: 'Walking', label: 'Safari Option' },
  { value: 'Mt Meru', label: '4,566m Peak' },
];

const highlights = [
  {
    title: 'Wildlife',
    description: 'In general, in Arusha no predators are seen, but many giraffes, monkeys, zebras, antelopes, buffaloes etc� In theory there are leopards, but these hide in the mountains and are very difficult to see if not almost impossible.',
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z'
  },
  {
    title: 'Mount Meru',
    description: 'At 4,566 meters, it is the second highest mountain in Tanzania. Ideal for hiking and less crowded ascents than Kilimanjaro.',
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
  },
  {
    title: 'Momella Lakes',
    description: 'A group of alkaline lakes where (depending on the season) pink flamingos, hippopotamuses and numerous bird species can be observed.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
  },
  {
    title: 'Ngurdoto Crater',
    description: 'Known as the "little Ngorongoro", this volcanic crater offers spectacular panoramic views and is home to buffalo, giraffe and antelope.',
    icon: 'M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9'
  },
];

const galleryImages = [
  { src: 'images/Arusha/etienne-delorieux-NZpl4yxYcMg-unsplash.jpg', alt: 'Mount Meru View' },
  { src: 'images/Arusha/k15-photos-_21baKUW_cw-unsplash.jpg', alt: 'Arusha Landscape' },
  { src: 'images/Arusha/william-warby-ODr2SzIPU3w-unsplash.jpg', alt: 'Wildlife Safari' },
  { src: 'images/Arusha/o3RQ4KgIftz2v8CBr8YjtSPsSRuPtmE4ePUI4ayW.jpg', alt: 'Park Scenery' },
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
