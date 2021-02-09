<template>
  <Layout class="layout" class-prefix="money">
    {{ moneyDataList }}
    <Tags :tags.sync="tags" :selectedTags.sync="moneyData.tags"/>
    <Notes :notes.sync="moneyData.notes"/>
    <Types :type.sync="moneyData.type"/>
    <NumberPad @update:value="onUpdateNum"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Tags from '@/views/Money/Tags.vue';
import Notes from '@/views/Money/Notes.vue';
import Types from '@/views/Money/Types.vue';
import NumberPad from '@/views/Money/NumberPad.vue';
import {Component} from 'vue-property-decorator';
import model from '@/model.ts';

// 根据数据版本进行数据清洗
const dataVersion = localStorage.getItem('dataVersion') || '0';
if (dataVersion === '0.1.0') {
  const oldDataList: moneyData[] = model.oldDataList.forEach((item) => {
    item.date = new Date(2021, 0, 1);
  });
  model.save(oldDataList);
}
localStorage.setItem('dataVersion', '0.2.0');

@Component({
  components: {NumberPad, Tags, Notes, Types},
})
export default class Money extends Vue {
  tags = ['餐饮', '日常', '交通', '教育'];
  moneyDataList = model.fetch();
  defaultData: MoneyData = {
    tags: [],
    notes: '',
    type: '-',
    num: 0,
    date: new Date(),
  };
  moneyData: MoneyData = JSON.parse(JSON.stringify(this.defaultData));

  onUpdateNum(num: number) {
    this.moneyData.num = num;
    const newData = model.clone(this.moneyData);
    newData.date = new Date();
    this.moneyDataList.push(newData);
    this.moneyData = model.clone(this.defaultData); // 恢复默认值
    model.save(this.moneyDataList);
  }
}
</script>
