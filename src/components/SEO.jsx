import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'Frontronics - AI-Powered Web Development Tools',
  description = 'Frontronics builds AI tools to reduce website development risks and time. We also create innovative electronic toys using smart tech.',
  canonical,
  image = 'https://frontronics.netlify.app/static/media/frontronics.a7d5589f3c17807ddd65.jpg',
  type = 'website'
}) => {
  const siteUrl = 'https://frontronics.netlify.app';
  const pageUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={pageUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content="Frontronics" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content="AI tools, web development, electronic toys, smart technology, development automation, FrontPilot, BackPilot, AI Assistant" />
      <meta name="author" content="Frontronics" />
      
      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Frontronics",
          "url": siteUrl,
          "logo": `${siteUrl}/static/media/frontronics.a7d5589f3c17807ddd65.jpg`,
          "description": description,
          "sameAs": [
            "https://twitter.com/frontronics",
            "https://linkedin.com/company/frontronics"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;