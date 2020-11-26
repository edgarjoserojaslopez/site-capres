import React, { useState } from "react";
import Video from "../../videos/Finance - 5438.mp4";
import { Button } from "../Button/ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroHeading,
  HeroText,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroSectionElements";
const HomeSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroHeading>Bienvenido a CAPRES</HeroHeading>
        <HeroText>Regístrate o Ingresa si ya tienes una cuenta.</HeroText>
        <HeroBtnWrapper>
          <Button to="/registro" onMouseEnter={onHover} onMouseLeave={onHover}>
            Registro {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HomeSection;
