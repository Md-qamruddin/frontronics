import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ 
  title = 'Frontronics - Multi-Industry Innovation Company',
  description = 'Frontronics is a multi-industry innovation company with 3 brands: Frontools (web tools SaaS), Front Web Services (web development), and FrontSaaS (digital products).',
  canonical,
  image = 'https://frontronics.in/static/media/frontronics.a7d5589f3c17807ddd65.jpg',
  type = 'website',
  keywords = 'multi-industry company, web tools SaaS, web development services, SaaS products, Frontools, Front Web Services, FrontSaaS, innovation, technology'
}) => {
  const siteUrl = 'https://frontronics.in';
  const pageUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Frontronics",
    "url": siteUrl,
    "logo": imageUrl,
    "description": description,
    "sameAs": [
      "https://twitter.com/frontronics",
      "https://linkedin.com/company/frontronics"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    }
  };

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
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content="Frontronics" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content="@frontronics" />
      <meta name="twitter:creator" content="@frontronics" />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Frontronics" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#2563eb" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  canonical: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
  keywords: PropTypes.string
};

export default SEO;