<template>
  <div>
    <Loading :active="isLoading" :z-index="1060"></Loading>
    <div class="text-end mt-3">
      <button
        class="btn btn-dark rounded"
        type="button"
        @click="openCouponModal(true)"
      >
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in coupons" :key="key">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ $filters.date(item.due_date) }}</td>
          <td>
            <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
            <span v-else class="text-muted">未啟用</span>
          </td>
          <td>
            <button
              class="btn btn-outline-dark rounded btn-sm ms-1"
              @click="openCouponModal(false, item)"
            >
              編輯
            </button>
            <button
              class="btn btn-outline-dark rounded btn-sm ms-1"
              @click="openDeleteCouponModal(item)"
            >
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <CouponModal
      :coupon="tempCoupon"
      :is-new="isNew"
      ref="couponModal"
      @update-coupon="updateCoupon"
    />
    <DeleteModal
      :item="tempCoupon"
      ref="deleteModal"
      @delete-item="deleteCoupon"
    />
    <Pagination :pages="pagination" @emit-pages="getCoupons"></Pagination>
  </div>
</template>

<script>
import DeleteModal from "@/components/DeleteModal.vue";
import CouponModal from "@/components/CouponModal.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  data() {
    return {
      coupons: [],
      tempCoupon: {
        title: "",
        is_enabled: 0,
        percent: 100,
        code: "",
      },
      isNew: false,
      currentPage: 1,
      pagination: {},
      isLoading: false,
    };
  },
  methods: {
    getCoupons(page = 1) {
      this.isLoading = true;
      this.currentPage = page;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`;
      this.$http
        .get(url)
        .then((res) => {
          this.coupons = res.data.coupons;
          this.pagination = res.data.pagination;
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
          this.$swal.fire({
            title: "失敗",
            text: "優惠券列表",
            icon: "error",
            timer: 3000,
          });
        });
    },
    openCouponModal(isNew, item) {
      // 點按鈕時已帶入isNew的參數為true或false來判斷是點擊新增還是編輯
      this.isNew = isNew;
      if (this.isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000,
        };
      } else {
        this.tempCoupon = { ...item };
      }
      const couponModal = this.$refs.couponModal;
      couponModal.openModal();
    },
    openDeleteCouponModal(item) {
      this.tempCoupon = { ...item };
      const deleteModal = this.$refs.deleteModal;
      deleteModal.openModal();
    },
    updateCoupon(tempCoupon) {
      this.isLoading = true;
      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon`;
      let method = "post";
      let data = tempCoupon;
      // 如果未勾選啟用則帶入0,才不會無法連到API,無法新增優惠券
      if (!this.tempCoupon.is_enabled) {
        this.tempCoupon.is_enabled = 0;
      }
      // 判斷是否為編輯
      if (!this.isNew) {
        method = "put";
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
        data = this.tempCoupon;
      }
      this.$http[method](url, { data }) // 套件axios的方法
        .then(() => {
          this.isLoading = false;
          if (this.isNew) {
            this.$swal.fire({
              title: "成功",
              text: "新增優惠券",
              icon: "success",
              timer: 3000,
            });
          } else {
            this.$swal.fire({
              title: "成功",
              text: "更新優惠券",
              icon: "success",
              timer: 3000,
            });
          }
          this.getCoupons(this.currentPage);
          const couponModal = this.$refs.couponModal;
          couponModal.hideModal();
        })
        .catch(() => {
          this.isLoading = false;
          this.$swal.fire({
            title: "失敗",
            text: "更新優惠券",
            icon: "error",
            timer: 3000,
          });
        });
    },
    deleteCoupon() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
      this.$http // 套件axios的方法
        .delete(url)
        .then(() => {
          this.isLoading = false;
          this.$swal.fire({
            title: "成功",
            text: "刪除優惠券",
            icon: "success",
            timer: 3000,
          });
          this.getCoupons(this.currentPage);
          const deleteModal = this.$refs.deleteModal;
          deleteModal.hideModal();
        })
        .catch(() => {
          this.isLoading = false;
          this.$swal.fire({
            title: "失敗",
            text: "刪除優惠券",
            icon: "error",
            timer: 3000,
          });
        });
    },
  },
  components: {
    DeleteModal,
    CouponModal,
    Pagination,
  },
  mounted() {
    this.getCoupons();
  },
};
</script>