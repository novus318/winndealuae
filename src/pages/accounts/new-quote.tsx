import Sidebar from '@/Components/acc/SideBar'
import React from 'react'

const NewQuote = () => {
  return (
    <>
   <div className="flex">
      <Sidebar />
      <div className="w-5/6 p-4 bg-white">
        <h1>Quote</h1>
        <div>Main Content</div>
      </div>
    </div>
      </>
  )
}

export default NewQuote