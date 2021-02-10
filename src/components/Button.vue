<template>
  <button class="button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  background: #767676;
  color: white;
  border-radius: 4px;
  padding: 8px 16px;
  margin-top: 40px;
  font-size: 14px;
}
</style>
