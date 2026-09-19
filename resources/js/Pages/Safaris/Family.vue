<template>
  <MainLayout>
    <Breadcrumb :breadcrumbs="[
      { name: 'Safaris', href: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
      { name: 'Family Safaris' }
    ]" />
    
    <!-- Hero Section -->
    <section class="relative h-[600px] overflow-hidden">
      <img :src="getImageUrl('images/walters-tours-safaris-sammy-wong-wzeGc7Uqopc-unsplash.jpg')" 
           alt="Family Safari" class="w-full h-full object-cover animate-ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-r from-safari-brown/95 to-safari-brown/60"></div>
      <div class="absolute inset-0 flex items-center px-4 md:px-8 lg:px-12">
        <div class="container mx-auto max-w-7xl">
          <div class="inline-block bg-safari-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Kid-Friendly Adventures
          </div>
          <h1 class="text-5xl md:text-7xl font-heading font-bold text-white mb-6">Family Safaris</h1>
          <p class="text-2xl text-white/95 max-w-3xl mb-8">Create Unforgettable Memories with Your Loved Ones</p>
          <a :href="$basePath + '/contact'" class="inline-block bg-safari-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-safari-orange/90 transition transform hover:scale-105">
            Plan Family Adventure
          </a>
        </div>
      </div>
    </section>
    
    <!-- Overview -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-heading font-bold text-safari-brown mb-4">Safari Adventures for All Ages</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Our family safaris are specially designed to engage and excite travelers of all ages. With kid-friendly 
            accommodations, flexible schedules, and educational experiences, we make sure everyone from toddlers to 
            grandparents has the adventure of a lifetime.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-20 h-20 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold text-safari-brown mb-2">All Ages Welcome</h3>
            <p class="text-gray-600">From toddlers to teens</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold text-safari-brown mb-2">Safe & Secure</h3>
            <p class="text-gray-600">Family-friendly vehicles</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold text-safari-brown mb-2">Educational</h3>
            <p class="text-gray-600">Learning through adventure</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold text-safari-brown mb-2">Flexible Pace</h3>
            <p class="text-gray-600">Adapted to family needs</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Why Family Safari -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-safari-orange/5 to-safari-brown/5">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-heading font-bold text-safari-brown mb-6">Why Choose Family Safari?</h2>
            <div class="space-y-4">
              <div v-for="reason in reasons" :key="reason.title" class="flex items-start gap-3">
                <svg class="w-6 h-6 text-safari-orange mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <div>
                  <div class="font-semibold text-safari-brown">{{ reason.title }}</div>
                  <div class="text-gray-600">{{ reason.description }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img :src="getImageUrl('images/walters-tours-safaris-humphrey-m-e5hzQubIb68-unsplash.jpg')" 
                 alt="Family Safari" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Kid-Friendly Features -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-12">Kid-Friendly Features</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="feature in features" :key="feature.title"
               class="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-xl flex items-center justify-center mb-4">
              <div v-html="feature.icon" class="text-safari-orange"></div>
            </div>
            <h3 class="text-xl font-heading font-bold text-safari-brown mb-3">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Family Packages -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-safari-orange/5 to-safari-brown/5">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-4">Family Safari Packages</h2>
        <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Specially designed itineraries for families</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="pkg in packages" :key="pkg.title"
               class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
            <div class="relative h-48 overflow-hidden group">
              <img :src="getImageUrl(pkg.image)" :alt="pkg.title" 
                   class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div class="absolute top-4 right-4">
                <span class="bg-safari-orange text-white px-3 py-1 rounded-full text-sm font-semibold">{{ pkg.days }}</span>
              </div>
              <div class="absolute top-4 left-4">
                <span class="bg-safari-brown text-white px-3 py-1 rounded-full text-sm font-semibold">{{ pkg.ages }}</span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-heading font-bold text-safari-brown mb-2">{{ pkg.title }}</h3>
              <p class="text-gray-600 mb-4">{{ pkg.description }}</p>
              <div class="space-y-2 mb-4">
                <div v-for="highlight in pkg.highlights" :key="highlight" class="flex items-center gap-2 text-sm text-gray-600">
                  <svg class="w-4 h-4 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  {{ highlight }}
                </div>
              </div>
              <div class="text-safari-orange font-semibold mb-4">From ${{ pkg.price }}/person</div>
              <a :href="$basePath + '/contact'" class="block w-full bg-safari-orange text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-safari-orange/90 transition">
                Book Family Safari
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Age-Specific Activities -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-brown">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-white text-center mb-12">Activities by Age Group</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="ageGroup in ageGroups" :key="ageGroup.title"
               class="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
            <h3 class="text-2xl font-heading font-bold text-white mb-4">{{ ageGroup.title }}</h3>
            <p class="text-safari-orange font-semibold mb-4">{{ ageGroup.age }}</p>
            <ul class="space-y-2">
              <li v-for="activity in ageGroup.activities" :key="activity" class="text-white/80 flex items-start gap-2">
                <svg class="w-5 h-5 text-safari-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                {{ activity }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Parent Tips -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-12">Tips for Parents</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="tip in tips" :key="tip.title"
               class="bg-white rounded-xl p-6 shadow-lg">
            <h3 class="text-xl font-heading font-bold text-safari-brown mb-3">{{ tip.title }}</h3>
            <p class="text-gray-600">{{ tip.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-r from-safari-orange to-safari-orange/90">
      <div class="container mx-auto max-w-7xl text-center">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Create Family Memories That Last Forever</h2>
        <p class="text-xl text-white/95 mb-10 max-w-3xl mx-auto">
          Give your children the gift of adventure and wildlife wonder
        </p>
        <a :href="$basePath + '/contact'" class="inline-block bg-white text-safari-orange px-10 py-4 rounded-lg font-semibold text-lg hover:bg-safari-white transition transform hover:scale-105 shadow-xl">
          Plan Your Family Safari
        </a>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../../Layouts/MainLayout.vue';
import Breadcrumb from '../../Components/Breadcrumb.vue';
import { useAssets } from '../../composables/useAssets';

const { getImageUrl } = useAssets();

const reasons = [
  {
    title: 'Educational Adventure',
    description: 'Kids learn about wildlife, conservation, and African culture firsthand'
  },
  {
    title: 'Bonding Time',
    description: 'Disconnect from devices and reconnect as a family in nature'
  },
  {
    title: 'Life-Changing Experience',
    description: 'Create memories and inspire a love for nature that lasts a lifetime'
  },
  {
    title: 'Safe & Comfortable',
    description: 'Family-friendly lodges with pools, playgrounds, and kid menus'
  },
  {
    title: 'Flexible Itineraries',
    description: 'Shorter game drives and rest time built into the schedule'
  },
  {
    title: 'Expert Guides',
    description: 'Guides trained to engage and educate children of all ages'
  }
];

const features = [
  {
    title: 'Family Rooms',
    description: 'Spacious accommodations with connecting rooms or family suites',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>'
  },
  {
    title: 'Kid-Friendly Meals',
    description: 'Special children\'s menus with familiar and healthy options',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/></svg>'
  },
  {
    title: 'Swimming Pools',
    description: 'Cool off after game drives in family-friendly pools',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.5 2a3.5 3.5 0 101.665 6.58L8.585 10l-1.42 1.42a3.5 3.5 0 101.414 1.414l8.128-8.127a1 1 0 00-1.414-1.414L10 8.586l-1.42-1.42A3.5 3.5 0 005.5 2zM4 5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd"/></svg>'
  },
  {
    title: 'Junior Ranger Programs',
    description: 'Educational activities and wildlife tracking for kids',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/></svg>'
  },
  {
    title: 'Shorter Game Drives',
    description: 'Age-appropriate drive lengths with breaks',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/></svg>'
  },
  {
    title: 'Safety First',
    description: 'Child car seats, first aid, and safety briefings',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>'
  }
];

const packages = [
  {
    title: 'Family Fun Safari',
    days: '5 Days',
    ages: 'Ages 4+',
    description: 'Perfect introduction to safari for young families',
    highlights: ['Ngorongoro Crater', 'Tarangire elephants', 'Pool time', 'Cultural visit'],
    price: '1,800',
    image: 'images/walters-tours-safaris-sammy-wong-wzeGc7Uqopc-unsplash.jpg'
  },
  {
    title: 'Teen Adventure Safari',
    days: '7 Days',
    ages: 'Ages 12+',
    description: 'Action-packed safari for adventurous teens',
    highlights: ['Serengeti camping', 'Walking safari', 'Night drive', 'Photography workshop'],
    price: '2,400',
    image: 'images/walters-tours-safaris-hu-chen-t-7Mlatf9iI-unsplash.jpg'
  },
  {
    title: 'Multi-Generation Safari',
    days: '6 Days',
    ages: 'All Ages',
    description: 'Comfortable safari for grandparents to grandkids',
    highlights: ['Luxury lodges', 'Flexible schedule', 'Easy access', 'Family suites'],
    price: '3,200',
    image: 'images/walters-tours-safaris-magdalena-kula-manchee-nVUZO1gc_-o-unsplash.jpg'
  }
];

const ageGroups = [
  {
    title: 'Little Explorers',
    age: 'Ages 3-7',
    activities: [
      'Animal spotting games',
      'Nature scavenger hunts',
      'Story time about animals',
      'Simple crafts',
      'Pool play time'
    ]
  },
  {
    title: 'Junior Rangers',
    age: 'Ages 8-12',
    activities: [
      'Wildlife tracking',
      'Photography lessons',
      'Conservation education',
      'Bush skills workshop',
      'Night sky observation'
    ]
  },
  {
    title: 'Teen Adventurers',
    age: 'Ages 13+',
    activities: [
      'Walking safaris',
      'Advanced photography',
      'Cultural immersion',
      'Conservation projects',
      'Adventure activities'
    ]
  }
];

const tips = [
  {
    title: 'Best Age to Start',
    description: 'Children as young as 3-4 can enjoy safari, but 6+ is ideal for longer game drives and better wildlife appreciation.'
  },
  {
    title: 'What to Pack',
    description: 'Bring sun protection, comfortable clothes, binoculars for kids, favorite snacks, and entertainment for travel time.'
  },
  {
    title: 'Health & Safety',
    description: 'Consult your doctor about vaccinations. Malaria prophylaxis may be recommended. Bring any necessary medications.'
  },
  {
    title: 'Managing Expectations',
    description: 'Prepare kids that animals are wild and sightings aren\'t guaranteed. Focus on the adventure and experience.'
  },
  {
    title: 'Downtime is Important',
    description: 'Don\'t over-schedule. Include pool time, rest periods, and flexible activities to avoid exhaustion.'
  },
  {
    title: 'Educational Prep',
    description: 'Watch wildlife documentaries together before the trip to build excitement and knowledge about African animals.'
  }
];
</script>
