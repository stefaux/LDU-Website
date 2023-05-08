import Navbar from "@/components/Navbar/Navbar";
import Layout from "@/components/HomePage/Layout";
import dynamic from "next/dynamic";
const {} = dynamic(import("tw-elements"), { ssr: false });

export default function Home() {
  return (
    <>
      <Navbar />
      <Layout startingTheme="light" />
    </>
  );
}
