import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import Layout from '@/Components/Layout';
import Products from '@/Components/Products';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Services from '@/Components/Services';

gsap.registerPlugin(ScrollTrigger);
const ProductServices = () => {
  

  return (
    <Layout
     
title="WinnDeal Solutions - Product & Services"
description="We deliver cutting-edge IT solutions tailored to your business needs in UAE, Our team of experts is committed to providing top-notch services that drive results"
keywords="WinnDeal,windeal,winndeal,it consulting,IT consulting,IT solution,IT company,UAE,uae,Dubai,dubai,IT support companies,IT services near me,IT services company,IT firm,IT solutions company,IT company website,it solutions,muhammed nizamudheen m,nizamudheen,Muhammed Nizamudheen M,Nizamudheen,Winndeal UAE,Laptop & desktop suppliers in Dubai,Computer accessories suppliers in UAE,computer hardware suppliers in dubai,managed IT solutions,best it consulting firms,Dubai based IT service providers,IT AMC Service provider,IT remote assistants"
author="Muhammed Nizamudheen M"
canonicalUrl="https://winndeal.com/productServices"
    >
      <Header />
     <Services/>
      <Products />
      <Footer />
    </Layout>
  );
};

export default ProductServices;