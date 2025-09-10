<template>
  <footer class="footer">
    <div class="footer__form">
      <InputField placeholder="Ваш email для акций и предложений" />
      <button class="footer__subscribe">
        <Icon
          name="icon:arrow"
          size="10px"
        />
      </button>
    </div>

    <div class="footer__menu">
      <NuxtLink
        to="/"
        class="footer__menu-item"
      >
        Контакты
      </NuxtLink>
      <NuxtLink
        to="/"
        class="footer__menu-item"
      >
        Условия покупки
      </NuxtLink>
      <NuxtLink
        to="/"
        class="footer__menu-item"
      >
        Доставка и возврат
      </NuxtLink>
    </div>

    <div class="footer__social">
      <NuxtLink to="/">
        <Icon
          name="icon:linkedin"
          size="20px"
        />
      </NuxtLink>
      <NuxtLink to="/">
        <Icon
          name="icon:facebook"
          size="20px"
        />
      </NuxtLink>
      <NuxtLink to="/">
        <Icon
          name="icon:instagram"
          size="20px"
        />
      </NuxtLink>
      <NuxtLink to="/">
        <Icon
          name="icon:twitter"
          size="20px"
        />
      </NuxtLink>
    </div>

    <div class="footer__copyright">
      © {{ new Date().getFullYear() }} Shoppe
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  max-width: 1248px;
  margin: 0 auto;
  display: grid;
  font-family: "Roboto";

  @media(min-width: 1440px) {
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    padding: 50px 0;
    border-top: 1px solid var(--color-gray);
  }

  &__menu {
    @media(min-width: 1440px) {
      display: flex;
      align-items: center;
      gap: 30px;
      order: -3;
    }

    &-item {
      text-transform: uppercase;
      color: var(--color-dark-gray);
      transition: color 0.3s ease;

      &:hover {
        color: var(--color-dark);
        transition: color 0.3s ease;
      }
    }
  }

  &__form {
    @media(min-width: 1440px) {
      order: -2;
      display: flex;
      justify-content: space-between;
      position: relative;
    }

    input {
      @media(min-width: 1440px) {
        flex-grow: 1;
        padding-right: 30px;
      }
    }

    button {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  &__social {
    @media(min-width: 1440px) {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 20px;
    }

    a {
      color: var(--color-dark-gray);
      transition: color 0.3s ease;

      &:hover {
        color: var(--color-black);
        transition: color 0.3s ease;
      }
    }
  }

  &__copyright {
    @media(min-width: 1440px) {
      order: -1;
    }
  }
}
</style>