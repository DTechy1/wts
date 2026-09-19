import { createRouter, createWebHistory } from 'vue-router';

// Auto-detect base path for XAMPP (/wts/) vs root domain (/)
const getRouterBase = () => {
  if (typeof window !== 'undefined') {
    if (window.APP_BASE_PATH) {
      return window.APP_BASE_PATH.endsWith('/') ? window.APP_BASE_PATH : `${window.APP_BASE_PATH}/`;
    }
    const path = window.location.pathname;
    if (path.startsWith('/wts/') || path === '/wts') {
      window.APP_BASE_PATH = '/wts';
      return '/wts/';
    }
    window.APP_BASE_PATH = '';
  }
  return import.meta.env.BASE_URL || '/';
};

const routes = [
  // Core Pages
  {
    path: '/',
    name: 'home',
    component: () => import('../Pages/Home.vue'),
    meta: { title: 'Walters Tours & Safaris - Authentic Tanzania Safari Adventures' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../Pages/About.vue'),
    meta: { title: 'About Us - Walters Tours & Safaris' }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../Pages/Contact.vue'),
    meta: { title: 'Contact Us - Walters Tours & Safaris' }
  },
  {
    path: '/parks',
    name: 'parks',
    component: () => import('../Pages/TanzaniaParks.vue'),
    meta: { title: 'Tanzania National Parks - Walters Tours & Safaris' }
  },
  {
    path: '/why-serengeti',
    name: 'why-serengeti',
    component: () => import('../Pages/WhySerengeti.vue'),
    meta: { title: 'Why Visit Serengeti - Walters Tours & Safaris' }
  },
  {
    path: '/about-ngorongoro',
    name: 'about-ngorongoro',
    component: () => import('../Pages/AboutNgorongoro.vue'),
    meta: { title: 'About Ngorongoro Crater - Walters Tours & Safaris' }
  },
  {
    path: '/itineraries',
    name: 'itineraries',
    component: () => import('../Pages/BestItineraries.vue'),
    meta: { title: 'Best Safari Itineraries - Walters Tours & Safaris' }
  },
  {
    path: '/packages',
    redirect: '/itineraries'
  },
  {
    path: '/top-packages',
    name: 'top-packages',
    component: () => import('../Pages/TopPackages.vue'),
    meta: { title: 'Top Safari Packages - Walters Tours & Safaris' }
  },
  {
    path: '/best-time',
    name: 'best-time',
    component: () => import('../Pages/BestTime.vue'),
    meta: { title: 'Best Time to Visit Tanzania - Walters Tours & Safaris' }
  },
  {
    path: '/destinations',
    name: 'destinations',
    component: () => import('../Pages/TopDestinations.vue'),
    meta: { title: 'Top Destinations in Tanzania - Walters Tours & Safaris' }
  },
  {
    path: '/charity',
    name: 'charity',
    component: () => import('../Pages/Charity.vue'),
    meta: { title: 'Support Locals & Charity - Walters Tours & Safaris' }
  },

  // Destination Specific Pages
  {
    path: '/destinations/serengeti',
    name: 'destination-serengeti',
    component: () => import('../Pages/Destinations/Serengeti.vue'),
    meta: { title: 'Serengeti National Park - Walters Tours & Safaris' }
  },
  {
    path: '/destinations/ngorongoro',
    name: 'destination-ngorongoro',
    component: () => import('../Pages/Destinations/Ngorongoro.vue'),
    meta: { title: 'Ngorongoro Crater - Walters Tours & Safaris' }
  },
  {
    path: '/destinations/kilimanjaro',
    name: 'destination-kilimanjaro',
    component: () => import('../Pages/Destinations/Kilimanjaro.vue'),
    meta: { title: 'Mount Kilimanjaro - Walters Tours & Safaris' }
  },
  {
    path: '/destinations/zanzibar',
    name: 'destination-zanzibar',
    component: () => import('../Pages/Destinations/Zanzibar.vue'),
    meta: { title: 'Zanzibar Island - Walters Tours & Safaris' }
  },
  {
    path: '/destinations/tarangire',
    name: 'destination-tarangire',
    component: () => import('../Pages/Destinations/Tarangire.vue'),
    meta: { title: 'Tarangire National Park - Walters Tours & Safaris' }
  },
  {
    path: '/destinations/lake-duluti',
    name: 'destination-lake-duluti',
    component: () => import('../Pages/Destinations/LakeDuluti.vue'),
    meta: { title: 'Lake Duluti - Walters Tours & Safaris' }
  },
  {
    path: '/destinations/chemka',
    name: 'destination-chemka',
    component: () => import('../Pages/Destinations/Chemka.vue'),
    meta: { title: 'Chemka Hot Springs - Walters Tours & Safaris' }
  },

  // Safari Types
  {
    path: '/safaris/luxury',
    name: 'safari-luxury',
    component: () => import('../Pages/Safaris/Luxury.vue'),
    meta: { title: 'Luxury Safaris - Walters Tours & Safaris' }
  },
  {
    path: '/safaris/budget',
    name: 'safari-budget',
    component: () => import('../Pages/Safaris/Budget.vue'),
    meta: { title: 'Budget Safaris - Walters Tours & Safaris' }
  },
  {
    path: '/safaris/day-trips',
    name: 'safari-day-trips',
    component: () => import('../Pages/Safaris/DayTrips.vue'),
    meta: { title: 'Day Trips & Short Safaris - Walters Tours & Safaris' }
  },
  {
    path: '/safaris/custom',
    name: 'safari-custom',
    component: () => import('../Pages/Safaris/Custom.vue'),
    meta: { title: 'Tailor-Made Custom Safaris - Walters Tours & Safaris' }
  },
  {
    path: '/safaris/family',
    name: 'safari-family',
    component: () => import('../Pages/Safaris/Family.vue'),
    meta: { title: 'Family Safaris - Walters Tours & Safaris' }
  },

  // Cultural Tours
  {
    path: '/cultural-tours/maasai',
    name: 'cultural-maasai',
    component: () => import('../Pages/CulturalTours/Maasai.vue'),
    meta: { title: 'Maasai Village Cultural Tour - Walters Tours & Safaris' }
  },
  {
    path: '/cultural-tours/hadza',
    name: 'cultural-hadza',
    component: () => import('../Pages/CulturalTours/Hadza.vue'),
    meta: { title: 'Hadzabe Tribe Experience - Walters Tours & Safaris' }
  },

  // Itineraries
  {
    path: '/itineraries/kilimanjaro-machame',
    name: 'itinerary-kilimanjaro-machame',
    component: () => import('../Pages/Itineraries/KilimanjaroMachame.vue'),
    meta: { title: 'Kilimanjaro Machame Route - Walters Tours & Safaris' }
  },
  {
    path: '/itineraries/tanzania-zanzibar-10-days',
    name: 'itinerary-tanzania-zanzibar-10-days',
    component: () => import('../Pages/Itineraries/TanzaniaZanzibar10Days.vue'),
    meta: { title: '10 Days Tanzania Safari & Zanzibar - Walters Tours & Safaris' }
  },
  {
    path: '/itineraries/manyara-tarangire-ngorongoro-3-days',
    name: 'itinerary-manyara-tarangire-ngorongoro-3-days',
    component: () => import('../Pages/Itineraries/ManyaraTarangireNgorongoro3Days.vue'),
    meta: { title: '3 Days Manyara, Tarangire & Ngorongoro - Walters Tours & Safaris' }
  },
  {
    path: '/itineraries/manyara-ngorongoro-3-days',
    name: 'itinerary-manyara-ngorongoro-3-days',
    component: () => import('../Pages/Itineraries/ManyaraNgorongoro3Days.vue'),
    meta: { title: '3 Days Manyara & Ngorongoro - Walters Tours & Safaris' }
  },
  {
    path: '/itineraries/camping-safari-5-days',
    name: 'itinerary-camping-safari-5-days',
    component: () => import('../Pages/Itineraries/CampingSafari5Days.vue'),
    meta: { title: '5 Days Camping Safari - Walters Tours & Safaris' }
  },
  {
    path: '/itineraries/mountain-meru-4-days',
    name: 'itinerary-mountain-meru-4-days',
    component: () => import('../Pages/Itineraries/MountainMeru4Days.vue'),
    meta: { title: '4 Days Mount Meru Trekking - Walters Tours & Safaris' }
  },
  {
    path: '/itineraries/zanzibar-5-days',
    name: 'itinerary-zanzibar-5-days',
    component: () => import('../Pages/Itineraries/Zanzibar5Days.vue'),
    meta: { title: '5 Days Zanzibar Beach Holiday - Walters Tours & Safaris' }
  },
  {
    path: '/itineraries/dubai-desert-safari-6-days',
    name: 'itinerary-dubai-desert-safari-6-days',
    component: () => import('../Pages/Itineraries/DubaiDesertSafari6Days.vue'),
    meta: { title: '6 Days Dubai Desert Safari - Walters Tours & Safaris' }
  },
  {
    path: '/itineraries/kenya-tanzania-11-days',
    name: 'itinerary-kenya-tanzania-11-days',
    component: () => import('../Pages/Itineraries/KenyaTanzania11Days.vue'),
    meta: { title: '11 Days Kenya & Tanzania Combined Safari - Walters Tours & Safaris' }
  },
  {
    path: '/itineraries/mikumi-day-trip',
    name: 'itinerary-mikumi-day-trip',
    component: () => import('../Pages/Itineraries/MikumiDayTrip.vue'),
    meta: { title: 'Mikumi National Park Day Trip - Walters Tours & Safaris' }
  },
  {
    path: '/itineraries/hotsprings-day-trip',
    name: 'itinerary-hotsprings-day-trip',
    component: () => import('../Pages/Itineraries/HotspringsDayTrip.vue'),
    meta: { title: 'Chemka Hot Springs Day Trip - Walters Tours & Safaris' }
  },
  {
    path: '/itineraries/serval-wildlife',
    name: 'itinerary-serval-wildlife',
    component: () => import('../Pages/Itineraries/ServalWildlife.vue'),
    meta: { title: 'Serval Wildlife Sanctuary - Walters Tours & Safaris' }
  },
  {
    path: '/itineraries/materuni-waterfall',
    name: 'itinerary-materuni-waterfall',
    component: () => import('../Pages/Itineraries/MateruniWaterfall.vue'),
    meta: { title: 'Materuni Waterfall & Coffee Tour - Walters Tours & Safaris' }
  },
  {
    path: '/itineraries/arusha-serengeti-central',
    name: 'itinerary-arusha-serengeti-central',
    component: () => import('../Pages/Itineraries/ArushaSerengetiCentral.vue'),
    meta: { title: 'Arusha to Central Serengeti Safari - Walters Tours & Safaris' }
  },
  {
    path: '/itineraries/ngorongoro-tarangire-zanzibar',
    name: 'itinerary-ngorongoro-tarangire-zanzibar',
    component: () => import('../Pages/Itineraries/NgorongoroTarangireFromZanzibar.vue'),
    meta: { title: 'Ngorongoro & Tarangire from Zanzibar - Walters Tours & Safaris' }
  },
  {
    path: '/itineraries/five-days-tanzania-safari',
    name: 'itinerary-five-days-tanzania-safari',
    component: () => import('../Pages/Itineraries/FiveDaysTanzaniaSafari.vue'),
    meta: { title: '5 Days Classic Tanzania Safari - Walters Tours & Safaris' }
  },
  {
    path: '/itineraries/seven-day-serengeti-safari',
    name: 'itinerary-seven-day-serengeti-safari',
    component: () => import('../Pages/Itineraries/SevenDaySerengetiSafari.vue'),
    meta: { title: '7 Days Serengeti Safari Adventure - Walters Tours & Safaris' }
  },
  {
    path: '/itineraries/two-days-ndutu-tarangire',
    name: 'itinerary-two-days-ndutu-tarangire',
    component: () => import('../Pages/Itineraries/TwoDaysNdutuTarangire.vue'),
    meta: { title: '2 Days Ndutu & Tarangire Safari - Walters Tours & Safaris' }
  },
  {
    path: '/itineraries/ten-days-luxury-safari',
    name: 'itinerary-ten-days-luxury-safari',
    component: () => import('../Pages/Itineraries/TenDaysLuxurySafari.vue'),
    meta: { title: '10 Days Ultimate Luxury Safari - Walters Tours & Safaris' }
  },
  {
    path: '/itineraries/ngorongoro-crater-day-trip',
    name: 'itinerary-ngorongoro-crater-day-trip',
    component: () => import('../Pages/Itineraries/NgorongoroCraterDayTrip.vue'),
    meta: { title: 'Ngorongoro Crater Day Trip - Walters Tours & Safaris' }
  },
  {
    path: '/itineraries/zanzibar-7-days',
    name: 'itinerary-zanzibar-7-days',
    component: () => import('../Pages/Itineraries/Zanzibar7Days.vue'),
    meta: { title: '7 Days Zanzibar Beach Experience - Walters Tours & Safaris' }
  },
  {
    path: '/itineraries/zanzibar-2-days-budget',
    name: 'itinerary-zanzibar-2-days-budget',
    component: () => import('../Pages/Itineraries/Zanzibar2DaysBudget.vue'),
    meta: { title: '2 Days Zanzibar Budget Escape - Walters Tours & Safaris' }
  },
  {
    path: '/itineraries/zanzibar-5-days-couple',
    name: 'itinerary-zanzibar-5-days-couple',
    component: () => import('../Pages/Itineraries/Zanzibar5DaysCouple.vue'),
    meta: { title: '5 Days Zanzibar Couples Getaway - Walters Tours & Safaris' }
  },
  {
    path: '/itineraries/zanzibar-10-days-paradise',
    name: 'itinerary-zanzibar-10-days-paradise',
    component: () => import('../Pages/Itineraries/Zanzibar10DaysParadise.vue'),
    meta: { title: '10 Days Zanzibar Island Paradise - Walters Tours & Safaris' }
  },
  {
    path: '/itineraries/tarangire-1-day',
    name: 'itinerary-tarangire-1-day',
    component: () => import('../Pages/Itineraries/Tarangire1Day.vue'),
    meta: { title: 'Tarangire National Park 1 Day Safari - Walters Tours & Safaris' }
  },
  {
    path: '/itineraries/serval-wildlife-zoo',
    name: 'itinerary-serval-wildlife-zoo',
    component: () => import('../Pages/Itineraries/ServalWildlifeZoo.vue'),
    meta: { title: 'Serval Wildlife Day Excursion - Walters Tours & Safaris' }
  },
  {
    path: '/itineraries/nyerere-park-3-days',
    name: 'itinerary-nyerere-park-3-days',
    component: () => import('../Pages/Itineraries/NyererePark3Days.vue'),
    meta: { title: '3 Days Nyerere (Selous) Safari - Walters Tours & Safaris' }
  },
  {
    path: '/itineraries/safari-zanzibar-15-days',
    name: 'itinerary-safari-zanzibar-15-days',
    component: () => import('../Pages/Itineraries/SafariZanzibar15Days.vue'),
    meta: { title: '15 Days Grand Safari & Zanzibar - Walters Tours & Safaris' }
  },
  {
    path: '/itineraries/kilimanjaro-day-hike',
    name: 'itinerary-kilimanjaro-day-hike',
    component: () => import('../Pages/Itineraries/KilimanjaroDayHike.vue'),
    meta: { title: 'Mount Kilimanjaro Day Hike - Walters Tours & Safaris' }
  },
  {
    path: '/itineraries/materuni-waterfall-safari-4-days',
    name: 'itinerary-materuni-waterfall-safari-4-days',
    component: () => import('../Pages/Itineraries/MateruniWaterfallSafari4Days.vue'),
    meta: { title: '4 Days Materuni Waterfall & Safari - Walters Tours & Safaris' }
  },
  {
    path: '/itineraries/camping-safari-serengeti-chemka',
    name: 'itinerary-camping-safari-serengeti-chemka',
    component: () => import('../Pages/Itineraries/CampingSafariSerengetiChemka.vue'),
    meta: { title: 'Camping Safari Serengeti & Chemka - Walters Tours & Safaris' }
  },

  // Catch-all 404 Route -> redirect to Home
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(getRouterBase()),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }
    return { top: 0, behavior: 'smooth' };
  }
});

// Update page title on navigation
router.afterEach((to) => {
  const defaultTitle = 'Walters Tours & Safaris - Authentic Tanzania Safari Adventures';
  document.title = to.meta?.title || defaultTitle;
});

export default router;
