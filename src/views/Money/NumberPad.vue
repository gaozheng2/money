<template>
  <div>
    <div class="numberPad">
      <div class="output">{{ output }}</div>
      <div class="buttons clearfix">
        <button @click="clickNum">1</button>
        <button @click="clickNum">2</button>
        <button @click="clickNum">3</button>
        <button @click="clickDel">Del</button>
        <button @click="clickNum">4</button>
        <button @click="clickNum">5</button>
        <button @click="clickNum">6</button>
        <button @click="clickClear">C</button>
        <button @click="clickNum">7</button>
        <button @click="clickNum">8</button>
        <button @click="clickNum">9</button>
        <button @click="clickOk" class="ok">OK</button>
        <button @click="clickNum">0</button>
        <button @click="clickDot">.</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'

@Component
export default class NumberPad extends Vue {
  output = '0'

  clickNum(event: MouseEvent) {
    if (this.output.length === 16) return
    const button = event.target as HTMLButtonElement
    const num = button.textContent as string
    if (this.output === '0') {
      this.output = num
    } else {
      this.output += num
    }
  }

  clickDot() {
    if (this.output.indexOf('.') >= 0) {
      return
    } else {
      this.output += '.'
    }
  }

  clickDel() {
    if (this.output.length === 1) {
      this.output = '0'
    } else {
      this.output = this.output.slice(0, -1)
    }
  }

  clickClear() {
    this.output = '0'
  }

  clickOk() {
    const num: number = parseFloat(this.output)
    if (num === 0) return
    this.clickClear()
    this.$emit('update:value', num)
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/css/common.scss';

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
        height: $h * 2;
        float: right;
      }

      &:nth-child(13) {
        width: 50%;
      }

      $bg: #f2f2f2;

      &:nth-child(1) {
        background: $bg;
      }

      &:nth-child(2),
      &:nth-child(5) {
        background: darken($bg, 5%); // scss 颜色函数
      }

      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: darken($bg, 2 * 5%);
      }

      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: darken($bg, 3 * 5%);
      }

      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: darken($bg, 4 * 5%);
      }

      &:nth-child(14) {
        background: darken($bg, 5 * 5%);
      }

      &:nth-child(12) {
        background: darken($bg, 6 * 5%);
      }
    }
  }
}
</style>
