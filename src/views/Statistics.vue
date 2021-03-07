<template>
  <Layout>
    <div class="chart-wrapper" ref="chartWrapper">
      <Echart :options="options"/>
    </div>
    <Tabs
        :data-source="TYPE_LIST"
        :value.sync="typeValue"
        class-prefix="types"
    />
    <!-- <Tabs
      :data-source="DATE_LIST"
      :value.sync="dateValue"
      class-prefix="date"
    /> -->
    <ol>
      <li v-for="(group, index) of result" :key="index">
        <h3 class="title">
          {{ day(group.title) }}<span>￥{{ group.total }}</span>
        </h3>
        <ol>
          <li v-for="item of group.items" :key="item.date" class="item">
            <span>{{ tagString(item.tags) }}</span>
            <span class="notes">{{ item.notes }}</span>
            <span>￥{{ item.num }}</span>
          </li>
        </ol>
      </li>
    </ol>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Types from '@/views/Money/Types.vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import {TYPE_LIST} from '@/lib/constants';
import dayjs from 'dayjs';
import Echart from '@/views/Money/Echart.vue';

@Component({
  components: {Echart, Tabs, Types},
})
export default class Statistics extends Vue {
  // dateValue = 'day';
  typeValue = '-';
  TYPE_LIST = TYPE_LIST;
  options = {
    grid: {  // 图标边框的间距
      left: 0,
      right: 0
    },
    xAxis: {
      type: 'category',
      axisLine: {
        lineStyle: {
          color: '#666' // 横坐标轴颜色
        }
      },
      axisTick: {
        alignWithLabel: true // 刻度线对齐文字
      },
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      show: false
    },
    tooltip: { // 提示信息
      triggerOn: 'click', // 点击后显示
      position: 'top', // 显示位置
      format: '{c}' // 提示显示内容
    },
    series: [{
      symbol: 'circle', // 标签点为实心圆
      symbolSize: 8, // 标签点大小
      itemStyle: {
        color: '#666', // 连线颜色
        borderColor: '#666' // 标签点边框颜色
      },
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }]
  };

  // DATE_LIST = DATE_LIST;

  mounted() {
    const div = (this.$refs.chartWrapper as HTMLDivElement);
    div.scrollLeft = div.scrollWidth;
  }

  tagString(tags: Tag[]) {
    if (tags.length === 0) {
      return '无';
    } else {
      return tags.map(t => t.name).join(', ');
    }
  }

  day(str: string) {
    const d = dayjs(str);
    const now = dayjs();
    if (d.isSame(now, 'day')) {
      return '今天';
    } else if (d.isSame(now.subtract(1, 'day'), 'day')) {
      return '昨天';
    } else if (d.isSame(now.subtract(2, 'day'), 'day')) {
      return '前天';
    } else if (d.isSame(now.subtract(3, 'day'), 'day')) {
      return '大前天';
    } else if (d.isSame(now, 'year')) {
      return d.format('M月D日');
    } else {
      return d.format('YYYY年M月D日');
    }
  }

  get moneyList() {
    return this.$store.state.moneyDataList
        .filter((item: MoneyData) => item.type === this.typeValue)
        .sort((a: MoneyData, b: MoneyData) => dayjs(b.date).valueOf() - dayjs(a.date).valueOf());
  }

  get result() {
    if (this.moneyList.length === 0) return [];
    const hashTable: { title: string; items: MoneyData[]; total?: number }[] = [
      {
        title: dayjs(this.moneyList[0].date).format('YYYY-MM-DD'),
        items: [this.moneyList[0]],
      },
    ];

    for (let i = 1; i < this.moneyList.length; i++) {
      const current = this.moneyList[i];
      const last = hashTable[hashTable.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.date), 'day')) {
        last.items.push(current);
      } else {
        hashTable.push({
          title: dayjs(current.date).format('YYYY-MM-DD'),
          items: [current],
        });
      }
    }

    hashTable.forEach((group) => {
      group.total = group.items.reduce((sum, item) => sum + item.num, 0);
    });
    return hashTable;
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .types-item {
    background: #c4c4c4;

    &.selected {
      background: white;

      &::after {
        display: none;
      }
    }
  }

  .date-item {
    background: #c4c4c4;
    padding: 4px 0;
    font-size: 16px;
  }
}

%item {
  padding: 0 16px;
  min-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  @extend %item;
  font-size: 16px;
}

.item {
  @extend %item;
  background: white;
}

.notes {
  color: #999;
  margin-right: auto;
  margin-left: 16px;
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.chart-wrapper {
  overflow: auto;
  height: 200px;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
