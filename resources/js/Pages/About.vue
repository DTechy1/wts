<template>
  <MainLayout>
    <Breadcrumb :breadcrumbs="[{ name: 'About Us' }]" />
    
    <!-- Hero Section -->
    <section class="relative h-[500px] overflow-hidden">
      <img :src="getImageUrl('images/gallery/2026-01-24.webp')" 
           alt="About Walters Tours" class="w-full h-full object-cover animate-ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-r from-safari-brown/95 to-safari-brown/60"></div>
      <div class="absolute inset-0 flex items-center px-4 md:px-8 lg:px-12">
        <div class="container mx-auto max-w-7xl">
          <h1 class="text-5xl md:text-7xl font-heading font-bold text-white mb-6">About Walters Tours & Safaris</h1>
          <p class="text-2xl text-white/95 max-w-3xl">Family-Owned Safari Experts with Over 10 Years of Excellence</p>
        </div>
      </div>
    </section>
    
    <!-- Our Story -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="font-heading font-bold mb-6">
              <span class="block text-2xl md:text-3xl text-gray-600 mb-2">WE ARE NOT A BIG COMPANY</span>
              <span class="block text-4xl md:text-6xl text-safari-orange">WE ARE YOUR TANZANIA FAMILY</span>
            </h2>
            <p class="text-lg text-gray-700 mb-4 leading-relaxed">
              Walters Tours & Safaris Ltd did not start in an office with a leather chair, <strong>IT STARTED WITH A LION.</strong> In 2013 I was a volunteer guide in the Serengeti. Every day I would tell tourists "Welcome to my home". They laughed. They said, "Walter, open your company".
            </p>
            <p class="text-lg text-gray-700 mb-4 leading-relaxed italic">
              One day a family from Canada cried and told me: <span class="font-semibold">"We didn't feel like tourists. We felt like we visited our Tanzanian brother."</span>
            </p>
            <p class="text-lg text-gray-700 mb-4 leading-relaxed">
              That's when I knew that <strong>Safaris are not a business. It's a friendship.</strong> Today Walters Tours is a 100% Tanzanian Family Company. Our office is in Zanzibar and Arusha. My staff are brothers, friends, and guides who grew up in Tanzania and learned about the wildlife and cultures of Africa.
            </p>
            <p class="text-lg text-gray-700 mb-4 leading-relaxed">
              We do not have British investors. We do not have a big board. <strong>We have you. We have your family.</strong> And we have one promise: To take you to our home, as brothers, not as customers.
            </p>
            <p class="text-lg text-gray-700 mb-6 leading-relaxed">
              Because I am Tanzanian, I know every riverbed. I know which lion is fierce. We know which part of the Serengeti has the most stars at night.
            </p>
          </div>
          <div class="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img :src="getImageUrl('images/gallery/2026-01-07 (8).webp')" 
                 alt="Safari Experience" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Awards & Recognition -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-safari-orange/5 to-safari-brown/5">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-heading font-bold text-safari-brown mb-4">Awards & Recognition</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Recognized for excellence in tourism and customer service</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl p-8 shadow-lg text-center">
            <div class="w-20 h-20 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-heading font-bold text-safari-brown mb-2">Travelers Choice</h3>
            <p class="text-gray-600">Nominated since 2016</p>
          </div>
          
          <div class="bg-white rounded-xl p-8 shadow-lg text-center">
            <div class="w-20 h-20 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-2xl font-heading font-bold text-safari-brown mb-2">6 Tourism Awards</h3>
            <p class="text-gray-600">Excellence in service</p>
          </div>
          
          <div class="bg-white rounded-xl p-8 shadow-lg text-center">
            <div class="w-20 h-20 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-2xl font-heading font-bold text-safari-brown mb-2">Licensed & Registered</h3>
            <p class="text-gray-600">Tanzania Tourism Board</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Our Values -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-safari-orange/5 to-safari-brown/5">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-12">Our Values</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="value in values" :key="value.title"
               class="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all text-center">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div v-html="value.icon" class="text-safari-orange"></div>
            </div>
            <h3 class="text-xl font-heading font-bold text-safari-brown mb-3">{{ value.title }}</h3>
            <p class="text-gray-600">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Why Choose Us -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img :src="getImageUrl('images/gallery/2026-01-07 (9).webp')" 
                 alt="Expert Guides" class="w-full h-full object-cover" />
          </div>
          <div>
            <h2 class="text-4xl font-heading font-bold text-safari-brown mb-6">Why Choose Us</h2>
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
        </div>
      </div>
    </section>
    
    <!-- Stats Section -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-heading font-bold text-safari-brown text-center mb-12">Our Impact</h2>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-5xl font-heading font-bold text-safari-orange mb-2">10+</div>
            <div class="text-gray-600">Years Experience</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-heading font-bold text-safari-orange mb-2">5,000+</div>
            <div class="text-gray-600">Happy Travelers</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-heading font-bold text-safari-orange mb-2">50+</div>
            <div class="text-gray-600">Safari Packages</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-heading font-bold text-safari-orange mb-2">100%</div>
            <div class="text-gray-600">Licensed & Insured</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Gallery Section -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-safari-brown/5 to-safari-orange/5">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-14">
          <div class="inline-flex items-center gap-2 bg-safari-orange/10 text-safari-orange px-5 py-2 rounded-full text-sm font-semibold mb-5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            Gallery
          </div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown mb-4">Our Safari Experiences</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Explore the breathtaking beauty of Tanzania through our curated collection of stunning safari moments</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(image, index) in galleryImages" :key="index" class="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
               :class="index === 0 || index === 3 ? 'md:row-span-2' : ''">
            <img :src="getImageUrl(image.src)" :alt="image.alt" 
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 :class="index === 0 || index === 3 ? 'min-h-[400px] md:min-h-[500px]' : 'h-64 md:h-80'" />
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
            <div class="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Conservation -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-safari-orange/5 to-safari-brown/5">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-heading font-bold text-safari-brown mb-6">Conservation Commitment</h2>
            <p class="text-lg text-gray-700 mb-4 leading-relaxed">
              We believe in responsible tourism that protects Tanzania's natural heritage for future generations. 
              A portion of every safari goes directly to local conservation efforts and community development projects.
            </p>
            <p class="text-lg text-gray-700 mb-6 leading-relaxed">
              We work closely with local communities, ensuring that tourism benefits the people who call these 
              incredible landscapes home. Our guides are all locally trained, and we prioritize eco-friendly 
              practices in all our operations.
            </p>
            <div class="flex flex-wrap gap-4">
              <div class="bg-white px-6 py-3 rounded-lg shadow-md">
                <div class="text-2xl font-bold text-safari-orange">10%</div>
                <div class="text-sm text-gray-600">To Conservation</div>
              </div>
              <div class="bg-white px-6 py-3 rounded-lg shadow-md">
                <div class="text-2xl font-bold text-safari-orange">100%</div>
                <div class="text-sm text-gray-600">Local Guides</div>
              </div>
              <div class="bg-white px-6 py-3 rounded-lg shadow-md">
                <div class="text-2xl font-bold text-safari-orange">Zero</div>
                <div class="text-sm text-gray-600">Plastic Policy</div>
              </div>
            </div>
          </div>
          <div class="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img :src="getImageUrl('images/gallery/2026-01-07 (8).webp')" 
                 alt="Conservation" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-r from-safari-orange to-safari-orange/90">
      <div class="container mx-auto max-w-7xl text-center">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Start Your Adventure Today</h2>
        <p class="text-xl text-white/95 mb-10 max-w-3xl mx-auto">
          Join thousands of satisfied travelers who've experienced the magic of Tanzania with us
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a :href="$basePath + '/contact'" class="bg-white text-safari-orange px-10 py-4 rounded-lg font-semibold text-lg hover:bg-safari-white transition transform hover:scale-105 shadow-xl">
            Contact Us
          </a>
          <a :href="$basePath + '/itineraries'" class="bg-safari-brown text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-safari-brown/90 transition transform hover:scale-105 shadow-xl">
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

