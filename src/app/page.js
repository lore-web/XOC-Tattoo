"use client";

import { styled } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Carousel from "./components/Carousel";
import ZPattern from "./components/ZPattern";

export default function Home() {
  return (
    <>
      <Header />
      <StyledMain>
        <HeroSection />
        <Carousel />
        <ZPattern />
      </StyledMain>
      <Footer />
    </>
  );
}

const StyledMain = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
