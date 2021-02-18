<template>
  <Layout class="layout" class-prefix="money">
    <Tags :selectedTags.sync="moneyData.tags" />
    <Notes fieldName="备注" :notes.sync="moneyData.notes" />
    <Tabs :data-source="TYPE_LIST" :value.sync="moneyData.type" />
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
import { clone } from '@/lib/clone'
import Button from '@/components/Button.vue'
import Tabs from '@/components/Tabs.vue'
import { TYPE_LIST } from '@/lib/constants'

// 根据数据版本进行数据清洗
/*const dataVersion = localStorage.getItem('dataVersion') || '0';
if (dataVersion === '0.1.0') {
  const oldDataList: MoneyData[] = moneyModel.fetch();
  oldDataList.forEach((item) => {
    item.date = new Date(2021, 0, 1);
  });
  moneyModel.save();
}
localStorage.setItem('dataVersion', '0.2.0');*/

@Component({
  components: { Tabs, Button, NumberPad, Tags, Notes, Types },
})
export default class Money extends Vue {
  defaultData: MoneyData = {
    tags: [],
    notes: '',
    type: '-',
    num: 0,
    date: new Date().toISOString(),
  }
  moneyData: MoneyData = JSON.parse(JSON.stringify(this.defaultData))
  TYPE_LIST = TYPE_LIST

  onUpdateNum(num: number) {
    this.moneyData.num = num
    this.$store.commit('createMoney', this.moneyData)
    this.moneyData = clone(this.defaultData) // 恢复默认值
  }
}
</script>
