import React from 'react';
import Layout from '@/Components/Layout';
import Brands from '@/Components/Brands';
import Card from '@/Components/Card';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Herosection from '@/Components/Herosection';
import Promise from '@/Components/Promise';
import Products from '@/Components/Products';


export default function Home() {
  return (
    <Layout
    title="WinnDeal Solutions"
    description="Your page description"
    keywords="Your keywords"
    author="Your author"
    canonicalUrl="https://your-website-url.com/"
    >
      <Header />
      <Herosection />
      <Promise />
      <Products/>
      <Brands />
      <Card />
      <Footer />
    </Layout>
  );
}
