<template>
  <layout>
    <div class="title">
      <Icon name="left" class="icon"/>
      <span>编辑标签</span>
    </div>
    <div class="form-wrapper">
      <Notes field-name="标签名"/>
    </div>
    <div class="button-wrapper">
      <Button @click.native="delTag">删除标签</Button>
    </div>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagsModel from '@/models/tagsModel';
import Notes from '@/views/Money/Notes.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {Notes, Button},
})
export default class EditLabel extends Vue {
  created() {
    const id = this.$route.params.id;
    const tags = tagsModel.fetch();
    const tag = tags.find((item) => item.id === id);
    if (tag) {
      console.log(tag);
    } else {
      this.$router.replace('/404');
    }
  }

  delTag() {
    console.log('del');
  }
}
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  font-size: 14px;
  padding: 8px 16px;
  background: white;
  border-bottom: 1px solid #ccc;
  position: relative;

  > .icon {
    position: absolute;
    top: 12px;
    left: 12px;
  }
}

.form-wrapper {
  background: white;
  box-shadow: 0 0 2px #333333;
}

.button-wrapper {
  text-align: center;
  margin-top: 40px;
}
</style>
