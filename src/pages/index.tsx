import Card from '@/Components/Card';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Herosection from '@/Components/Herosection';
import Highlights from '@/Components/Highlights';
import Layout from '@/Components/Layout';
import Mission from '@/Components/Mission';
import Promise from '@/Components/Promise';
import Services from '@/Components/Services';
import { HeroParallax } from '@/Components/ui/hero-parallax';
import React, { useEffect } from 'react';



export default function Home() {
 const products = [
    {
      title: "Tl Online shop",
      link: "https://tlonline.shop",
      thumbnail:
        "/banner/1.webp",
    },
    {
      title: "Abyzplants",
      link: "https://abyzplants.com",
      thumbnail:
        "/banner/2.webp",
    },
    {
      title: "Austagreg",
      link: "https://austagreg.vercel.app",
      thumbnail:
        "/banner/3.webp",
    },
   
    {
      title: "Amisaero",
      link: "https://amisaero.com/",
      thumbnail:
        "/banner/4.webp",
    },
    {
      title: "Confident",
      link: "https://confidentuae.com/",
      thumbnail:
        "/banner/5.webp",
    },
    {
      title: "Tt-gulf",
      link: "https://www.tt-gulf.com/",
      thumbnail:
        "/banner/6.webp",
    },
   
   
  
  ];
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
    }
  }, []);

  return (
   <>
    <Layout
    image='https://winndeal.com/ogimage.png'
    title="WinnDeal - The Best IT Solutions and Web Development in UAE"
    description="Looking for the best IT solutions and web development in UAE? WinnDeal is your trusted partner for all your digital needs. Contact us today and get a free quote!"
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
      <HeroParallax products={products} />
      <Card />
      <Footer />
    </Layout></>
  );
}
