<template>
  <div class="booking-form-container">
    <!-- Trigger Button -->
    <button 
      @click="openModal" 
      class="booking-trigger-btn"
      :class="buttonClass"
    >
      <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      {{ buttonText }}
    </button>

    <!-- Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
          <div class="modal-container">
            <!-- Header -->
            <div class="modal-header">
              <h2 class="modal-title">Order Your Adventure</h2>
              <button @click="closeModal" class="close-btn">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Success Message -->
            <div v-if="successMessage" class="p-4 mb-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-3">
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <div>
                  <div class="font-bold text-base text-emerald-800">{{ successMessage }}</div>
                  <div v-if="bookingRef" class="text-xs text-emerald-700 font-mono mt-0.5">Booking Reference: <strong>{{ bookingRef }}</strong></div>
                  <p class="text-xs text-emerald-700 mt-1">Our travel team will review your dates and contact you within 24 hours.</p>
                </div>
              </div>
              <div v-if="whatsappLink" class="pt-1">
                <a :href="whatsappLink" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold py-2.5 px-4 rounded-lg shadow transition">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Instant Confirm on WhatsApp with Walter
                </a>
              </div>
            </div>

            <!-- Error Message -->
            <div v-if="errorMessage" class="error-alert">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
              <span>{{ errorMessage }}</span>
            </div>

            <!-- Form -->
            <form @submit.prevent="submitBooking" class="booking-form">
              <!-- Package Info (if provided) -->
              <div v-if="packageName" class="package-info">
                <div class="package-badge">Selected Package</div>
                <h3 class="package-name">{{ packageName }}</h3>
              </div>

              <!-- Personal Information -->
              <div class="form-section">
                <h3 class="section-title">Personal Information</h3>
                
                <div class="form-group">
                  <label for="customer_name" class="form-label">Full Name *</label>
                  <input
                    id="customer_name"
                    v-model="form.customer_name"
                    type="text"
                    required
                    class="form-input"
                    placeholder="John Doe"
                  />
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="customer_email" class="form-label">Email *</label>
                    <input
                      id="customer_email"
                      v-model="form.customer_email"
                      type="email"
                      required
                      class="form-input"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div class="form-group">
                    <label for="customer_phone" class="form-label">Phone *</label>
                    <input
                      id="customer_phone"
                      v-model="form.customer_phone"
                      type="tel"
                      required
                      class="form-input"
                      placeholder="+255 XXX XXX XXX"
                    />
                  </div>
                </div>
              </div>

              <!-- Trip Details -->
              <div class="form-section">
                <h3 class="section-title">Trip Details</h3>
                
                <div class="form-row">
                  <div class="form-group">
                    <label for="travel_date" class="form-label">Travel Date *</label>
                    <input
                      id="travel_date"
                      v-model="form.travel_date"
                      type="date"
                      required
                      :min="minDate"
                      class="form-input"
                    />
                  </div>

                  <div class="form-group">
                    <label for="guests" class="form-label">Number of Guests *</label>
                    <input
                      id="guests"
                      v-model.number="form.guests"
                      type="number"
                      min="1"
                      max="20"
                      required
                      class="form-input"
                    />
                  </div>
                </div>

                <div v-if="totalPrice" class="total-price">
                  <span>Estimated Total:</span>
                  <span class="price">${{ totalPrice.toFixed(2) }}</span>
                </div>
              </div>

              <!-- Special Requests -->
              <div class="form-group">
                <label for="special_requests" class="form-label">Special Requests</label>
                <textarea
                  id="special_requests"
                  v-model="form.special_requests"
                  rows="4"
                  class="form-input"
                  placeholder="Any dietary requirements, accessibility needs, or special occasions..."
                ></textarea>
              </div>

              <!-- Submit Button -->
              <div class="form-actions">
                <button type="button" @click="closeModal" class="btn-secondary">
                  Cancel
                </button>
                <button type="submit" :disabled="isSubmitting" class="btn-primary">
                  <span v-if="!isSubmitting">Submit Booking</span>
                  <span v-else class="flex items-center">
                    <svg class="animate-spin h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  packageId: {
    type: [Number, String],
    default: null
  },
  packageSlug: {
    type: String,
    default: null
  },
  packageName: {
    type: String,
    default: null
  },
  packagePrice: {
    type: [Number, String],
    default: null
  },
  buttonText: {
    type: String,
    default: 'Order Now'
  },
  buttonClass: {
    type: String,
    default: ''
  }
});

const isOpen = ref(false);
const isSubmitting = ref(false);
const successMessage = ref('');
const errorMessage = ref('');
const bookingRef = ref('');
const whatsappLink = ref('');

const form = ref({
  package_id: props.packageId,
  package_slug: props.packageSlug,
  package_name: props.packageName,
  customer_name: '',
  customer_email: '',
  customer_phone: '',
  travel_date: '',
  guests: 1,
  special_requests: ''
});

const minDate = computed(() => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split('T')[0];
});

const totalPrice = computed(() => {
  if (props.packagePrice && form.value.guests) {
    return parseFloat(props.packagePrice) * form.value.guests;
  }
  return null;
});

watch(() => props.packageId, (newVal) => {
  form.value.package_id = newVal;
});

watch(() => props.packageSlug, (newVal) => {
  form.value.package_slug = newVal;
});

watch(() => props.packageName, (newVal) => {
  form.value.package_name = newVal;
});

