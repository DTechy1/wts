import { useRouter } from 'vue-router';

// Route-name prefixes that are searchable, and the label shown for each.
const CATEGORIES = [
  { prefix: 'itinerary-', label: 'Itinerary' },
  { prefix: 'destination-', label: 'Destination' },
  { prefix: 'safari-', label: 'Safari Type' },
  { prefix: 'cultural-', label: 'Cultural Tour' },
];

// Standalone guide pages worth surfacing in search.
const EXTRA_PAGES = {
  parks: 'Destination',
  destinations: 'Destination',
  'why-serengeti': 'Guide',
  'about-ngorongoro': 'Guide',
  'best-time': 'Guide',
  itineraries: 'Itinerary',
};

// Extra words that should match a page even though they are not in its title.
const KEYWORDS = {
  'itinerary-arusha-serengeti-central': 'arusha national park walking safari momella meru day trip',
  'itinerary-ngorongoro-tarangire-zanzibar': 'big 5 five flight crater elephants',
  'itinerary-two-days-ndutu-tarangire': 'migration calving wildebeest serengeti',
  'itinerary-zanzibar-flying-safari-2-days': 'flight beach bush tarangire ngorongoro crater',
  'itinerary-five-days-tanzania-safari': 'tarangire serengeti ngorongoro manyara classic big 5',
  'itinerary-zanzibar-tanzania-safari-5-days': 'stone town spice tarangire ngorongoro beach',
  'itinerary-serengeti-balloon-safari-5-days': 'hot air balloon ngorongoro manyara tarangire calving',
  'itinerary-seven-day-serengeti-safari': 'migration ngorongoro tarangire',
  'itinerary-safari-cultural-adventure-9-days': 'maasai tarangire serengeti ngorongoro materuni coffee',
  'itinerary-ten-days-luxury-safari': 'four seasons hadzabe eyasi serengeti ngorongoro manyara tarangire',
  'itinerary-tanzania-kenya-safari-12-days': 'maasai mara amboseli naivasha serengeti ngorongoro',
  'itinerary-kenya-tanzania-11-days': 'maasai mara amboseli serengeti',
  'itinerary-safari-zanzibar-15-days': 'serengeti ngorongoro tarangire manyara beach stone town',
  'itinerary-materuni-waterfall-safari-4-days': 'coffee chagga tarangire manyara hot springs kikuletwa',
  'itinerary-camping-safari-serengeti-chemka': 'budget camping ngorongoro hot springs kikuletwa',
  'itinerary-camping-safari-5-days': 'budget camping serengeti ngorongoro',
  'itinerary-zanzibar-safari-cultural-10-days': 'beach maasai tarangire serengeti ngorongoro materuni',
  'itinerary-tanzania-safari-cultural-20-days': 'maasai hadzabe chagga serengeti ngorongoro tarangire kilimanjaro',
  'itinerary-tanzania-safari-zanzibar-20-days': 'serengeti ngorongoro tarangire manyara chemka materuni mnemba',
  'itinerary-luxury-couples-safari-10-days': 'honeymoon romantic zanzibar serengeti ngorongoro tarangire',
  'itinerary-tanzania-safari-adventure-15-days': 'natron flamingos eyasi hadzabe serengeti ngorongoro materuni chemka',
  'itinerary-serengeti-ngorongoro-budget-3-days': 'budget cheap affordable crater big 5 tented lodge',
  'itinerary-manyara-ngorongoro-3-days': 'lake manyara crater',
  'itinerary-manyara-tarangire-ngorongoro-3-days': 'lake manyara crater elephants',
  'itinerary-ngorongoro-crater-day-trip': 'big 5 rhino crater',
  'itinerary-tarangire-1-day': 'elephants baobab day trip',
  'itinerary-hotsprings-day-trip': 'chemka kikuletwa',
  'itinerary-kilimanjaro-machame': 'climb trek summit mountain',
  'itinerary-kilimanjaro-day-hike': 'mandara maundi mountain hike',
  'itinerary-mountain-meru-4-days': 'trek climb mountain arusha',
  'itinerary-nyerere-park-3-days': 'selous rufiji boat dar es salaam',
  'itinerary-mikumi-day-trip': 'dar es salaam',
  'itinerary-zanzibar-7-days': 'beach prison island mnemba dolphins stone town',
  'itinerary-zanzibar-2-days-budget': 'beach budget stone town prison island dolphins',
  'itinerary-zanzibar-5-days-couple': 'beach romantic honeymoon dolphins',
  'itinerary-zanzibar-10-days-paradise': 'beach jozani mnemba stone town',
  'itinerary-zanzibar-5-days': 'beach',
  'itinerary-dubai-desert-safari-6-days': 'uae desert',
  'destination-serengeti': 'migration wildebeest lions national park',
  'destination-ngorongoro': 'crater big 5 rhino conservation area',
  'destination-kilimanjaro': 'mountain climb trek summit',
  'destination-zanzibar': 'beach island stone town',
  'destination-tarangire': 'elephants baobab national park',
  'destination-lake-duluti': 'lake canoe arusha',
  'destination-chemka': 'hot springs kikuletwa',
  'cultural-maasai': 'village boma culture',
  'cultural-hadza': 'hadzabe lake eyasi hunter gatherers datoga culture',
};

