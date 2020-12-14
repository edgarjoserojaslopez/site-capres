import React from "react";
import HeroSection from "../../Sections/HeroSection";
import InfoSection from "../../Sections/InfoSection";
import {
  principalObjOne,
  principalObjTwo,
} from "../../Sections/InfoSection/Data";
import Services from "../../Services";

function Principal() {
  return (
    <>
      <HeroSection />
      <InfoSection {...principalObjOne} />
      <Services />
      <InfoSection {...principalObjTwo} />
    </>
  );
}

export default Principal;
