<template>
  <div class="header__menu">
    <NuxtLink to="/catalog">
      Магазин
    </NuxtLink>
    <NuxtLink to="/about">
      О нас
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>

.header {
  &__menu {
    display: flex;
    flex-direction: column;

    @media(min-width: 768px) {
      flex-direction: row;
      gap: 15px;
      padding-right: 60px;
      margin-right: 60px;
      border-right: 1px solid var(--color-dark-gray);
    }

    a {
      color: var(--color-dark-gray);
      transition: color 0.3s ease;

      &:hover {
        color: var(--color-black);
        transition: color 0.3s ease;
      }

      &.router-link-active {
        color: red;
      }
    }
  }
}</style>