// Thumbnail per result: first rule whose pattern matches the title or URL wins.
const IMAGE_RULES = [
  [/balloon/, 'images/balloon safari/hu-chen-4YUH5FbpN-Y-unsplash.jpg'],
  [/kenya/, 'images/walters-tours-safaris-kenya-tanzania-safari.png'],
  [/dubai/, 'images/walters-tours-safaris-dubai-desert-safari.png'],
  [/hot ?springs|chemka/, 'images/walters-tours-safaris-chemka-hotsprings.png'],
  [/materuni|waterfall/, 'images/walters-tours-safaris-materuni-waterfall.png'],
  [/maasai/, 'images/walters-tours-safaris-maasai-village-cultural.png'],
  [/hadza/, 'images/walters-tours-safaris-hadza-tribe-cultural.png'],
  [/meru/, 'images/walters-tours-safaris-meru-trekking.png'],
  [/mikumi/, 'images/walters-tours-safaris-mikumi-safari.png'],
  [/serval/, 'images/walters-tours-safaris-serval-wildlife.png'],
  [/nyerere|selous/, 'images/walters-tours-safaris-sammy-wong-wzeGc7Uqopc-unsplash.jpg'],
  [/camping/, 'images/walters-tours-safaris-camping-tents.png'],
  [/couple|honeymoon/, 'images/couple safari/lidia-stawinska-Oc4u_mYkimk-unsplash.jpg'],
  [/duluti/, 'images/lake-duluti/Lake-Duluti-1-scaled.jpg'],
  [/kilimanjaro/, 'images/Kilimanjaro/pexels-wladimir-kuhne-670646709-19171293.jpg'],
  [/serengeti|ndutu/, 'images/serengeti/pexels-bgbennett-20095156.jpg'],
  [/ngorongoro/, 'images/ngorongoro/pexels-alexandra-karnasopoulos-1962842-7205279.jpg'],
  [/tarangire/, 'images/tarangire/pexels-dirk-pothen-2149332904-32509132.jpg'],
  [/manyara/, 'images/walters-tours-safaris-lake-manyara-flamingos.png'],
  [/zanzibar|beach/, 'images/zanzibar/pexels-saila-holidays-zanzibar-1351717875-25706804.jpg'],
];
const DEFAULT_IMAGE = 'images/walters-tours-safaris-magdalena-kula-manchee-nVUZO1gc_-o-unsplash.jpg';

