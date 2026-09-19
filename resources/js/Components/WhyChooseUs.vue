<template>
  <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-brown text-white">
    <div class="container mx-auto max-w-7xl">
      <h2 class="text-4xl md:text-5xl font-heading font-bold text-center mb-16">Why Choose Walters</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div v-for="reason in reasons" :key="reason.title" class="text-center">
          <div class="inline-flex items-center justify-center w-20 h-20 bg-safari-orange rounded-full mb-6">
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="reason.icon"/>
            </svg>
          </div>
          <h3 class="text-2xl font-heading font-bold mb-4">{{ reason.title }}</h3>
          <p class="text-white/80">{{ reason.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const reasons = [
  {
    title: 'Expert Guides',
    description: 'Professional guides with deep knowledge of Tanzania wildlife and culture',
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
  },
  {
    title: 'Luxury Experience',
    description: 'Premium accommodations and personalized service throughout your journey',
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
  },
  {
    title: 'Best Value',
    description: 'Competitive pricing with no hidden costs and flexible payment options',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  }
];
</script>
