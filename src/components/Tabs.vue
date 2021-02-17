<template>
  <ul class="types">
    <li v-for="item of dataSource"
        :key="item.value"
        :class="{
          selected: value===item.value,
          [`${classPrefix}-item`]: classPrefix
        }"
        @click="select(item)"
    >
      {{ item.text }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

type DataSourceItem = { text: string; value: string }
@Component
export default class Tabs extends Vue {
  @Prop({required: true, type: Array}) dataSource!: DataSourceItem[];
  @Prop(String) readonly value!: string;
  @Prop(String) readonly classPrefix?: string;

  select(item: DataSourceItem) {
    this.$emit('update:value', item.value);
  }
}
</script>

<style lang="scss" scoped>
.types {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 20px;

  > li {
    width: 50%;
    padding: 12px 0;
    position: relative;

    &.selected::after {
      /* & 代表当前元素 */
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