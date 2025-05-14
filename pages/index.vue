<script lang="ts" setup>
import { navbarData } from '~/data'

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

// Generate OG Image
defineOgImageComponent('Обо мне', {
  headline: 'Приветствую 👋',
  title: navbarData.homeTitle,
  description: 'Погрузимся со мной в обучение Js, Ts, Vue, Nuxt, Docker, k8s',
  link: '/bulat.jpg',
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <MainHero />
    <MainRecent />
    <MainTrending />
  </main>
</template>
