import React from 'react';
import { Helmet } from 'react-helmet';
import ContactIcons from './ContactIcons';
import ScrollToTop from './ScrollUp';
interface LayoutProps {
  children: React.ReactNode;
  title: string;
  image:string;
  description: string;
  keywords: string;
  author: string;
  canonicalUrl: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  description,
  keywords,
  image,
  author,
  canonicalUrl,
}) => {
  const escapedCanonicalUrl = canonicalUrl.replace(/["]/g, '\\"');

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <script type="application/ld+json">
          {`{
            "@context": "http://schema.org",
            "@type": "WebPage",
            "url": "${escapedCanonicalUrl}"
          }`}
        </script>
        <link rel="canonical" href={canonicalUrl} />
           
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={escapedCanonicalUrl} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content={image} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:creator" content={author} />
        <title>{title}</title>
      </Helmet>
      {children}
      <ScrollToTop/>
      <ContactIcons/>
    </div>
  );
};

Layout.defaultProps = {
  title: 'WinnDeal IT Solutions',
  description:
    'We deliver cutting-edge IT solutions and Web Developments tailored to your business needs in UAE, Our team of experts is committed to providing top-notch services that drive results',
  keywords:
    'WinnDeal,windeal,winndeal,it consulting,IT consulting,javacsript,IT solutions,IT company,UAE,uae,Dubai,dubai,IT support companies,IT services near me,IT services company,IT firm,IT solutions company,IT company website,it solutions,muhammed nizamudheen m,nizamudheen,Muhammed Nizamudheen M,Nizamudheen,Winndeal UAE,Laptop & desktop suppliers in Dubai,Computer accessories suppliers in UAE,computer hardware suppliers in dubai,managed IT solutions,best it consulting firms,Dubai based IT service providers,IT AMC Service provider,IT remote assistants',
  author: 'Muhammed Nizamudheen M',
  image:'https://winndeal.com/ogimage.png',
  canonicalUrl: 'https://winndeal.com/',
};

export default Layout;
