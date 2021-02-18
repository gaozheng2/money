<template>
  <Layout>
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
import Vue from 'vue'
import Types from '@/views/Money/Types.vue'
import { Component } from 'vue-property-decorator'
import Tabs from '@/components/Tabs.vue'
import { TYPE_LIST, DATE_LIST } from '@/lib/constants'
import dayjs from 'dayjs'

@Component({
  components: { Tabs, Types },
})
export default class Statistics extends Vue {
  dateValue = 'day'
  typeValue = '-'
  TYPE_LIST = TYPE_LIST
  DATE_LIST = DATE_LIST

  tagString(tags: Tag[]) {
    let result = ''
    if (tags) {
      tags.forEach((item) => {
        if (result) {
          result = result + ', ' + item.name
        } else {
          result = item.name
        }
      })
    }
    if (!result) result = '无'
    return result
  }

  day(str: string) {
    const d = dayjs(str)
    const now = dayjs()
    if (d.isSame(now, 'day')) {
      return '今天'
    } else if (d.isSame(now.subtract(1, 'day'), 'day')) {
      return '昨天'
    } else if (d.isSame(now.subtract(2, 'day'), 'day')) {
      return '前天'
    } else if (d.isSame(now.subtract(3, 'day'), 'day')) {
      return '大前天'
    } else if (d.isSame(now, 'year')) {
      return d.format('M月D日')
    } else {
      return d.format('YYYY年M月D日')
    }
  }

  get moneyList() {
    return this.$store.state.moneyDataList
      .filter((item: MoneyData) => item.type === this.typeValue)
      .sort((a, b) => dayjs(b.date) - dayjs(a.date))
  }

  get result() {
    if (this.moneyList.length === 0) return []
    const hashTable: { title: string; items: MoneyData[]; total?: number }[] = [
      {
        title: dayjs(this.moneyList[0].date).format('YYYY-MM-DD'),
        items: [this.moneyList[0]],
      },
    ]

    for (let i = 1; i < this.moneyList.length; i++) {
      const current = this.moneyList[i]
      const last = hashTable[hashTable.length - 1]
      if (dayjs(last.title).isSame(dayjs(current.date), 'day')) {
        last.items.push(current)
      } else {
        hashTable.push({
          title: dayjs(current.date).format('YYYY-MM-DD'),
          items: [current],
        })
      }
    }

    hashTable.forEach((group) => {
      group.total = group.items.reduce((sum, item) => sum + item.num, 0)
    })
    return hashTable
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
</style>
