import HashpetComponent from "@/components/HashpetComponent";
import HeroSection from "@/components/HeroSection";
import MainServices from "@/components/MainServices";
// import ServiceMain from "@/components/ServiceMain";
// import Services from "@/components/Services";
import Ctasection from "@/components/Ctasection"

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <HeroSection/>
      <HashpetComponent/>
      {/* <Services /> */}
      <MainServices/>
      {/* <ServiceMain/> */}
      <Ctasection/>
    </div>
  );
}
