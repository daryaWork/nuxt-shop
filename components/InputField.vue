<template>
  <input
    v-model="data"
    class="input"
    :class="`input--${variant}`"
  >
</template>

<script lang="ts" setup>
const data = defineModel<string>('data');
const { variant = "gray" } = defineProps<{ variant?: "gray" | "black"}>();
</script>

<style lang="scss" scoped>
.input {
  padding: 12px 0;
  background: none;
  border: none;
  color: var(--color-black);

  &--gray {
    border-bottom: 1px solid var(--color-gray);
  }

  &--black {
    border-bottom: 1px solid var(--color-black);
  }
}

.imput::placeholder {
  color: var(--color-dark-gray);
}
</style>