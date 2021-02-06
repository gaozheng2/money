<template>
  <div>
    <div class="numberPad">
      <div class="output">100</div>
      <div class="buttons clearfix">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="ok">OK</button>
        <button>.</button>
        <button>0</button>
        <button>Del</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'NumberPad'
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/common.scss";

.numberPad {

  .output {
    @extend %innerShadow;
    font-family: Consolas, monospace; /* monospace 代表等宽字体 */
    padding: 9px 16px;
    font-size: 36px;
    text-align: right;
  }

  .buttons {
    @extend %clearfix;

    > button {
      width: 25%;
      $h: 60px;
      height: $h;
      float: left;

      &.ok {
        height: $h*2;
        float: right;
      }

      $bg: #f2f2f2;

      &:nth-child(1) {
        background: $bg;
      }

      &:nth-child(2), &:nth-child(5) {
        background: darken($bg, 5%); // scss 颜色函数
      }

      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: darken($bg, 2*5%);
      }

      &:nth-child(4), &:nth-child(7), &:nth-child(10), &:nth-child(13) {
        background: darken($bg, 3*5%);
      }

      &:nth-child(8), &:nth-child(11), &:nth-child(14) {
        background: darken($bg, 4*5%);
      }

      &:nth-child(15) {
        background: darken($bg, 5*5%);
      }

      &:nth-child(12) {
        background: darken($bg, 6*5%);
      }
    }
  }
}
</style>