const values = [
  {
    title: 'Excellence',
    description: 'We strive for excellence in every aspect of your safari experience',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>'
  },
  {
    title: 'Safety',
    description: 'Your safety is our top priority on every adventure',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>'
  },
  {
    title: 'Sustainability',
    description: 'Committed to eco-friendly practices and conservation',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/></svg>'
  },
  {
    title: 'Authenticity',
    description: 'Genuine experiences that connect you with Tanzania',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/></svg>'
  }
];

const galleryImages = [
  { src: 'images/gallery/2025-10-22.webp', alt: 'Safari Experience' },
  { src: 'images/gallery/2026-01-07 (3).webp', alt: 'Wildlife Safari' },
  { src: 'images/gallery/2026-01-07 (4).webp', alt: 'Tanzania Adventure' },
  { src: 'images/gallery/2026-01-07 (5).webp', alt: 'Safari Memories' },
];

const reasons = [
  {
    title: 'Expert Local Guides',
    description: 'All our guides are certified, experienced, and passionate about Tanzania'
  },
  {
    title: 'Personalized Service',
    description: 'Every safari is tailored to your interests and preferences'
  },
  {
    title: 'Quality Vehicles',
    description: 'Well-maintained 4x4 safari vehicles with pop-up roofs'
  },
  {
    title: 'Best Value',
    description: 'Competitive pricing without compromising on quality'
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock assistance before, during, and after your trip'
  },
  {
    title: 'Flexible Itineraries',
    description: 'We can customize any package to match your schedule and budget'
  }
];

</script>
