<template>
    <button type="button" @click="$emit('on-click')"=>
      <slot></slot>
    </button> 
</template>
 
<script lang="ts">

 
export default {
    name: "ds-button"
};
</script>
