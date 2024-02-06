import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from '@/Components/acc/SideBar'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  <>
   <div className="flex">
      <Sidebar />
      <div className="w-5/6 p-4 bg-white">
        <h1>Welcome to accounts</h1>
        <div>Main Content</div>
      </div>
    </div>
      </>
  );
}
