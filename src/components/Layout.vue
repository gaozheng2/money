<template>
  <div class="wrapper" :class="classPrefix && `${classPrefix}-wrapper`">
    <div class="content" :class="classPrefix && `${classPrefix}-content`">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'Layout',
  props: ['classPrefix']
};
</script>

<style lang="scss">
.money-content {
  display: flex;
  flex-direction: column;
}
</style>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh; // 高度一个屏幕
}

.content {
  overflow: auto; // 多出的内容出滚动条
  flex-grow: 1; // 扩充占满 flex 剩余高度
}
</style>