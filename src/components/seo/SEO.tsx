import { Helmet } from 'react-helmet-async'

export function SEO({ title, description }: { title: string, description: string }) {
  return (
    <Helmet>
      <title>{title} | Avocado</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}
