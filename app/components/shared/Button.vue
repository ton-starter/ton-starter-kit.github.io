<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: '',
  },
  theme: {
    type: String as () => 'primary' | 'secondary' | 'text',
    default: 'primary',
  },
  size: {
    type: String as () => 'small' | 'medium' | 'large',
    default: 'medium',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <button :disabled="disabled">
    <slot>{{ label }}</slot>
  </button>
</template>

<style lang="scss"></style>
