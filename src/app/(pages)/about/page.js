"use client";
import { styled } from "styled-components";

import Link from "next/link";
import Image from "next/image";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import DialogModal from "@/app/components/DialogModal";
import BurgerMenuLinks from "@/app/components/BurgerMenuLinks";

import useStore from "@/hooks/useStore";

export default function Home() {
  const [isOpened] = useStore((state) => [state.isOpened]);

  return (
    <>
      <Header>
        <h1>About Me</h1>
      </Header>
      <StyledMain>
        {isOpened && (
          <DialogModal title="Menu">
            <BurgerMenuLinks />
          </DialogModal>
        )}
        <section>
          <Image
            src={
              "https://res.cloudinary.com/dahkn9mp9/image/upload/v1681464259/1fda02f0cb59b4f1055faef05.jpg"
            }
            alt="XOC Profilbild"
            width={400}
            height={400}
          />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
            aliquam. Saepe praesentium cum, laboriosam quis sapiente facilis
            facere eveniet error suscipit accusantium rem laudantium culpa
            delectus provident impedit vitae ratione.
          </p>
        </section>
        <section>
          <Image
            src={
              "https://res.cloudinary.com/dahkn9mp9/image/upload/v1688140221/149c0373d6be023c3d17d7200.jpg"
            }
            alt="XOC am taetowieren"
            width={200}
            height={200}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quia
            sunt nostrum repellat praesentium dolorum vitae deserunt labore esse
            optio aliquid ex provident ratione eos inventore rem, iure corporis
            repellendus.
          </p>
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
