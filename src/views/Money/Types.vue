<template>
  <ul class="types">
    <li class="selected">支出</li>
    <li>收入</li>
  </ul>
</template>

<script lang="ts">
export default {
  name: 'Types'
};
</script>

<style lang="scss" scoped>
.types {
  background: #c4c4c4;
  //background: #dfab01;
  //background: #fbf3db;
  display: flex;
  text-align: center;
  font-size: 20px;

  > li {
    width: 50%;
    padding: 12px 0;
    position: relative;

    &.selected::after { /* & 代表当前元素 */
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }


}
</style>