import WhyJoinUs from "@/components/AboutJoinUsSection";
import CareerAboutSection from "@/components/CareerAboutSection";
import InternshipSection from "@/components/CareerInternshipSection";
import CareersSection from "@/components/CareerJobsSection";
import JoinUsSection from "@/components/CareerJoinUsSection";
import ProcessSection from "@/components/CareerProcessSection";
import Footer from "@/components/Footer";
import ResponsiveAppBar from "@/components/ui/ResponsiveAppbar";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="relative md:min-h-screen w-full">
      <ResponsiveAppBar />
      
      <div className="absolute inset-0 -z-10 md:h-screen h-[580px]">
          <Image src="/career_home.jpg" alt="hero-img" fill priority className="object-cover hidden md:block"/>
          <Image src="/career_m_home.jpg" alt="hero-img" fill priority className="object-cover block md:hidden opacity-85"/>
      </div>

      <div className="flex flex-col items-center md:items-start justify-center md:justify-center  pt-96 h-[580px] md:h-screen md:px-36 text-white">
        <h1 className="hidden capitalize md:block text-4xl md:text-6xl font-bold leading-17 drop-shadow drop-shadow-black/20">
            Grow with A <span className="text-[#FCDE07]">Legacy</span> Of
            <br /> Innovation and Excellence
        </h1>
        <h1 className="text-[1.3rem]  text-center block md:hidden font-bold">
           We Offer
           <span className="text-[#FCDE07]"> Exciting Career <br /> Opportunities </span> For Passionate  <br />
           Professionals looking to <br /> Make An Impact.

        </h1>
       </div>

       <div className="w-full bg-white">
        <CareerAboutSection/>
        <WhyJoinUs/>
        <ProcessSection/>
        <CareersSection/>
        <InternshipSection/>
        <JoinUsSection/>
        <Footer/>
       </div>
       
       </div>
    </>
  );
}
