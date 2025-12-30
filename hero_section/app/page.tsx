import Image from "next/image";
import { Hero } from "@/component/hero";
export default function home() {
  return (
    <div className=" h-screen bg-neutral-900 flex justify-center">
      <Hero/>
    </div>
  )
}