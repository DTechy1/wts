<template>
  <section class="relative -mt-20 z-10 px-4 md:px-8 lg:px-12">
    <div class="container mx-auto max-w-7xl">
      <div class="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <select v-model="search.destination" class="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-orange">
            <option value="">Select Destination</option>
            <option value="serengeti">Serengeti</option>
            <option value="ngorongoro">Ngorongoro</option>
            <option value="tarangire">Tarangire</option>
          </select>
          
          <select v-model="search.duration" class="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-orange">
            <option value="">Duration</option>
            <option value="1-3">1-3 Days</option>
            <option value="4-7">4-7 Days</option>
            <option value="8+">8+ Days</option>
          </select>
          
          <select v-model="search.budget" class="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-orange">
            <option value="">Budget</option>
            <option value="budget">Budget</option>
            <option value="mid">Mid-Range</option>
            <option value="luxury">Luxury</option>
          </select>
          
          <BookingForm
            button-text="Search Safaris"
            button-class="bg-safari-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-safari-orange/90 transition w-full"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue';
import BookingForm from './BookingForm.vue';

const search = reactive({
  destination: '',
  duration: '',
  budget: '',
});

const handleSearch = () => {
  console.log('Searching with:', search);
};
</script>
