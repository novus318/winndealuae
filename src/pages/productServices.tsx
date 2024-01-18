import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Layout from '@/components/Layout';
import Products from '@/components/Products';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Services from '@/components/Services';
import Brands from '@/components/Brands';

gsap.registerPlugin(ScrollTrigger);
const ProductServices = () => {
  

  return (
    <Layout
     image='https://winndeal.com/ogimage.png'
title="WinnDeal Solutions - Product & Services"
description="We deliver cutting-edge IT solutions and Web Development tailored to your business needs in UAE, Our team of experts is committed to providing top-notch services that drive results"
keywords="WinnDeal,windeal,winndeal,it consulting,IT consulting,IT solution,IT company,UAE,uae,Dubai,dubai,IT support companies,IT services near me,IT services company,IT firm,IT solutions company,IT company website,it solutions,muhammed nizamudheen m,nizamudheen,Muhammed Nizamudheen M,Nizamudheen,Winndeal UAE,Laptop & desktop suppliers in Dubai,Computer accessories suppliers in UAE,computer hardware suppliers in dubai,managed IT solutions,best it consulting firms,Dubai based IT service providers,IT AMC Service provider,IT remote assistants,software,software engineer,web design,website design,website builder,web designer,dubai,sharjah,abu dhabi,ecommerce website,website creator,responsive web design,web development company,best website,web design software,build a website,web developer salary,design website,website layout,web application development,JavaScript,Node.js,Full-Stack Development,Git,Front-end Development,Back-End Web Development"
author="Muhammed Nizamudheen M"
canonicalUrl="https://winndeal.com/productServices"
    >
      <Header />
     <Services/>
     <Brands/>
      <Products />
      <Footer />
    </Layout>
  );
};

export default ProductServices;