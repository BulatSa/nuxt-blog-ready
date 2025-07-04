<script lang="ts" setup>
import type { BlogPost } from '@/types/blog'
const route = useRoute()

// Function to parse dates in the format "1st Mar 2023"
function parseCustomDate(dateStr: string): Date {
  // Prepare date str
  const cleanDateStr = dateStr.split('-').reverse().join('-');
  // Parse the date
  return new Date(cleanDateStr)
}

// take category from route params & make first char upper
const category = computed(() => {
  const name = route.params.category || ''
  let strName = ''

  if (Array.isArray(name)) strName = name.at(0) || ''
  else strName = name
  return strName
})

const { data } = await useAsyncData(`category-data-${category.value}`, () =>
  queryCollection('content')
    .all()
    .then((articles) =>
      articles
        .filter((article) => {
          const meta = article.meta as unknown as BlogPost
          return meta.tags.includes(category.value) && meta.published;
        })
        .sort((a, b) => {
          const aDate = parseCustomDate(a.meta.date as string)
          const bDate = parseCustomDate(b.meta.date as string)

          return bDate.getTime() - aDate.getTime()
        }),
    ),
)

const formattedData = computed(() => {
  return data.value?.map((articles) => {
    const meta = articles.meta as unknown as BlogPost
    return {
      path: articles.path,
      title: articles.title || 'no-title available',
      description: articles.description || 'no-description available',
      image: meta.image || '/blogs-img/blog.jpg',
      alt: meta.alt || 'no alter data available',
      ogImage: meta.ogImage || '/blogs-img/blog.jpg',
      date: meta.date || 'not-date-available',
      tags: meta.tags || [],
      published: meta.published || false,
    }
  })
})

useHead({
  title: category.value,
  meta: [
    {
      name: 'description',
      content: `Здесь собраны все посты по теме ${category.value}`,
    },
  ],
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600 px-4">
    <CategoryTopic />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <BlogCard
        v-for="post in formattedData"
        :key="post.title"
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
      <BlogEmpty v-if="data?.length === 0" />
    </div>
  </main>
</template>
