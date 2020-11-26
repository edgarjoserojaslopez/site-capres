import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 60px;
  background: radial-gradient(
    rgba(238, 235, 248, 0.25) 0%,
    rgba(188, 188, 188, 0.5) 100%
  );
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    justify-content: center;
  }
`;

export const Link = styled.a`
  color: #989ea6;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
  text-align: start;

  &:hover {
    color: #4f6eae;
    font-size: 18px;
    transition: all 0.5 ease-out;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  color: #4f6eae;
  margin-bottom: 40px;
  font-weight: bold;
`;
