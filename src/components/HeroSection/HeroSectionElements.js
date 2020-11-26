import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2.5rem;
  height: 50rem;
  position: relative;
  z-index: 1;

  /* Add :before styles */
`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 0.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroHeading = styled.h1`
  font-size: 3rem;
  color: #f2f2f2;
  letter-spacing: 0.125rem;
  text-align: center;

  @media screen and (max-width: 48rem) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 30rem) {
    font-size: 2rem;
  }
`;

export const HeroText = styled.p`
  margin-top: 1.5rem;
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  max-width: 37.5rem;

  @media screen and (max-width: 48rem) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 30rem) {
    font-size: 1.125rem;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 2rem;
  justify-content: space-evenly;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 1rem;
  width: 100%;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 0.5rem;
  font-size: 1.25rem;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 0.5rem;
  font-size: 1.25rem;
`;
