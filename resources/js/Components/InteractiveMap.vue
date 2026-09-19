<template>
  <section class="py-20 px-4 md:px-8 lg:px-12">
    <div class="container mx-auto max-w-7xl">
      <h2 class="text-4xl md:text-5xl font-heading font-bold text-center mb-4">Explore Tanzania</h2>
      <p class="text-center text-gray-600 mb-12">Click on parks to discover more</p>
      
      <div class="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div v-for="park in parks" :key="park.name"
             @click="selectPark(park)"
             class="bg-white rounded-xl p-6 shadow-lg cursor-pointer hover:shadow-2xl transition-all transform hover:-translate-y-2">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-safari-orange/10 rounded-full mb-3">
            <svg class="w-8 h-8 text-safari-orange" fill="currentColor" viewBox="0 0 24 24">
              <path :d="park.icon"/>
            </svg>
          </div>
          <h3 class="text-xl font-heading font-bold mb-2">{{ park.name }}</h3>
          <p class="text-sm text-gray-600">{{ park.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const parks = [
  { name: 'Serengeti', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z', description: 'Great Migration & Big Five' },
  { name: 'Ngorongoro', icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5', description: 'Crater Paradise' },
  { name: 'Tarangire', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z', description: 'Elephant Haven' },
  { name: 'Lake Manyara', icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z', description: 'Flamingo Paradise' },
  { name: 'Kilimanjaro', icon: 'M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z', description: 'Africa\'s Highest Peak' },
  { name: 'Zanzibar', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z', description: 'Beach Paradise' },
];

const selectPark = (park) => {
  console.log('Selected park:', park.name);
};
</script>
