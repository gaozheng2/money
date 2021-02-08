<template>
  <Layout class="layout" class-prefix="money">
    <Tags :tags.sync="tags" />
    <Notes />
    <Types />
    <NumberPad />
  </Layout>
</template>

<script lang="ts">
import Tags from '@/views/Money/Tags.vue'
import Notes from '@/views/Money/Notes.vue'
import Types from '@/views/Money/Types.vue'
import NumberPad from '@/views/Money/NumberPad.vue'

export default {
  name: 'money',
  components: {
    NumberPad,
    Tags,
    Notes,
    Types,
  },
  data() {
    return {
      tags: ['餐饮', '日常', '交通', '教育'],
    }
  },
}
</script>
