<template>
  <div class="sticky-top bg-light">
    <nav class="container navbar navbar-expand-lg navbar-light">
      <router-link class="logo navbar-brand fs-1" to="/" @click="closeNavHam"
        >Max</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
       
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleNavHam"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
        ref="collapse"
      >
        <div class="navbar-nav align-items-center">
          <router-link
            class="nav-item nav-link me-3 h5"
            to="/brand"
            @click="closeNavHam"
            >品牌</router-link
          >
          <router-link
            class="nav-item nav-link me-3 h5"
            to="/products"
            @click="closeNavHam"
            >香氛蠟燭</router-link
          >
          <router-link
            class="nav-item nav-link me-3 h5"
            to="/questions"
            @click="closeNavHam"
            >常見問題</router-link
          >
          <router-link
            class="nav-item nav-link me-3 d-lg-none h5"
            to="/carts"
            @click="closeNavHam"
            >購物車</router-link
          >
          <router-link
            class="nav-item nav-link position-relative d-none d-lg-block h5"
            @click="closeNavHam"
            to="/carts"
            ><i class="bi bi-bag fs-5"
              ><span
                class="
                  position-absolute
                  top-10
                  start-90
                  translate-middle
                  badge
                  rounded-pill
                  bg-danger
                  fs-8
                "
              >
                {{ cartData?.carts?.length }}
              </span></i
            ></router-link
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import mitt from "@/methods/mitt";
import collapseMixin from "@/mixins/collapseMixin";
export default {
  data() {
    return {
      cartData: {},
      collapse: "",
    };
  },
  mixins: [collapseMixin],
  methods: {
    getCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          this.isLoading = false;
          this.cartData = res.data.data;
        })
        .catch(() => {
          this.isLoading = false;
          this.$swal.fire({
            title: "失敗",
            text: "購物車列表",
            icon: "error",
            timer: 3000,
          });
        });
    },
  },
  mounted() {
    this.getCart();
    mitt.on("get-cart", () => {
      this.getCart();
    });
  },
};
</script>