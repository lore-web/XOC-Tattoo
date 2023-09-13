"use client";
import { styled } from "styled-components";

export default function Hero() {
  return (
    <StyledHeroSection>
      <PlaceholderHero>
        <p>HeroSection</p>
        <p>This site is under construction.</p>
      </PlaceholderHero>
    </StyledHeroSection>
  );
}

const StyledHeroSection = styled.section`
  width: 100%;
  height: 16rem;
  border: solid blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PlaceholderHero = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
