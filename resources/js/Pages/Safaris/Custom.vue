<template>
  <MainLayout>
    <Breadcrumb :breadcrumbs="[
      { name: 'Safaris', href: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
      { name: 'Custom Safaris' }
    ]" />
    
    <!-- Hero Section -->
    <section class="relative h-[600px] overflow-hidden">
      <img :src="getImageUrl('images/walters-tours-safaris-denice-alex-LD6WgJlIpmk-unsplash.jpg')" 
           alt="Custom Safari" class="w-full h-full object-cover animate-ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-r from-safari-brown/95 to-safari-brown/60"></div>
      <div class="absolute inset-0 flex items-center px-4 md:px-8 lg:px-12">
        <div class="container mx-auto max-w-7xl">
          <div class="inline-block bg-safari-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Tailored Experience
          </div>
          <h1 class="text-5xl md:text-7xl font-heading font-bold text-white mb-6">Custom Safaris</h1>
          <p class="text-2xl text-white/95 max-w-3xl mb-8">Your Dream Safari, Designed Exactly How You Want It</p>
          <a :href="$basePath + '/contact'" class="inline-block bg-safari-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-safari-orange/90 transition transform hover:scale-105">
            Design Your Safari
          </a>
        </div>
      </div>
    </section>
    
    <!-- Overview -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-heading font-bold text-safari-brown mb-4">Create Your Perfect Safari</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Every traveler is unique, and so should be their safari. We specialize in creating bespoke safari experiences 
            tailored to your interests, budget, and schedule. From wildlife photography expeditions to romantic getaways, 
            we'll craft the perfect itinerary just for you.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-20 h-20 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold text-safari-brown mb-2">Fully Customizable</h3>
            <p class="text-gray-600">Every detail tailored to you</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold text-safari-brown mb-2">Expert Planning</h3>
            <p class="text-gray-600">Professional safari designers</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold text-safari-brown mb-2">Flexible Schedule</h3>
            <p class="text-gray-600">Your timeline, your pace</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold text-safari-brown mb-2">Any Budget</h3>
            <p class="text-gray-600">From budget to luxury</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Customization Options -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-safari-orange/5 to-safari-brown/5">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-12">Customize Every Aspect</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="option in customOptions" :key="option.title"
               class="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-xl flex items-center justify-center mb-4">
              <div v-html="option.icon" class="text-safari-orange"></div>
            </div>
            <h3 class="text-xl font-heading font-bold text-safari-brown mb-3">{{ option.title }}</h3>
            <p class="text-gray-600 mb-4">{{ option.description }}</p>
            <ul class="space-y-2">
              <li v-for="item in option.items" :key="item" class="text-sm text-gray-600 flex items-center gap-2">
                <svg class="w-4 h-4 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Popular Custom Themes -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-4">Popular Custom Themes</h2>
        <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Get inspired by these popular custom safari themes</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="theme in themes" :key="theme.title"
               class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
            <div class="relative h-48 overflow-hidden group">
              <img :src="getImageUrl(theme.image)" :alt="theme.title" 
                   class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-safari-brown/90 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-4">
                <h3 class="text-xl font-heading font-bold text-white">{{ theme.title }}</h3>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-600 mb-4">{{ theme.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tag in theme.tags" :key="tag" 
                      class="bg-safari-orange/10 text-safari-orange px-3 py-1 rounded-full text-xs font-semibold">
                  {{ tag }}
                </span>
              </div>
              <a :href="$basePath + '/contact'" class="block w-full bg-safari-orange text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-safari-orange/90 transition">
                Customize This
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- How It Works -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-brown">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-white text-center mb-12">How Custom Safari Works</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div v-for="(step, index) in steps" :key="step.title" class="text-center">
            <div class="w-16 h-16 bg-safari-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-white">{{ index + 1 }}</span>
            </div>
            <h3 class="text-xl font-heading font-bold text-white mb-3">{{ step.title }}</h3>
            <p class="text-white/80">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Testimonials -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-12">What Our Clients Say</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="testimonial in testimonials" :key="testimonial.name"
               class="bg-white rounded-xl p-6 shadow-lg">
            <div class="flex items-center gap-1 mb-4">
              <svg v-for="n in 5" :key="n" class="w-5 h-5 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <p class="text-gray-700 mb-4 italic">"{{ testimonial.text }}"</p>
            <div class="font-semibold text-safari-brown">{{ testimonial.name }}</div>
            <div class="text-sm text-gray-600">{{ testimonial.trip }}</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-r from-safari-orange to-safari-orange/90">
      <div class="container mx-auto max-w-7xl text-center">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Ready to Design Your Dream Safari?</h2>
        <p class="text-xl text-white/95 mb-10 max-w-3xl mx-auto">
          Let's create a safari experience that's uniquely yours
        </p>
        <a :href="$basePath + '/contact'" class="inline-block bg-white text-safari-orange px-10 py-4 rounded-lg font-semibold text-lg hover:bg-safari-white transition transform hover:scale-105 shadow-xl">
          Start Planning Now
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

