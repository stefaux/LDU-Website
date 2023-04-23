import Navbar from '@/components/Navbar'
import MainContainer from '@/components/MainContainer'
import dynamic from "next/dynamic"
  const {} = dynamic(import("tw-elements"), { ssr: false });
  
export default function Home() {
    return (<><Navbar/><MainContainer/></>)
}
