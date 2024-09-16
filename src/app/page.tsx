import Image from "next/image";
import Hero from "./components/Hero";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

export default function Home() {
 
  return (
    <div>
      <Hero />
    </div>
  );
}
