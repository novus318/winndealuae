import Layout from '@/components/acc/Layout';
import Sidebar from '@/components/acc/SideBar';
import { withAuth } from '@/components/acc/withAuth';
import React, { useState } from 'react';

const NewQuote: React.FC = () => {
  // State for form fields
  const [customer, setCustomer] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [quoteNumber, setQuoteNumber] = useState('');

    // State for item details
    const [itemDescription, setItemDescription] = useState('');
    const [itemRate, setItemRate] = useState('');
    const [itemQty, setItemQty] = useState('');
    const [itemAmount, setItemAmount] = useState('');
  
    // State for storing added items
    const [items, setItems] = useState<any[]>([]);
  // Function to handle live saving
  const handleLiveSave = () => {
    // Implement logic for live saving here
    console.log('Live saving:', { customer, issueDate, expiryDate, quoteNumber });
  };
  const handleAddItem = () => {
    const newItem = {
      description: itemDescription,
      rate: itemRate,
      qty: itemQty,
      amount: itemAmount,
    };

    setItems([...items, newItem]);
    
    // Clear input fields after adding item
    setItemDescription('');
    setItemRate('');
    setItemQty('');
    setItemAmount('');
  };

  return (
    <>
      <Layout title="WINNDEAL | Accounts">
        <div className="flex">
          <Sidebar />
          <div className="w-5/6 p-4 bg-white">
            {/* Grid Layout for Content Above Table */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="md:col-span-2 lg:col-span-4">
                <select
                  value={customer}
                  onChange={(e) => {
                    setCustomer(e.target.value);
                    handleLiveSave();
                  }}
                  className="w-1/2 p-2 border rounded-md text-xs"
                  placeholder="Select Customer"
                >
                  {/* Option for Existing Customers */}
                  <option value="">Select Customer</option>
                  <option value="existing-customer-1">Existing Customer 1</option>
                  <option value="existing-customer-2">Existing Customer 2</option>
                </select>
                <button>Add</button>
              </div>

              <div className="lg:col-span-2">
                <input
                  type="text"
                  value={quoteNumber}
                  onChange={(e) => {
                    setQuoteNumber(e.target.value);
                    handleLiveSave();
                  }}
                  className="p-2 border rounded-md text-xs"
                  placeholder="Quote Number"
                />
              </div>

              <div>
                <input
                  type="text"
                  value={issueDate}
                  onChange={(e) => {
                    setIssueDate(e.target.value);
                    handleLiveSave();
                  }}
                  className="w-full p-2 border rounded-md text-xs"
                  placeholder="Issue Date"
                />
              </div>

              <div>
                <input
                  type="text"
                  value={expiryDate}
                  onChange={(e) => {
                    setExpiryDate(e.target.value);
                    handleLiveSave();
                  }}
                  className="w-full p-2 border rounded-md text-xs"
                  placeholder="Expiry Date"
                />
              </div>
            </div>

           {/* Item Details Section */}
         
            {/* Item Details Section */}
            <div className="mb-6">
              <h2 className="text-sm font-semibold mb-2">Item Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <textarea
                    value={itemDescription}
                    onChange={(e) => setItemDescription(e.target.value)}
                    className="w-full p-2 border rounded-md text-xs h-20"
                    placeholder="DESCRIPTION"
                  />
                </div>
                <div className="flex gap-4">
                  <input
                    type="text"
                    value={itemRate}
                    onChange={(e) => setItemRate(e.target.value)}
                    className="w-full p-2 border rounded-md text-xs my-4"
                    placeholder="Rate"
                  />
                  <input
                    type="text"
                    value={itemQty}
                    onChange={(e) => setItemQty(e.target.value)}
                    className="w-full p-2 border rounded-md text-xs my-4"
                    placeholder="Qty"
                  />
                  <input
                    type="text"
                    value={itemAmount}
                    onChange={(e) => setItemAmount(e.target.value)}
                    className="w-full p-2 border rounded-md text-xs my-4"
                    placeholder="AMOUNT"
                  />
                </div>
              </div>
              <button
                onClick={handleAddItem}
                className="bg-[#FFEE7F] text-black font-semibold p-2 rounded-md hover:bg-black hover:text-white focus:outline-none focus:ring focus:ring-[#FFEE7F] mt-4"
              >
                Add Item
              </button>
            </div>


            {items.length > 0 && (
              <div>
                <h2 className="text-sm font-semibold mb-2">Added Items</h2>
                <table className="w-full border-collapse border border-black">
                  <thead>
                    <tr className="bg-[#FFEE7F]">
                      <th className="border border-black p-2">DESCRIPTION</th>
                      <th className="border border-black p-2">Rate</th>
                      <th className="border border-black p-2">Qty</th>
                      <th className="border border-black p-2">AMOUNT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, index) => (
                      <tr key={index} className="border border-black">
                        <td className="border border-black p-2">{item.description}</td>
                        <td className="border border-black p-2">{item.rate}</td>
                        <td className="border border-black p-2">{item.qty}</td>
                        <td className="border border-black p-2">{item.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default withAuth(NewQuote);