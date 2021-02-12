<template>
  <Layout>
    <div class="tags">
      <router-link
          class="tag"
          v-for="item of tags"
          :key="item.id"
          :to="`labels/edit/${item.id}`"
      >
        <span>{{ item.name }}</span>
        <Icon name="right"/>
      </router-link>
    </div>
    <div class="new">
      <Button @click.native="create">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagsModel from '@/models/tagsModel';
import Button from '@/components/Button.vue';

@Component({
  components: {Button},
})
export default class Labels extends Vue {
  tags = tagsModel.fetch();

  create() {
    const name: string | null = window.prompt('请输入标签名');
    tagsModel.create(name);
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 14px;

  > .tag {
    min-height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;
    padding: 0 10px 0 16px;

    svg {
      color: #333;
      width: 18px;
      height: 18px;
    }
  }
}

.new {
  text-align: center;
  margin-top: 40px;
}
</style>
