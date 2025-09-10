<template>
  <div class="header__action">
    <NuxtLink to="/favorites">
      <Icon name="icon:favorite" />
    </NuxtLink>
    <NuxtLink to="/account">
      <Icon name="icon:account" />
    </NuxtLink>
    <NuxtLink>
      <Icon name="icon:exit" />
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.header {
  &__action {
    display: flex;
    flex-direction: column;

    @media(min-width: 768px) {
      flex-direction: row;
      gap: 15px;
      margin-left: 15px;
    }

    a {
      color: var(--color-dark-gray);
    }
  }
}
</style>