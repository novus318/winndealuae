import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import { FaCheckCircle, FaHandshake, FaUsers } from 'react-icons/fa';
import AboutImage from '@/images/about.webp';
import Layout from '@/Components/Layout';


gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-fade-in');

    elements.forEach((element: Element) => {
      gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      });
    });
    const iconElements = document.querySelectorAll('.animate-icon');
    iconElements.forEach((element: Element) => {
      element.addEventListener('mouseenter', () => {
        gsap.to(element, { scale: 1.2, duration: 0.3 });
      });
      element.addEventListener('mouseleave', () => {
        gsap.to(element, { scale: 1, duration: 0.3 });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill(true);
      });
    };
  }, []);

  return (
    <Layout
    title="WinnDeal Solutions-About"
    description="We deliver cutting-edge IT solutions tailored to your business needs in UAE, Our team of experts is committed to providing top-notch services that drive results"
    keywords="Computer shop dubai, Online laptop uae, Computer shop in dubai, Buy laptop online in uae, Laptop accessories in dubai, Computer accessories in uae, Buy laptop online dubai, Laptop accessories dubai"
    author="Muhammed Nizamudheen M"
    canonicalUrl="https://winndeal.com/about">
      <>
      <Header />
      <section className="py-10 mt-14">
        <div className="container mx-auto p-8 apple">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider text-white mb-4 md:mb-8 text-center animate-fade-in">
            About Us
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
            <div className="animate-fade-in">
              <img
                src={AboutImage.src}
                alt="About Winndeal"
                className="w-full filter grayscale-[30%] "
              />
            </div>
            <div className="animate-fade-in">
              <p className="text-base md:text-lg lg:text-xl font-semibold text-white mb-2 md:mb-4">
                Welcome to Winndeal - Your Trusted IT Solutions Provider in the UAE
              </p>
              <p className="main text-sm md:text-base lg:text-lg font-medium text-white mb-2 md:mb-4 animate-fade-in">
                At Winndeal, we take pride in being your trusted partner for all
                things IT in the United Arab Emirates (UAE). With a solid
                foundation built on expertise, innovation, and a deep
                understanding of the local IT landscape, we are here to help you
                thrive in one of the most dynamic and competitive markets in the
                world.
              </p>
              <p className="text-base md:text-lg lg:text-xl font-semibold text-white mb-2 md:mb-4">
                Our Vision
              </p>
              <p className="text-sm md:text-base lg:text-lg font-medium text-white mb-2 md:mb-4 animate-fade-in">
                Our vision is clear - to make technology accessible, reliable,
                and secure for everyone in the UAE. We understand the unique
                challenges and opportunities presented by this region, and we are
                committed to simplifying IT to let you focus on what matters most
                in this vibrant and diverse market.
              </p>
            </div>
          </div>

          <div className="my-8 md:my-12">
            <h2 className="text-base md:text-lg lg:text-xl font-extrabold text-white mb-2 md:mb-4 text-center animate-fade-in">
              Our Advantages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              <div className="p-3 md:p-5 quality border rounded-lg shadow-md text-center animate-fade-in">
                <FaCheckCircle
                  className="text-2xl md:text-4xl lg:text-5xl text-[#FFEE7F] mb-1 md:mb-2 mx-auto animate-icon"
                />
                <h3 className="text-base md:text-lg lg:text-xl font-semibold">Expertise</h3>
                <p className="text-sm md:text-base lg:text-lg text-white py-2 md:py-3">
                  Our team of seasoned professionals possesses an in-depth understanding
                  of the IT requirements specific to the UAE, and we combine this
                  expertise with a customer-centric approach to provide tailored solutions
                  that align perfectly with your unique business objectives, ensuring your
                  success in this dynamic market.
                </p>
              </div>
              <div className="p-3 md:p-5 quality border rounded-lg shadow-md text-center animate-fade-in">
                <FaUsers
                  className="text-2xl md:text-4xl lg:text-5xl text-[#FFEE7F] mb-1 md:mb-2 mx-auto animate-icon"
                />
                <h3 className="text-base md:text-lg lg:text-xl font-semibold">Quality Service</h3>
                <p className="text-sm md:text-base lg:text-lg text-white py-2 md:py-3">
                we offer web development and digital marketing services to further enhance your online presence and business success. or expert IT consultation, our
                  commitment to excellence remains unwavering. We work diligently to ensure
                  your IT infrastructure operates seamlessly and efficiently.
                </p>
              </div>
              <div className="p-3 md:p-5 quality border rounded-lg shadow-md text-center animate-fade-in">
                <FaHandshake
                  className="text-2xl md:text-4xl lg:text-5xl text-[#FFEE7F] mb-1 md:mb-2 mx-auto animate-icon"
                />
                <h3 className="text-base md:text-lg lg:text-xl font-semibold">Local Support</h3>
                <p className="text-sm md:text-base lg:text-lg text-white py-2 md:py-3">
                  Our presence in the UAE ensures that you receive prompt, localized
                  support. We understand the importance of being there when you need us,
                  and we are always ready to assist you with expert advice and support
                  tailored to this regions unique needs, helping you navigate the local
                  IT landscape with confidence and efficiency.
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm md:text-base lg:text-lg commu font-medium text-white mb-4 md:mb-8 text-center animate-fade-in">
            <span className='text-white'>Community Engagement:</span> Winndeal is not just a technology provider;
            we are an active part of the UAE community. We believe in giving
            back and contributing to the growth and development of this
            remarkable nation.
          </p>

          <div className="animate-fade-in">
            <h2 className="text-base md:text-lg lg:text-xl join font-extrabold text-white mb-2 md:mb-4 text-center">
              Join Us in the Digital Journey
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-white text-center">
              Thank you for choosing Winndeal as your IT partner in the UAE.
              Together, we will navigate the ever-evolving world of technology and
              create a smarter and more secure future right here in the UAE.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
    </Layout>
  );
};

export default About;
