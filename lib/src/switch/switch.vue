<template>
  <label class="switch">
    <input type="checkbox">
    <span class="slider round">
      <slot></slot>
    </span>
  </label>
</template>
 
<script lang="ts">
export default {
    name: "ds-switch"
};
</script>

<style lang="scss" scoped>
  @import './switch.scss';
</style>
