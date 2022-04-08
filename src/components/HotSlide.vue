<template>
  <div class="pb-3 container">
    <Loading :active="isLoading" :z-index="1060"></Loading>
    <h3 class="text-center mb-3 fw-bold">熱銷商品</h3>
    <div>
      <swiper
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :modules="modules"
        :breakpoints="breakpoints"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
      >
        <swiper-slide v-for="item in products" :key="item.id">
          <div class="card-group">
            <div
              class="
                card
                border-0
                position-relative position-relative
                text-center
              "
            >
              <img
                :src="item.imageUrl"
                class="card-img-top rounded-0 object-fit"
                alt="..."
                style="height: 200px; object-position: center right"
              />
              <a href="#" class="text-dark"></a>
              <div class="card-body p-0 bg-light">
                <h4 class="mb-1 mt-3 fs-5">
                  <a href="#" class="text-decoration-none text-dark">{{
                    item.title
                  }}</a>
                </h4>
                <p class="card-text mb-3 text-danger">
                  NT$ {{ item.price }}
                  <span class="text-muted"
                    ><del>NT$ {{ item.origin_price }}</del></span
                  >
                </p>
              </div>
              <div class="card-footer border-0">
                <button
                  type="button"
                  class="btn-outline-dark btn btn-sm rounded mb-5"
                  @click.prevent="addToCart(item.id)"
                >
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
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

import mitt from "@/methods/mitt";

export default {
  data() {
    return {
      products: [],
      isLoading: false,
      breakpoints: {
        767: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
      modules: [Autoplay, Pagination],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(url).then((res) => {
        this.products = res.data.products;
      });
    },
    addToCart(id, qty = 1) {
      // qty設定預設值,若無帶入其他值則qty為一
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const data = {
        data: {
          product_id: id,
          qty,
        },
      };
      this.$http
        .post(url, data)
        .then(() => {
          this.isLoading = false;
          this.$swal.fire({
            title: "成功",
            text: "加入購物車",
            icon: "success",
            timer: 3000,
          });
          mitt.emit("get-cart");
        })
        .catch(() => {
          this.isLoading = false;
          this.$swal.fire({
            title: "失敗",
            text: "加入購物車",
            icon: "error",
            timer: 3000,
          });
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>