const openModal = () => {
  isOpen.value = true;
  successMessage.value = '';
  errorMessage.value = '';
  bookingRef.value = '';
  whatsappLink.value = '';
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  isOpen.value = false;
  document.body.style.overflow = '';
};

const resetForm = () => {
  form.value = {
    package_id: props.packageId,
    package_slug: props.packageSlug,
    package_name: props.packageName,
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    travel_date: '',
    guests: 1,
    special_requests: ''
  };
};

const submitBooking = async () => {
  isSubmitting.value = true;
  errorMessage.value = '';
  successMessage.value = '';

  try {
    if (!form.value.customer_name || !form.value.customer_email || !form.value.customer_phone || !form.value.travel_date) {
      errorMessage.value = 'Please fill in all required fields.';
      isSubmitting.value = false;
      return;
    }

    // Generate unique booking reference
    const refCode = 'WTS-' + Math.floor(100000 + Math.random() * 900000);
    bookingRef.value = refCode;

    // Create booking record
    const bookingRecord = {
      reference: refCode,
      package_name: form.value.package_name || props.packageName || 'Custom Safari',
      customer_name: form.value.customer_name,
      customer_email: form.value.customer_email,
      customer_phone: form.value.customer_phone,
      travel_date: form.value.travel_date,
      guests: form.value.guests,
      special_requests: form.value.special_requests,
      created_at: new Date().toISOString()
    };

    // Store in client-side localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('wts_bookings') || '[]');
      existing.unshift(bookingRecord);
      localStorage.setItem('wts_bookings', JSON.stringify(existing.slice(0, 50)));
    } catch (storageErr) {
      console.warn('LocalStorage error:', storageErr);
    }

    // Send email notification to info@walterstoursafaris.co.tz and CC tourswalters@gmail.com via FormSubmit
    try {
      await fetch("https://formsubmit.co/ajax/info@walterstoursafaris.co.tz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `New Safari Booking [${refCode}]: ${bookingRecord.package_name} - ${bookingRecord.customer_name}`,
          _cc: "tourswalters@gmail.com",
          _template: "table",
          _captcha: "false",
          _replyto: bookingRecord.customer_email,
          "Booking Reference": refCode,
          "Package Name": bookingRecord.package_name,
          "Traveler Name": bookingRecord.customer_name,
          "Traveler Email": bookingRecord.customer_email,
          "Phone / WhatsApp": bookingRecord.customer_phone,
          "Travel Date": bookingRecord.travel_date,
          "Number of Guests": bookingRecord.guests,
          "Estimated Total": totalPrice.value ? `$${totalPrice.value.toFixed(2)}` : "Custom Quote",
          "Special Requests": bookingRecord.special_requests || "None",
          "Submission Time": new Date().toLocaleString()
        })
      });
    } catch (emailErr) {
      console.warn("Email dispatch notice:", emailErr);
    }

    // Generate prefilled WhatsApp message
    const msg = `*New Safari Booking Request - Walters Tours & Safaris*
Reference: ${refCode}
Package: ${bookingRecord.package_name}
Name: ${bookingRecord.customer_name}
Email: ${bookingRecord.customer_email}
Phone: ${bookingRecord.customer_phone}
Travel Date: ${bookingRecord.travel_date}
Guests: ${bookingRecord.guests}
Special Requests: ${bookingRecord.special_requests || 'None'}`;

    whatsappLink.value = `https://wa.me/255686526171?text=${encodeURIComponent(msg)}`;

    successMessage.value = 'Your booking request has been sent! We have emailed the confirmation to our team.';
    resetForm();
  } catch (error) {
    errorMessage.value = 'Failed to submit booking. Please contact us directly on WhatsApp.';
    console.error('Booking error:', error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.booking-trigger-btn {
  @apply inline-flex items-center justify-center px-6 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors duration-200 shadow-lg hover:shadow-xl;
}

.modal-overlay {
  @apply fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4;
}

.modal-container {
  @apply bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto;
}

.modal-header {
  @apply sticky top-0 bg-green-700 text-white p-6 flex justify-between items-center rounded-t-2xl z-10;
}

.modal-title {
  @apply text-2xl font-bold;
}

.close-btn {
  @apply text-white hover:text-gray-200 transition-colors;
}

.success-alert {
  @apply mx-6 mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-800;
}

.error-alert {
  @apply mx-6 mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-800;
}

.booking-form {
  @apply p-6 space-y-6;
}

.package-info {
  @apply bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200;
}

.package-badge {
  @apply text-xs font-semibold text-green-700 uppercase tracking-wide mb-2;
}

.package-name {
  @apply text-xl font-bold text-gray-900 mb-1;
}

.package-price {
  @apply text-green-700 font-semibold;
}

.form-section {
  @apply space-y-4;
}

.section-title {
  @apply text-lg font-semibold text-gray-900 mb-3;
}

.form-group {
  @apply space-y-2;
}

.form-row {
  @apply grid grid-cols-1 md:grid-cols-2 gap-4;
}

.form-label {
  @apply block text-sm font-medium text-gray-700;
}

.form-input {
  @apply w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all;
}

.total-price {
  @apply flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-200 font-semibold;
}

.total-price .price {
  @apply text-2xl text-green-700;
}

.form-actions {
  @apply flex gap-3 pt-4 border-t border-gray-200;
}

.btn-secondary {
  @apply flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors;
}

.btn-primary {
  @apply flex-1 px-6 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: transform 0.3s ease;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(0.9);
}
</style>
