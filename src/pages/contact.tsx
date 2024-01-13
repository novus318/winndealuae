import React, { useEffect, useState } from 'react';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import emailjs from 'emailjs-com';
import contact from '@/images/conta.webp';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Layout from '@/Components/Layout';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const SERVICE_ID_EMAIL = 'service_ruqcbt8';
  const EMAILJS_TEMPLATE_ID = 'template_ck9zh7o';
  const EMAIL_USER_ID = 'eAIazN3sfCYuXsB-i';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });

  const animateForm = () => {
    const inputFields = document.querySelectorAll('input[type="text"],input[type="email"], textarea');

    inputFields.forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        y: -50,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          end: 'bottom 10%',
          toggleActions: 'play none none none',
        },
      });
    });
    const Sbutton = document.querySelectorAll('button[type="submit"],.conte');

    Sbutton.forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          end: 'bottom 10%',
          toggleActions: 'play none none none',
        },
      });
    });
    const image = document.querySelector('.contact-image');

    gsap.from(image, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: image,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    });
  };

  useEffect(() => {
    animateForm();
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill(true);
      });
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    const form = document.createElement('form');


    form.method = 'post';
    form.action = '';
    const nameField = document.createElement('input');
    nameField.type = 'text';
    nameField.name = 'name';
    nameField.value = formData.name;
    form.appendChild(nameField);

    const emailField = document.createElement('input');
    emailField.type = 'text';
    emailField.name = 'email';
    emailField.value = formData.email;
    form.appendChild(emailField);

    const numberField = document.createElement('input');
    numberField.type = 'text';
    numberField.name = 'number';
    numberField.value = formData.number;
    form.appendChild(numberField);

    const messageField = document.createElement('textarea');
    messageField.name = 'message';
    messageField.value = formData.message;
    form.appendChild(messageField);

    document.body.appendChild(form);

    setFormData({
      name: '',
      email: '',
      number: '',
      message: '',
    })
    emailjs.sendForm(SERVICE_ID_EMAIL, EMAILJS_TEMPLATE_ID, form, EMAIL_USER_ID)
      .then((result) => {
        console.log('Email sent successfully!', result.text);

      }, (error) => {
        console.error('Email could not be sent:', error);
      });

    document.body.removeChild(form);
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout
      title="WinnDeal Solutions - Ask for a Quote"
      description="We deliver cutting-edge IT solutions tailored to your business needs in UAE, Our team of experts is committed to providing top-notch services that drive results"
      keywords="Computer shop dubai, Online laptop uae, Computer shop in dubai, Buy laptop online in uae, Laptop accessories in dubai, Computer accessories in uae, Buy laptop online dubai, Laptop accessories dubai,Ask for a Quote"
      author="Muhammed Nizamudheen M"
      canonicalUrl="https://winndeal.com/contact">
      <>
        <Header />
        <section className="py-10 text-white px-5 lg:px-20 mt-16">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <img src={contact.src} alt="Illustration" className="w-full h-auto contact-image" />
            </div>

            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-center">Contact Us</h2>
              <form onSubmit={handleSubmit} className="bg-wtext-white p-4 form-element lg:p-6 rounded-lg shadow-lg">
                <div className="mb-6 mt-2">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border rounded-lg py-2 px-3  bg-white"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border rounded-lg py-2 px-3  bg-white"
                  />
                </div>
                <div className="mb-6">
                  <PhoneInput
                    international
                    defaultCountry="AE"
                    maxLength={16}
                    required
                    placeholder="Phone Number"
                    value={formData.number}
                    onChange={(value: any) => setFormData({ ...formData, number: value })}
                    className="w-full border rounded-lg py-2 px-3 bg-white"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border rounded-lg py-2 px-3  bg-white"
                  />
                </div>
                <button type="submit" className="bg-[#ffdd00df] text-white py-3 font-semibold px-4 rounded-lg w-full my-2">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 text-white py-6 px-5 lg:px-20">
          <div className="container conte mx-auto">
            <h2 className="text-xl lg:text-2xl font-bold mb-3 text-center">We would Love to Hear from You</h2>
            <p className="text-sm lg:text-base text-center lg:text-center text-gray-600">
              Feel free to reach out to us for any inquiries or feedback. Our team is here to assist you.
            </p>
          </div>
        </section>
        <Footer />
      </>
    </Layout>
  );
};

export default Contact;
