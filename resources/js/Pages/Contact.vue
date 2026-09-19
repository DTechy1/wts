<template>
  <MainLayout>
    <Breadcrumb :breadcrumbs="[{ name: 'Contact' }]" />
    
    <!-- Hero Section with Image -->
    <section class="relative h-96 overflow-hidden">
      <img :src="getImageUrl('images/walters-tours-safaris-denice-alex-LD6WgJlIpmk-unsplash.jpg')" 
           alt="Contact Us" 
           class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-r from-safari-brown/90 to-safari-brown/70"></div>
      <div class="absolute inset-0 flex items-center justify-center text-center px-4">
        <div>
          <h1 class="text-5xl md:text-6xl font-heading font-bold text-white mb-4">Get In Touch</h1>
          <p class="text-xl text-white/90">Let's plan your perfect safari adventure together</p>
        </div>
      </div>
    </section>
    
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-white rounded-2xl shadow-xl p-8">
            <h2 class="text-3xl font-heading font-bold text-safari-brown mb-6">Send us a message</h2>

            <div v-if="successMessage" class="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 space-y-2">
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="font-semibold">{{ successMessage }}</span>
              </div>
              <div v-if="contactWhatsAppLink" class="pt-1">
                <a :href="contactWhatsAppLink" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-xs bg-[#25D366] hover:bg-[#1EBE5D] text-white px-3 py-1.5 rounded-lg font-semibold shadow transition">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Quick Chat on WhatsApp
                </a>
              </div>
            </div>

            <div v-if="errorMessage" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-800">
              <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
              <span>{{ errorMessage }}</span>
            </div>

            <form @submit.prevent="submitContact" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input v-model="form.name" type="text" placeholder="Your Name" required
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-orange focus:border-transparent transition" />
                <input v-model="form.email" type="email" placeholder="Your Email" required
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-orange focus:border-transparent transition" />
              </div>
              <input v-model="form.phone" type="tel" placeholder="Phone Number"
                     class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-orange focus:border-transparent transition" />
              <select v-model="form.safari_type"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-orange focus:border-transparent transition">
                <option value="">Select Safari Type</option>
                <option value="luxury">Luxury Safari</option>
                <option value="budget">Budget Safari</option>
                <option value="family">Family Safari</option>
                <option value="custom">Custom Safari</option>
              </select>
              <textarea v-model="form.message" placeholder="Tell us about your dream safari..." rows="6" required
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-orange focus:border-transparent transition"></textarea>
              <button type="submit" :disabled="isSubmitting"
                      class="w-full bg-safari-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-safari-orange/90 transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else class="flex items-center justify-center gap-2">
                  <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              </button>
            </form>
          </div>
          
          <!-- Contact Information & Self-Booking -->
          <div class="space-y-8">
            <div class="bg-white rounded-2xl shadow-xl p-8">
              <h2 class="text-3xl font-heading font-bold text-safari-brown mb-6">Contact Information</h2>
              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-safari-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-safari-brown mb-1">Email</h3>
                    <p class="text-gray-600">Info@walterstoursafaris.co.tz</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-safari-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-safari-brown mb-1">WhatsApp</h3>
                    <p class="text-gray-600">+255686526171</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-safari-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-safari-brown mb-1">Calls</h3>
                    <p class="text-gray-600">+255622906171</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-safari-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-safari-brown mb-1">Office Locations</h3>
                    <p class="text-gray-600">Zanzibar Nungwi & Arusha Sanawari street</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-safari-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-safari-orange" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-safari-brown mb-2">Follow Our Adventures</h3>
                    <div class="flex flex-wrap items-center gap-2">
                      <a href="https://www.facebook.com/walterstoursafaris/" target="_blank" rel="noopener noreferrer" 
                         class="px-3 py-1.5 bg-gray-100 hover:bg-safari-orange hover:text-white rounded-lg text-xs font-semibold text-gray-700 transition flex items-center gap-1.5" title="Facebook">
                        Facebook
                      </a>
                      <a href="https://www.instagram.com/walters_tours_safaris_ltd" target="_blank" rel="noopener noreferrer" 
                         class="px-3 py-1.5 bg-gray-100 hover:bg-safari-orange hover:text-white rounded-lg text-xs font-semibold text-gray-700 transition flex items-center gap-1.5" title="Instagram">
                        Instagram
                      </a>
                      <a href="https://www.tripadvisor.com/Attraction_Review-g297913-d34556950-Reviews-Walters_Tours_Safaris_Ltd-Arusha_Arusha_Region.html" target="_blank" rel="noopener noreferrer" 
                         class="px-3 py-1.5 bg-gray-100 hover:bg-[#00aa6c] hover:text-white rounded-lg text-xs font-semibold text-gray-700 transition flex items-center gap-1.5" title="TripAdvisor">
                        <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 512 512">
                          <path d="M175.335 281.334c0 24.483-19.853 44.336-44.336 44.336-24.484 0-44.337-19.853-44.337-44.336 0-24.484 19.853-44.337 44.337-44.337 24.483 0 44.336 19.853 44.336 44.337zm205.554-44.337c-24.48 0-44.336 19.853-44.336 44.337 0 24.483 19.855 44.336 44.336 44.336 24.481 0 44.334-19.853 44.334-44.336-.006-24.47-19.839-44.31-44.309-44.323l-.025-.01v-.004zm125.002 44.337c0 68.997-55.985 124.933-124.999 124.933a124.466 124.466 0 01-84.883-33.252l-40.006 43.527-40.025-43.576a124.45 124.45 0 01-84.908 33.3c-68.968 0-124.933-55.937-124.933-124.932A124.586 124.586 0 0146.889 189L6 144.517h90.839c96.116-65.411 222.447-65.411 318.557 0H506l-40.878 44.484a124.574 124.574 0 0140.769 92.333zm-290.31 0c0-46.695-37.858-84.55-84.55-84.55-46.691 0-84.55 37.858-84.55 84.55 0 46.691 37.859 84.55 84.55 84.55 46.692 0 84.545-37.845 84.55-84.54v-.013.003zM349.818 155.1a244.01 244.01 0 00-187.666 0C215.532 175.533 256 223.254 256 278.893c0-55.634 40.463-103.362 93.826-123.786l-.005-.006h-.003zm115.64 126.224c0-46.694-37.858-84.55-84.55-84.55-46.691 0-84.552 37.859-84.552 84.55 0 46.692 37.855 84.55 84.553 84.55 46.697 0 84.55-37.858 84.55-84.55z"/>
                        </svg>
                        TripAdvisor
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Leave Us a Review Card -->
            <div class="bg-gradient-to-br from-white to-emerald-50/50 border border-emerald-100 rounded-2xl p-6 shadow-lg">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 rounded-xl bg-[#00aa6c] flex items-center justify-center text-white shadow-md flex-shrink-0">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M175.335 281.334c0 24.483-19.853 44.336-44.336 44.336-24.484 0-44.337-19.853-44.337-44.336 0-24.484 19.853-44.337 44.337-44.337 24.483 0 44.336 19.853 44.336 44.337zm205.554-44.337c-24.48 0-44.336 19.853-44.336 44.337 0 24.483 19.855 44.336 44.336 44.336 24.481 0 44.334-19.853 44.334-44.336-.006-24.47-19.839-44.31-44.309-44.323l-.025-.01v-.004zm125.002 44.337c0 68.997-55.985 124.933-124.999 124.933a124.466 124.466 0 01-84.883-33.252l-40.006 43.527-40.025-43.576a124.45 124.45 0 01-84.908 33.3c-68.968 0-124.933-55.937-124.933-124.932A124.586 124.586 0 0146.889 189L6 144.517h90.839c96.116-65.411 222.447-65.411 318.557 0H506l-40.878 44.484a124.574 124.574 0 0140.769 92.333zm-290.31 0c0-46.695-37.858-84.55-84.55-84.55-46.691 0-84.55 37.858-84.55 84.55 0 46.691 37.859 84.55 84.55 84.55 46.692 0 84.545-37.845 84.55-84.54v-.013.003zM349.818 155.1a244.01 244.01 0 00-187.666 0C215.532 175.533 256 223.254 256 278.893c0-55.634 40.463-103.362 93.826-123.786l-.005-.006h-.003zm115.64 126.224c0-46.694-37.858-84.55-84.55-84.55-46.691 0-84.552 37.859-84.552 84.55 0 46.692 37.855 84.55 84.553 84.55 46.697 0 84.55-37.858 84.55-84.55z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-safari-brown text-base">Leave Us a Review</h4>
                  <div class="flex items-center gap-1">
                    <span class="text-[#00aa6c] text-xs font-bold">●●●●●</span>
                    <span class="text-xs text-gray-500 font-medium">TripAdvisor Verified</span>
                  </div>
                </div>
              </div>
              <p class="text-gray-600 text-xs mb-4 leading-relaxed">
                Traveled with us? We'd love your feedback! Share your safari story and help other travelers plan their dream trip.
              </p>
              <a href="https://www.tripadvisor.com/Attraction_Review-g297913-d34556950-Reviews-Walters_Tours_Safaris_Ltd-Arusha_Arusha_Region.html" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 class="w-full bg-[#00aa6c] hover:bg-[#008f5a] text-white py-2.5 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M175.335 281.334c0 24.483-19.853 44.336-44.336 44.336-24.484 0-44.337-19.853-44.337-44.336 0-24.484 19.853-44.337 44.337-44.337 24.483 0 44.336 19.853 44.336 44.337zm205.554-44.337c-24.48 0-44.336 19.853-44.336 44.337 0 24.483 19.855 44.336 44.336 44.336 24.481 0 44.334-19.853 44.334-44.336-.006-24.47-19.839-44.31-44.309-44.323l-.025-.01v-.004zm125.002 44.337c0 68.997-55.985 124.933-124.999 124.933a124.466 124.466 0 01-84.883-33.252l-40.006 43.527-40.025-43.576a124.45 124.45 0 01-84.908 33.3c-68.968 0-124.933-55.937-124.933-124.932A124.586 124.586 0 0146.889 189L6 144.517h90.839c96.116-65.411 222.447-65.411 318.557 0H506l-40.878 44.484a124.574 124.574 0 0140.769 92.333zm-290.31 0c0-46.695-37.858-84.55-84.55-84.55-46.691 0-84.55 37.858-84.55 84.55 0 46.691 37.859 84.55 84.55 84.55 46.692 0 84.545-37.845 84.55-84.54v-.013.003zM349.818 155.1a244.01 244.01 0 00-187.666 0C215.532 175.533 256 223.254 256 278.893c0-55.634 40.463-103.362 93.826-123.786l-.005-.006h-.003zm115.64 126.224c0-46.694-37.858-84.55-84.55-84.55-46.691 0-84.552 37.859-84.552 84.55 0 46.692 37.855 84.55 84.553 84.55 46.697 0 84.55-37.858 84.55-84.55z"/>
                </svg>
                Write a Review on TripAdvisor
              </a>
            </div>
            
            <!-- Self-Booking Card -->
            <div class="bg-gradient-to-br from-safari-brown to-safari-brown/90 rounded-2xl shadow-xl p-8 text-white">
              <h3 class="text-2xl font-heading font-bold mb-3">Self-Booking & Reservations</h3>
              <p class="text-white/80 text-sm mb-6 leading-relaxed">
                Ready to reserve your safari dates immediately? Use our instant booking wizard or chat directly with our travel consultants.
              </p>
              <div class="space-y-4">
                <BookingForm 
                  package-name="Custom Safari & Adventure Trip" 
                  button-text="Launch Instant Self-Booking" 
                  button-class="w-full bg-safari-orange text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-safari-orange/90 transition shadow-lg text-center"
                />
                <a href="https://wa.me/255686526171" target="_blank" rel="noopener noreferrer" 
                   class="flex items-center justify-center gap-2 w-full bg-green-600 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-green-700 transition shadow-lg text-center">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Book via WhatsApp Instant
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import { ref } from 'vue';
import MainLayout from '../Layouts/MainLayout.vue';
import Breadcrumb from '../Components/Breadcrumb.vue';
import BookingForm from '../Components/BookingForm.vue';
import { useAssets } from '../composables/useAssets';

const { getImageUrl } = useAssets();

const isSubmitting = ref(false);
const successMessage = ref('');
const errorMessage = ref('');
const contactWhatsAppLink = ref('');

const form = ref({
  name: '',
  email: '',
  phone: '',
  safari_type: '',
  message: ''
});

const submitContact = async () => {
  isSubmitting.value = true;
  successMessage.value = '';
  errorMessage.value = '';

  try {
    if (!form.value.name || !form.value.email || !form.value.message) {
      errorMessage.value = 'Please fill in all required fields (Name, Email, Message).';
      isSubmitting.value = false;
      return;
    }

    const messageRecord = {
      name: form.value.name,
      email: form.value.email,
      phone: form.value.phone,
      safari_type: form.value.safari_type,
      message: form.value.message,
      created_at: new Date().toISOString()
    };

    // Store in client-side localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('wts_inquiries') || '[]');
      existing.unshift(messageRecord);
      localStorage.setItem('wts_inquiries', JSON.stringify(existing.slice(0, 50)));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }

    // Send email via FormSubmit.co to info@walterstoursafaris.co.tz & CC tourswalters@gmail.com
    try {
      await fetch("https://formsubmit.co/ajax/info@walterstoursafaris.co.tz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `New Contact Inquiry: ${messageRecord.name} (${messageRecord.safari_type || 'General Inquiry'})`,
          _cc: "tourswalters@gmail.com",
          _template: "table",
          _captcha: "false",
          _replyto: messageRecord.email,
          "Sender Name": messageRecord.name,
          "Email Address": messageRecord.email,
          "Phone / WhatsApp": messageRecord.phone || "N/A",
          "Interested Safari": messageRecord.safari_type || "General Inquiry",
          "Message": messageRecord.message,
          "Submission Time": new Date().toLocaleString()
        })
      });
    } catch (emailErr) {
      console.warn("Contact email dispatch notice:", emailErr);
    }

    // Prefilled WhatsApp message
    const waText = `*Inquiry from ${form.value.name}*
Email: ${form.value.email}
Phone: ${form.value.phone || 'N/A'}
Safari Type: ${form.value.safari_type || 'General'}
Message: ${form.value.message}`;

    contactWhatsAppLink.value = `https://wa.me/255686526171?text=${encodeURIComponent(waText)}`;

    successMessage.value = 'Thank you! Your message has been sent. We will get back to you within 24 hours.';
    form.value = { name: '', email: '', phone: '', safari_type: '', message: '' };
  } catch (error) {
    errorMessage.value = 'An error occurred. Please contact us directly on WhatsApp or email.';
    console.error('Contact error:', error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>
