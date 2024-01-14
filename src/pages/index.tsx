import React, { useEffect } from 'react';
import Layout from '@/Components/Layout';
import Brands from '@/Components/Brands';
import Card from '@/Components/Card';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Herosection from '@/Components/Herosection';
import Promise from '@/Components/Promise';
import Mission from '@/Components/Mission';
import Services from '@/Components/Services';
import Highlights from '@/Components/Highlights';
import Highlight2 from '@/Components/Highlight2';


export default function Home() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          console.log('ServiceWorker registration successful with scope:', registration.scope);
        })
        .catch((error) => {
          console.error('ServiceWorker registration failed:', error);
        });
    }
  }, []);

  return (
   <>
    <Layout
    image='https://winndeal.com/ogimage.png'
    title="WinnDeal IT Solutions | Elevate Your Experience with IT Solutions and Web Development"
    description="We deliver cutting-edge IT solutions and Web development tailored to your business needs in UAE, Our team of experts is committed to providing top-notch services that drive results"
    keywords="WinnDeal,windeal,winndeal,Computer shop dubai, Online laptop uae, Computer shop in dubai, Buy laptop online in uae, Laptop accessories in dubai, Computer accessories in uae, Buy laptop online dubai, Laptop accessories dubai,IT company,UAE,uae,Dubai,dubai,IT support companies,IT services near me,IT services company,IT firm,IT solutions company,IT company website,it solutions,muhammed nizamudheen m,nizamudheen,Muhammed Nizamudheen M,Nizamudheen,Winndeal UAE,Laptop & desktop suppliers in Dubai,Computer accessories suppliers in UAE,computer hardware suppliers in dubai,managed IT solutions,best it consulting firms,Dubai based IT service providers,IT AMC Service provider,IT remote assistants,web developer,web development,software,software engineer,web design,website design,website builder,web designer,ecommerce website,website creator,responsive web design,web development company,best website,web design software,build a website,web developer salary,design website,website layout,web application development,JavaScript,Node.js,Full-Stack Development,Git,Front-end Development,Back-End Web Development"
    author="Muhammed Nizamudheen M"
    canonicalUrl="https://winndeal.com/"
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
