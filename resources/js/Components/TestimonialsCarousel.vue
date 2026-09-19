<template>
  <section class="py-12 px-4 md:px-8 lg:px-12 bg-safari-brown text-white relative overflow-hidden">
    <div class="container mx-auto max-w-7xl relative z-10">
      <div class="text-center mb-8">
        <h2 class="text-3xl md:text-4xl font-heading font-bold mb-2">What Our Guests Say</h2>
        <p class="text-white/80 text-sm">Real experiences from real travelers</p>
      </div>
      
      <div class="max-w-4xl mx-auto">
        <!-- Main testimonial display -->
        <div class="relative min-h-[220px] mb-6">
          <TransitionGroup name="testimonial">
            <div 
              v-for="(testimonial, index) in displayTestimonials" 
              :key="index"
              v-show="currentIndex === index"
              class="absolute inset-0 flex items-center justify-center"
            >
              <div class="w-full">
                <div class="p-6 md:p-8">
                  <!-- Quote icon -->
                  <div class="flex justify-center mb-3">
                    <div class="w-10 h-10 bg-safari-orange/20 rounded-full flex items-center justify-center">
                      <svg class="w-5 h-5 text-safari-orange" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <!-- Testimonial content -->
                  <p class="text-base md:text-lg text-center mb-4 italic leading-relaxed text-white font-light">
                    "{{ testimonial.content }}"
                  </p>
                  
                  <!-- Author info with star rating -->
                  <div class="flex flex-col items-center gap-2">
                    <div class="flex items-center gap-3">
                      <div class="w-9 h-9 bg-safari-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {{ testimonial.name.charAt(0) }}
                      </div>
                      <div class="text-left">
                        <div class="font-bold text-base text-white">{{ testimonial.name }}</div>
                        <div class="text-white/70 text-xs flex items-center gap-1">
                          <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                          </svg>
                          {{ testimonial.country }}
                        </div>
                      </div>
                    </div>
                    
                    <!-- Star rating -->
                    <div class="flex gap-1">
                      <svg v-for="star in 5" :key="star" class="w-4 h-4 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TransitionGroup>
          
          <!-- Navigation buttons -->
          <button 
            @click="prev" 
            class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-safari-orange p-2.5 rounded-full hover:bg-safari-orange/90 transition-all shadow-xl hover:scale-110 z-20"
          >
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          
          <button 
            @click="next" 
            class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-safari-orange p-2.5 rounded-full hover:bg-safari-orange/90 transition-all shadow-xl hover:scale-110 z-20"
          >
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
        
        <!-- Thumbnail navigation -->
        <div class="flex justify-center gap-2 flex-wrap mb-4">
          <button 
            v-for="(testimonial, index) in displayTestimonials" 
            :key="index"
            @click="goToSlide(index)"
            class="group relative"
          >
            <div 
              class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all border-2"
              :class="currentIndex === index 
                ? 'bg-safari-orange text-white border-safari-orange scale-110 shadow-lg' 
                : 'bg-white/10 text-white/60 border-white/20 hover:border-safari-orange/50 hover:scale-105'"
            >
              {{ testimonial.name.charAt(0) }}
            </div>
          </button>
        </div>
        
        <!-- Progress bar -->
        <div class="max-w-sm mx-auto mb-10">
          <div class="h-0.5 bg-white/20 rounded-full overflow-hidden">
            <div 
              class="h-full bg-safari-orange transition-all duration-300 ease-linear"
              :style="{ width: `${((currentIndex + 1) / totalTestimonials) * 100}%` }"
            ></div>
          </div>
          <div class="text-center mt-1.5 text-white/60 text-xs">
            {{ currentIndex + 1 }} / {{ totalTestimonials }}
          </div>
        </div>

        <!-- Leave Us a Review Section -->
        <div class="bg-gradient-to-r from-white/10 via-white/15 to-white/10 backdrop-blur-md border border-white/25 rounded-2xl p-6 md:p-8 shadow-2xl">
          <div class="flex flex-col md:flex-row items-center justify-between gap-6">
            <!-- Left: Badge & Info -->
            <div class="flex items-center gap-4 text-center md:text-left">
              <div class="w-16 h-16 rounded-2xl bg-[#00aa6c] flex items-center justify-center text-white shadow-lg flex-shrink-0 mx-auto md:mx-0">
                <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M175.335 281.334c0 24.483-19.853 44.336-44.336 44.336-24.484 0-44.337-19.853-44.337-44.336 0-24.484 19.853-44.337 44.337-44.337 24.483 0 44.336 19.853 44.336 44.337zm205.554-44.337c-24.48 0-44.336 19.853-44.336 44.337 0 24.483 19.855 44.336 44.336 44.336 24.481 0 44.334-19.853 44.334-44.336-.006-24.47-19.839-44.31-44.309-44.323l-.025-.01v-.004zm125.002 44.337c0 68.997-55.985 124.933-124.999 124.933a124.466 124.466 0 01-84.883-33.252l-40.006 43.527-40.025-43.576a124.45 124.45 0 01-84.908 33.3c-68.968 0-124.933-55.937-124.933-124.932A124.586 124.586 0 0146.889 189L6 144.517h90.839c96.116-65.411 222.447-65.411 318.557 0H506l-40.878 44.484a124.574 124.574 0 0140.769 92.333zm-290.31 0c0-46.695-37.858-84.55-84.55-84.55-46.691 0-84.55 37.858-84.55 84.55 0 46.691 37.859 84.55 84.55 84.55 46.692 0 84.545-37.845 84.55-84.54v-.013.003zM349.818 155.1a244.01 244.01 0 00-187.666 0C215.532 175.533 256 223.254 256 278.893c0-55.634 40.463-103.362 93.826-123.786l-.005-.006h-.003zm115.64 126.224c0-46.694-37.858-84.55-84.55-84.55-46.691 0-84.552 37.859-84.552 84.55 0 46.692 37.855 84.55 84.553 84.55 46.697 0 84.55-37.858 84.55-84.55z"/>
                </svg>
              </div>
              <div>
                <div class="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <span class="text-[#34E0A1] text-base font-bold tracking-wider">●●●●●</span>
                  <span class="text-xs bg-[#00aa6c]/30 text-[#34E0A1] px-2 py-0.5 rounded-full font-semibold border border-[#34E0A1]/30">5.0 / 5.0 Rating</span>
                </div>
                <h3 class="text-xl md:text-2xl font-heading font-bold text-white mb-1">
                  Traveled with Walters Tours & Safaris?
                </h3>
                <p class="text-white/80 text-sm max-w-xl leading-relaxed">
                  We'd love to hear your story! Leave us a review on TripAdvisor and help fellow adventurers plan their dream safari in Tanzania.
                </p>
              </div>
            </div>

            <!-- Right: Action Button -->
            <div class="flex-shrink-0 w-full md:w-auto">
              <a 
                href="https://www.tripadvisor.com/Attraction_Review-g297913-d34556950-Reviews-Walters_Tours_Safaris_Ltd-Arusha_Arusha_Region.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="group w-full md:w-auto bg-[#00aa6c] hover:bg-[#008f5a] text-white px-7 py-4 rounded-xl font-bold text-base transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3 border border-emerald-400/30"
              >
                <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M175.335 281.334c0 24.483-19.853 44.336-44.336 44.336-24.484 0-44.337-19.853-44.337-44.336 0-24.484 19.853-44.337 44.337-44.337 24.483 0 44.336 19.853 44.336 44.337zm205.554-44.337c-24.48 0-44.336 19.853-44.336 44.337 0 24.483 19.855 44.336 44.336 44.336 24.481 0 44.334-19.853 44.334-44.336-.006-24.47-19.839-44.31-44.309-44.323l-.025-.01v-.004zm125.002 44.337c0 68.997-55.985 124.933-124.999 124.933a124.466 124.466 0 01-84.883-33.252l-40.006 43.527-40.025-43.576a124.45 124.45 0 01-84.908 33.3c-68.968 0-124.933-55.937-124.933-124.932A124.586 124.586 0 0146.889 189L6 144.517h90.839c96.116-65.411 222.447-65.411 318.557 0H506l-40.878 44.484a124.574 124.574 0 0140.769 92.333zm-290.31 0c0-46.695-37.858-84.55-84.55-84.55-46.691 0-84.55 37.858-84.55 84.55 0 46.691 37.859 84.55 84.55 84.55 46.692 0 84.545-37.845 84.55-84.54v-.013.003zM349.818 155.1a244.01 244.01 0 00-187.666 0C215.532 175.533 256 223.254 256 278.893c0-55.634 40.463-103.362 93.826-123.786l-.005-.006h-.003zm115.64 126.224c0-46.694-37.858-84.55-84.55-84.55-46.691 0-84.552 37.859-84.552 84.55 0 46.692 37.855 84.55 84.553 84.55 46.697 0 84.55-37.858 84.55-84.55z"/>
                </svg>
                <span>Leave Us a Review</span>
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonial-enter-active,
.testimonial-leave-active {
  transition: all 0.6s ease;
}

.testimonial-enter-from {
  opacity: 0;
  transform: translateX(100px) scale(0.95);
}

.testimonial-leave-to {
  opacity: 0;
  transform: translateX(-100px) scale(0.95);
}
</style>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  testimonials: {
    type: Array,
    default: () => []
  }
});

