<script lang="ts" setup>
import type { BlogPost } from '~/types/blog'

// Function to parse dates in the format "1st Mar 2023"
function parseCustomDate(dateStr: string): Date {
  // Prepare date str
  const cleanDateStr = dateStr.split('-').reverse().join('-');
  // Parse the date
  return new Date(cleanDateStr)
}

// Get Last 10 Publish Post from the content/blog directory
const { data } = await useAsyncData('recent-post', () =>
  queryCollection('content')
    .all()
    .then((data) => {
      return data
        .sort((a, b) => {
          const aDate = parseCustomDate(a.meta.date as string)
          const bDate = parseCustomDate(b.meta.date as string)

          return bDate.getTime() - aDate.getTime()
        })
        .slice(0, 10)
    }),
)

const formattedData = computed(() => {
  return data.value?.map((articles) => {
    const meta = articles.meta as unknown as BlogPost
    return {
      path: articles.path,
      title: articles.title || 'no-title available',
      description: articles.description || 'no-description available',
      image: meta.image || '/not-found.jpg',
      alt: meta.alt || 'no alter data available',
      ogImage: meta.ogImage || '/not-found.jpg',
      date: meta.date || 'not-date-available',
      tags: meta.tags || [],
      published: meta.published || false,
    }
  }).filter((item)=> item.published)
})

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
  <div class="pb-10 px-4">
    <div class="flex flex-row items-center space-x-3 pt-5 pb-3">
      <Icon name="mdi:star-three-points-outline" size="2em" class="text-black dark:text-zinc-300" />
      <h2 class="text-4xl font-semibold text-black dark:text-zinc-300">Последние посты</h2>
    </div>

    <div class="grid grid-cols-1">
      <template v-for="post in formattedData" :key="post.title">
        <ArchiveCard
          :path="post.path"
          :title="post.title"
          :date="post.date"
          :description="post.description"
          :image="post.image"
          :alt="post.alt"
          :og-image="post.ogImage"
          :tags="post.tags"
          :published="post.published"
        />
      </template>
      <template v-if="data?.length === 0">
        <BlogEmpty />
      </template>
    </div>
  </div>
</template>
