import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import Brands from '@/components/Brands';
import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Herosection from '@/components/Herosection';
import Promise from '@/components/Promise';
import Mission from '@/components/Mission';
import Services from '@/components/Services';
import Highlights from '@/components/Highlights';
import Highlight2 from '@/components/Highlight2';
import { useRouter } from 'next/router';


export default function Home() {
    const router = useRouter();
    const { pid } = router.query;
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
    }
  }, []);

  return (
   <>
    <Layout
    image='https://winndeal.com/ogimage.png'
    title={`Elevate Your Experience with WINNDEAL's ${pid}`}
    description={`Discover ${pid} at WinnDeal. Transform your digital experience with our innovative services.`}
    keywords="WinnDeal,windeal,winndeal,Computer shop dubai, Online laptop uae, Computer shop in dubai, Buy laptop online in uae, Laptop accessories in dubai, Computer accessories in uae, Buy laptop online dubai, Laptop accessories dubai,IT company,UAE,uae,Dubai,dubai,IT support companies,IT services near me,IT services company,IT firm,IT solutions company,IT company website,it solutions,muhammed nizamudheen m,nizamudheen,Muhammed Nizamudheen M,Nizamudheen,Winndeal UAE,Laptop & desktop suppliers in Dubai,Computer accessories suppliers in UAE,computer hardware suppliers in dubai,managed IT solutions,best it consulting firms,Dubai based IT service providers,IT AMC Service provider,IT remote assistants,web developer,web development,software,software engineer,web design,website design,website builder,web designer,ecommerce website,website creator,responsive web design,web development company,best website,web design software,build a website,web developer salary,design website,website layout,web application development,JavaScript,Node.js,Full-Stack Development,Git,Front-end Development,Back-End Web Development"
    author="Muhammed Nizamudheen M"
    canonicalUrl={`https://winndeal.com/home/${pid}`}
    >
      <Header />
      <Herosection /> 
      <Promise />
      <Mission/>
      <Highlights/>
      <Services/>
      <Highlight2/>
      <Card />
      <Footer />
    </Layout></>
  );
}
