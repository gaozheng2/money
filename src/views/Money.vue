<template>
  <Layout class="layout">
    <div class="tags">
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
    <div class="notes">
      <label>
        <span>备注</span>
        <input type="text" placeholder="输入备注"/>
      </label>
    </div>
    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>
    <div class="numberPad">
      <div class="output">100</div>
      <div class="buttons clearfix">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="ok">OK</button>
        <button>.</button>
        <button>0</button>
        <button>Del</button>
      </div>
    </div>
  </Layout>
</template>

<script lang='ts'>
export default {
  name: 'money',
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/common.scss";

.layout {
  font-size: 14px;
  display: flex;
  flex-direction: column;
}

.tags {
  padding: 16px;
  flex-grow: 1;

  > .current {
    display: flex;

    > li {
      background: #d9d9d9;
      padding: 0 16px;
      margin-right: 12px;
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

.notes {
  background: #f5f5f5;
  padding-left: 16px;

  > label {
    display: flex;
    align-items: center;

    > span {
      padding-right: 16px;
    }
  }

  input {
    padding: 16px 16px 16px 0;
    flex-grow: 1;

  }
}

.types {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 20px;

  > li {
    width: 50%;
    padding: 12px 0;
    position: relative;

    &.selected::after { /* & 代表当前元素 */
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }


}

.numberPad {

  .output {
    @extend %innerShadow;
    font-family: Consolas, monospace; /* monospace 代表等宽字体 */
    padding: 9px 16px;
    font-size: 36px;
    text-align: right;
  }

  .buttons {
    @extend %clearfix;

    > button {
      width: 25%;
      $h: 60px;
      height: $h;
      float: left;

      &.ok {
        height: $h*2;
        float: right;
      }

      $bg: #f2f2f2;

      &:nth-child(1) {
        background: $bg;
      }

      &:nth-child(2), &:nth-child(5) {
        background: darken($bg, 5%); // scss 颜色函数
      }

      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: darken($bg, 2*5%);
      }

      &:nth-child(4), &:nth-child(7), &:nth-child(10), &:nth-child(13) {
        background: darken($bg, 3*5%);
      }

      &:nth-child(8), &:nth-child(11), &:nth-child(14) {
        background: darken($bg, 4*5%);
      }

      &:nth-child(15) {
        background: darken($bg, 5*5%);
      }

      &:nth-child(12) {
        background: darken($bg, 6*5%);
      }
    }
  }
}
</style>