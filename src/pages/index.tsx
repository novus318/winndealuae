import React from 'react';
import Layout from '@/Components/Layout';
import Brands from '@/Components/Brands';
import Card from '@/Components/Card';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Herosection from '@/Components/Herosection';
import Promise from '@/Components/Promise';
import Products from '@/Components/Products';
import Mission from '@/Components/Mission';
import Services from '@/Components/Services';


export default function Home() {
  return (
   <>
    <Layout
    title="WinnDeal Solutions"
    description="We deliver cutting-edge IT solutions tailored to your business needs in UAE, Our team of experts is committed to providing top-notch services that drive results"
    keywords="WinnDeal,windeal,winndeal,Computer shop dubai, Online laptop uae, Computer shop in dubai, Buy laptop online in uae, Laptop accessories in dubai, Computer accessories in uae, Buy laptop online dubai, Laptop accessories dubai,IT company,UAE,uae,Dubai,dubai,IT support companies,IT services near me,IT services company,IT firm,IT solutions company,IT company website,it solutions,muhammed nizamudheen m,nizamudheen,Muhammed Nizamudheen M,Nizamudheen,Winndeal UAE,Laptop & desktop suppliers in Dubai,Computer accessories suppliers in UAE,computer hardware suppliers in dubai,managed IT solutions,best it consulting firms,Dubai based IT service providers,IT AMC Service provider,IT remote assistants"
    author="Muhammed Nizamudheen M"
    canonicalUrl="https://winndeal.com/"
    >
      <Header />
      <Herosection /> 
      <Promise />
      <Mission/>
      <Services/>
      <Brands />
      <Card />
      <Footer />
    </Layout></>
  );
}
