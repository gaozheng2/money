<template>
  <Layout>
    <Tabs :data-source="TYPE_LIST" :value.sync="typeValue" class-prefix="types"/>
    <Tabs :data-source="DATE_LIST" :value.sync="dateValue" class-prefix="date"/>
  </Layout>
</template>

<script lang='ts'>
import Vue from 'vue';
import Types from '@/views/Money/Types.vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import {TYPE_LIST, DATE_LIST} from '@/lib/constants';

@Component({
  components: {Tabs, Types}
})
export default class Statistics extends Vue {
  type = '-';
  dateValue = 'day';
  typeValue = '-';
  TYPE_LIST = TYPE_LIST;
  DATE_LIST = DATE_LIST;
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