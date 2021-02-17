<template>
  <Layout>
    <Tabs :data-source="typeData" :value.sync="typeValue" class-prefix="types"/>
    <Tabs :data-source="dateData" :value.sync="dateValue" class-prefix="date"/>
  </Layout>
</template>

<script lang='ts'>
import Vue from 'vue';
import Types from '@/views/Money/Types.vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';

@Component({
  components: {Tabs, Types}
})
export default class Statistics extends Vue {
  type = '-';
  dateData = [
    {text: '按天', value: 'day'},
    {text: '按周', value: 'week'},
    {text: '按月', value: 'month'},
  ];
  dateValue = 'day';
  typeData = [
    {text: '支出', value: '-'},
    {text: '收入', value: '+'},
  ];
  typeValue = '-';
}
</script>

<style lang="scss" scoped>
::v-deep .types-item {
  background: white;

  &.selected {
    background: #c4c4c4;

    &::after {
      display: none;
    }
  }
}

::v-deep .date-item {
  background: #c4c4c4;
}
</style>