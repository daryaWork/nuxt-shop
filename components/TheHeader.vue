<template>
  <header class="header">
    <div class="header__top">
      <NuxtLink
        class="header__logo"
        to="/"
      >
        <Logo />
      </NuxtLink>

      <HeaderMenu class="header--desktop" />

      <SearchField class="header__search header--desktop" />
      <NuxtLink
        to="/cart"
        class="header__cart"
      >
        <Icon name="icon:cart" />
      </NuxtLink>
      <HeaderAction class="header--desktop" />
      <Icon
        class="header__top-burger header--mobile"
        :name="`icon:${isShowMenu ? 'close' : 'menu'}`"
        @click="toggleMenu"
      />
    </div>
    <SearchField class="header__search header--mobile" />
    <div
      v-if="isShowMenu"
      class="header__content"
    >
      <HeaderMenu />
      <HeaderAction />
    </div>
  </header>
</template>

<script lang="ts" setup>
const isShowMenu = ref(false);

const toggleMenu = () => isShowMenu.value = !isShowMenu.value;
</script>

<style lang="scss" scoped>
.header {
  max-width: 1248px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  font-family: "Roboto";
  position: relative;
  flex-direction: column;

  @media(min-width: 768px) {
    border-bottom: 1px solid var(--color-gray);
    flex-direction: row;
  }

  &__top {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px 0;

    &-burder {
      cursor: pointer;

      @media(min-width: 1440px) {
        display: none;
      }
    }
  }

  &__cart {
      color: var(--color-dark-gray);
  }

  &__logo {
    margin-right: auto;
    display: block;
  }

  &__content {
    background-color: pink;
    position: absolute;
    top: 100px;
    width: 100%;
    left: 0;
  }


  &--mobile {
      @media(min-width: 1440px) {
        display: none;
      }
    }

    &--desktop {
      display: none;

      @media(min-width: 1440px) {
        display: block;
      }
    }
}
</style>