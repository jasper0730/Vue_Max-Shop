<template>
  <div>
    <swiper
      :slides-per-view="1"
      :space-between="0"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :modules="modules"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
    >
      <swiper-slide>
        <img
          src="https://images.pexels.com/photos/4668364/pexels-photo-4668364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          class="d-block w-100 img-fluid object-fit"
          style="height: 400px"
          alt="..."
        />
        <div class="carousel-caption">
          <router-link class="btn btn-outline-light px-7 py-2" to="/products">
            立即選購
          </router-link>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img
          src="../assets/pic/brittani-burns-JbLuAdWm4tg-unsplash.jpg"
          class="d-block w-100 img-fluid object-fit"
          style="height: 400px"
          alt="..."
        />
        <div class="carousel-caption">
          <router-link class="btn btn-outline-light px-7 py-2" to="/products">
            立即選購
          </router-link>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img
          src="../assets/pic/jessica-delp-TwXhBwEsxwE-unsplash.jpg"
          class="d-block w-100 img-fluid object-fit"
          style="height: 400px; object-position: right bottom"
          alt="..."
        />
        <div class="carousel-caption">
          <router-link class="btn btn-outline-light px-7 py-2" to="/products">
            立即選購
          </router-link>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";
import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/modules/pagination/pagination.min.css";

//若要使用swiper的pagination
//在swiper標籤內加上:pagination="{ clickable: true }"

export default {
  data() {
    return {
      modules: [Autoplay, Pagination],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
