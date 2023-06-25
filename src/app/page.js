"use client";

import { useState } from "react";
import { styled } from "styled-components";
import Link from "next/link";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Carousel from "./components/Carousel";
import ZPattern from "./components/ZPattern";
import Social from "./components/Social";
import ContactForm from "./components/ContactForm";
import Location from "./components/Location";
import DialogModal from "./components/DialogModal";
import BurgerMenuLinks from "./components/BurgerMenuLinks";

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const handleDialogModal = (boolean) => {
    setIsOpened(boolean);
  };
  return (
    <>
      <Header handleDialogModal={handleDialogModal}></Header>
      <StyledMain>
        {isOpened && (
          <DialogModal
            title="Menu"
            isOpened={isOpened}
            onClose={() => handleDialogModal(false)}
          >
            <BurgerMenuLinks />
          </DialogModal>
        )}

        <HeroSection />
        <Carousel />
        <ZPattern />
        <Social />
        <ContactForm />
        <Location />
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
