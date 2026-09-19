<template>
  <MainLayout>
    <HeroSection />
    
    <!-- WHO WE ARE -->
    <section class="min-h-screen flex items-center py-12 md:py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
          <div class="space-y-4 md:space-y-6">
            <div class="inline-block bg-safari-orange/10 text-safari-orange px-4 py-1.5 rounded-full text-sm font-semibold">ABOUT US</div>
            <h2 class="font-heading font-bold leading-tight">
              <span class="block text-xl md:text-2xl lg:text-3xl text-gray-600 mb-2">WE ARE NOT A BIG COMPANY</span>
              <span class="block text-3xl md:text-4xl lg:text-6xl text-safari-orange">WE ARE YOUR TANZANIA FAMILY</span>
            </h2>
            <p class="text-base md:text-lg text-gray-700 leading-relaxed">
              Walters Tours & Safaris Ltd did not start in an office with a leather chair, <strong>IT STARTED WITH A LION.</strong> In 2013 I was a volunteer guide in the Serengeti. Every day I would tell tourists "Welcome to my home". They laughed. They said, "Walter, open your company".
            </p>
            <p class="text-base md:text-lg text-gray-700 leading-relaxed italic">
              One day a family from Canada cried and told me: <span class="font-semibold">"We didn't feel like tourists. We felt like we visited our Tanzanian brother."</span>
            </p>
            <p class="text-base md:text-lg text-gray-700 leading-relaxed">
              That's when I knew that <strong>Safaris are not a business. It's a friendship.</strong> Today Walters Tours is a 100% Tanzanian Family Company. Our office is in Zanzibar and Arusha. My staff are brothers, friends, and guides who grew up in Tanzania and learned about the wildlife and cultures of Africa.
            </p>
            <p class="text-base md:text-lg text-gray-700 leading-relaxed">
              We do not have British investors. We do not have a big board. <strong>We have you. We have your family.</strong> And we have one promise: To take you to our home, as brothers, not as customers.
            </p>
            <p class="text-base md:text-lg text-gray-700 leading-relaxed">
              Because I am Tanzanian, I know every riverbed. I know which lion is fierce. We know which part of the Serengeti has the most stars at night.
            </p>
            <div class="flex flex-wrap gap-4 pt-2">
              <a :href="$basePath + '/about'" class="bg-safari-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-safari-orange/90 transition">
                LEARN MORE
              </a>
              <a :href="$basePath + '/contact'" class="bg-safari-brown text-white px-8 py-3 rounded-lg font-semibold hover:bg-safari-brown/90 transition">
                Contact Us
              </a>
            </div>
          </div>
          <div class="relative h-[400px] md:h-[500px] lg:h-[650px] rounded-2xl overflow-hidden shadow-2xl">
            <img :src="getImageUrl('images/walters-tours-safaris-magdalena-kula-manchee-nVUZO1gc_-o-unsplash.jpg')" 
                 alt="Walters Tours & Safaris" class="w-full h-full object-cover" />
            <!-- Floating badge -->
            <div class="absolute top-6 left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <div class="w-12 h-12 bg-safari-orange rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <div>
                <div class="font-bold text-safari-brown text-sm">Travelers' Choice</div>
                <div class="text-gray-500 text-xs">6 Award Winner · Since 2016</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY CHOOSE US -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-safari-orange/5 to-safari-brown/5">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown mb-4">WHY CHOOSE A LOCAL FAMILY COMPANY?</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <!-- Reason 1 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-safari-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-heading font-bold text-safari-brown mb-4 text-center">1. DIRECTOR ON GROUND</h3>
            <p class="text-gray-700 leading-relaxed text-center">
              I plan your itinerary myself. I inspect the vehicles myself. On the first day of your trip, you will have lunch with me in Arusha. There is no "customer service team". <strong>It is just me.</strong>
            </p>
          </div>

          <!-- Reason 2 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-safari-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-heading font-bold text-safari-brown mb-4 text-center">2. LOCAL MONEY STAYS LOCAL</h3>
            <p class="text-gray-700 leading-relaxed text-center">
              For every dollar you pay, 90% stays in Tanzania. It pays my chef Asha. It pays the car mechanic. It pays the school fees of my guide's child. <strong>When you book with us, you are building Tanzania.</strong>
            </p>
          </div>

          <!-- Reason 3 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-safari-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-heading font-bold text-safari-brown mb-4 text-center">3. SECRETS ARE ONLY FAMILY-FRIENDLY</h3>
            <p class="text-gray-700 leading-relaxed text-center">
              I know a picnic site that is deserted. I know a tree that the leopard loves. I know the gatekeeper will let you in 10 minutes early for sunrise. <strong>This is not written on Google. It is passed down from family to family.</strong>
            </p>
          </div>
        </div>

        <!-- License & Trust -->
        <div class="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-12">
          <h3 class="text-3xl font-heading font-bold text-safari-brown mb-8 text-center">LICENSE & TRUST</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="flex items-center gap-4 bg-safari-white rounded-xl p-6">
              <svg class="w-8 h-8 text-safari-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <div>
                <p class="font-semibold text-safari-brown">Licensed by TALA</p>
                <p class="text-sm text-gray-600">Tanzania Association of Tour Operators</p>
              </div>
            </div>
            <div class="flex items-center gap-4 bg-safari-white rounded-xl p-6">
              <svg class="w-8 h-8 text-safari-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <div>
                <p class="font-semibold text-safari-brown">Registered with TANAPA & NCA</p>
                <p class="text-sm text-gray-600">Official Park Operators</p>
              </div>
            </div>
            <a href="https://www.tripadvisor.com/Attraction_Review-g297913-d34556950-Reviews-Walters_Tours_Safaris_Ltd-Arusha_Arusha_Region.html" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 bg-safari-white hover:bg-emerald-50/60 border border-transparent hover:border-[#00aa6c]/30 rounded-xl p-6 transition-all shadow-sm hover:shadow-md group">
              <div class="w-12 h-12 rounded-xl bg-[#00aa6c]/10 group-hover:bg-[#00aa6c] text-[#00aa6c] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors">
                <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M175.335 281.334c0 24.483-19.853 44.336-44.336 44.336-24.484 0-44.337-19.853-44.337-44.336 0-24.484 19.853-44.337 44.337-44.337 24.483 0 44.336 19.853 44.336 44.337zm205.554-44.337c-24.48 0-44.336 19.853-44.336 44.337 0 24.483 19.855 44.336 44.336 44.336 24.481 0 44.334-19.853 44.334-44.336-.006-24.47-19.839-44.31-44.309-44.323l-.025-.01v-.004zm125.002 44.337c0 68.997-55.985 124.933-124.999 124.933a124.466 124.466 0 01-84.883-33.252l-40.006 43.527-40.025-43.576a124.45 124.45 0 01-84.908 33.3c-68.968 0-124.933-55.937-124.933-124.932A124.586 124.586 0 0146.889 189L6 144.517h90.839c96.116-65.411 222.447-65.411 318.557 0H506l-40.878 44.484a124.574 124.574 0 0140.769 92.333zm-290.31 0c0-46.695-37.858-84.55-84.55-84.55-46.691 0-84.55 37.858-84.55 84.55 0 46.691 37.859 84.55 84.55 84.55 46.692 0 84.545-37.845 84.55-84.54v-.013.003zM349.818 155.1a244.01 244.01 0 00-187.666 0C215.532 175.533 256 223.254 256 278.893c0-55.634 40.463-103.362 93.826-123.786l-.005-.006h-.003zm115.64 126.224c0-46.694-37.858-84.55-84.55-84.55-46.691 0-84.552 37.859-84.552 84.55 0 46.692 37.855 84.55 84.553 84.55 46.697 0 84.55-37.858 84.55-84.55z"/>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-safari-brown group-hover:text-[#00aa6c] transition-colors flex items-center gap-1.5">
                  5-Star Rated Reviews
                  <svg class="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </p>
                <p class="text-sm text-gray-600">TripAdvisor & Google Business</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Conclusion Full Width -->
    <section class="relative bg-safari-brown py-20 md:py-24 overflow-hidden">
      <div class="absolute inset-0">
        <img :src="getImageUrl('images/serengeti/pexels-bgbennett-20095156.jpg')" alt="Safari" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-safari-brown/85"></div>
      </div>
      <div class="max-w-6xl mx-auto text-white text-center relative z-10 px-4 md:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="text-left">
            <div class="inline-flex items-center gap-2 bg-safari-orange/20 backdrop-blur-sm px-5 py-2 rounded-full mb-6">
              <svg class="w-5 h-5 text-safari-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
              </svg>
              <span class="font-semibold text-safari-orange">Our Promise</span>
            </div>
            <h3 class="text-4xl md:text-5xl font-heading font-bold mb-6">CONCLUSION</h3>
            <p class="text-xl md:text-2xl mb-6 leading-relaxed">
              A trip is a once in a lifetime experience. Don't give it to someone who doesn't care. <strong class="text-safari-orange">Give it to your Tanzanian family.</strong>
            </p>
            <p class="text-2xl font-semibold mb-8 text-safari-orange">Ready to meet us?</p>
          </div>
          <div class="flex flex-col gap-4">
            <a :href="$basePath + '/contact'" class="group inline-flex items-center justify-center gap-3 bg-safari-orange hover:bg-safari-orange/90 text-white px-10 py-4 rounded-xl font-semibold transition transform hover:scale-105 text-lg shadow-xl">
              <svg class="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              GET YOUR FREE QUOTE
            </a>
            <a href="https://wa.me/255686526171" target="_blank" 
               class="group inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-xl font-semibold transition transform hover:scale-105 text-lg shadow-xl">
              <svg class="w-7 h-7 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              CHAT WITH WALTER ON WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- STATS STRIP -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-safari-orange">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="stat in stats" :key="stat.label" class="text-center group">
            <div class="w-20 h-20 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/25 transition-all">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="stat.icon"/>
              </svg>
            </div>
            <div class="text-5xl font-heading font-bold text-white mb-1">{{ stat.value }}</div>
            <div class="text-white/90 font-semibold text-sm">{{ stat.label }}</div>
            <div class="text-white/70 text-xs mt-1">{{ stat.sub }}</div>
          </div>
        </div>
        <div class="text-center mt-10 border-t border-white/20 pt-8">
          <p class="text-white/90 text-lg italic">"Come as a tourist, leave as a friend"</p>
          <p class="text-white/70 text-sm mt-2">Licensed & Registered with Tanzania Tourism Board</p>
        </div>
      </div>
    </section>

    <!-- TOP ITINERARIES -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-white">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-12">
          <div class="inline-block bg-safari-orange/10 text-safari-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Our Best Safaris</div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown mb-4">Top 6 Tanzania Safari Itineraries</h2>
          <p class="text-gray-600 max-w-3xl mx-auto">Experience the best of Tanzania with our most popular safari packages, crafted for unforgettable wildlife adventures.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <a v-for="itinerary in topItineraries" :key="itinerary.name" :href="itinerary.link"
             class="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
            <img :src="getImageUrl(itinerary.image)" :alt="itinerary.name" 
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-safari-brown/95 via-safari-brown/40 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-5">
              <div class="inline-block bg-safari-orange text-white text-xs font-bold px-3 py-1 rounded-full mb-2">{{ itinerary.duration }}</div>
              <h3 class="text-xl font-heading font-bold text-white mb-1">{{ itinerary.name }}</h3>
              <p class="text-white/80 text-sm">{{ itinerary.highlight }}</p>
            </div>
          </a>
        </div>

        <div class="text-center">
          <a :href="$basePath + '/itineraries'" class="inline-block bg-safari-brown text-white px-8 py-4 rounded-lg font-semibold hover:bg-safari-brown/90 transition transform hover:scale-105">
            View All Itineraries
          </a>
        </div>
      </div>
    </section>

    <!-- Interactive Overlapping Gallery -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-safari-brown/20 to-safari-orange/20 overflow-hidden">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 bg-safari-orange/10 text-safari-orange px-5 py-2 rounded-full text-sm font-semibold mb-5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            Gallery
          </div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown mb-4">Our Safari Moments</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Experience the magic of Tanzania through our lens</p>
        </div>
        
        <div class="relative h-[600px] md:h-[700px]">
          <div v-for="(image, index) in overlappingGallery" :key="index"
               class="absolute transition-all duration-700 ease-out cursor-pointer group"
               :style="{
                 left: image.position.left,
                 top: image.position.top,
                 width: image.position.width,
                 height: image.position.height,
                 transform: `rotate(${image.position.rotate}deg) scale(${hoveredImage === index ? 1.1 : 1})`,
                 zIndex: hoveredImage === index ? 30 : 20 - index,
                 opacity: hoveredImage !== null && hoveredImage !== index ? 0.6 : 1
               }"
               @mouseenter="hoveredImage = index"
               @mouseleave="hoveredImage = null">
            <div class="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <img :src="getImageUrl(image.src)" :alt="image.alt" 
                   class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p class="text-white font-semibold text-sm">{{ image.alt }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY VISIT SERENGETI -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
            <img :src="getImageUrl('images/walters-tours-safaris-magdalena-kula-manchee-nVUZO1gc_-o-unsplash.jpg')"
                 alt="Serengeti National Park" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-safari-brown/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-6 left-6 right-6">
              <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                <p class="text-white text-sm font-semibold">One of the Seven Natural Wonders of the World</p>
                <p class="text-white/80 text-xs mt-1">Home to 550+ bird species & 95+ mammal species</p>
              </div>
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <div class="inline-block bg-safari-orange/10 text-safari-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Why Serengeti?</div>
            <h2 class="text-4xl font-heading font-bold text-safari-brown mb-6">Why! You Must Visit Serengeti</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              Serengeti National Park is one of the best wildlife destinations in Tanzania and Africa — a premier conservation area that exists in a highly protected environment. The park is famous for its exceptional wildlife: large populations of Lion, Cheetah, Elephant, African Buffalo, and Rhino, among hundreds of other species.
            </p>
            <div class="space-y-4 mb-6">
              <div v-for="point in serengetiPoints" :key="point.title" class="flex items-start gap-4">
                <div class="w-10 h-10 bg-safari-orange/10 rounded-xl flex items-center justify-center flex-shrink-0 text-safari-orange">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="point.icon"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-safari-brown">{{ point.title }}</h4>
                  <p class="text-gray-600 text-sm">{{ point.description }}</p>
                </div>
              </div>
            </div>
            <a :href="$basePath + '/why-serengeti'" class="inline-block bg-safari-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-safari-orange/90 transition transform hover:scale-105">
              Discover Serengeti
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT NGORONGORO -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-brown text-white">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-block bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">World Heritage Site</div>
            <h2 class="text-4xl font-heading font-bold text-white mb-6">About Ngorongoro Crater</h2>
            <p class="text-white/90 leading-relaxed mb-4">
              Ngorongoro Crater, nestled in the heart of Tanzania, is a geological wonder and a haven for biodiversity. Created by the collapse of a massive volcano millions of years ago, the crater spans <strong>260 square kilometers</strong> and plunges to depths of around <strong>610 meters</strong>.
            </p>
            <p class="text-white/90 leading-relaxed mb-4">
              Encircled by steep walls, this natural amphitheater shelters a thriving ecosystem — making it a UNESCO World Heritage Site and one of Africa's most sought-after safari destinations. The largest unbroken caldera in the world, it hosts elephants, lions, and a dense population of flamingos in its soda lake.
            </p>
            <p class="text-white/80 leading-relaxed mb-6 italic text-sm">
              Did you know? After crossing Ngorongoro you enter Serengeti National Park — the paradise of predators and best wildlife viewing destination in the world.
            </p>
            <a :href="$basePath + '/about-ngorongoro'" class="inline-block bg-safari-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-safari-orange/90 transition transform hover:scale-105">
              Learn About Ngorongoro
            </a>
          </div>
          <div class="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl">
            <img :src="getImageUrl('images/walters-tours-safaris-hu-chen-t-7Mlatf9iI-unsplash.jpg')"
                 alt="Ngorongoro Crater" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-safari-brown/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-6 left-6 right-6">
              <div class="grid grid-cols-3 gap-3">
                <div v-for="stat in ngorongoroStats" :key="stat.label" class="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                  <div class="text-xl font-bold text-white">{{ stat.value }}</div>
                  <div class="text-white/70 text-xs">{{ stat.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TOP DESTINATIONS Preview -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-12">
          <div class="inline-block bg-safari-orange/10 text-safari-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Our Top Destinations</div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown mb-4">Explore Our Top Destinations</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">From Africa's highest peak to pristine beaches — discover Tanzania's most iconic locations</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <a v-for="destination in topDestinations" :key="destination.name" :href="destination.link"
             class="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
            <img :src="getImageUrl(destination.image)" :alt="destination.name" 
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-safari-brown/95 via-safari-brown/50 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <h3 class="text-2xl font-heading font-bold text-white mb-1">{{ destination.name }}</h3>
              <p class="text-white/90 text-sm">{{ destination.subtitle }}</p>
            </div>
          </a>
        </div>
        
        <div class="text-center">
          <a :href="$basePath + '/destinations'" class="inline-block bg-safari-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-safari-orange/90 transition transform hover:scale-105">
            View All Destinations
          </a>
        </div>
      </div>
    </section>

    <!-- BEST TIME TO VISIT -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-brown">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-12">
          <div class="inline-block bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Seasonal Guide</div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Best Time to Visit Tanzania</h2>
          <p class="text-xl text-white/90 max-w-3xl mx-auto">The best time for a Tanzania safari to witness the Great Migration calving season is from <strong>late January to mid-March</strong>. The absolute peak occurs in <strong>February</strong>, when upwards of 500,000 wildebeest calves are born, bringing intense predator action to the southern plains.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <!-- Why This Period is Ideal -->
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 class="text-2xl font-heading font-bold text-white mb-6">Why This Period is Ideal</h3>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 bg-safari-orange rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <div class="text-white font-bold mb-1">The Spectacle</div>
                  <div class="text-white/80 text-sm leading-relaxed">Around 8,000 calves are born daily during the peak, offering a mesmerizing look at the life cycle of the Serengeti's inhabitants.</div>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 bg-safari-orange rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <div class="text-white font-bold mb-1">Predator Action</div>
                  <div class="text-white/80 text-sm leading-relaxed">The massive influx of vulnerable newborns attracts high concentrations of predators like lions, cheetahs, and hyenas to the area.</div>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 bg-safari-orange rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <div class="text-white font-bold mb-1">Lush Scenery</div>
                  <div class="text-white/80 text-sm leading-relaxed">The "short rains" in November and December leave the landscape green, lush, and rich in the nutritious short-grasses the herds crave.</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Where to Go -->
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 class="text-2xl font-heading font-bold text-white mb-6">Where to Go</h3>
            <p class="text-white/90 leading-relaxed mb-6">
              To witness the calving season, head to the <strong>Ndutu Area</strong> (which straddles the southern Serengeti plains and the Ngorongoro Conservation Area). The herds congregate here specifically because the volcanic soils produce nutrient-rich grasses perfect for nursing mothers.
            </p>
            
            <h4 class="text-xl font-heading font-bold text-white mb-4 mt-6">Planning & Tips</h4>
            <div class="space-y-3">
              <div>
                <div class="text-safari-orange font-bold mb-1">Book Early</div>
                <div class="text-white/80 text-sm leading-relaxed">February is a highly sought-after month for wildlife viewing. Secure your Serengeti National Park or Ngorongoro Conservation Area lodge and guide bookings at least 9–12 months in advance.</div>
              </div>
              <div>
                <div class="text-safari-orange font-bold mb-1">Accommodations</div>
                <div class="text-white/80 text-sm leading-relaxed">Look into specialized mobile camps or permanent lodges in the Ndutu region to minimize travel time to the herds.</div>
              </div>
              <div>
                <div class="text-safari-orange font-bold mb-1">Photography</div>
                <div class="text-white/80 text-sm leading-relaxed">The vibrant green plains and dramatic cloud cover during this "green season" offer some of the most spectacular lighting for wildlife photography of the year.</div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center">
          <a :href="$basePath + '/best-time'" class="inline-block bg-safari-orange text-white px-10 py-4 rounded-xl font-semibold hover:bg-safari-orange/90 transition transform hover:scale-105 shadow-xl text-lg">
            Full Seasonal Guide
          </a>
        </div>
      </div>
    </section>

    <!-- OUR TEAM -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-12">
          <div class="inline-block bg-safari-orange/10 text-safari-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Our Team</div>
          <h2 class="text-4xl font-heading font-bold text-safari-brown mb-4">Why Choose Walter's Tours & Safari?</h2>
          <p class="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed mb-8">
            We provide outstanding customer service over 10 years with the best guides and online customer service. We are a reliable source of unbiased information about travel suppliers and prices, with a deep commitment to providing the best value for every dollar spent.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div v-for="reason in whyChooseReasons" :key="reason.title" class="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-all flex items-start gap-4">
            <div class="w-12 h-12 bg-safari-orange/10 rounded-xl flex items-center justify-center flex-shrink-0 text-safari-orange">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="reason.icon"/>
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-safari-brown mb-1">{{ reason.title }}</h3>
              <p class="text-gray-600 text-sm">{{ reason.description }}</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- PARTNERS -->
    <section class="py-12 px-4 md:px-8 lg:px-12 bg-white border-t border-gray-100">
      <div class="container mx-auto max-w-7xl">
        <p class="text-center text-gray-400 text-sm font-semibold uppercase tracking-widest mb-8">Our Partners & Associations</p>
        <div class="flex flex-wrap items-center justify-center gap-12">
          <div class="flex items-center gap-3 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
            <svg class="w-10 h-10 text-safari-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>
            </svg>
            <span class="font-semibold text-safari-brown text-sm">Tanzania Association<br>of Tour Operators</span>
          </div>
          <div class="flex items-center gap-3 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
            <svg class="w-10 h-10 text-safari-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
            </svg>
            <span class="font-semibold text-safari-brown text-sm">Tanzania Tourism<br>Board Registered</span>
          </div>
          <a href="https://www.tripadvisor.com/Attraction_Review-g297913-d34556950-Reviews-Walters_Tours_Safaris_Ltd-Arusha_Arusha_Region.html" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 group" title="TripAdvisor Travelers' Choice">
            <svg class="w-10 h-10 text-[#00aa6c]" fill="currentColor" viewBox="0 0 512 512">
              <path d="M175.335 281.334c0 24.483-19.853 44.336-44.336 44.336-24.484 0-44.337-19.853-44.337-44.336 0-24.484 19.853-44.337 44.337-44.337 24.483 0 44.336 19.853 44.336 44.337zm205.554-44.337c-24.48 0-44.336 19.853-44.336 44.337 0 24.483 19.855 44.336 44.336 44.336 24.481 0 44.334-19.853 44.334-44.336-.006-24.47-19.839-44.31-44.309-44.323l-.025-.01v-.004zm125.002 44.337c0 68.997-55.985 124.933-124.999 124.933a124.466 124.466 0 01-84.883-33.252l-40.006 43.527-40.025-43.576a124.45 124.45 0 01-84.908 33.3c-68.968 0-124.933-55.937-124.933-124.932A124.586 124.586 0 0146.889 189L6 144.517h90.839c96.116-65.411 222.447-65.411 318.557 0H506l-40.878 44.484a124.574 124.574 0 0140.769 92.333zm-290.31 0c0-46.695-37.858-84.55-84.55-84.55-46.691 0-84.55 37.858-84.55 84.55 0 46.691 37.859 84.55 84.55 84.55 46.692 0 84.545-37.845 84.55-84.54v-.013.003zM349.818 155.1a244.01 244.01 0 00-187.666 0C215.532 175.533 256 223.254 256 278.893c0-55.634 40.463-103.362 93.826-123.786l-.005-.006h-.003zm115.64 126.224c0-46.694-37.858-84.55-84.55-84.55-46.691 0-84.552 37.859-84.552 84.55 0 46.692 37.855 84.55 84.553 84.55 46.697 0 84.55-37.858 84.55-84.55z"/>
            </svg>
            <span class="font-semibold text-safari-brown text-sm">TripAdvisor<br>Travelers' Choice</span>
          </a>
        </div>
        
        <!-- Partner Logos Row -->
        <div class="flex flex-wrap items-center justify-center gap-12 mt-12">
          <img :src="getImageUrl('images/partners/tato-removebg-preview.png')" alt="TATO Partner" class="h-16 md:h-20 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
          <img :src="getImageUrl('images/partners/trist-removebg-preview.png')" alt="TRIST Partner" class="h-16 md:h-20 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
        </div>
      </div>
    </section>

    <TestimonialsCarousel :testimonials="testimonials" />
    <CTAStrip />
  </MainLayout>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import MainLayout from '../Layouts/MainLayout.vue';
import HeroSection from '../Components/HeroSection.vue';
import TestimonialsCarousel from '../Components/TestimonialsCarousel.vue';
import CTAStrip from '../Components/CTAStrip.vue';
import { useAssets } from '../composables/useAssets';

const { getImageUrl } = useAssets();

const hoveredImage = ref(null);

const props = defineProps({
  testimonials: Array,
});

const stats = [
  { value: '10+', label: 'Years of Experience', sub: 'Expert Team Adventure', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  { value: '123', label: 'Number of Tours', sub: 'And Counting', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
  { value: '1,545', label: 'Total Clients', sub: 'Happy Travelers', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
  { value: '3,650', label: 'Days of Experience', sub: '24/7 Expert Support', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
];

const overlappingGallery = [
  { src: 'images/gallery/2026-01-24.webp', alt: 'Safari Adventure', position: { left: '5%', top: '10%', width: '35%', height: '45%', rotate: -8 } },
  { src: 'images/gallery/2025-10-22.webp', alt: 'Wildlife Experience', position: { left: '45%', top: '5%', width: '40%', height: '50%', rotate: 5 } },
  { src: 'images/gallery/2026-01-07 (9).webp', alt: 'Nature Beauty', position: { left: '55%', top: '45%', width: '38%', height: '48%', rotate: -3 } },
  { src: 'images/gallery/2026-01-07 (8).webp', alt: 'Safari Memories', position: { left: '10%', top: '50%', width: '32%', height: '42%', rotate: 6 } },
  { src: 'images/gallery/2026-01-07 (3).webp', alt: 'Tanzania Views', position: { left: '35%', top: '25%', width: '30%', height: '38%', rotate: -5 } },
];

const topItineraries = [
  {
    name: 'Materuni Waterfall Safari',
    duration: '4 Days',
    highlight: 'Waterfall & Cultural Experience',
    image: 'images/walters-tours-safaris-materuni-waterfall.png',
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/itineraries/materuni-waterfall-safari-4-days'
  },
  {
    name: 'Ngorongoro Tarangire Zanzibar',
    duration: 'Multiple Days',
    highlight: 'Safari & Beach Combination',
    image: 'images/serengeti/pexels-bgbennett-20095156.jpg',
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/itineraries/ngorongoro-tarangire-zanzibar'
  },
  {
    name: '5 Days Tanzania Safari',
    duration: '5 Days',
    highlight: 'Classic Northern Circuit',
    image: 'images/serengeti/pexels-sk-movies-photos-5306496-18609145.jpg',
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/itineraries/five-days-tanzania-safari'
  },
  {
    name: 'Camping Safari Serengeti Chemka',
    duration: 'Multiple Days',
    highlight: 'Wildlife Camping Adventure',
    image: 'images/serengeti/pexels-vik-joshi-63702791-8150758.jpg',
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/itineraries/camping-safari-serengeti-chemka'
  },
  {
    name: '7 Day Serengeti Safari',
    duration: '7 Days',
    highlight: 'Northern Circuit Safari Experience',
    image: 'images/serengeti/pexels-alex-ning-523843601-33650533.jpg',
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/itineraries/seven-day-serengeti-safari'
  },
  {
    name: '10 Days Luxury Safari',
    duration: '10 Days',
    highlight: 'Ultimate Tanzania Luxury Experience',
    image: 'images/serengeti/pexels-mikeknibbs-17849789.jpg',
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/itineraries/ten-days-luxury-safari'
  },
];

const tanzaniaParks = [
  { name: 'Serengeti National Park', highlight: 'The Great Migration & Big Five', image: 'images/walters-tours-safaris-magdalena-kula-manchee-nVUZO1gc_-o-unsplash.jpg', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: 'Ngorongoro Crater', highlight: "World's largest intact caldera", image: 'images/walters-tours-safaris-hu-chen-t-7Mlatf9iI-unsplash.jpg', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: 'Tarangire National Park', highlight: 'Elephant Playground', image: 'images/walters-tours-safaris-tarangire-elephants.png', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: 'Lake Manyara National Park', highlight: 'Flamingos & Tree-climbing Lions', image: 'images/walters-tours-safaris-denice-alex-LD6WgJlIpmk-unsplash.jpg', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: 'Arusha National Park', highlight: 'Colobus Monkeys & Meru Crater', image: 'images/walters-tours-safaris-sammy-wong-wzeGc7Uqopc-unsplash.jpg', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { name: 'Kilimanjaro National Park', highlight: 'Africa\'s Highest Peak', image: 'images/walters-tours-safaris-kilimanjaro-summit.png', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
];

const serengetiPoints = [
  {
    title: 'Global Conservation Importance',
    description: 'Approximately 25% of Tanzania\'s wildlife lives here — over 95 mammal species and 550+ bird species in one reserve.',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064'
  },
  {
    title: 'The Great Wildebeest Migration',
    description: 'Over 1 million wildebeest migrate northward July–October, crossing the Mara River in one of nature\'s most iconic spectacles.',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z'
  },
  {
    title: 'Seven Natural Wonders of the World',
    description: 'Recognized globally as one of the world\'s seven natural wonders for its exceptional and unbroken ecosystem.',
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
  },
];

const ngorongoroStats = [
  { value: '260 km²', label: 'Crater Floor' },
  { value: '610 m', label: 'Depth' },
  { value: '25,000+', label: 'Large Mammals' },
];

const topDestinations = [
  { name: 'Mt. Kilimanjaro', subtitle: 'Roof of Africa', image: 'images/Kilimanjaro/pexels-balazsimon-15994023.jpg', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/destinations/kilimanjaro' },
  { name: 'Serengeti', subtitle: 'Endless Plains', image: 'images/serengeti/pexels-bgbennett-20095156.jpg', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/destinations/serengeti' },
  { name: 'Zanzibar', subtitle: 'Spice Island', image: 'images/zanzibar/pexels-limonovdigital-9122382.jpg', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/destinations/zanzibar' },
  { name: 'Tarangire', subtitle: 'Elephant Paradise', image: 'images/tarangire/pexels-bgbennett-19986844.jpg', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/destinations/tarangire' },
  { name: 'Lake Duluti', subtitle: 'Hidden Gem', image: 'images/lake-duluti/Duluti-09-1440x1200.webp', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/destinations/lake-duluti' },
  { name: 'Chemka Hot Spring', subtitle: 'Natural Oasis', image: 'images/hotprings/5f43aab27b880.avif', link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/destinations/chemka' },
];

const packageIcon = 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z';
const topPackages = [
  { name: 'Wildlife Safari Private', icon: packageIcon },
  { name: 'Family Safari', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
  { name: 'Honeymooners Safari', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
  { name: 'Budget Safari', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { name: 'Midrange Safari', icon: packageIcon },
  { name: 'Tented Safari', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { name: 'Luxury Safari', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
  { name: 'Camping Safari Group', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { name: 'Tarangire Day Trip', icon: packageIcon },
  { name: 'Arusha National Park Day Trip', icon: packageIcon },
  { name: 'Ngorongoro Day Trip', icon: packageIcon },
  { name: 'Serengeti 2 Days', icon: packageIcon },
  { name: 'Mikumi with Flight', icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8' },
  { name: 'Beach Holidays Zanzibar', icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z' },
  { name: 'Mt. Kilimanjaro Climbing', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' },
  { name: 'Mountain Meru Climbing', icon: packageIcon },
  { name: 'Oldonyo Lengai', icon: packageIcon },
  { name: 'Walking Safari Hiking', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
  { name: 'Cultural Tourism Activities', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9' },
  { name: 'Canoeing Lake Duluti & Manyara', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
  { name: 'Desert Safari', icon: packageIcon },
  { name: 'Volunteering Project', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
  { name: 'Town Tour & Maasai Market', icon: packageIcon },
  { name: 'Chemka Hot Springs', icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3' },
  { name: 'Materuni Waterfall', icon: packageIcon },
  { name: 'Serval Wildlife Zoo', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
  { name: 'Maasai Village Visit', icon: packageIcon },
  { name: 'Coffee Plantation Tour', icon: packageIcon },
  { name: 'Airport Transfer', icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8' },
  { name: 'Accommodations', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
];

const popularItineraries = [
  {
    name: 'Kilimanjaro Machame Route',
    duration: '7 Days',
    description: 'Conquer the Roof of Africa via the most scenic route on Kilimanjaro.',
    image: 'images/walters-tours-safaris-matthew-WfZ4WCuNtlg-unsplash.jpg',
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/'
  },
  {
    name: '5 Days Camping Safari',
    duration: '5 Days',
    description: 'Budget-friendly group safari through Tanzania\'s top national parks.',
    image: 'images/walters-tours-safaris-hu-chen-t-7Mlatf9iI-unsplash.jpg',
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/'
  },
  {
    name: '5 Days in Zanzibar',
    duration: '5 Days',
    description: 'Dolphins, coral reefs, Stone Town, spice farms and pristine beaches.',
    image: 'images/walters-tours-safaris-humphrey-m-e5hzQubIb68-unsplash.jpg',
    link: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/'
  }
];

const seasons = [
  { period: 'June – September: High Season', description: 'The Great Migration heads northwards, Kilimanjaro is mud-free, and Zanzibar beaches beckon. Wildlife is concentrated around dwindling water sources — peak safari time.' },
  { period: 'October: Shoulder Season', description: 'Sunny and mostly dry. Only a fraction of high-season crowds. Tarangire and jacaranda blooms around Moshi and Arusha make this month spectacular.' },
  { period: 'November: Short Rains & Birding', description: 'Mango season begins and the first migrant birds arrive from the north — the start of peak birding season across Tanzania.' },
  { period: 'December – February: Calving Season', description: 'The southeastern Serengeti is full of activity — wildebeest calving season. Ideal for Kilimanjaro treks and the shoulder season on the coast.' },
];

const whyChooseReasons = [
  { title: 'Best & Quality Service', description: 'For families, groups and solo travelers — we pride ourselves on personalized, top-tier service.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { title: 'Quickest Response — 100%', description: 'Skilled travel consultation team in both Zanzibar and Arusha, available 24/7 to answer every question.', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
  { title: 'Best Rates & Affordable', description: 'Budget packages that every traveler can afford — without sacrificing quality or experience.', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { title: 'Professional Guides & Safari Cars', description: '4x4 land cruisers with full gear and professional English-speaking, CPR-certified guides.', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
  { title: 'Pay After Arrival', description: 'Payments accepted after arrival with no changes on the quoted price. Zero hidden fees.', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
  { title: 'Local Family Business', description: 'A family-owned company from Arusha. We know Tanzania inside out — from hidden gems to iconic parks.', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
];
</script>
