<template>
  <div ref="root" class="relative" :class="variant === 'hero' ? 'w-full' : ''">
    <!-- Header variant: icon button that opens the search panel -->
    <button v-if="variant === 'header'" type="button" @click="togglePanel"
            class="p-2 rounded-full text-safari-dark hover:text-safari-green hover:bg-safari-green/10 transition"
            :aria-expanded="open" aria-label="Search itineraries and destinations">
      <svg v-if="!open" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
      </svg>
      <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>

    <div v-if="variant === 'hero' || open"
         :class="variant === 'header'
           ? 'fixed left-0 right-0 top-[var(--search-top,76px)] px-4 md:absolute md:left-auto md:right-0 md:top-full md:mt-3 md:px-0 md:w-[440px] z-50'
           : 'relative'">
      <form @submit.prevent="selectActive" role="search"
            :class="variant === 'hero'
              ? 'flex items-center bg-white rounded-xl shadow-2xl overflow-hidden'
              : 'flex items-center bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden'">
        <svg class="w-5 h-5 text-gray-400 ml-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
        </svg>
        <input ref="input" v-model="query" type="search" autocomplete="off"
               :placeholder="variant === 'hero' ? 'Search safaris & destinations, e.g. Serengeti, 3 days, Zanzibar…' : 'Search itineraries & destinations…'"
               class="flex-1 min-w-0 bg-transparent border-0 focus:ring-0 focus:outline-none text-safari-dark placeholder-gray-400"
               :class="variant === 'hero' ? 'px-3 py-4 text-base md:text-lg' : 'px-3 py-3 text-sm'"
               role="combobox" :aria-expanded="showDropdown" aria-autocomplete="list"
               @focus="focused = true" @keydown.down.prevent="move(1)" @keydown.up.prevent="move(-1)"
               @keydown.esc="close" />
        <button v-if="variant === 'hero'" type="submit"
                class="bg-safari-green text-white px-5 md:px-8 py-4 font-semibold hover:bg-safari-green/90 transition flex-shrink-0">
          Search
        </button>
      </form>

      <!-- Results -->
      <div v-if="showDropdown"
           class="mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden text-left">
        <ul v-if="results.length" role="listbox" class="overflow-y-auto"
            :class="variant === 'hero' ? 'max-h-[40vh]' : 'max-h-[60vh]'">
          <li v-for="(item, i) in results" :key="item.path" role="option" :aria-selected="i === active">
            <a :href="$basePath + item.path" @click.prevent="choose(item)" @mouseenter="active = i"
               class="flex items-center justify-between gap-3 px-4 py-3 transition"
               :class="i === active ? 'bg-safari-green/10' : ''">
              <div class="min-w-0">
                <div class="font-semibold text-sm text-safari-dark truncate">{{ item.title }}</div>
                <div class="text-xs text-gray-500">{{ item.category }}<span v-if="item.duration"> · {{ item.duration }}</span></div>
              </div>
              <svg class="w-4 h-4 text-safari-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </li>
        </ul>
        <div v-else-if="query.trim()" class="px-4 py-4 text-sm text-gray-600">
          No matches for “{{ query }}”.
          <a :href="$basePath + '/contact'" @click="close" class="text-safari-green font-semibold hover:underline">Ask us for a custom trip</a>
        </div>
        <div v-else class="px-4 py-4">
          <div class="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Popular searches</div>
          <div class="flex flex-wrap gap-2">
            <button v-for="term in popular" :key="term" type="button" @click="setQuery(term)"
                    class="px-3 py-1.5 rounded-full bg-safari-light text-safari-dark text-sm hover:bg-safari-green hover:text-white transition">
              {{ term }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue';
import { useSiteSearch } from '../composables/useSiteSearch';

const props = defineProps({
  variant: { type: String, default: 'hero' }, // 'hero' | 'header'
});

const { search, go } = useSiteSearch();

const root = ref(null);
const input = ref(null);
const query = ref('');
const open = ref(false);
const focused = ref(false);
const active = ref(0);

const popular = ['Serengeti', 'Ngorongoro', 'Zanzibar', 'Kilimanjaro', 'Budget', '3 days'];

const results = computed(() => search(query.value));
const showDropdown = computed(() => (props.variant === 'header' ? open.value : focused.value));

watch(query, () => { active.value = 0; });

const move = (step) => {
  if (!results.value.length) return;
  active.value = (active.value + step + results.value.length) % results.value.length;
};

const close = () => {
  open.value = false;
  focused.value = false;
  input.value?.blur();
};

const choose = (item) => {
  go(item);
  query.value = '';
  close();
};

const selectActive = () => {
  const item = results.value[active.value];
  if (item) choose(item);
};

const setQuery = (term) => {
  query.value = term;
  input.value?.focus();
};

const togglePanel = async () => {
  open.value = !open.value;
  if (open.value) {
    // Position the mobile panel just below the (variable-height) navbar.
    const nav = root.value?.closest('nav');
    if (nav) root.value.style.setProperty('--search-top', `${nav.getBoundingClientRect().bottom + 8}px`);
    await nextTick();
    input.value?.focus();
  }
};

const onDocClick = (e) => {
  if (root.value && !root.value.contains(e.target)) {
    open.value = false;
    focused.value = false;
  }
};

onMounted(() => document.addEventListener('mousedown', onDocClick));
onUnmounted(() => document.removeEventListener('mousedown', onDocClick));
</script>

<style scoped>
input[type='search']::-webkit-search-cancel-button {
  cursor: pointer;
}
</style>
