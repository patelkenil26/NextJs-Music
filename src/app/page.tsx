// import Image from "next/image";

import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonial from "@/components/TestimonialCards";
import UpcommingWebinars from "@/components/UpcommingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import { main } from "motion/react-client";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses /> 
      <WhyChooseUs/>
      <MusicSchoolTestimonial/>
      <UpcommingWebinars/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
