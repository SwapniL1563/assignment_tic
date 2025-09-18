import AchievementsGallery from "@/components/AboutAchievementGallery";
import BoardOfDirectors from "@/components/AboutBoardSection";
import ExperienceSection from "@/components/AboutHomeSection";
import RepresentationSection from "@/components/AboutMapSection";
import MissionSection from "@/components/AboutMissionSection";
import SupportDelivery from "@/components/AboutSupportSection";
import Footer from "@/components/Footer";
import FAQSection from "@/components/ui/Accordion";
import ResponsiveAppBar from "@/components/ui/ResponsiveAppbar";
import Image from "next/image";

const directors = [
  { id: 1, name: "Mr. S.K. Sabapathy", title: "Managing Director", imageSrc: "/about_img10.jpg" },
  { id: 2, name: "Mr. S. Baladitya Saba", title: "Director", imageSrc: "/about_img11.png" }
];

export default function About() {
  return (
    <>
      <div className="relative md:min-h-screen w-full">
      <ResponsiveAppBar />
      
      <div className="absolute inset-0 -z-10 md:h-screen h-[580px]">
          <Image src="/about_hero.jpg" alt="hero-img" fill priority className="object-cover hidden md:block"/>
          <Image src="/about_m_img1.jpg" alt="hero-img" fill priority className="object-cover block md:hidden opacity-85"/>
      </div>

      <div className="flex flex-col items-center md:items-start justify-center md:justify-end md:pb-20 pt-60 h-[580px] md:h-screen md:px-36 text-white">
        <h1 className="hidden md:block text-4xl md:text-7xl font-bold leading-17 drop-shadow drop-shadow-black/20">
            Decades of <br /> <span className="text-[#FCDE07]">Innovation</span>. Built
            <br /> for Tomorrow.
        </h1>
        <h1 className="text-[1.5rem]  text-center block md:hidden font-bold">
           With over <br />
           <span className="text-[#FCDE07]">37+ Years</span> of Experience
        </h1>
       </div>

       <div className="w-full bg-white">
        <ExperienceSection/>
        <SupportDelivery/>
        <MissionSection/>
        <RepresentationSection/>
        <BoardOfDirectors items={directors}/>
        <AchievementsGallery/>
        <FAQSection/>
        <Footer/>
       </div>
       
       </div>
    </>
  );
}
