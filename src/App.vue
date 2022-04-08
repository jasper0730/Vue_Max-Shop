<template>
  <!-- <ToastMessages></ToastMessages> -->
  <router-view />
</template>

<style lang="scss">
@import "./assets/all";
@import url("https://fonts.googleapis.com/css2?family=Allura&display=swap");

body {
  background-color: #f8f9fa;
}

// 響應式表格不破版,文字會自動斷行
// table {
//   table-layout: fixed;
//   word-break: break-all;
// }

// 讓表格自形成一個x軸
table {
  display: block;
  overflow-x: auto;
  white-space: nowrap;
}

// 按鈕內的文字不斷行
// button {
//   white-space: nowrap;
// }

.logo {
  font-family: "Allura", cursive;
}

.object-fit {
  object-fit: cover;
}

</style>
