export default function sitemap() {
  return [
    {
      url: 'https://www.thaynavergara.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.thaynavergara.com#contato',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}