// Real TripAdvisor & Google Business Reviews
const defaultTestimonials = [
  { 
    id: 1, 
    content: 'We just returned home after a 10 day Safari and cultures at Maasai with Walters Tours & Safaris Ltd. This company is fabulous! Very responsive, very much attention to detail. Our guide Bernard is a very skilled tracker and animal spotter.', 
    name: 'Sarah Mueller', 
    country: 'TripAdvisor Review' 
  },
  { 
    id: 2, 
    content: 'We had an amazing 3 night 4 day safari with Walter\'s in the Serengeti and Ngorongoro Crater plus a Maasai Village Visit. We saw so many animals and the accommodations were fantastic! Being from Australia it was difficult to find a safari company, but Walter\'s made everything easy.', 
    name: 'Jodie Holmes', 
    country: 'TripAdvisor Review' 
  },
  { 
    id: 3, 
    content: 'The safari with Walter\'s Tours and Safaris was absolutely amazing! Our guide was excellent, very knowledgeable, friendly, and made the whole experience unforgettable. He drove us everywhere and made sure we saw all the animals! The lunch in the middle of nature was the perfect touch. Highly recommended!', 
    name: 'Ana Gmajnić', 
    country: 'Google Review' 
  },
  { 
    id: 4, 
    content: 'A wonderful trip. The guide was very helpful and provided a lot of interesting information, and the driver was a master of the wheel. I highly recommend it.', 
    name: 'Jacek Boksa', 
    country: 'TripAdvisor Review' 
  },
  { 
    id: 5, 
    content: 'Jambo! Thank you for the amazing safari of my honeymoon trip from Zanzibar to safari! Shout out to the best guide Goodluck and Walter for his best communication from the office to answer our questions!', 
    name: 'Aneth Sylvester', 
    country: 'Google Review' 
  },
  { 
    id: 6, 
    content: 'I had a wonderful experience with Walter\'s. They offered the best price for my Ngorongoro and Serengeti Safari. The food was excellent, the camping was clean. Would definitely book again with them!', 
    name: 'Raisa Ritfeld', 
    country: 'TripAdvisor Review' 
  },
  { 
    id: 7, 
    content: 'My experience with Walter\'s tour and safaris was wonderful. My safari in the Serengeti park was absolutely better than I have ever imagined. I could see many animals and understand their behavior with the perfect explanations of the driver.', 
    name: 'Sabrina Borraccino', 
    country: 'TripAdvisor Review' 
  },
  { 
    id: 8, 
    content: 'Best guide from Walters Tours & Safaris! Me and my fiancé we booked a 5 days trip: Lake Manyara, Serengeti and Ngorongoro and Walter\'s team made it happen with excellent service and affordable prices. Highly recommend this company!', 
    name: 'Njau Christina', 
    country: 'Google Review' 
  },
  { 
    id: 9, 
    content: 'These guys are amazing! We used the team to take us to Mikumi Safari, Nakupenda Sandbank, Stone Town, Ntente and Mnemba to see the dolphins and each trip was special in its own way. We were guided by Abdul on most excursions and he was excellent.', 
    name: 'Nic Lowe', 
    country: 'Google Review' 
  },
  { 
    id: 10, 
    content: 'Me and my partner had an amazing week in Tanzania\'s parks and extremely happy with our safari. We saw the "Big Five" at Serengeti and Ngorongoro on top of many many other wild animals, not to mention the outstanding landscapes and accommodations.', 
    name: 'Yolanda Finch', 
    country: 'Google Review' 
  },
  { 
    id: 11, 
    content: 'We took a day safari from Zanzibar to Mikumi National Park in Tanzania. It was a wonderful experience; our guide was really good, spoke Italian, and explained lots of interesting facts to us.', 
    name: 'Vincenzo Calabrese', 
    country: 'Italy' 
  },
];

const displayTestimonials = computed(() => {
  return props.testimonials && props.testimonials.length > 0 ? props.testimonials : defaultTestimonials;
});

const currentIndex = ref(0);
const totalTestimonials = computed(() => displayTestimonials.value.length);
let autoPlayInterval = null;

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % totalTestimonials.value;
};

const prev = () => {
  currentIndex.value = currentIndex.value === 0 ? totalTestimonials.value - 1 : currentIndex.value - 1;
};

const goToSlide = (index) => {
  currentIndex.value = index;
  resetAutoPlay();
};

const startAutoPlay = () => {
  autoPlayInterval = setInterval(() => {
    next();
  }, 5000); // Change slide every 5 seconds
};

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
  }
};

const resetAutoPlay = () => {
  stopAutoPlay();
  startAutoPlay();
};

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  stopAutoPlay();
});
</script>