// Filters offered as tabs on the banner search.
export const SEARCH_FILTERS = [
  { key: 'all', label: 'All', test: () => true },
  {
    key: 'safaris',
    label: 'Safaris',
    // Multi-day wildlife trips: excludes treks, Dubai and beach-only Zanzibar holidays.
    test: (i) => i.category === 'Itinerary' && i.days > 1
      && !/dubai|kilimanjaro|meru/.test(i.titleText)
      && (/safari/.test(i.titleText) || !/zanzibar/.test(i.titleText)),
  },
  { key: 'destinations', label: 'Destinations', test: (i) => i.category === 'Destination' },
  { key: 'day-trips', label: 'Day Trips', test: (i) => i.duration === 'Day Trip' },
  { key: 'zanzibar', label: 'Zanzibar & Beach', test: (i) => /zanzibar|beach/.test(i.haystack) && i.category !== 'Guide' },
  { key: 'budget', label: 'Budget', test: (i) => /budget|camping|cheap/.test(i.haystack) },
];

const TITLE_SUFFIX = / - Walters Tours & Safaris$/;

const normalize = (text) =>
  text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();

const categoryFor = (name) => {
  if (EXTRA_PAGES[name]) return EXTRA_PAGES[name];
  const match = CATEGORIES.find((c) => name.startsWith(c.prefix));
  return match ? match.label : null;
};

const durationFor = (title, category) => {
  if (category !== 'Itinerary') return '';
  // "1 Day" must not match inside "11 Days".
  if (/day trip|day hike|day excursion|(^|\D)1\s*-?\s*day\b/i.test(title)) return 'Day Trip';
  const m = title.match(/(\d+)\s*-?\s*(days?|nights?)/i);
  return m ? `${m[1]} ${/night/i.test(m[2]) ? 'Nights' : 'Days'}` : '';
};

export function useSiteSearch() {
  const router = useRouter();

  const index = router
    .getRoutes()
    .filter((r) => typeof r.name === 'string' && r.meta?.title && categoryFor(r.name))
    .map((r) => {
      const title = r.meta.title.replace(TITLE_SUFFIX, '');
      const category = categoryFor(r.name);
      const duration = durationFor(title, category);
      const titleText = normalize(title);
      const imageKey = `${titleText} ${r.path}`;
      const image = (IMAGE_RULES.find(([re]) => re.test(imageKey)) || [null, DEFAULT_IMAGE])[1];
      return {
        path: r.path,
        title,
        category,
        duration,
        days: duration === 'Day Trip' ? 1 : parseInt(duration, 10) || 0,
        image,
        titleText,
        haystack: normalize(`${title} ${r.path.replace(/[/-]/g, ' ')} ${KEYWORDS[r.name] || ''} ${category}`),
      };
    });

  const filterFn = (key) => (SEARCH_FILTERS.find((f) => f.key === key) || SEARCH_FILTERS[0]).test;

  // All entries for a filter, used when the box is empty but a tab is chosen.
  const browse = (filterKey = 'all') =>
    index
      .filter(filterFn(filterKey))
      .sort((a, b) => a.days - b.days || a.title.localeCompare(b.title));

  const count = (filterKey) => index.filter(filterFn(filterKey)).length;

  const search = (query, limit = 8, filterKey = 'all') => {
    const q = normalize(query || '');
    if (!q) return [];
    const tokens = q.split(' ');
    const inFilter = filterFn(filterKey);

    return index
      .filter((item) => inFilter(item) && tokens.every((t) => item.haystack.includes(t)))
      .map((item) => {
        let score = 0;
        if (item.titleText.startsWith(q)) score += 50;
        if (item.titleText.includes(q)) score += 25;
        tokens.forEach((t) => {
          if (item.titleText.includes(t)) score += 10;
        });
        if (item.category === 'Destination') score += 5;
        return { ...item, score };
      })
      .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
      .slice(0, limit);
  };

  const go = (item) => {
    router.push(item.path).catch(() => {});
  };

  return { search, browse, count, go };
}
