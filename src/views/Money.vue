<template>
  <Layout class="layout" class-prefix="money">
    {{ moneyDataList }}
    <Tags :tags.sync="tags" :selectedTags.sync="moneyData.tags" />
    <Notes :notes.sync="moneyData.notes" />
    <Types :type.sync="moneyData.type" />
    <NumberPad @update:value="onUpdateNum" />
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import Tags from '@/views/Money/Tags.vue'
import Notes from '@/views/Money/Notes.vue'
import Types from '@/views/Money/Types.vue'
import NumberPad from '@/views/Money/NumberPad.vue'
import { Component, Watch } from 'vue-property-decorator'

// 根据数据版本进行数据清洗
const dataVersion = localStorage.getItem('dataVersion') || '0'
if (dataVersion == '0.1.0') {
  const oldDataList: moneyData[] = JSON.parse(
    localStorage.getItem('moneyDataList') || '[]'
  )
  oldDataList.forEach((item) => {
    item.date = new Date(2021, 0, 1)
  })
  localStorage.setItem('moneyDataList', JSON.stringify(oldDataList))
}
localStorage.setItem('dataVersion', '0.2.0')

type moneyData = {
  // TS 的类型声明
  tags: string[];
  notes: string;
  type: string;
  num: number;
  date?: Date; // ? 代表可以不存在
}

@Component({
  components: { NumberPad, Tags, Notes, Types },
})
export default class Money extends Vue {
  tags = ['餐饮', '日常', '交通', '教育']
  moneyDataList: moneyData[] = JSON.parse(
    localStorage.getItem('moneyDataList') || '[]'
  )
  defaultData: moneyData = {
    tags: [],
    notes: '',
    type: '-',
    num: 0,
    date: new Date(),
  }
  moneyData = JSON.parse(JSON.stringify(this.defaultData))

  onUpdateTags(tags: string[]) {
    this.moneyData.tags = tags
  }

  onUpdateNum(num: number) {
    this.moneyData.num = num
    this.saveData()
  }

  saveData() {
    const deepClone: moneyData = JSON.parse(JSON.stringify(this.moneyData))
    deepClone.date = new Date()
    this.moneyDataList.push(deepClone)
    this.moneyData = JSON.parse(JSON.stringify(this.defaultData)) // 恢复默认值
  }

  @Watch('moneyDataList')
  onMoneyDataListChanged() {
    localStorage.setItem('moneyDataList', JSON.stringify(this.moneyDataList))
  }
}
</script>
