<template>
  <div ref="root" class="relative w-full text-left">
    <div class="bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl p-2 md:p-3 shadow-2xl">
      <!-- Filter tabs -->
      <div class="flex gap-1.5 overflow-x-auto no-scrollbar pb-2 md:pb-3 px-0.5" role="tablist" aria-label="Search filters">
        <button v-for="f in filters" :key="f.key" type="button" role="tab" :aria-selected="filter === f.key"
                @click="selectFilter(f.key, $event)"
                class="flex-shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-semibold transition"
                :class="filter === f.key ? 'bg-white text-safari-dark shadow' : 'text-white/90 hover:bg-white/15'">
          {{ f.label }}
          <span v-if="f.key !== 'all'" class="text-xs font-medium rounded-full px-1.5"
                :class="filter === f.key ? 'bg-safari-green/15 text-safari-green' : 'bg-white/15 text-white/80'">{{ f.count }}</span>
        </button>
      </div>

      <!-- Input -->
      <form @submit.prevent="submit" role="search" class="flex items-center bg-white rounded-xl overflow-hidden">
        <svg class="w-5 h-5 text-safari-green ml-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
        </svg>
        <input ref="input" v-model="query" type="text" autocomplete="off" enterkeyhint="search"
               :placeholder="placeholder" aria-label="Search safaris, itineraries and destinations"
               class="flex-1 min-w-0 bg-transparent border-0 focus:ring-0 focus:outline-none text-safari-dark placeholder-gray-400 px-3 py-4 text-base md:text-lg"
               role="combobox" :aria-expanded="open" aria-autocomplete="list" aria-controls="hero-search-results"
               @focus="open = true" @keydown.down.prevent="move(1)" @keydown.up.prevent="move(-1)" @keydown.esc="close" />
        <button v-if="query" type="button" @click="clear" aria-label="Clear search"
                class="p-2 mr-1 rounded-full text-gray-400 hover:text-safari-dark hover:bg-gray-100 transition">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        <kbd v-else class="hidden md:inline-block mr-3 text-xs text-gray-400 border border-gray-200 rounded px-1.5 py-0.5">/</kbd>
        <button type="submit"
                class="m-1.5 bg-safari-green text-white px-4 md:px-7 py-3 rounded-lg font-semibold hover:bg-safari-green/90 transition flex items-center gap-2 flex-shrink-0">
          <svg class="w-5 h-5 md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
          </svg>
          <span class="hidden md:inline">Search</span>
        </button>
      </form>
    </div>

    <!-- Dropdown -->
    <transition name="drop">
      <div v-if="open" id="hero-search-results"
           class="absolute left-0 right-0 top-full mt-2 z-30 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        <!-- Heading -->
        <div class="flex items-center justify-between px-4 pt-3 pb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
          <span>{{ heading }}</span>
          <span v-if="list.length && mode !== 'suggest'">{{ list.length }} {{ list.length === 1 ? 'result' : 'results' }}</span>
        </div>

        <!-- Suggestions (empty box, "All" tab) -->
        <div v-if="mode === 'suggest'" class="px-4 pb-4">
          <div class="flex flex-wrap gap-2 mb-4">
            <button v-for="term in popular" :key="term" type="button" @click="setQuery(term)"
                    class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-safari-light text-safari-dark text-sm hover:bg-safari-green hover:text-white transition">
              <svg class="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
              </svg>
              {{ term }}
            </button>
          </div>
          <div class="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Featured trips</div>
        </div>

        <!-- Result list -->
        <ul v-if="list.length" role="listbox" class="overflow-y-auto max-h-[42vh] md:max-h-[360px] pb-1">
          <li v-for="(item, i) in list" :key="item.path" role="option" :aria-selected="i === active">
            <a :href="$basePath + item.path" @click.prevent="choose(item)" @mouseenter="(mode !== 'suggest' || usedArrows) && (active = i)"
               class="flex items-center gap-3 px-4 py-2.5 transition hover:bg-safari-green/10"
               :class="isActive(i) ? 'bg-safari-green/10' : ''">
              <img :src="getImageUrl(item.image)" :alt="''" loading="lazy"
                   class="w-14 h-14 md:w-16 md:h-16 rounded-lg object-cover flex-shrink-0 bg-gray-100" />
              <div class="min-w-0 flex-1">
                <div class="font-semibold text-sm md:text-base text-safari-dark leading-snug line-clamp-2">
                  <template v-for="(seg, s) in highlight(item.title)" :key="s">
                    <mark v-if="seg.hit" class="bg-safari-green/20 text-safari-dark rounded px-0.5">{{ seg.text }}</mark>
                    <template v-else>{{ seg.text }}</template>
                  </template>
                </div>
                <div class="flex items-center gap-2 mt-1">
                  <span class="text-[11px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full"
                        :class="badgeClass(item.category)">{{ item.category }}</span>
                  <span v-if="item.duration" class="inline-flex items-center gap-1 text-xs text-gray-500">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    {{ item.duration }}
                  </span>
                </div>
              </div>
              <svg class="w-5 h-5 text-safari-green flex-shrink-0 transition-transform" :class="isActive(i) ? 'translate-x-0.5' : 'opacity-40'"
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </li>
        </ul>

        <!-- No results -->
        <div v-else-if="mode === 'search'" class="px-4 pb-5 pt-1 text-center">
          <p class="text-safari-dark font-semibold mb-1">No trips match “{{ query }}”</p>
          <p class="text-sm text-gray-500 mb-3">Try another place or trip length, or let us build one for you.</p>
          <a :href="$basePath + '/contact'" @click="close"
             class="inline-block bg-safari-green text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-safari-green/90 transition">
            Plan a custom trip
          </a>
        </div>

        <!-- Footer -->
        <div class="flex items-center justify-between gap-3 px-4 py-2.5 bg-safari-light border-t border-gray-100 text-xs text-gray-500">
          <span class="hidden sm:inline">↑ ↓ to navigate · Enter to open · Esc to close</span>
          <a :href="$basePath + '/itineraries'" @click="close" class="font-semibold text-safari-green hover:underline ml-auto">
            View all itineraries →
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { useSiteSearch, SEARCH_FILTERS } from '../composables/useSiteSearch';
import { useAssets } from '../composables/useAssets';

