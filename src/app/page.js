"use client";

import { styled } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <p>Under Construction</p>
        <Carousel />
      </main>
      <Footer />
    </>
  );
}

const StyledMain = styled.main``;
