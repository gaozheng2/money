<template>
  <div class="notes">
    <label>
      <span>{{ fieldName }}</span>
      <input
          type="text"
          :value="notes"
          @input="$emit('update:notes', $event.target.value)"
          :placeholder="`请输入${fieldName}`"
      />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  @Prop({default: '字段名'}) readonly fieldName!: string;
  @Prop({default: ''}) readonly notes!: string;
}
</script>

<style lang="scss" scoped>
.notes {
  padding-left: 16px;
  font-size: 14px;

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