const { search, browse, count, go } = useSiteSearch();
const { getImageUrl } = useAssets();
const router = useRouter();

const root = ref(null);
const input = ref(null);
const query = ref('');
const filter = ref('all');
const open = ref(false);
const active = ref(0);

const filters = SEARCH_FILTERS.map((f) => ({ key: f.key, label: f.label, count: count(f.key) }));

const popular = ['Serengeti', 'Ngorongoro Crater', 'Zanzibar', 'Kilimanjaro', '3 days', 'Migration'];

const FEATURED = [
  '/itineraries/serengeti-ngorongoro-budget-3-days',
  '/itineraries/five-days-tanzania-safari',
  '/itineraries/ngorongoro-crater-day-trip',
  '/itineraries/zanzibar-7-days',
];

// Rotating example placeholder.
const examples = ['Serengeti', '3 days budget', 'Zanzibar beach', 'Ngorongoro', 'Kilimanjaro'];
const exampleIndex = ref(0);
const placeholder = computed(() => `Try “${examples[exampleIndex.value]}”`);

const mode = computed(() => {
  if (query.value.trim()) return 'search';
  return filter.value === 'all' ? 'suggest' : 'browse';
});

const list = computed(() => {
  if (mode.value === 'search') return search(query.value, 20, filter.value);
  if (mode.value === 'browse') return browse(filter.value);
  const all = browse('all');
  return FEATURED.map((p) => all.find((i) => i.path === p)).filter(Boolean);
});

