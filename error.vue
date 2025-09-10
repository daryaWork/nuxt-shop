<template>
  <section class="error-page">
    <h1 class="error-page__title">
      {{ error.statusCode }} ошибка
    </h1>
    <p class="error-page__text">
      {{ statusMessage }}
    </p>
    <ActionButton
      type="ghost"
      @click="() => navigateTo('/')"
    >
      Главная страница
    </ActionButton>
  </section>
</template>

<script lang="ts" setup>
import type {NuxtError} from "#app";
import { ActionButton } from "#components";

const { error } = defineProps<{error: NuxtError}>();
//navigateTo('/')

const statusMessage = computed(() => {
  if(error?.statusCode === 404) {
    return 'Страница не найдена, попробуйте перейти на главную страницу'
  }

  return 'Что-то пошло не так, попробуйте перезагрузить страницу'
})
</script>

<style lang="scss" scoped>
.error {
  &-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    &__title {
      @include heading1;
      margin-bottom: 1rem;
    }

    &__text {
      @include heading3;
      color: var(--color-dark-gray);
      margin-bottom: 2rem;
    }
  }
}
</style>