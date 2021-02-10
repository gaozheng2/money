<template>
  <layout>
    <div class="title">
      <Icon name="left" />
      <span>编辑标签</span>
    </div>
    <Notes field-name="标签名" />
    <Button @click.native="delTag">删除标签</Button>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import tagsModel from '@/models/tagsModel'
import Notes from '@/views/Money/Notes.vue'
import Button from '@/components/Button.vue'

@Component({
  components: { Notes, Button },
})
export default class EditLabel extends Vue {
  created() {
    const id = this.$route.params.id
    const tags = tagsModel.fetch()
    const tag = tags.find((item) => item.id === id)
    if (tag) {
      console.log(tag)
    } else {
      this.$router.replace('/404')
    }
  }
  delTag() {
    console.log('del')
  }
}
</script>

<style lang="scss" scoped></style>
