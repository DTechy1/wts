<template>
  <MainLayout>
    <Breadcrumb :items="breadcrumbItems" />
    
    <!-- Hero Section -->
    <section class="relative h-[65vh] overflow-hidden">
      <img :src="getImageUrl('images/walters-tours-safaris-community-charity.png')" 
           alt="Support Locals Community Charity" class="w-full h-full object-cover ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-r from-safari-brown/95 via-safari-brown/70 to-transparent"></div>
      <div class="absolute inset-0 flex items-center px-4 md:px-8 lg:px-12">
        <div class="container mx-auto max-w-7xl">
          <div class="inline-flex items-center gap-2 bg-safari-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
            </svg>
            Giving Back to Tanzania
          </div>
          <h1 class="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            Support Locals<br class="hidden md:block" /> Community
          </h1>
          <p class="text-xl md:text-2xl text-white/95 max-w-3xl mb-8 leading-relaxed">
            Come as a tourist and leave as a friend. Partner with us to improve local education, social welfare, and projects.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a :href="$basePath + '/contact'" class="inline-block bg-safari-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-safari-orange/90 transition transform hover:scale-105 text-center">
              Partner or Volunteer
            </a>
            <a href="#initiatives" class="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-safari-brown transition text-center">
              Our Initiatives
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Message & Vision -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div class="lg:col-span-7">
            <div class="inline-block bg-safari-orange/10 text-safari-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Social Welfare & Responsibility
            </div>
            <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown mb-6 leading-tight">
              Our Obligation to Support and Empower
            </h2>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              We have a serious obligation to maintain and improve Tanzania's social welfare, economy, and environment. In addition to hiring local residents, we have established a wonderful relationship with the local community by donating funds and supporting volunteer projects.
            </p>
            <blockquote class="border-l-4 border-safari-orange pl-6 my-8 italic text-xl text-safari-brown font-heading font-semibold">
              "Come as a tourist and leave as a friend."
            </blockquote>
            <p class="text-lg text-gray-600 leading-relaxed">
              Many touring families, couples, and groups decide to add a day or two to their Tanzanian itinerary to work in the community and donate funds to help complete projects at the local school. It is a great way to give back, and see with your own eyes the benefit your time and money make to the students, teachers, and the local community.
            </p>
          </div>
          
          <div class="lg:col-span-5 relative">
            <div class="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
              <h3 class="text-2xl font-heading font-bold text-safari-brown mb-6">Support Locals Fund</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                By booking your safari with Walters Tours & Safaris, you are directly contributing to the community.
              </p>
              
              <!-- Core Stat Card -->
              <div class="bg-gradient-to-br from-safari-orange to-safari-orange/90 rounded-2xl p-6 text-white mb-8">
                <div class="text-5xl font-heading font-bold mb-2">20%</div>
                <div class="font-semibold text-lg mb-1">Direct Safari Profit Donation</div>
                <p class="text-white/80 text-sm leading-relaxed">
                  20% of some of our profits go directly towards supporting younger orphans at the community center, providing education and food.
                </p>
              </div>

              <div class="space-y-4">
                <h4 class="font-bold text-safari-brown">Specific Donations:</h4>
                <p class="text-sm text-gray-500">
                  Volunteers and tourists can also choose to give specific target donations if they wish to help people in need.
                </p>
                <a :href="$basePath + '/contact'" class="block bg-safari-brown text-white text-center py-4 rounded-xl hover:bg-safari-orange transition font-semibold">
                  Make a Specific Donation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Initiatives Section -->
    <section id="initiatives" class="py-20 px-4 md:px-8 lg:px-12 bg-white">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-16">
          <div class="inline-block bg-safari-orange/10 text-safari-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            How We Help
          </div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown mb-4">
            Key Focus Areas
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Our projects cover education, social welfare, environment preservation, and economic development
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Education & Orphan Care -->
          <div class="bg-gradient-to-br from-safari-brown/5 to-safari-orange/5 rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500 group">
            <div class="w-16 h-16 bg-safari-orange text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-heading font-bold text-safari-brown mb-4">Education & Food</h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              Supporting orphans and children in need with access to school supplies, qualified teachers, clean classroom facilities, and hot daily meals.
            </p>
            <div class="text-safari-orange font-bold text-sm">20% Profit Funded</div>
          </div>

          <!-- Social Welfare -->
          <div class="bg-gradient-to-br from-safari-brown/5 to-safari-orange/5 rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500 group">
            <div class="w-16 h-16 bg-safari-orange text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
            </div>
            <h3 class="text-2xl font-heading font-bold text-safari-brown mb-4">Community Center</h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              Building and maintaining community spaces that act as a hub for educational resources, local training programs, and support services.
            </p>
            <div class="text-safari-orange font-bold text-sm">Direct Volunteer Projects</div>
          </div>

          <!-- Economic Support -->
          <div class="bg-gradient-to-br from-safari-brown/5 to-safari-orange/5 rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500 group">
            <div class="w-16 h-16 bg-safari-orange text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-heading font-bold text-safari-brown mb-4">Hiring Locals</h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              Empowering local communities by prioritizing the employment of local safari guides, drivers, cooks, and craftsmen to support the circular economy.
            </p>
            <div class="text-safari-orange font-bold text-sm">100% Local Workforce</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Volunteer & Visit Section -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-safari-brown to-safari-brown/95 text-white">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="inline-block bg-safari-orange text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Add a Day to Your Itinerary
            </div>
            <h2 class="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              See the Benefit with Your Own Eyes
            </h2>
            <p class="text-lg text-white/80 mb-6 leading-relaxed">
              If you would like to make your visit even more memorable, you can extend your safari itinerary to include community service. Interact directly with local school children, assist with school maintenance, or contribute to classroom teaching.
            </p>
            
            <div class="space-y-6 mt-8">
              <div class="flex gap-4">
                <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-lg text-white mb-1">Help Complete Projects</h4>
                  <p class="text-white/70">Support with structural projects at schools and centers such as classroom building or plumbing.</p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-lg text-white mb-1">Food Program Support</h4>
                  <p class="text-white/70">Help prepare and serve daily nutritious meals to children and orphans at our community kitchen.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <img :src="getImageUrl('images/walters-tours-safaris-community-charity.png')" 
                 alt="Volunteering with children" 
                 class="rounded-3xl object-cover h-64 w-full shadow-lg" />
            <img :src="getImageUrl('images/walters-tours-safaris-magdalena-kula-manchee-nVUZO1gc_-o-unsplash.jpg')" 
                 alt="Tanzanian school children" 
                 class="rounded-3xl object-cover h-64 w-full shadow-lg mt-8" />
            <img :src="getImageUrl('images/walters-tours-safaris-hu-chen-t-7Mlatf9iI-unsplash.jpg')" 
                 alt="Local community support" 
                 class="rounded-3xl object-cover h-64 w-full shadow-lg -mt-8" />
            <img :src="getImageUrl('images/walters-tours-safaris-denice-alex-LD6WgJlIpmk-unsplash.jpg')" 
                 alt="Local guide interaction" 
                 class="rounded-3xl object-cover h-64 w-full shadow-lg" />
          </div>
        </div>
      </div>
    </section>

    <!-- Specific Target Donation Form / Action -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-4xl font-heading font-bold text-safari-brown mb-6">
          Ready to Make a Difference?
        </h2>
        <p class="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Contact us today to integrate a community support day into your custom safari package, or to make direct donations.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a :href="$basePath + '/contact'" class="bg-safari-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-safari-orange/90 transition transform hover:scale-105">
            Contact Our Charity Team
          </a>
          <a :href="$basePath + '/itineraries'" class="border-2 border-safari-brown text-safari-brown px-8 py-4 rounded-lg font-semibold hover:bg-safari-brown hover:text-white transition">
            View Safari Packages
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

const breadcrumbItems = [
  { label: 'Home', href: '/wts' },
  { label: 'Charity & Community', href: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' }
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
