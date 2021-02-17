<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "~@/assets/css/ress.css";
@import "~@/assets/css/common.scss";

body {
  font-family: $font-hei;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5;
  color: #333;
  background: #f5f5f5;
}

#app {
  max-width: 500px;
  margin: 0 auto;
}

@media (min-width: 500px) {
  #app {
    border: 1px solid #c4c4c4;
  }
}
</style>
