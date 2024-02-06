import Layout from '@/Components/acc/Layout'
import Sidebar from '@/Components/acc/SideBar'
import React from 'react'

const NewQuote = () => {
  return (
    <>
       <Layout
   
    title="WINNDEAL | Accounts"
    >
   <div className="flex">
      <Sidebar />
      <div className="w-5/6 p-4 bg-white">
        <h1>Quote</h1>
        <div>Main Content</div>
      </div>
    </div>
    </Layout>
      </>
  )
}

export default NewQuote