const customOptions = [
  {
    title: 'Destinations',
    description: 'Choose which parks and places to visit',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>',
    items: ['Serengeti', 'Ngorongoro', 'Tarangire', 'Zanzibar', 'Kilimanjaro', 'More...']
  },
  {
    title: 'Accommodation',
    description: 'Select your preferred lodging style',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>',
    items: ['Luxury lodges', 'Tented camps', 'Budget camping', 'Mid-range hotels', 'Mix & match']
  },
  {
    title: 'Duration',
    description: 'Set your ideal safari length',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/></svg>',
    items: ['Day trips', '3-5 days', '6-10 days', '2+ weeks', 'Flexible timing']
  },
  {
    title: 'Activities',
    description: 'Add special experiences',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/></svg>',
    items: ['Hot air balloon', 'Walking safaris', 'Cultural visits', 'Photography tours', 'Night drives']
  },
  {
    title: 'Group Size',
    description: 'Private or join a group',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/></svg>',
    items: ['Solo traveler', 'Couple', 'Family', 'Small group', 'Large group']
  },
  {
    title: 'Special Interests',
    description: 'Focus on your passions',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/></svg>',
    items: ['Photography', 'Birdwatching', 'Big cats', 'Great Migration', 'Conservation']
  }
];

const themes = [
  {
    title: 'Photography Safari',
    description: 'Designed for photographers with optimal lighting times and expert guidance',
    image: 'images/walters-tours-safaris-magdalena-kula-manchee-nVUZO1gc_-o-unsplash.jpg',
    tags: ['Photography', 'Expert Guide', 'Flexible Schedule']
  },
  {
    title: 'Honeymoon Safari',
    description: 'Romantic luxury experience with private game drives and special touches',
    image: 'images/walters-tours-safaris-sammy-wong-wzeGc7Uqopc-unsplash.jpg',
    tags: ['Romantic', 'Luxury', 'Private']
  },
  {
    title: 'Adventure Safari',
    description: 'Active safari with walking, canoeing, and off-the-beaten-path experiences',
    image: 'images/walters-tours-safaris-hu-chen-t-7Mlatf9iI-unsplash.jpg',
    tags: ['Active', 'Adventure', 'Unique']
  },
  {
    title: 'Migration Safari',
    description: 'Timed perfectly to witness the Great Migration river crossings',
    image: 'images/walters-tours-safaris-humphrey-m-e5hzQubIb68-unsplash.jpg',
    tags: ['Migration', 'Seasonal', 'Wildlife']
  },
  {
    title: 'Cultural Safari',
    description: 'Combine wildlife with authentic cultural experiences and village visits',
    image: 'images/walters-tours-safaris-denice-alex-LD6WgJlIpmk-unsplash.jpg',
    tags: ['Culture', 'Community', 'Authentic']
  },
  {
    title: 'Birding Safari',
    description: 'Specialized itinerary for bird enthusiasts with expert ornithologist guide',
    image: 'images/walters-tours-safaris-4779.jpg',
    tags: ['Birding', 'Specialist', 'Nature']
  }
];

const steps = [
  {
    title: 'Share Your Vision',
    description: 'Tell us your interests, budget, and travel dates'
  },
  {
    title: 'Get Proposal',
    description: 'Receive a detailed custom itinerary within 24 hours'
  },
  {
    title: 'Refine Together',
    description: 'Work with us to perfect every detail'
  },
  {
    title: 'Book & Enjoy',
    description: 'Confirm and embark on your dream safari'
  }
];

const testimonials = [
  {
    name: 'Sarah & Mike Johnson',
    trip: 'Custom Photography Safari',
    text: 'They designed the perfect photography safari for us. Every location was chosen for optimal lighting, and our guide knew exactly where to find the best shots.'
  },
  {
    name: 'David Chen',
    trip: 'Solo Adventure Safari',
    text: 'As a solo traveler, I wanted something unique. They created an incredible itinerary with walking safaris and cultural experiences I\'ll never forget.'
  },
  {
    name: 'Emma & James Wilson',
    trip: 'Honeymoon Safari',
    text: 'Our honeymoon safari was absolutely magical. Every detail was perfect, from the romantic lodges to the private game drives. Highly recommend!'
  }
];
</script>
