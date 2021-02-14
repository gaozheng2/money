<template>
  <layout>
    <div class="title">
      <Icon name="left" class="icon" @click.native="onBack"/>
      <span>编辑标签</span>
    </div>
    <div class="form-wrapper">
      <Notes field-name="标签名" :notes="tag.name" @update:notes="onUpdateTag"/>
    </div>
    <div class="button-wrapper">
      <Button @click.native="onDelTag">删除标签</Button>
    </div>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Notes from '@/views/Money/Notes.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {Notes, Button},
})
export default class EditLabel extends Vue {
  tag: Tag = {id: '', name: ''};

  created() {
    const id = this.$route.params.id;
    const tag = this.$store.state.tags.find((item) => item.id === id);
    if (tag) {
      this.tag = {id: tag.id, name: tag.name};
    } else {
      this.$router.replace('/404');
    }
  }

  onUpdateTag(name: string) {
    this.tag.name = name;
  }

  onBack() {
    const result = this.$store.commit('updateTag', [this.tag.id, this.tag.name]);
    this.$router.push('/labels');
  }

  onDelTag() {
    this.$store.commit('removeTag', this.tag.id);
    this.$router.replace('/labels');
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
