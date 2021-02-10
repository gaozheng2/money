<template>
  <div class="tags">
    <div class="space"></div>
    <ul class="current">
      <li
        v-for="item of tags"
        :key="item.id"
        :class="{ selected: selectedTags.indexOf(item) >= 0 }"
        @click="toggle(item)"
      >
        {{ item.name }}
      </li>
    </ul>
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import tagsModel from '@/models/tagsModel'

@Component
export default class Tags extends Vue {
  @Prop(Array) readonly tags: string[] | undefined
  @Prop(Array) readonly selectedTags!: string[]
  tempTags = this.selectedTags

  toggle(tag: string) {
    const index: number = this.selectedTags.indexOf(tag)
    if (index >= 0) {
      this.tempTags.splice(index, 1)
    } else {
      this.tempTags.push(tag)
    }
    this.$emit('updata:selectedTags', this.tempTags)
  }

  create() {
    const name: string | null = window.prompt('请输入标签名')
    tagsModel.create(name)
  }
}
</script>

<style lang="scss" scoped>
.tags {
  padding: 16px;
  flex-grow: 1;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  background: white;

  > .space {
    flex-grow: 1;
  }

  > .current {
    display: flex;
    flex-wrap: wrap;

    > li {
      background: #d9d9d9;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 12px;
      font-size: 14px;
      $h: 24px;
      height: $h;
      line-height: $h; /* 只有一行文字时，可以使用 line-height = height 设置垂直居中 */
      border-radius: $h/2;

      &.selected {
        background: #fbf3db;
      }
    }
  }

  > .new {
    padding-top: 16px;

    button {
      border-bottom: 1px solid;
      padding: 0 4px;
      color: #999;
    }
  }
}
</style>
