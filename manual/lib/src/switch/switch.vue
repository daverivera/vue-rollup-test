<template>
  <label class="switch">
    <input type="checkbox">
    <span class="slider round">
      <slot></slot>
    </span>
  </label>
</template>
 
<script lang="ts">
import { defineComponent, PropType } from 'vue';

export enum LabelPosition {
  LEFT = 'left',
  RIGHT = 'right',
};

export default defineComponent({
    name: "ds-switch",
  props: {
    labelPosition: {
      type: String as PropType<LabelPosition>,
      default: LabelPosition.LEFT
    }
  }
});
</script>

<style lang="scss" scoped>
  @import './switch.scss';
</style>
