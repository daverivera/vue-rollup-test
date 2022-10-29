<template>
  <button type="button" @click="$emit('on-click')">
    <slot></slot>
  </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "ds-button"
});
</script>

<style>

</style>
