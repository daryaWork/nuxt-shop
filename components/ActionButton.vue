<template>
  <button
    class="button"
    :class="`button--${type}`"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
const { type = "primary" } = defineProps<({
  type?: "primary" | "ghost";
})>()
</script>

<style lang="scss" scoped>
.button {
  padding: 16px;
  border-radius: 4px;
  @include paragraph;
  font-weight: 700;

  &--primary {
    background-color: var(--color-black);
    color: var(--color-white-light);
    border: 1px solid var(--color-black);
    transition: opacity 0.4s ease;

    &:hover {
      opacity: 0.7;
      transition: opacity 0.4s ease;
    }
  }

  &--ghost {
    background-color: transparent;
    color: var(--color-black);
    border: 1px solid var(--color-black);
    transition: all 0.4s ease;

    &:hover {
      background-color: var(--color-dark-gray);
      color: var(--color-white-light);
      border: 1px solid var(--color-dark-gray);
      transition: all 0.4s ease;
    }
  }
}
</style>