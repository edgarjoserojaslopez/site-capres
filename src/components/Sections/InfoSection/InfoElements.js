import styled from "styled-components";
import { Link } from "react-router-dom";

export const InfoContainer = styled.div`
  height: 768px;
  color: #f2f2f2;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#ababab")};

  @media screen and (max-width: 768px) {
  }
  padding: 100px 0;
  height: auto;
`;

export const InfoWrapper = styled.div`
  display: flex;
  z-index: 1;
  height: auto;
  width: 100%;
  max-width: 68rem;
  margin-right: auto;
  margin-left: auto;
  padding: 0 2rem;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #4f6eae;
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 3rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f2f2f2" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#f2f2f2" : "#010606")};
`;

export const BtnWrap = styled.div`
  margin-top: 2rem;
  justify-content: space-evenly;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 1rem;
  width: 100%;

  @media screen and (max-width: 48rem) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 2rem;
`;

export const BtnLink = styled(Link)`
  display: flex;
  height: 2rem;
  width: 6rem;
  background: #f2f2f2;
  text-decoration: none;
  padding: auto;
  vertical-align: middle;
  color: #000;
  text-align: center;
`;

export const ImgWrap = styled.div`
  max-width: auto;
  height: auto;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  height: auto;
`;