const heading = computed(() => {
  const label = filters.find((f) => f.key === filter.value)?.label;
  if (mode.value === 'search') return filter.value === 'all' ? 'Results' : `Results in ${label}`;
  if (mode.value === 'browse') return `All ${label}`;
  return 'Popular searches';
});

const usedArrows = ref(false);
watch([query, filter], () => {
  active.value = 0;
  usedArrows.value = false;
});

// Featured trips (empty box) only show a highlighted row once the arrow keys are used.
const isActive = (i) => i === active.value && (mode.value !== 'suggest' || usedArrows.value);

const tokens = computed(() =>
  query.value.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean)
);

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const highlight = (title) => {
  if (mode.value !== 'search' || !tokens.value.length) return [{ text: title, hit: false }];
  const re = new RegExp(`(${tokens.value.map(escapeRe).join('|')})`, 'gi');
  // With a capturing group, split() puts the matched parts at odd indexes.
  return title.split(re).map((text, idx) => ({ text, hit: idx % 2 === 1 })).filter((s) => s.text);
};

const badgeClass = (category) => ({
  Itinerary: 'bg-safari-green/10 text-safari-green',
  Destination: 'bg-amber-100 text-amber-700',
  'Cultural Tour': 'bg-orange-100 text-orange-700',
  'Safari Type': 'bg-sky-100 text-sky-700',
  Guide: 'bg-gray-100 text-gray-600',
}[category] || 'bg-gray-100 text-gray-600');

const move = (step) => {
  open.value = true;
  const n = list.value.length;
  if (!n) return;
  if (!usedArrows.value && step === 1) {
    // First ↓ press highlights the first row rather than skipping it.
    usedArrows.value = true;
    active.value = 0;
    return;
  }
  usedArrows.value = true;
  active.value = (active.value + step + n) % n;
};

const close = () => {
  open.value = false;
  input.value?.blur();
};

const clear = () => {
  query.value = '';
  input.value?.focus();
};

const choose = (item) => {
  go(item);
  query.value = '';
  open.value = false;
};

// Enter opens the highlighted result. With an empty box, it opens a featured
// trip only if the visitor picked one with the arrow keys; otherwise all itineraries.
const submit = () => {
  const item = list.value[active.value];
  if (item && (mode.value !== 'suggest' || usedArrows.value)) return choose(item);
  open.value = false;
  router.push('/itineraries').catch(() => {});
};

const setQuery = (term) => {
  query.value = term;
  open.value = true;
  input.value?.focus();
};

const selectFilter = (key, event) => {
  filter.value = key;
  open.value = true;
  event?.currentTarget?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  input.value?.focus();
};

const onDocClick = (e) => {
  if (root.value && !root.value.contains(e.target)) open.value = false;
};

// Press "/" anywhere on the page to jump into the search box.
const onKey = (e) => {
  const tag = document.activeElement?.tagName;
  if (e.key === '/' && tag !== 'INPUT' && tag !== 'TEXTAREA' && !document.activeElement?.isContentEditable) {
    e.preventDefault();
    input.value?.focus();
  }
};

let rotate;
onMounted(() => {
  document.addEventListener('mousedown', onDocClick);
  document.addEventListener('keydown', onKey);
  rotate = setInterval(() => {
    if (!query.value) exampleIndex.value = (exampleIndex.value + 1) % examples.length;
  }, 3000);
});
onUnmounted(() => {
  document.removeEventListener('mousedown', onDocClick);
  document.removeEventListener('keydown', onKey);
  clearInterval(rotate);
});
</script>

<style scoped>
.no-scrollbar { scrollbar-width: none; }
.no-scrollbar::-webkit-scrollbar { display: none; }

.drop-enter-active, .drop-leave-active { transition: opacity 0.18s ease, transform 0.18s ease; }
.drop-enter-from, .drop-leave-to { opacity: 0; transform: translateY(-6px); }
</style>
