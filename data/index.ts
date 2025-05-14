export const navbarData = {
  homeTitle: "Блог Булата Садикова",
}

export const footerData = {
  author: 'Булат Садиков',
  aboutAuthor:
    'Привет! Я Булат, фронтенд-разработчик и техноэнтузиаст.',
  authorInterest:
    "Имею опыт разработки с Javascript, Typescript, VueJs и Nuxt. Если у вас есть интересная идея для разработки, то свяжитесь со мной.",
  aboutTheSite:
    "Этот блог сделан с помощью Nuxt3, TailwindCSS, NuxtContent, Nuxt Icon.",
}

export const homePage = {
  title: 'Простой блог фронтенд разработчика',
  description:
    'Пишу заметки о разработке, прочитанных книгах и пройденных курсах. ',
}

export const blogsPage = {
  title: 'Все посты',
  description: 'Здесь вы найдете все посты написанные и опубликованные на сайте.',
}

export const categoryPage = {
  title: 'Категории',
  description:
    'Это раздел с категориями постов и тегов, о которых я писал',
}

export const aboutPage = {
  title: 'Булат Садиков',
  description: 'Фронтенд-разработчик и техноэнтузиаст.',
  aboutMe:
    "Привет, друзья! Я простой разработчик, который занимается профессионально разработкой уже 10 лет. Еще со школы я понял, что хочу заниматься программированием, так я поступил в физмат лицей, а потом в технический ВУЗ. Иногда хожу на конференции, чаще изучаю новые технологии онлайн, а в свободное время увлекаюсь фотографией и путешествиями.",
}

export const seoData = {
  title: `Блог Булата Садикова`,
  ogTitle: `Учимся Javascript, Typescript, Vue, Nuxt и решению проблем - Блог Булата Садикова`,
  description: `Привет, я Булат. Фронтенд разработчик с 10 летним опытом разработки. - Блог Булата Садикова`,
  twitterDescription: `Привет, я Булат. Фронтенд разработчик с 10 летним опытом разработки. - Блог Булата Садикова`,
  image:
    'https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-blog/cover_ntgs6u.webp',
  mySite: 'https://bulatsa.ru',
  twitterHandle: '@bulatsa',
  mailAddress: 'sadikovba@gmail.com',
}

export const socialLinks = {
  githubLink: 'https://github.com/bulatsa',
  linkedinLink: 'https://www.linkedin.com/in/%D0%B1%D1%83%D0%BB%D0%B0%D1%82-%D1%81%D0%B0%D0%B4%D0%B8%D0%BA%D0%BE%D0%B2-79a29212b/',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: seoData.twitterHandle },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]
