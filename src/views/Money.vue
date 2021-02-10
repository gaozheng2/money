<template>
  <Layout class="layout" class-prefix="money">
    <Tags :tags="tags" :selectedTags.sync="moneyData.tags" />
    <Notes fieldName="备注" :notes.sync="moneyData.notes" />
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
import { Component } from 'vue-property-decorator'
import moneyModel from '@/models/moneyModel'
import tagsModel from '@/models/tagsModel'

// 根据数据版本进行数据清洗
const dataVersion = localStorage.getItem('dataVersion') || '0'
if (dataVersion === '0.1.0') {
  const oldDataList: MoneyData[] = moneyModel.fetch()
  oldDataList.forEach((item) => {
    item.date = new Date(2021, 0, 1)
  })
  moneyModel.save(oldDataList)
}
localStorage.setItem('dataVersion', '0.2.0')

@Component({
  components: { NumberPad, Tags, Notes, Types },
})
export default class Money extends Vue {
  tags = tagsModel.fetch()
  moneyDataList = moneyModel.fetch()
  defaultData: MoneyData = {
    tags: [],
    notes: '',
    type: '-',
    num: 0,
    date: new Date(),
  }
  moneyData: MoneyData = JSON.parse(JSON.stringify(this.defaultData))

  onUpdateNum(num: number) {
    this.moneyData.num = num
    const newData = moneyModel.clone(this.moneyData)
    newData.date = new Date()
    this.moneyDataList.push(newData)
    this.moneyData = moneyModel.clone(this.defaultData) // 恢复默认值
    moneyModel.save(this.moneyDataList)
  }
}
</script>
