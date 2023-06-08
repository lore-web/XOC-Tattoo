"use client";
import { styled } from "styled-components";

export default function Hero() {
  return (
    <StyledHeroSection>
      <h2>HERO</h2>
      <PlaceholderHero />
    </StyledHeroSection>
  );
}

const PlaceholderHero = styled.div`
  height: 8rem;
  width: 20rem;
  background-color: aliceblue;
  padding: 1rem;
`;

const StyledHeroSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;
