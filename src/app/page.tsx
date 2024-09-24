import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <HeroSection/>
      <div className="w-full h-screen flex items-center justify-center">
        <h1 className="sm:hidden block text-center text-lg font-semibold bg-orange-300 p-2 rounded-lg">Hero Section For Mobile Under Development</h1>
        <h1 className="hidden sm:block text-center text-lg font-semibold bg-orange-300 p-2 rounded-lg">This Section is Under Development</h1>
      </div>
    </div>
  );
}
