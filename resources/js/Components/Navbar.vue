<template>
  <nav class="fixed w-full z-50 bg-white shadow-md transition-all duration-300">
    <!-- Top Contact Bar (shows when scrolled) -->
    <transition name="slide-down">
      <div v-if="scrolled" class="bg-safari-orange/90 backdrop-blur-sm border-b border-safari-orange">
        <div class="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12 py-2">
          <div class="flex items-center justify-between text-white text-sm">
            <!-- Contact Us with Icons -->
            <div class="flex items-center gap-4">
              <span class="hidden md:inline font-semibold">Contact Us</span>
              <div class="flex items-center gap-3">
                <a href="tel:+255686526171" class="flex items-center gap-1 hover:text-safari-brown transition" title="Call Us">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </a>
                <span class="text-white/50">|</span>
                <a href="mailto:info@walterstoursafaris.co.tz" class="flex items-center gap-1 hover:text-safari-brown transition" title="Email Us">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <!-- Social Media Icons -->
            <div class="flex items-center gap-3">
              <a href="https://www.facebook.com/walterstoursafaris/" target="_blank" rel="noopener noreferrer" class="hover:text-safari-brown transition" title="Facebook">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/walters_tours_safaris_ltd" target="_blank" rel="noopener noreferrer" class="hover:text-safari-brown transition" title="Instagram">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.tripadvisor.com/Attraction_Review-g297913-d34556950-Reviews-Walters_Tours_Safaris_Ltd-Arusha_Arusha_Region.html" target="_blank" rel="noopener noreferrer" class="hover:text-safari-brown transition" title="TripAdvisor">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M175.335 281.334c0 24.483-19.853 44.336-44.336 44.336-24.484 0-44.337-19.853-44.337-44.336 0-24.484 19.853-44.337 44.337-44.337 24.483 0 44.336 19.853 44.336 44.337zm205.554-44.337c-24.48 0-44.336 19.853-44.336 44.337 0 24.483 19.855 44.336 44.336 44.336 24.481 0 44.334-19.853 44.334-44.336-.006-24.47-19.839-44.31-44.309-44.323l-.025-.01v-.004zm125.002 44.337c0 68.997-55.985 124.933-124.999 124.933a124.466 124.466 0 01-84.883-33.252l-40.006 43.527-40.025-43.576a124.45 124.45 0 01-84.908 33.3c-68.968 0-124.933-55.937-124.933-124.932A124.586 124.586 0 0146.889 189L6 144.517h90.839c96.116-65.411 222.447-65.411 318.557 0H506l-40.878 44.484a124.574 124.574 0 0140.769 92.333zm-290.31 0c0-46.695-37.858-84.55-84.55-84.55-46.691 0-84.55 37.858-84.55 84.55 0 46.691 37.859 84.55 84.55 84.55 46.692 0 84.545-37.845 84.55-84.54v-.013.003zM349.818 155.1a244.01 244.01 0 00-187.666 0C215.532 175.533 256 223.254 256 278.893c0-55.634 40.463-103.362 93.826-123.786l-.005-.006h-.003zm115.64 126.224c0-46.694-37.858-84.55-84.55-84.55-46.691 0-84.552 37.859-84.552 84.55 0 46.692 37.855 84.55 84.553 84.55 46.697 0 84.55-37.858 84.55-84.55z"/>
                </svg>
              </a>
              <a href="https://wa.me/255686526171" target="_blank" rel="noopener noreferrer" class="hover:text-safari-brown transition" title="WhatsApp">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
    
    <div class="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12 py-3 flex justify-between items-center">
      <a :href="$basePath + '/'" class="flex items-center hover:opacity-90 transition py-1">
        <img :src="$basePath + '/images/walters-tours-logo-removebg-preview.png'" alt="Walters Tours & Safaris" class="h-12 md:h-14 w-auto object-contain" />
      </a>
      
      <div class="hidden md:flex space-x-6 items-center">
        <a v-for="link in navLinks" :key="link.name" 
           @mouseenter="link.megaMenu ? openMegaMenu(link.name) : closeMegaMenu()"
           :href="link.href" 
           :class="link.name === 'Book Now' 
                    ? 'bg-safari-orange text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-safari-orange/90 transition shadow-sm transform hover:scale-105 ml-2' 
                    : ['text-safari-brown hover:text-safari-orange font-semibold transition relative py-2', 
                       activeMegaMenu === link.name ? 'text-safari-orange' : '']">
          {{ link.name }}
          <svg v-if="link.megaMenu" class="w-4 h-4 inline-block ml-1 transition-transform" 
               :class="activeMegaMenu === link.name ? 'rotate-180' : ''"
               fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </a>
      </div>
      
      <button @click="toggleMenu" class="md:hidden text-safari-brown focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>
    
    <!-- Mega Menu Dropdown -->
    <transition name="mega-menu">
      <div v-if="activeMegaMenu" 
           @mouseenter="keepMegaMenuOpen" 
           @mouseleave="closeMegaMenu"
           class="absolute top-full left-1/2 transform -translate-x-1/2 w-[90%] max-w-6xl bg-white shadow-2xl border-t-4 border-safari-orange rounded-b-xl mt-2">
        <div class="px-8 py-10">
          
          <!-- Itineraries Mega Menu -->
          <div v-if="activeMegaMenu === 'Itineraries'">
            <div class="grid grid-cols-4 gap-8">
              <!-- Column 1: Tanzania Safaris -->
              <div>
                <h4 class="font-heading font-bold text-safari-brown mb-4 text-sm uppercase tracking-wider border-b pb-2 border-safari-orange/20">Tanzania Safaris</h4>
                <ul class="space-y-3">
                  <li v-for="item in tanzaniaSafaris" :key="item.name">
                    <a :href="item.href" class="block group">
                      <div class="font-semibold text-sm text-gray-700 group-hover:text-safari-orange transition">{{ item.name }}</div>
                      <div class="text-xs text-gray-400">{{ item.duration }}</div>
                    </a>
                  </li>
                </ul>
              </div>

              <!-- Column 2: Day Trips -->
              <div>
                <h4 class="font-heading font-bold text-safari-brown mb-4 text-sm uppercase tracking-wider border-b pb-2 border-safari-orange/20">Day Trips</h4>
                <ul class="space-y-3">
                  <li v-for="item in dayTrips" :key="item.name">
                    <a :href="item.href" class="block group">
                      <div class="font-semibold text-sm text-gray-700 group-hover:text-safari-orange transition">{{ item.name }}</div>
                      <div class="text-xs text-gray-400">Day Trip</div>
                    </a>
                  </li>
                </ul>
              </div>

              <!-- Column 3: Mountain Trekking -->
              <div>
                <h4 class="font-heading font-bold text-safari-brown mb-4 text-sm uppercase tracking-wider border-b pb-2 border-safari-orange/20">Mountain Trekking</h4>
                <ul class="space-y-3">
                  <li v-for="item in mountains" :key="item.name">
                    <a :href="item.href" class="block group">
                      <div class="font-semibold text-sm text-gray-700 group-hover:text-safari-orange transition">{{ item.name }}</div>
                      <div class="text-xs text-gray-400">{{ item.duration }}</div>
                    </a>
                  </li>
                </ul>
              </div>

              <!-- Column 4: Zanzibar & Beyond -->
              <div>
                <h4 class="font-heading font-bold text-safari-brown mb-4 text-sm uppercase tracking-wider border-b pb-2 border-safari-orange/20">Zanzibar & Beyond</h4>
                <ul class="space-y-3">
                  <li v-for="item in zanzibarRegional" :key="item.name">
                    <a :href="item.href" class="block group">
                      <div class="font-semibold text-sm text-gray-700 group-hover:text-safari-orange transition">{{ item.name }}</div>
                      <div class="text-xs text-gray-400">{{ item.duration }}</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <!-- Quick Links -->
            <div class="mt-8 pt-8 border-t border-gray-200">
              <div class="flex justify-between items-center">
                <div>
                  <h4 class="font-bold text-safari-brown mb-1">Tailored Experience Planning</h4>
                  <p class="text-sm text-gray-600">Want to customize or mix these routes? Our safari experts will build it for you.</p>
                </div>
                <a :href="$basePath + '/itineraries'" class="bg-safari-orange text-white px-6 py-2 rounded-lg hover:bg-safari-orange/90 transition text-sm font-semibold">
                  View All Itineraries Collection
                </a>
              </div>
            </div>
          </div>
          
          <!-- Destinations Mega Menu -->
          <div v-if="activeMegaMenu === 'Destinations'">
            <div class="grid grid-cols-4 gap-6">
              <!-- Main Destinations -->
              <div v-for="destination in destinations" :key="destination.name" 
                   class="group cursor-pointer">
                <a :href="destination.href" class="block">
                  <div class="relative h-52 rounded-lg overflow-hidden mb-3 shadow-md">
                    <img :src="destination.image" :alt="destination.name" 
                         class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div class="absolute inset-0 bg-gradient-to-t from-safari-brown/90 via-safari-brown/40 to-transparent"></div>
                    <div class="absolute inset-0 flex flex-col justify-end p-5">
                      <h3 class="text-white font-heading font-bold text-2xl mb-1">{{ destination.name }}</h3>
                      <p class="text-white/90 text-sm mb-2">{{ destination.subtitle }}</p>
                      <div class="flex items-center text-safari-orange text-xs font-semibold">
                        <span>Explore</span>
                        <svg class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p class="text-gray-600 text-xs leading-relaxed">{{ destination.description }}</p>
                </a>
              </div>
            </div>
            
            <!-- Quick Links -->
            <div class="mt-8 pt-8 border-t border-gray-200">
              <div class="flex justify-between items-center">
                <div>
                  <h4 class="font-bold text-safari-brown mb-2">Popular Parks & Reserves</h4>
                  <div class="flex gap-4 text-sm">
                    <a href="#" class="text-gray-600 hover:text-safari-orange transition">Tarangire</a>
                    <a href="#" class="text-gray-600 hover:text-safari-orange transition">Lake Manyara</a>
                    <a href="#" class="text-gray-600 hover:text-safari-orange transition">Zanzibar</a>
                    <a href="#" class="text-gray-600 hover:text-safari-orange transition">Arusha</a>
                  </div>
                </div>
                <a :href="$basePath + '/destinations'" class="bg-safari-orange text-white px-6 py-2 rounded-lg hover:bg-safari-orange/90 transition text-sm font-semibold">
                  View All Destinations
                </a>
              </div>
            </div>
          </div>
          <!-- Cultural Tours Mega Menu -->
          <div v-if="activeMegaMenu === 'Cultural Tours'">
            <div class="grid grid-cols-2 gap-8">
              <div v-for="tour in culturalTours" :key="tour.name" class="group cursor-pointer">
                <a :href="tour.href" class="block">
                  <div class="relative h-56 rounded-lg overflow-hidden mb-4 shadow-md">
                    <img :src="tour.image" :alt="tour.name" 
                         class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div class="absolute inset-0 bg-gradient-to-t from-safari-brown/90 via-safari-brown/40 to-transparent"></div>
                    <div class="absolute inset-0 flex flex-col justify-end p-6">
                      <div class="inline-block bg-safari-orange text-white px-3 py-1 rounded-full text-xs font-bold mb-2 w-fit">{{ tour.badge }}</div>
                      <h3 class="text-white font-heading font-bold text-2xl mb-1">{{ tour.name }}</h3>
                      <p class="text-white/90 text-sm">{{ tour.subtitle }}</p>
                    </div>
                  </div>
                  <p class="text-gray-600 text-sm leading-relaxed group-hover:text-safari-orange transition">
                    {{ tour.description }}
                  </p>
                </a>
              </div>
            </div>
            
            <!-- Cultural Tours Footer -->
            <div class="mt-8 pt-8 border-t border-gray-200">
              <div class="flex justify-between items-center">
                <div>
                  <h4 class="font-bold text-safari-brown mb-1">Immerse in Authentic African Culture</h4>
                  <p class="text-sm text-gray-600">Add a cultural experience to your Tanzania safari itinerary</p>
                </div>
                <a :href="$basePath + '/contact'" class="bg-safari-orange text-white px-6 py-2 rounded-lg hover:bg-safari-orange/90 transition text-sm font-semibold">
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
          
          <!-- Quick Navigation Mega Menu -->
          <div v-if="activeMegaMenu === 'Quick Navigation'">
            <div class="grid grid-cols-3 gap-8">
              <!-- Column 1 -->
              <div>
                <h4 class="font-bold text-safari-brown mb-4 text-lg">Popular Resources</h4>
                <ul class="space-y-3">
                  <li v-for="link in quickNavCol1" :key="link.name">
                    <a :href="link.href" class="flex items-center text-gray-600 hover:text-safari-orange transition group">
                      <svg class="w-4 h-4 mr-2 text-safari-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                      </svg>
                      <span class="group-hover:translate-x-1 transition-transform">{{ link.name }}</span>
                    </a>
                  </li>
                </ul>
              </div>
              
              <!-- Column 2 -->
              <div>
                <h4 class="font-bold text-safari-brown mb-4 text-lg">Planning Your Trip</h4>
                <ul class="space-y-3">
                  <li v-for="link in quickNavCol2" :key="link.name">
                    <a :href="link.href" class="flex items-center text-gray-600 hover:text-safari-orange transition group">
                      <svg class="w-4 h-4 mr-2 text-safari-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                      </svg>
                      <span class="group-hover:translate-x-1 transition-transform">{{ link.name }}</span>
                    </a>
                  </li>
                </ul>
              </div>
              
              <!-- Column 3 -->
              <div>
                <h4 class="font-bold text-safari-brown mb-4 text-lg">Support & Info</h4>
                <ul class="space-y-3">
                  <li v-for="link in quickNavCol3" :key="link.name">
                    <a :href="link.href" class="flex items-center text-gray-600 hover:text-safari-orange transition group">
                      <svg class="w-4 h-4 mr-2 text-safari-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                      </svg>
                      <span class="group-hover:translate-x-1 transition-transform">{{ link.name }}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <!-- Featured Banner -->
            <div class="mt-8 pt-8 border-t border-gray-200">
              <div class="bg-gradient-to-r from-safari-orange/10 to-safari-brown/10 rounded-lg p-6 flex items-center justify-between">
                <div>
                  <h4 class="font-bold text-safari-brown text-lg mb-2">Need Help Planning?</h4>
                  <p class="text-gray-600 text-sm">Our safari experts are ready to create your perfect itinerary</p>
                </div>
                <a :href="$basePath + '/contact'" class="bg-safari-orange text-white px-6 py-3 rounded-lg hover:bg-safari-orange/90 transition font-semibold whitespace-nowrap">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </transition>
    
    <!-- Mobile Menu -->
    <div v-if="menuOpen" class="md:hidden bg-safari-brown border-t border-safari-orange/30">
      <div v-for="link in navLinks" :key="link.name" class="border-b border-safari-brown/50">
        <!-- Links without mega menu -->
        <a v-if="!link.megaMenu" :href="link.href"
           class="block px-4 py-3 text-white hover:bg-safari-orange/20 transition">
          {{ link.name }}
        </a>
        
        <!-- Links with mega menu -->
        <div v-else>
          <button @click="toggleMobileMegaMenu(link.name)"
                  class="w-full flex items-center justify-between px-4 py-3 text-white hover:bg-safari-orange/20 transition">
            <span>{{ link.name }}</span>
            <svg class="w-4 h-4 transition-transform" 
                 :class="activeMobileMegaMenu === link.name ? 'rotate-180' : ''"
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          
          <!-- Mobile Mega Menu Content -->
          <div v-if="activeMobileMegaMenu === link.name" class="bg-safari-brown/50 px-4 py-3">
            <!-- Itineraries Mobile Menu -->
            <div v-if="link.name === 'Itineraries'" class="space-y-3 max-h-[300px] overflow-y-auto">
              <div>
                <h5 class="text-safari-orange text-xs font-bold uppercase mb-2">Tanzania Safaris</h5>
                <a v-for="item in tanzaniaSafaris" :key="item.name" :href="item.href"
                   class="block py-1.5 px-3 text-white/90 hover:text-white hover:bg-safari-orange/20 rounded transition text-sm">
                  {{ item.name }} ({{ item.duration }})
                </a>
              </div>
              <div>
                <h5 class="text-safari-orange text-xs font-bold uppercase mb-2">Day Trips</h5>
                <a v-for="item in dayTrips" :key="item.name" :href="item.href"
                   class="block py-1.5 px-3 text-white/90 hover:text-white hover:bg-safari-orange/20 rounded transition text-sm">
                  {{ item.name }}
                </a>
              </div>
              <div>
                <h5 class="text-safari-orange text-xs font-bold uppercase mb-2">Mountain Trekking</h5>
                <a v-for="item in mountains" :key="item.name" :href="item.href"
                   class="block py-1.5 px-3 text-white/90 hover:text-white hover:bg-safari-orange/20 rounded transition text-sm">
                  {{ item.name }} ({{ item.duration }})
                </a>
              </div>
              <div>
                <h5 class="text-safari-orange text-xs font-bold uppercase mb-2">Zanzibar & Beyond</h5>
                <a v-for="item in zanzibarRegional" :key="item.name" :href="item.href"
                   class="block py-1.5 px-3 text-white/90 hover:text-white hover:bg-safari-orange/20 rounded transition text-sm">
                  {{ item.name }} ({{ item.duration }})
                </a>
              </div>
            </div>
            
            <!-- Destinations Mobile Menu -->
            <div v-if="link.name === 'Destinations'" class="space-y-2">
              <a v-for="destination in destinations" :key="destination.name" 
                 :href="destination.href"
                 class="flex items-center gap-3 py-2 px-3 text-white/90 hover:text-white hover:bg-safari-orange/20 rounded transition">
                <img :src="destination.image" :alt="destination.name" class="w-12 h-12 rounded object-cover" />
                <div>
                  <div class="font-semibold">{{ destination.name }}</div>
                  <div class="text-xs text-white/70">{{ destination.subtitle }}</div>
                </div>
              </a>
            </div>
            
            <!-- Cultural Tours Mobile Menu -->
            <div v-if="link.name === 'Cultural Tours'" class="space-y-2">
              <a v-for="tour in culturalTours" :key="tour.name" 
                 :href="tour.href"
                 class="flex items-center gap-3 py-2 px-3 text-white/90 hover:text-white hover:bg-safari-orange/20 rounded transition">
                <img :src="tour.image" :alt="tour.name" class="w-12 h-12 rounded object-cover" />
                <div>
                  <div class="font-semibold">{{ tour.name }}</div>
                  <div class="text-xs text-white/70">{{ tour.subtitle }}</div>
                </div>
              </a>
            </div>
            
            <!-- Quick Navigation Mobile Menu -->
            <div v-if="link.name === 'Quick Navigation'" class="space-y-3">
              <div>
                <h5 class="text-safari-orange text-xs font-bold uppercase mb-2">Popular Resources</h5>
                <div class="space-y-2">
                  <a v-for="item in quickNavCol1" :key="item.name" 
                     :href="item.href"
                     class="block py-2 px-3 text-white/90 hover:text-white hover:bg-safari-orange/20 rounded transition text-sm">
                    {{ item.name }}
                  </a>
                </div>
              </div>
              <div>
                <h5 class="text-safari-orange text-xs font-bold uppercase mb-2">Planning Your Trip</h5>
                <div class="space-y-2">
                  <a v-for="item in quickNavCol2" :key="item.name" 
                     :href="item.href"
                     class="block py-2 px-3 text-white/90 hover:text-white hover:bg-safari-orange/20 rounded transition text-sm">
                    {{ item.name }}
                  </a>
                </div>
              </div>
              <div>
                <h5 class="text-safari-orange text-xs font-bold uppercase mb-2">Support & Info</h5>
                <div class="space-y-2">
                  <a v-for="item in quickNavCol3" :key="item.name" 
                     :href="item.href"
                     class="block py-2 px-3 text-white/90 hover:text-white hover:bg-safari-orange/20 rounded transition text-sm">
                    {{ item.name }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Mobile Menu Social Links -->
      <div class="px-4 py-4 border-t border-safari-orange/20 flex items-center justify-between">
        <span class="text-white/70 text-xs font-semibold">Connect with us:</span>
        <div class="flex items-center gap-3">
          <a href="https://www.facebook.com/walterstoursafaris/" target="_blank" rel="noopener noreferrer" class="text-white/80 hover:text-safari-orange transition" title="Facebook">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/walters_tours_safaris_ltd" target="_blank" rel="noopener noreferrer" class="text-white/80 hover:text-safari-orange transition" title="Instagram">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://www.tripadvisor.com/Attraction_Review-g297913-d34556950-Reviews-Walters_Tours_Safaris_Ltd-Arusha_Arusha_Region.html" target="_blank" rel="noopener noreferrer" class="text-white/80 hover:text-safari-orange transition" title="TripAdvisor">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
              <path d="M175.335 281.334c0 24.483-19.853 44.336-44.336 44.336-24.484 0-44.337-19.853-44.337-44.336 0-24.484 19.853-44.337 44.337-44.337 24.483 0 44.336 19.853 44.336 44.337zm205.554-44.337c-24.48 0-44.336 19.853-44.336 44.337 0 24.483 19.855 44.336 44.336 44.336 24.481 0 44.334-19.853 44.334-44.336-.006-24.47-19.839-44.31-44.309-44.323l-.025-.01v-.004zm125.002 44.337c0 68.997-55.985 124.933-124.999 124.933a124.466 124.466 0 01-84.883-33.252l-40.006 43.527-40.025-43.576a124.45 124.45 0 01-84.908 33.3c-68.968 0-124.933-55.937-124.933-124.932A124.586 124.586 0 0146.889 189L6 144.517h90.839c96.116-65.411 222.447-65.411 318.557 0H506l-40.878 44.484a124.574 124.574 0 0140.769 92.333zm-290.31 0c0-46.695-37.858-84.55-84.55-84.55-46.691 0-84.55 37.858-84.55 84.55 0 46.691 37.859 84.55 84.55 84.55 46.692 0 84.545-37.845 84.55-84.54v-.013.003zM349.818 155.1a244.01 244.01 0 00-187.666 0C215.532 175.533 256 223.254 256 278.893c0-55.634 40.463-103.362 93.826-123.786l-.005-.006h-.003zm115.64 126.224c0-46.694-37.858-84.55-84.55-84.55-46.691 0-84.552 37.859-84.552 84.55 0 46.692 37.855 84.55 84.553 84.55 46.697 0 84.55-37.858 84.55-84.55z"/>
            </svg>
          </a>
          <a href="https://wa.me/255686526171" target="_blank" rel="noopener noreferrer" class="text-white/80 hover:text-safari-orange transition" title="WhatsApp">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

defineProps({
  forceBackground: {
    type: Boolean,
    default: false
  }
});

const scrolled = ref(false);
const menuOpen = ref(false);
const activeMegaMenu = ref(null);
const activeMobileMegaMenu = ref(null);

const basePath = (typeof window !== 'undefined' && window.APP_BASE_PATH) || '';
const navLinks = [
  { name: 'Home', href: `${basePath}/`, megaMenu: false },
  { name: 'Itineraries', href: `${basePath}/itineraries`, megaMenu: true },
  { name: 'Destinations', href: `${basePath}/destinations`, megaMenu: true },
  { name: 'Cultural Tours', href: '#', megaMenu: true },
  { name: 'Quick Navigation', href: '#', megaMenu: true },
  { name: 'About', href: `${basePath}/about`, megaMenu: false },
  { name: 'Book Now', href: `${basePath}/contact`, megaMenu: false },
];

const tanzaniaSafaris = [
  { name: 'Arusha National Park Safari', duration: 'Day Trip', href: `${basePath}/itineraries/arusha-serengeti-central` },
  { name: '2 Days Big 5 Safari from Zanzibar', duration: '2 Days', href: `${basePath}/itineraries/ngorongoro-tarangire-zanzibar` },
  { name: '2 Days Ndutu with Tarangire', duration: '2 Days', href: `${basePath}/itineraries/two-days-ndutu-tarangire` },
  { name: '5 Days Tanzania Safari', duration: '5 Days', href: `${basePath}/itineraries/five-days-tanzania-safari` },
  { name: '7 Day Serengeti Safari', duration: '7 Days', href: `${basePath}/itineraries/seven-day-serengeti-safari` },
  { name: '10 Days Luxury Safari Experience', duration: '10 Days', href: `${basePath}/itineraries/ten-days-luxury-safari` },
  { name: '15 Day Safari and Zanzibar', duration: '15 Days', href: `${basePath}/itineraries/safari-zanzibar-15-days` },
  { name: '4 Days Materuni Waterfall and Safari', duration: '4 Days', href: `${basePath}/itineraries/materuni-waterfall-safari-4-days` },
  { name: 'Camping Safari Budget Serengeti & Chemka', duration: '4 Days', href: `${basePath}/itineraries/camping-safari-serengeti-chemka` },
];

const dayTrips = [
  { name: 'Ngorongoro Crater Day Trip', href: `${basePath}/itineraries/ngorongoro-crater-day-trip` },
  { name: '1 Day Tarangire Safari', href: `${basePath}/itineraries/tarangire-1-day` },
  { name: 'Day to Serval Wildlife Zoo', href: `${basePath}/itineraries/serval-wildlife-zoo` },
];

const mountains = [
  { name: 'Day Hiking Kilimanjaro', duration: 'Day Trip', href: `${basePath}/itineraries/kilimanjaro-day-hike` },
];

const zanzibarRegional = [
  { name: '7 Days Zanzibar', duration: '7 Days', href: `${basePath}/itineraries/zanzibar-7-days` },
  { name: '2 Days Budget Vacation Zanzibar', duration: '2 Days', href: `${basePath}/itineraries/zanzibar-2-days-budget` },
  { name: '5 Days Couple Experience Zanzibar', duration: '5 Days', href: `${basePath}/itineraries/zanzibar-5-days-couple` },
  { name: '10 Days Paradise Zanzibar', duration: '10 Days', href: `${basePath}/itineraries/zanzibar-10-days-paradise` },
  { name: '3 Days Dar es Salaam to Nyerere Park', duration: '3 Days', href: `${basePath}/itineraries/nyerere-park-3-days` },
];

const destinations = [
  {
    name: 'Serengeti',
    subtitle: 'The Great Migration',
    href: `${basePath}/destinations/serengeti`,
    image: `${basePath}/images/serengeti/pexels-bgbennett-20095156.jpg`,
    description: 'Witness millions of wildebeest and zebras in their annual journey'
  },
  {
    name: 'Ngorongoro',
    subtitle: 'Natural Wonder',
    href: `${basePath}/destinations/ngorongoro`,
    image: `${basePath}/images/ngorongoro/pexels-alexandra-karnasopoulos-1962842-7205279.jpg`,
    description: 'Explore the world\'s largest intact volcanic caldera'
  },
  {
    name: 'Kilimanjaro',
    subtitle: 'Roof of Africa',
    href: `${basePath}/destinations/kilimanjaro`,
    image: `${basePath}/images/Kilimanjaro/pexels-wladimir-kuhne-670646709-19171293.jpg`,
    description: 'Conquer Africa\'s highest peak at 5,895 meters'
  },
  {
    name: 'Zanzibar',
    subtitle: 'Island Paradise',
    href: `${basePath}/destinations/zanzibar`,
    image: `${basePath}/images/zanzibar/pexels-saila-holidays-zanzibar-1351717875-25706804.jpg`,
    description: 'Relax on pristine beaches after your safari adventure'
  },
];

const culturalTours = [
  {
    name: 'Maasai Village Visit',
    subtitle: 'Meet the iconic warrior tribe',
    badge: 'Cultural Experience',
    href: `${basePath}/cultural-tours/maasai`,
    image: `${basePath}/images/walters-tours-safaris-maasai-village-cultural.png`,
    description: 'Visit a traditional Maasai boma, witness their vibrant dances, explore their customs and purchase beautiful handmade beadwork directly from artisans.'
  },
  {
    name: 'Hadzabe Tribe at Lake Eyasi',
    subtitle: 'Walk with hunter-gatherers',
    badge: 'Unique Safari',
    href: `${basePath}/cultural-tours/hadza`,
    image: `${basePath}/images/walters-tours-safaris-hadza-tribe-cultural.png`,
    description: 'Join the last hunter-gatherers of East Africa on a morning hunt, learn to make fire with sticks, and visit the Datoga blacksmiths — from $150 per car.'
  },
];

const quickNavCol1 = [
  { name: 'Top Best Tanzania Parks To Visit', href: `${basePath}/parks` },
  { name: 'Why! you should Visit Serengeti', href: `${basePath}/why-serengeti` },
  { name: 'Ngorongoro Crater, All you need to know', href: `${basePath}/about-ngorongoro` },
];

const quickNavCol2 = [
  { name: 'Our Top Packages', href: `${basePath}/itineraries` },
  { name: 'Best Itineraries Collection', href: `${basePath}/itineraries` },
  { name: 'Best Time to Visit Tanzania', href: `${basePath}/best-time` },
  { name: 'Our Top Destinations', href: `${basePath}/destinations` },
];

const quickNavCol3 = [
  { name: 'Support Locals & Charity', href: `${basePath}/charity` },
  { name: 'Contacts & Location', href: `${basePath}/contact` },
  { name: 'Supported Payment Methods', href: `${basePath}/payments` },
];

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const openMegaMenu = (menuName) => {
  activeMegaMenu.value = menuName;
};

const closeMegaMenu = () => {
  activeMegaMenu.value = null;
};

const keepMegaMenuOpen = () => {
  // Keep menu open when hovering over it
};

const toggleMobileMegaMenu = (menuName) => {
  activeMobileMegaMenu.value = activeMobileMegaMenu.value === menuName ? null : menuName;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.mega-menu-enter-active,
.mega-menu-leave-active {
  transition: all 0.3s ease;
}

.mega-menu-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.mega-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-100%);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
