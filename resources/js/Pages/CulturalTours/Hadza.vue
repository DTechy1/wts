<template>
  <MainLayout>
    <Breadcrumb :items="breadcrumbItems" />
    
    <!-- Hero Section -->
    <section class="relative h-[70vh] overflow-hidden">
      <img :src="getImageUrl('images/walters-tours-safaris-hadza-tribe-cultural.png')" 
           alt="Hadzabe Tribe Cultural Tour" class="w-full h-full object-cover ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-r from-safari-brown/95 via-safari-brown/70 to-transparent"></div>
      <div class="absolute inset-0 flex items-center px-4 md:px-8 lg:px-12">
        <div class="container mx-auto max-w-7xl">
          <div class="inline-flex items-center gap-2 bg-safari-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
            </svg>
            Unique Cultural Safari
          </div>
          <h1 class="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            Hadzabe Tribe Visit<br class="hidden md:block" /> at Lake Eyasi
          </h1>
          <p class="text-xl md:text-2xl text-white/95 max-w-3xl mb-8 leading-relaxed">
            Walk with the last hunter-gatherers of East Africa and experience the culture, habitat and way of life of the Hadzabe Bushmen firsthand
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a :href="$basePath + '/contact'" class="inline-block bg-safari-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-safari-orange/90 transition transform hover:scale-105 text-center">
              Book This Experience
            </a>
            <a href="#itinerary" class="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-safari-brown transition text-center">
              See the Itinerary
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Introduction -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="inline-block bg-safari-orange/10 text-safari-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Stone Age Living
            </div>
            <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown mb-6 leading-tight">
              The Last Hunter-Gatherers of Africa
            </h2>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              Are you interested in including a Hadzabe Tribe visit at Lake Eyasi during your safari in Tanzania? Walk with Hadzabe hunter-gatherers to learn their ancient customs as part of your Tanzania safari. You will experience the culture, habitat and way of life of the Hadzabe Tribe Bushmen firsthand on this cultural safari activity.
            </p>
            <p class="text-lg text-gray-600 leading-relaxed">
              A visit to the Hadza will take you back to the time of the <strong class="text-safari-brown">Stone Age peoples</strong>. As the Hadza depend on hunting and gathering of wild fruits and plants, you will have an experience of a lifetime.
            </p>
          </div>
          <div class="relative">
            <div class="rounded-2xl overflow-hidden shadow-2xl">
              <img :src="getImageUrl('images/walters-tours-safaris-hadza-tribe-cultural.png')" 
                   alt="Hadzabe tribe morning campfire"
                   class="w-full h-[500px] object-cover" />
            </div>
            <!-- Floating stat card -->
            <div class="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border-l-4 border-safari-orange">
              <div class="text-3xl font-heading font-bold text-safari-brown">50,000+</div>
              <div class="text-gray-500 text-sm">Years of Unbroken Tradition</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Activities Summary Badges -->
    <section class="py-16 px-4 md:px-8 lg:px-12 bg-white">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-heading font-bold text-safari-brown mb-4">Activities Included</h2>
          <p class="text-lg text-gray-600">Everything you'll experience during your Hadzabe cultural tour</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="(activity, index) in activities" :key="index" 
               class="bg-gradient-to-br from-safari-orange/5 to-safari-brown/5 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group border border-gray-100">
            <div class="w-16 h-16 bg-safari-orange/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <svg v-if="activity.id === 'hunt'" class="w-8 h-8 text-safari-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11a5 5 0 00-10 0c0 1.02.164 2 .465 2.922m1.965-1.965a10 10 0 0113.328-1.154l1.32 1.32m0 0l2-2m-2 2l2-2"/>
              </svg>
              <svg v-else-if="activity.id === 'fire'" class="w-8 h-8 text-safari-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <svg v-else-if="activity.id === 'gather'" class="w-8 h-8 text-safari-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
              <svg v-else-if="activity.id === 'dance'" class="w-8 h-8 text-safari-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <svg v-else-if="activity.id === 'smith'" class="w-8 h-8 text-safari-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <svg v-else-if="activity.id === 'bird'" class="w-8 h-8 text-safari-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
              <svg v-else-if="activity.id === 'sunset'" class="w-8 h-8 text-safari-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"/>
              </svg>
              <svg v-else class="w-8 h-8 text-safari-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 4a2 2 0 002-2v-2a3 3 0 00-3-3h-1m-4-1l-4 4L9 9l-4 4"/>
              </svg>
            </div>
            <h4 class="font-heading font-bold text-safari-brown text-sm">{{ activity.name }}</h4>
          </div>
        </div>
      </div>
    </section>

    <!-- Day Itinerary Timeline -->
    <section id="itinerary" class="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-safari-brown to-safari-brown/95">
      <div class="container mx-auto max-w-5xl">
        <div class="text-center mb-16">
          <div class="inline-block bg-safari-orange text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Your Day with the Hadza
          </div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Tour Itinerary
          </h2>
          <p class="text-lg text-white/80 max-w-2xl mx-auto">
            A typical day begins early in the morning for the most authentic experience
          </p>
        </div>

        <!-- Timeline -->
        <div class="relative">
          <!-- Vertical line -->
          <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-safari-orange/30 transform md:-translate-x-1/2"></div>

          <div v-for="(step, index) in itinerary" :key="index" 
               :class="['relative flex items-start gap-8 mb-12', index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse']">
            <!-- Timeline dot -->
            <div class="absolute left-4 md:left-1/2 w-4 h-4 bg-safari-orange rounded-full transform -translate-x-1/2 mt-2 z-10 ring-4 ring-safari-brown"></div>
            
            <!-- Content -->
            <div :class="['ml-12 md:ml-0 md:w-[45%]', index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12']">
              <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-500">
                <div class="inline-block bg-safari-orange text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
                  {{ step.time }}
                </div>
                <h3 class="text-2xl font-heading font-bold text-white mb-3">{{ step.title }}</h3>
                <p class="text-white/70 leading-relaxed">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lake Eyasi Section -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="order-2 lg:order-1">
            <div class="grid grid-cols-2 gap-4">
              <img :src="getImageUrl('images/walters-tours-safaris-pexels-tanzania-wild-sky-986912744-20179685.jpg')" 
                   alt="Lake Eyasi landscape"
                   class="rounded-2xl w-full h-64 object-cover shadow-lg" />
              <img :src="getImageUrl('images/walters-tours-safaris-steve-ody-hzs94KNHqng-unsplash.jpg')" 
                   alt="Wildlife at Lake Eyasi"
                   class="rounded-2xl w-full h-64 object-cover shadow-lg mt-8" />
              <img :src="getImageUrl('images/walters-tours-safaris-robson-hatsukami-morgan-D_EV-m3aJ2U-unsplash.jpg')" 
                   alt="Flamingos and pelicans"
                   class="rounded-2xl w-full h-64 object-cover shadow-lg -mt-4" />
              <img :src="getImageUrl('images/walters-tours-safaris-todd-trapani-91T-rq-pY28-unsplash.jpg')" 
                   alt="Lake Eyasi sunset"
                   class="rounded-2xl w-full h-64 object-cover shadow-lg mt-4" />
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <div class="inline-block bg-safari-orange/10 text-safari-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              The Destination
            </div>
            <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown mb-6 leading-tight">
              Lake Eyasi
            </h2>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              A uniquely beautiful lake lies at 1,030m between the Eyasi escarpment in the north and the Oldean mountains in the south. Eyasi makes a perfect detour on the Ngorongoro trip for anyone looking for something remote and different.
            </p>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              The lake itself varies considerably in size depending on the rains and supports a mix of water birds including huge breeding season populations of <strong class="text-safari-brown">flamingos and pelicans</strong> from June to November. In the dry season, it is little more than a parched lake bed lending to a rather otherworldly, primeval ambience.
            </p>
            <p class="text-lg text-gray-600 leading-relaxed">
              The presence of the traditional Hadza lends a soulful human presence to the region. Also in the area are the <strong class="text-safari-brown">Iraqw</strong>, people of Cushitic origin who have been to the area for about 2,000 years, and the <strong class="text-safari-brown">Datoga</strong> people � noted metal smiths whose dress and culture is quite similar to the Maasai.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Datoga Section -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-white">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-16">
          <div class="inline-block bg-safari-orange/10 text-safari-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Bonus Experience
          </div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-safari-brown mb-4">
            The Datoga People
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Visiting one of the Datoga families around Lake Eyasi is another great experience to have
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Datoga Blacksmith -->
          <div class="bg-gradient-to-br from-safari-brown/5 to-safari-orange/5 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-500 group">
            <div class="w-16 h-16 bg-safari-orange text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-heading font-bold text-safari-brown mb-4">Datoga Blacksmith</h3>
            <p class="text-gray-600 leading-relaxed">
              This is very interesting to visit as they use ancient blacksmith skills to make arrowheads, knives, spears, bracelets, rings, and a lot of different jewelry � all handmade. You will see how they melt brass, copper or aluminum.
            </p>
          </div>

          <!-- Datoga Pastoralist -->
          <div class="bg-gradient-to-br from-safari-brown/5 to-safari-orange/5 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-500 group">
            <div class="w-16 h-16 bg-safari-orange text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
            </div>
            <h3 class="text-2xl font-heading font-bold text-safari-brown mb-4">Datoga Pastoralist</h3>
            <p class="text-gray-600 leading-relaxed">
              Pay a visit to a family of a husband and his several wives as they are polygamous. The women from the tribe are welcoming and will greet you with warm smiles. You'll also learn how to grind maize with stones!
            </p>
          </div>

          <!-- Mumba Caves -->
          <div class="bg-gradient-to-br from-safari-brown/5 to-safari-orange/5 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-500 group">
            <div class="w-16 h-16 bg-safari-orange text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 4a2 2 0 002-2v-2a3 3 0 00-3-3h-1m-4-1l-4 4L9 9l-4 4"/>
              </svg>
            </div>
            <h3 class="text-2xl font-heading font-bold text-safari-brown mb-4">Mumba Caves</h3>
            <p class="text-gray-600 leading-relaxed">
              A rich archaeological site noted for deposits spanning the transition between the Middle Stone Age and Late Stone Age in Eastern Africa. Originally tested by Ludwig Kohl-Larsen and his wife Margit in 1934-1936 expeditions, featuring abundant artifacts, rock art and burials.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Offerings -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-white">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-heading font-bold text-safari-brown mb-4">
            We Also Offer
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(offer, index) in additionalOffers" :key="index"
               class="relative rounded-2xl overflow-hidden h-64 group cursor-pointer">
            <img :src="offer.image" :alt="offer.title" 
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-safari-brown/90 via-safari-brown/30 to-transparent"></div>
            <div class="absolute inset-0 flex flex-col justify-end p-6">
              <div class="w-10 h-10 bg-safari-orange text-white rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <svg v-if="offer.id === 'caves'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 4a2 2 0 002-2v-2a3 3 0 00-3-3h-1m-4-1l-4 4L9 9l-4 4"/>
                </svg>
                <svg v-else-if="offer.id === 'spring'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                </svg>
                <svg v-else-if="offer.id === 'plantation'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"/>
                </svg>
                <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"/>
                </svg>
              </div>
              <h4 class="text-xl font-heading font-bold text-white mb-1">{{ offer.title }}</h4>
              <p class="text-white/80 text-sm">{{ offer.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Inclusions Card (No Direct Pricing) -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-white">
      <div class="container mx-auto max-w-3xl">
        <div class="bg-gradient-to-br from-safari-brown to-safari-brown/90 rounded-3xl overflow-hidden shadow-2xl">
          <div class="p-10 md:p-14 text-center">
            <div class="inline-block bg-safari-orange text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Tour Details
            </div>
            <h2 class="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Tour Inclusions</h2>
            <p class="text-xl text-white/80 mb-8">All guiding logistics, permits, and activities are fully coordinated</p>
            
            <div class="bg-white/10 rounded-2xl p-8 text-left mb-8">
              <h4 class="text-lg font-bold text-white mb-4">This includes:</h4>
              <ul class="space-y-3">
                <li v-for="(item, index) in pricingIncludes" :key="index" class="flex items-start gap-3 text-white/90">
                  <svg class="w-5 h-5 text-safari-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>

            <a :href="$basePath + '/contact'" class="inline-block bg-safari-orange text-white px-10 py-4 rounded-lg font-semibold hover:bg-safari-orange/90 transition transform hover:scale-105 text-lg">
              Enquire for Details
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-4 md:px-8 lg:px-12 bg-safari-orange relative overflow-hidden">
      <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div class="container mx-auto max-w-4xl text-center relative z-10">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
          Experience the Hadzabe Way of Life
        </h2>
        <p class="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Join us for an unforgettable journey back in time � walk with the last hunter-gatherers, learn to make fire, and participate in a traditional hunt
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a :href="$basePath + '/contact'" class="bg-white text-safari-orange px-8 py-4 rounded-lg font-semibold hover:bg-safari-white transition transform hover:scale-105">
            Plan Your Cultural Tour
          </a>
          <a :href="$basePath + '/cultural-tours/maasai'" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-safari-orange transition">
            ? Explore Maasai Village Visit
          </a>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../../Layouts/MainLayout.vue';
import Breadcrumb from '../../Components/Breadcrumb.vue';
import { useAssets } from '../../composables/useAssets';

const { getImageUrl } = useAssets();

const breadcrumbItems = [
  { label: 'Home', href: '/wts' },
  { label: 'Cultural Tours', href: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' },
  { label: 'Hadzabe Tribe', href: ((typeof window !== 'undefined' && window.APP_BASE_PATH) || '') + '/' }
];

const activities = [
  { id: 'hunt', name: 'Hunting with Hadza' },
  { id: 'fire', name: 'Fire Making' },
  { id: 'gather', name: 'Berry Gathering' },
  { id: 'dance', name: 'Tribal Dancing' },
  { id: 'smith', name: 'Datoga Blacksmith' },
  { id: 'bird', name: 'Bird Watching' },
  { id: 'sunset', name: 'Sunset Walk' },
  { id: 'caves', name: 'Mumba Caves' },
];

const itinerary = [
  {
    time: 'Early Morning',
    title: 'Meet at the Campsite',
    description: 'Drive 30-60 minutes from your lodge or campsite to reach the Hadza clan. They will be sitting around the fire to warm up before their morning hunt, chatting, chanting, and making new arrows.'
  },
  {
    time: '7:00 - 8:00 AM',
    title: 'Fire Making & Interaction',
    description: 'They will demonstrate how they make fire with sticks � a skill passed down for thousands of years. They\'ll teach you how. You can sit with them, take pictures, and interact. They are very friendly people.'
  },
  {
    time: '8:00 AM - Noon',
    title: 'The Hunt',
    description: 'A group of 3 to 4 men take their bow and arrows and go hunting. Join them by following behind. The Hadza hunt birds, baboons, impala and more. If successful, they\'ll make fire for a bush BBQ. The hunting takes about 2 to 4 hours.'
  },
  {
    time: 'Late Morning',
    title: 'Gathering & Arrow Practice',
    description: 'Join the Hadza women for foraging � collecting fruits, picking wild berries and digging for tubers. Then try your skills with a Hadzabe bow and arrow during an exciting practice session.'
  },
  {
    time: 'Afternoon',
    title: 'Traditional Dance & Celebration',
    description: 'The tour concludes with traditional Hadza singing and dancing. Most of their songs are about courage, life and animals. They sing and dance whenever they are happy or when food is plenty.'
  },
  {
    time: 'Extension',
    title: 'Datoga Village & Mumba Caves',
    description: 'Visit the Datoga blacksmiths to see ancient metalwork, explore Mumba Caves with their Middle Stone Age rock paintings, visit hot springs, and tour local onion plantations.'
  },
];

const additionalOffers = [
  {
    id: 'caves',
    title: 'Mumba Caves',
    description: 'Rock paintings & archaeological site',
    image: getImageUrl('images/walters-tours-safaris-todd-trapani-91T-rq-pY28-unsplash.jpg'),
  },
  {
    id: 'spring',
    title: 'Hot Spring',
    description: 'Natural hot spring experience',
    image: getImageUrl('images/walters-tours-safaris-steve-ody-hzs94KNHqng-unsplash.jpg'),
  },
  {
    id: 'plantation',
    title: 'Onion Plantation',
    description: 'Local farming & soil conservation',
    image: getImageUrl('images/walters-tours-safaris-roya-ann-miller-GGY3yYwu0Wc-unsplash.jpg'),
  },
  {
    id: 'sunset',
    title: 'Lake Eyasi Sunset',
    description: 'Nature walk including sunset views',
    image: getImageUrl('images/walters-tours-safaris-pexels-tanzania-wild-sky-986912744-20179685.jpg'),
  },
];

const pricingIncludes = [
  'All activities mentioned above (Hadza visit, Datoga visit, bird watching, nature walk)',
  'The gate entry fee',
  'Professional guiding & interpretation fee',
  'Mumba Caves, rock paintings, hot spring access',
  'Onion plantation visit',
  'Sunset walk to Lake Eyasi',
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
