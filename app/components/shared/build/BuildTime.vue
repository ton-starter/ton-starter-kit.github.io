<script setup lang="ts">
declare const __BUILD_TIME__: string | undefined;
const buildTime = __BUILD_TIME__ || 'date err';
</script>
<template>
  <div class="build-timestamp" aria-hidden="true">
    assembly ver: {{ buildTime }}
  </div>
</template>

<style lang="scss">
.build-timestamp {
  display: flex;
}
</style>
