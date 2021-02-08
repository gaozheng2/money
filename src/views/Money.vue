<template>
  <Layout class="layout" class-prefix="money">
    {{ moneyData }}
    <Tags :tags.sync="tags" @update:value="onUpdateTags" />
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
import { Component } from 'vue-property-decorator'

type moneyData = {
  // TS 的类型声明
  tags: string[];
  notes: string;
  type: string;
  num: number;
}

@Component({
  components: { NumberPad, Tags, Notes, Types },
})
export default class Money extends Vue {
  tags = ['餐饮', '日常', '交通', '教育']
  moneyData: moneyData = {
    tags: [],
    notes: '',
    type: '-',
    num: 0,
  }

  onUpdateTags(tags: string[]) {
    this.moneyData.tags = tags
  }

  onUpdateNum(num: number) {
    this.moneyData.num = num
    console.log(num)
  }
}
</script>
