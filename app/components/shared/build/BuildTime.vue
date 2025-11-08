<script setup lang="ts">
declare const __BUILD_TIME__: string | undefined;

const buildTime = __BUILD_TIME__ || 'date err';
</script>

<template>
  <div class="mt-1-rem mb-1-rem p-1-rem" aria-hidden="true">
    <div class="show-flex flex-between">
      <span> © 2025 TON Starter Guide. </span>
      &lt;
      <a href="https://github.com/klimov-rv">Github</a>
      &nbsp;<i class="fab fa-github-alt"></i> /&gt;
    </div>
    <br />

    <span class="build-timestamp"> assembly stamp: {{ buildTime }} </span>
  </div>
</template>

<style lang="scss">
.build-timestamp {
  display: flex;
  opacity: 0.15;
}
</style>
