import Image from "next/image";
import { Hero } from "@/component/hero";
import { Container } from "@/component/Container";
import Navbar from "@/component/navbar";
export default function home() {
  return (
    <div className=" h-screen bg-neutral-900 flex justify-center">
      <Container>
          
          <Navbar/>
          <Hero/>
      </Container>
    
    </div>
  )
}