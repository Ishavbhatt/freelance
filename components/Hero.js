import React from "react";
import Image from "next/image";
import Link from "next/link"
import { FaArrowDown } from "react-icons/fa";





function Hero() {
  return (
    <section className="hero text-center lg:px-10 pt-20 md:px-10 px-5">
      <div className="text-div text-center">
        <h1 className="text-4xl font-sans antialiased font-light tracking-wide mb-4">Find the perfect freelance services <br></br>for your Bussines</h1>
        <Link href="/">
            <a  className="hero-btn shrink">Learn More</a>
          </Link>
      </div>
      
    </section>
    
  );
}
export default Hero;
