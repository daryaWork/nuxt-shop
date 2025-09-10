<template>
  <TheHeader />

  <main class="main">
    <slot />
  </main>

  <TheFooter />
</template>

<style lang="scss" scoped>
.main {
  min-height: 80vh;
}
</style>