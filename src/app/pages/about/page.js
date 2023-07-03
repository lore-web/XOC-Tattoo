"use client";

import { useState } from "react";
import { styled } from "styled-components";
import Link from "next/link";
import Image from "next/image";
import useStore from "@/hooks/useStore";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import DialogModal from "@/app/components/DialogModal";
import BurgerMenuLinks from "@/app/components/BurgerMenuLinks";

export default function Home() {
  const [isOpened, handleDialogModal] = useStore((state) => [
    state.isOpened,
    state.handleDialogModal,
  ]);
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
