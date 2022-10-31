<template>
  <label class="switch">
    <input type="checkbox" />
    <span class="slider round">
      <slot></slot>
    </span>
  </label>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "ds-switch",
  props: {
    labelPosition: {
      type: String,
      default: 'left'
    }
  }
});
</script>


<style lang="scss" scoped src="./switch.scss" />
