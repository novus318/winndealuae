import Layout from '@/components/acc/Layout';
import Sidebar from '@/components/acc/SideBar';
import { withAuth } from '@/components/acc/withAuth';
import React, { useState } from 'react';
import axios from 'axios';

const AddCustomer: React.FC = () => {
  const [companyName, setCompanyName] = useState('');
  const [vatNumber, setVatNumber] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyPhone, setCompanyPhone] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/customer', {
        companyName,
        vatNumber,
        companyEmail,
        companyPhone,
        companyAddress,
      });

      if (response.status === 200) {
        // Handle successful submission
        console.log('Customer added successfully!');
      } else {
        // Handle errors or unsuccessful submission
        console.error('Error adding customer');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error during customer submission:', error);
    }
  };

  return (
    <>
      <Layout title="WINNDEAL | Accounts">
        <div className="flex">
          <Sidebar />
          <div className="w-5/6 p-4 bg-white">
            <h2 className="text-lg font-semibold mb-2">Company Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full p-2 border rounded-md mb-2"
                  placeholder="Company Name"
                />
                {/* Add TRN input */}
                <input
                  type="text"
                  className="w-full p-2 border rounded-md mb-2"
                  placeholder="TRN"
                />
                <input
                  type="text"
                  value={vatNumber}
                  onChange={(e) => setVatNumber(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder="VAT Number"
                />
              </div>
              <div>
                <div className="flex gap-4 mb-3">
                  <input
                    type="text"
                    value={companyEmail}
                    onChange={(e) => setCompanyEmail(e.target.value)}
                    className="w-full p-2 border rounded-md mb-2"
                    placeholder="Company Email"
                  />
                  <input
                    type="text"
                    value={companyPhone}
                    onChange={(e) => setCompanyPhone(e.target.value)}
                    className="w-full p-2 border rounded-md mb-2"
                    placeholder="Company Phone"
                  />
                </div>
                <textarea
                  value={companyAddress}
                  onChange={(e) => setCompanyAddress(e.target.value)}
                  className="w-full p-2 border rounded-md mb-2 h-20"
                  placeholder="Company Address"
                />
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="bg-[#d8ce88] text-black font-semibold p-2 rounded-md mt-4 hover:bg-black hover:text-white focus:outline-none focus:ring focus:ring-[#FFEE7F]"
            >
              Create New
            </button>
            <div className='m-4 p-4 bg-[#eae9e9c4] rounded-xl min-h-screen'>
              <h2 className="text-lg font-semibold mb-2 text-center">Customers</h2>
              <hr />
              {/* Display customers here */}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default withAuth(AddCustomer);
