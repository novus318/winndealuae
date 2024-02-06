import Sidebar from '../components/SideBar'
import React from 'react'

const NewSalesInvoice = () => {
  return (
    <>
   <div className="flex">
      <Sidebar />
      <div className="w-5/6 p-4">
        <h1>New Invoice</h1>
        <div>Main Content</div>
      </div>
    </div>
      </>
  )
}

export default NewSalesInvoice