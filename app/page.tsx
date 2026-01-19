import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Stats from "@/components/Stats";
import Events from "@/components/Events";
import Partners from "@/components/Partners";
import WallOfLove from "@/components/WallOfLove";
import FAQ from "@/components/FAQ";
import JoinCTA from "@/components/JoinCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0F]">
      <Navbar />
      <Hero />
      <Mission />
      <Stats />
      <Events />
      <Partners />
      <WallOfLove />
      <FAQ />
      <JoinCTA />
      <Footer />
    </main>
  );
}
