<template>
  <div class="notes">
    <label>
      <span>备注</span>
      <input type="text" placeholder="输入备注"/>
    </label>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Notes'
};
</script>

<style lang="scss" scoped>
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
</style>