import React from "react";
import HeroSection from "../../Sections/HeroSection";
import InfoSection from "../../Sections/InfoSection";
import { principalObjOne } from "../../Sections/InfoSection/Data";

function Principal() {
  return (
    <>
      <HeroSection />
      <InfoSection {...principalObjOne} />
    </>
  );
}

export default Principal;
