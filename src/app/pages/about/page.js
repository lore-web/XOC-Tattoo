"use client";

import { useState } from "react";
import { styled } from "styled-components";
import Link from "next/link";
import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";
import DialogModal from "../components/DialogModal";
import BurgerMenuLinks from "../components/BurgerMenuLinks";

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const handleDialogModal = (boolean) => {
    setIsOpened(boolean);
  };
  return (
    <>
      <Header handleDialogModal={handleDialogModal}>
        <h1>About Me</h1>
      </Header>
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
        <section>
          <div>marco profil bild</div>
          <p>marco zitat</p>
        </section>
        <section>
          <div>marco am tattoovieren</div>
          <p>etwas über marco</p>
        </section>
        <StyledLink href={"/"}>back to home</StyledLink>
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

const StyledLink = styled(Link)`
  border: solid 1px white;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;
