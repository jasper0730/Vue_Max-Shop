<template>
  <AdminNavBar @logout="logout"></AdminNavBar>
  <div class="container">
    <Loading :active="isLoading" :z-index="1060"></Loading>
    <router-view v-if="status"></router-view>
  </div>
</template>

<script>
import AdminNavBar from "@/components/AdminNavBar.vue";
export default {
  data() {
    return {
      status: false,
      isLoading: false,
    };
  },
  methods: {
    logout() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/logout`;
      this.$http
        .post(url)
        .then((res) => {
          if (res.data.success === true) {
            this.isLoading = false;
            this.$router.push("/login");
            this.$swal.fire({
            title: "成功",
            text: "登出",
            icon: "success",
            timer: 3000,
          });
          }
        })
        .catch(() => {
          this.isLoading = false;
          this.$swal.fire({
            title: "失敗",
            text: "登出",
            icon: "error",
            timer: 3000,
          });
        });
    },
  },
  created() {
    const url = `${process.env.VUE_APP_API}/api/user/check`;
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.$http.defaults.headers.common.Authorization = `${token}`; // 取出token
    this.$http
      .post(url)
      .then(() => {
        this.status = true;
      })
      .catch(() => {
        this.$swal.fire({
            title: "失敗",
            text: "登入",
            icon: "error",
            timer: 3000,
          });
        this.$router.push("/login"); // 驗證失敗轉回登入
      });
  },
  components: {
    AdminNavBar,
  },
};
</script>
