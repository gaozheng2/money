<template>
  <Layout class="layout" class-prefix="money">
    <Tags/>
    <Notes/>
    <Types :prop-a="123"/>
    <NumberPad/>
  </Layout>
</template>

<script lang='ts'>
import Tags from '@/views/Money/Tags.vue';
import Notes from '@/views/Money/Notes.vue';
import Types from '@/views/Money/Types.vue';
import NumberPad from '@/views/Money/NumberPad.vue';

export default {
  name: 'money',
  components: {
    NumberPad,
    Tags,
    Notes,
    Types,
  }
};
</script>