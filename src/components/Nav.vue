<template>
  <nav>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="labels"/>
      标签
    </router-link>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money"/>
      记账
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics"/>
      统计
    </router-link>
  </nav>
</template>

<style lang="scss" scoped>
@import "~@/assets/css/common.scss";

nav {
  @extend %outerShadow;
  display: flex;

  > .item {
    padding: 2px 0;
    width: 33.3333%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 56px;
    font-size: 12px;

    .icon {
      width: 24px;
      height: 24px;
      margin-bottom: 2px;
    }
  }

  > .item.selected { /* 被选中的路由样式 */
    color: $color-highlight;
  }
}
</style>