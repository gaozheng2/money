<template>
  <div class="tags">
    <div class="space"></div>
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
    <div class="new">
      <button>新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Tags',
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.tags {
  padding: 16px;
  flex-grow: 1;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  overflow: auto;

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
      margin-top: 4px;
      font-size: 14px;
      $h: 24px;
      height: $h;
      line-height: $h; /* 只有一行文字时，可以使用 line-height = height 设置垂直居中 */
      border-radius: $h/2;
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