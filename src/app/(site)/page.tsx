import { Beyond } from "@/components/sections/Beyond";
import { Founder } from "@/components/sections/Founder";
import { GetStarted } from "@/components/sections/GetStarted";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Packages } from "@/components/sections/Packages";
import { WhatIsBlueprint } from "@/components/sections/WhatIsBlueprint";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIsBlueprint />
      <Founder />
      <HowItWorks />
      <Packages />
      <Beyond />
      <GetStarted />
    </>
  );
}
