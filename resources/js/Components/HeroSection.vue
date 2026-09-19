<template>
  <section class="relative h-screen overflow-hidden">
    <div class="absolute inset-0">
      <div v-for="(image, index) in heroImages" :key="index"
           :class="['absolute inset-0 transition-all duration-[2000ms] ease-in-out', 
                    currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110']">
        <img :src="image" :alt="`Safari ${index + 1}`" 
             class="w-full h-full object-cover ken-burns" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-safari-brown/70 via-safari-brown/50 to-safari-brown/70"></div>
    </div>
    
    <!-- Floating Testimonials Background -->
    <div class="absolute right-0 top-0 bottom-0 w-1/3 overflow-hidden pointer-events-none hidden lg:block">
      <div class="testimonials-scroll h-full flex flex-col justify-start py-20 space-y-8">
        <div v-for="(testimonial, index) in duplicatedTestimonials" 
             :key="`testimonial-${index}`"
             class="text-white/20 text-right pr-8 transition-all duration-300 hover:text-white/40">
          <p class="text-sm italic mb-1">"{{ testimonial.content }}"</p>
          <p class="text-xs font-semibold">— {{ testimonial.name }}, {{ testimonial.country }}</p>
        </div>
      </div>
    </div>
    
    <!-- Mobile Horizontal Testimonials -->
    <div class="absolute top-20 left-0 right-0 h-20 overflow-hidden pointer-events-none lg:hidden">
      <div class="testimonials-scroll-horizontal flex items-center h-full space-x-12 px-4">
        <div v-for="(testimonial, index) in duplicatedTestimonials" 
             :key="`mobile-testimonial-${index}`"
             class="text-white/20 flex-shrink-0 max-w-xs">
          <p class="text-xs italic mb-1">"{{ testimonial.content }}"</p>
          <p class="text-xs font-semibold">— {{ testimonial.name }}, {{ testimonial.country }}</p>
        </div>
      </div>
    </div>
    
    <div class="relative h-full flex items-center justify-center text-center px-4">
      <div class="max-w-4xl">
        <h1 class="text-5xl md:text-7xl font-heading font-bold text-white mb-6 animate-fade-in">
          Experience the Wild Heart of Tanzania
        </h1>
        <p class="text-xl md:text-2xl text-white/90 mb-8">
          Luxury Safaris Crafted for You
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
          <a :href="$basePath + '/itineraries'" class="w-full sm:w-auto h-14 bg-safari-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-safari-orange/90 transition transform hover:scale-105 flex items-center justify-center">
            Explore Safaris
          </a>
          <BookingForm
            package-name="Custom Safari Trip"
            button-text="Plan Custom Trip"
            button-class="w-full sm:w-auto h-14 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-safari-brown transition flex items-center justify-center"
          />
        </div>
      </div>
    </div>
    
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
      </svg>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import BookingForm from './BookingForm.vue';

const imageNames = [
  'walters-tours-safaris-magdalena-kula-manchee-nVUZO1gc_-o-unsplash.jpg',
  'walters-tours-safaris-hu-chen-t-7Mlatf9iI-unsplash.jpg',
  'walters-tours-safaris-humphrey-m-e5hzQubIb68-unsplash.jpg',
];

const heroImages = computed(() => {
  const base = (typeof window !== 'undefined' && window.APP_BASE_PATH) || '';
  return imageNames.map(name => `${base}/images/${name}`);
});

const testimonials = [
  { 
    name: 'John Smith', 
    country: 'USA', 
    content: 'An unforgettable experience! The guides were knowledgeable and the wildlife was breathtaking.' 
  },
  { 
    name: 'Emma Wilson', 
    country: 'UK', 
    content: 'Best safari company in Tanzania. Professional, friendly, and truly cared about our experience.' 
  },
  { 
    name: 'Michael Chen', 
    country: 'Australia', 
    content: 'The trip of a lifetime! Every detail was perfect from start to finish.' 
  },
  { 
    name: 'Sarah Johnson', 
    country: 'Canada', 
    content: 'Incredible wildlife encounters and stunning landscapes. Highly recommend!' 
  },
  { 
    name: 'David Brown', 
    country: 'Germany', 
    content: 'Outstanding service and amazing safari experience. Will definitely return!' 
  },
  { 
    name: 'Lisa Anderson', 
    country: 'Sweden', 
    content: 'Professional guides, comfortable accommodations, and unforgettable memories.' 
  },
  { 
    name: 'James Taylor', 
    country: 'France', 
    content: 'Exceeded all expectations. The attention to detail was remarkable.' 
  },
  { 
    name: 'Maria Garcia', 
    country: 'Spain', 
    content: 'A magical journey through Tanzania. Every moment was special.' 
  },
];

// Duplicate testimonials for seamless loop
const duplicatedTestimonials = computed(() => [...testimonials, ...testimonials, ...testimonials]);

const currentSlide = ref(0);
let interval;

onMounted(() => {
  interval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % heroImages.value.length;
  }, 5000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.ken-burns {
  animation: kenBurns 20s ease-in-out infinite alternate;
}

@keyframes kenBurns {
  0% { transform: scale(1) translate(0, 0); }
  100% { transform: scale(1.15) translate(-2%, -2%); }
}

@keyframes scroll-up {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-33.33%);
  }
}

.testimonials-scroll {
  animation: scroll-up 40s linear infinite;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.testimonials-scroll-horizontal {
  animation: scroll-left 40s linear infinite;
}
</style>
