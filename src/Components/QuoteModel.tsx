import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { gsap } from 'gsap';

const QuoteModal = ({ isOpen, onClose, onSubmit, formData, setFormData }: any) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const modalContainer = document.querySelector('.modal-container');
  
    if (modalContainer) {
      gsap.to(modalContainer, {
        duration: 0.5,
        opacity: isOpen ? 1 : 0,
        scale: isOpen ? 1 : 0.5,
        ease: 'power3.inOut',
        display: isOpen ? 'block' : 'none',
        onComplete: () => {
          if (!isOpen) {
            onClose();
          }
        },
      });
    }
  }, [isOpen, onClose]);
  

  return (
    <div className={`fixed top-60 left-0 w-full h-full flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
      <div className={`relative bg-black p-8 rounded-md shadow-lg max-w-md w-full border-white border-2 modal-container`} style={{ opacity: 0, scale: 0.5, display: 'none' }}>
        <div className="flex justify-end">
          <button className="text-white" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white">Request a Quote</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border-b-2 border-white outline-none bg-transparent text-white"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border-b-2 border-white outline-none bg-transparent text-white"
            />
          </div>
          <div className="mb-4">
            <PhoneInput
              country={'ae'}
              value={formData.number}
              onChange={(value, data, event, formattedValue) =>
                setFormData((prevData: any) => ({ ...prevData, number: formattedValue }))
              }
              inputProps={{
                required: true,
                className: 'w-full p-2 border-b-2 border-white outline-none bg-transparent text-white',
              }}
            />
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 border-2 border-white outline-none bg-transparent text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#FFEE7F] text-black rounded-full hover:text-white hover:bg-[#5a5a5a8d] focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;
