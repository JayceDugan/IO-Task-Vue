<template>
  <v-card class="pa-6">
    <v-card-title class="mb-6 blueGrey--text pa-0">{{ title }}</v-card-title>
    <v-card-text class="pa-0">
      <slider
        v-if="items.length"
        ref="swiper"
        :items="items"
        :options="swiperOptions"
        @slideChange="slideChangeHandler"
      >
        <template v-slot:slide="{ item }">
          <div>
            <span class="primaryDark--text">
              <v-icon><slot name="slide-icon" :item="item" /></v-icon>
              <span class="body-2 primaryDark--text">
                <slot name="slide-icon-label" :item="item" />
              </span>
            </span>
            <h3 class="text-h3 primaryDark--text mt-4 mb-2">
              <slot name="slide-title" :item="item" />
            </h3>
            <p class="body-2 primaryDark--text text-truncate">
              <slot name="slide-description" :item="item" />
            </p>
            <slot name="slide-additional" :item="item" />
          </div>
        </template>
      </slider>
      <slot v-else name="empty"></slot>
      <slider-card-pagination
        v-if="items.length"
        :index="swiperSlideIndex"
        :total="items.length"
        :pagination-suffix="paginationSuffix"
        @prev="goToPrev"
        @next="goToNext"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import Slider from '@/components/slider/Slider.vue';
import SliderCardPagination from './CardSliderPagination.vue';

export default {
  props: {
    items: {
      type: Array,
      required: true,
      default: () => ([]),
    },
    title: {
      type: String,
      required: false,
      default: '',
    },
    paginationSuffix: {
      type: String,
      required: false,
      default: 'Items',
    },
  },
  components: {
    Slider,
    SliderCardPagination,
  },
  data() {
    return {
      swiperInitialised: false,
      swiperSlideIndex: 1,
      swiperOptions: {
        autoHeight: true,
        effect: 'slide',
        pagination: {
          el: '.swiper-pagination',
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.swiper.$refs.slider.$swiper;
    },
  },
  methods: {
    goToNext() {
      this.swiper.slideNext();
    },
    goToPrev() {
      this.swiper.slidePrev();
    },
    slideChangeHandler() {
      this.swiperSlideIndex = this.swiper.realIndex + 1;
    },
  },
};
</script>
