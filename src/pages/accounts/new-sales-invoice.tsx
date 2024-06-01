import Layout from '@/components/acc/Layout'
import Sidebar from '@/components/acc/SideBar'
import { withAuth } from '@/components/acc/withAuth'
import React from 'react'

const NewSalesInvoice:React.FC = () => {
  return (
    <>
       <Layout
    title="WINNDEAL | Accounts"
   >
   <div className="flex">
      <Sidebar />
      <div className="w-5/6 p-4 bg-white">
        <h1>New Invoice</h1>
        <div>Main Content</div>
      </div>
    </div>
    </Layout>
      </>
  )
}

export default withAuth(NewSalesInvoice)