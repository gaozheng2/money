<template>
  <div class="nav-wrapper">
    <div class="content">
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
    </div>
    <Nav/>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'money',
};
</script>

<style lang='scss' scoped>
.nav-wrapper {
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  height: 100vh; // 高度一个屏幕
}

.content {
  border: 1px solid blue;
  overflow: auto; // 多出的内容出滚动条
  flex-grow: 1; // 扩充占满 flex 剩余高度
}

</style>