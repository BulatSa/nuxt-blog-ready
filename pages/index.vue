<script lang="ts" setup>
useHead({
  title: 'Главная',
  meta: [
    {
      name: 'description',
      content:
        'Добро пожаловать в мой блог. Поговорим о веб-разработке, книгах и курсах.',
    },
  ],
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <MainHero />
    <MainRecent />
  </main>
</template>
