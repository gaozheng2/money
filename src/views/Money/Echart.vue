<template>
  <div class="chart" ref="chart"></div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import * as echarts from 'echarts';

@Component
export default class Echart extends Vue {
  @Prop() options?: any;

  mounted() {
    const chart = echarts.init(this.$refs.chart as HTMLDivElement);
    chart.setOption(this.options);
  }
}
</script>

<style lang="scss" scoped>
.chart {
  width: 430%;
  height: 200px;
}
</style>