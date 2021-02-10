<template>
  <layout>
    <div class="title">
      <Icon name="left" />
      <span>编辑标签</span>
    </div>
    <Notes />
  </layout>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import tagsModel from '@/models/tagsModel'
import Notes from '@/views/Money/Notes.vue'

@Component({
  components: { Notes },
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
}
</script>

<style lang="scss" scoped></style>
