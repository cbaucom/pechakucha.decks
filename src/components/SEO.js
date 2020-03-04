import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        buildTime(formatString: "YYYY-MM-DD")
        siteMetadata {
          title
          description
          siteUrl
          name
          language
        }
      }
    }
  `)

  const {
    buildTime,
    siteMetadata: { title, description, siteUrl, name, language },
  } = data.site

  const schemaArticle = {
    "@context": "http://schema.org",
    "@type": "Article",
    author: {
      "@type": "Person",
      name,
    },
    creator: {
      "@type": "Person",
      name,
    },
    publisher: {
      "@type": "Organization",
      name,
    },
    datePublished: "2019-09-28T10:30:00+01:00",
    dateModified: buildTime,
    description,
    headline: title,
    inLanguage: language,
    url: siteUrl,
    name: title,
    mainEntityOfPage: siteUrl,
  }

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={siteUrl} />
      <meta name="description" content={description} />

      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <script type="application/ld+json">
        {JSON.stringify(schemaArticle)}
      </script>
    </Helmet>
  )
}

export default SEO
