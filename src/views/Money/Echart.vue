<template>
  <div class="chart" ref="chart"></div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import * as echarts from 'echarts';

@Component
export default class Echart extends Vue {
  @Prop() options?: any;
  chart?: any;

  mounted() {
    this.chart = echarts.init(this.$refs.chart as HTMLDivElement);
    this.chart.setOption(this.options);
  }

  @Watch('options')
  onOptionsChanged(val) {
    this.chart.setOption(val);
  }
}
</script>

<style lang="scss" scoped>
.chart {
  width: 430%;
  height: 200px;
}
</style>