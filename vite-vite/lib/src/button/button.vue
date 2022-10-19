<template>
    <button type="button" @click="$emit('on-click')">
      <slot></slot>
    </button> 
</template>
 
<script lang="ts">
import { defineComponent } from 'vue';

export default /*#__PURE__*/defineComponent({
    name: "ds-button"
});
</script>
