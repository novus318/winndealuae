import { withAuth } from '@/Components/acc/withAuth';
import React, { useState } from 'react';
import { BsTrash2 } from 'react-icons/bs';

const InvoiceForm = () => {
  const [items, setItems] = useState([{ description: '', qty: 0, unit: '', rate: 0 }]);

  const handleAddItem = () => {
    setItems([...items, { description: '', qty: 0, unit: '', rate: 0 }]);
  };

  const handleDeleteItem = (index:any) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const handleItemChange = (index:any, field:any, value:any) => {
    const newItems:any = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  return (
    <div className="bg-white p-8 max-w-7xl mx-auto mt-10 shadow-md rounded">
    <h1 className="text-3xl font-bold mb-6 text-center">Generate Tax Invoice</h1>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Billed To</h2>
      <label className="block mb-2 text-gray-700">Name</label>
      <input type="text" placeholder="Name" className="w-full mb-4 p-2 border border-gray-300 rounded" />
      <label className="block mb-2 text-gray-700">Address</label>
      <textarea placeholder="Address" rows={3} className="w-full mb-4 p-2 border border-gray-300 rounded"></textarea>
      <label className="block mb-2 text-gray-700">TRN</label>
      <input type="text" placeholder="TRN" className="w-full mb-4 p-2 border border-gray-300 rounded" />
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Invoice Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-2 text-gray-700">Invoice Number</label>
          <input type="text" placeholder="Invoice Number" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block mb-2 text-gray-700">Invoice Date</label>
          <input type="date" placeholder="Invoice Date" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block mb-2 text-gray-700">Quote Ref</label>
          <input type="text" placeholder="Quote Ref" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block mb-2 text-gray-700">PO Number</label>
          <input type="text" placeholder="PO Number" className="w-full p-2 border border-gray-300 rounded" />
        </div>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-semibold mb-4">Items</h2>
      {items.map((item, index) => (
        <div key={index} className="grid grid-cols-7 gap-4 mb-4 items-end">
          <div className="col-span-3 flex">
            <textarea
              placeholder="Description"
              value={item.description}
              onChange={(e) => handleItemChange(index, 'description', e.target.value)}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700">Qty</label>
            <input
              type="number"
              placeholder="Qty"
              value={item.qty}
              onChange={(e) => handleItemChange(index, 'qty', e.target.value)}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700">Unit</label>
            <input
              type="text"
              placeholder="Unit"
              value={item.unit}
              onChange={(e) => handleItemChange(index, 'unit', e.target.value)}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700">Rate</label>
            <input
              type="number"
              placeholder="Rate"
              value={item.rate}
              onChange={(e) => handleItemChange(index, 'rate', e.target.value)}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <button
            onClick={() => handleDeleteItem(index)}
            className="bg-red-500 text-white p-2 rounded"
            aria-label="Delete"
          >
            <BsTrash2 className='m-auto' />
          </button>
        </div>
      ))}
      <button
        onClick={handleAddItem}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Item
      </button>
    </section>
   <div className='p-2 flex items-center justify-center'>
   <button
        onClick={handleAddItem}
        className="bg-gray-500 text-white px-4 py-2 rounded"
      >
        Generate Invoice
      </button>
   </div>
  </div>
  );
};

export default withAuth(InvoiceForm);
