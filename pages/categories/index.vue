<script lang="ts" setup>
import { makeFirstCharUpper } from '@/utils/helper'

// Function to parse dates in the format "1st Mar 2023"
function parseCustomDate(dateStr: string): Date {
  // Prepare date str
  const cleanDateStr = dateStr.split('-').reverse().join('-');
  // Parse the date
  return new Date(cleanDateStr)
}

// Get Last 6 Publish Post from the content/blog directory
const { data } = await useAsyncData('all-blog-post-by-category', () =>
  queryCollection('content')
    .all()
    .then((data) => {
      return data
        .sort((a, b) => {
          const aDate = parseCustomDate(a.meta.date as string)
          const bDate = parseCustomDate(b.meta.date as string)

          return bDate.getTime() - aDate.getTime()
        })
    }),
)

const allTags = new Map()

data.value?.forEach((blog) => {
  const tags: Array<string> = (blog.meta.tags as string[]) || []
  tags.forEach((tag) => {
    if (allTags.has(tag)) {
      const cnt = allTags.get(tag)
      allTags.set(tag, cnt + 1)
    } else {
      allTags.set(tag, 1)
    }
  })
})

useHead({
  title: 'Категории',
  meta: [
    {
      name: 'description',
      content:
        'Ниже перечислены все темы, о которых я писал.',
    },
  ],
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <CategoryHero />
    <div class="flex flex-wrap px-6 mt-12 gap-3">
      <CategoryCard
        v-for="topic in allTags"
        :key="topic[0]"
        :title="makeFirstCharUpper(topic[0])"
        :count="topic[1]"
      />
    </div>
  </main>
</template>
