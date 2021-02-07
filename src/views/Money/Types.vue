<template>
  <ul class="types">
    <li :class="type==='-' && 'selected'" @click="selectType('-')">支出</li>
    <li :class="type==='+' && 'selected'" @click="selectType('+')">{{ propA }}收入</li>
  </ul>
</template>

<script lang="ts"> // 声明使用 typescript 语言编译代码
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator'; // Vue 的 Ts 支持库

@Component // 装饰器，告诉 Ts 这是一个 Vue 组件
export default class Types extends Vue { // Ts 必须使用 class 的形式声明 Vue 组件
  @Prop(Number) readonly propA: number | undefined; // 告诉 Ts 这不是 data，是 props
  type = '-'; // 任何赋值语句会变成实例的 data， - 表示支出，+ 表示收入

  selectType(type: string) { // methods 可以直接写在 class 中，Ts 中变量必须声明类型
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    } else {
      this.type = type;
    }
  }
}
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