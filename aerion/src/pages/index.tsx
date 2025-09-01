import { WavyBackground } from "@/components/wavy-background";
import Navbar from "../components/Navbar";
import { AppleCard } from "@/components/apple-cards-carousel"; // Capitalize

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <AuroraBackground> */}
      {/* <HeroParallax /> */}
      {/* Use capitalized component */}
      <WavyBackground />
      {/* </AuroraBackground> */}
       <AppleCard />
    </div>
  );
}
