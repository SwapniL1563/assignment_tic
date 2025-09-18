// components/Footer.tsx
import Image from "next/image";
import { FaTwitter, FaTiktok, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-24 md:gap-12 grid-cols-1">
        <div className="space-y-4 flex flex-col md:flex-row justify-between w-full">
          <div className="flex flex-col w-full md:flex-row  items-start justify-around gap-10">
            <Image src="/logo.png" alt="Saba Group" width={40} height={40} className="w-20 md:w-32 mb-4 md:mb-0" />
            <p className="md:w-1/2 leading-relaxed hidden md:block">
            Saba Group - Pioneering Excellence in specialty chemicals &amp; Industry Solutions
          </p>
        </div>

        <div className="hidden md:block mr-10">
          <h4 className="font-medium mb-4 text-[#1F9B5A] uppercase tracking-wide text-sm">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About us</a></li>
            <li><a href="/service" className="hover:underline">Service</a></li>
            <li><a href="/career" className="hover:underline">Career</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div className="block md:hidden mb-7">
          <h4 className="font-bold mb-2 text-[#10562C] capitalize tracking-wide">
           Stay in Touch
          </h4>  
          <p className="w-2/3 text-sm leading-relaxed">2nd Floor, Tower C,Unitech Business Zone,Nirvana Country, South City - 2,Sector-50, Gurugram - 122018, Haryana</p>
        </div>

        <div className="block md:hidden mb-7">
          <h4 className="font-bold mb-2 text-[#10562C] capitalize tracking-wide">
           Contact us
          </h4>
          <p className="w-3/4 text-sm leading-relaxed mb-1">Email: info@[YourCompanyName].com</p>
          <p className="w-3/4 text-sm leading-relaxed">Phone: +91 XXXXX XXXXX</p>
        </div>

        <button className="block md:hidden bg-[#10562C] px-10 py-3 text-white rounded-4xl w-2/3 text-sm mb-7">Explore more</button>

        <div>
          <h4 className="hidden md:block font-medium mb-4 text-[#1F9B5A] uppercase tracking-wide text-sm">
            Socials
          </h4>
          <h4 className="block md:hidden font-bold mb-4 text-black capitalize tracking-wide">
            Stay Connected
          </h4>
          <div className="flex space-x-5 text-xl">
            <a href="#" aria-label="Twitter" className="hover:text-black"><FaTwitter /></a>
            <a href="#" aria-label="TikTok" className="hover:text-black"><FaTiktok /></a>
            <a href="#" aria-label="Instagram" className="hover:text-black"><FaInstagram /></a>
          </div>
        </div>

        </div>

        <div  className="hidden md:flex w-full gap-10 justify-between items-start"> 
        <div className="w-1/4 border-gray-300">
        <div className="px-6 flex flex-col md:flex-col md:justify-between gap-2">
          <h1 className="w-full text-sm">@Design &amp; developed by TIC</h1>
          <div className="flex gap-6 justify-start text-sm">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
        </div>

        <div className="w-3/4 flex flex-col">
          <h4 className="font-medium mb-2 text-[#1F9B5A] uppercase text-start tracking-wide text-sm">
            Get Updates
          </h4>
          <form className="flex w-3/4 ">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 rounded-l-full border border-gray-400 px-4 py-2 text-sm placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-black text-white rounded-r-full px-6 py-2 text-sm hover:bg-gray-900 transition cursor-pointer"
            >
              Get updates
            </button>
          </form>
        </div>
        </div>
      </div>
    </footer>
  );
}
