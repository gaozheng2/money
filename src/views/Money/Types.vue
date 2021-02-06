<template>
  <ul class="types">
    <li :class="type==='-' && 'selected'" @click="selectType('-')">支出</li>
    <li :class="type==='+' && 'selected'" @click="selectType('+')">收入</li>
  </ul>
</template>

<script>
export default {
  name: 'Types',
  data() {
    return {
      type: '+' // - 表示支出，+ 表示收入
    }
  },
  methods: {
    selectType(type) {
      if (type !== '-' && type !== '+') {
        throw new Error('type is unknown')
      } else {
        this.type = type
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.types {
  background: #c4c4c4;
  //background: #dfab01;
  //background: #fbf3db;
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
</style>