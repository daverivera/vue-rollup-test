<script lang="ts">
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { SfcBuildSample } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  // components: {
  //  SfcBuildSample,
  // }
});
</script>

<template>
  <div id="app">
    <sfc-build-sample />
  </div>
</template>
