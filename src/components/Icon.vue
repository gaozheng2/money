<template>
  <svg class="icon" aria-hidden="true"> // symbol 图标的通用引用方法
    <use :xlink:href="'#' + name"/>
  </svg>
</template>

<script lang="ts"> // 引入 icon 目录下的所有 .svg 文件
const importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
    requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('@/assets/icons', true, /\.svg$/));
} catch (error) {
  console.log(error);
}
export default {
  props: ['name'],
};
</script>

<style lang="scss" scoped> /* iconfont 网站推荐的 icon CSS */
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>