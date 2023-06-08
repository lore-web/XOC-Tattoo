"use client";

import Link from "next/link";
import { styled } from "styled-components";

export default function Location() {
  return (
    <section>
      <h2>Anfahrt und Öffnungszeiten</h2>
      <PlaceholderImg />
      <AdressContainer>
        <p>XOC @ Drawink Nerds</p>
        <p>
          Musterstraße 1 <br /> 00000 Berlin
        </p>
        <Link href={"tel://+491234567890"}>+49 123 4567890</Link>
        <Link href={"mailto://email@example.com"}>email@example.com</Link>
        <button>Tattoo Studio</button>
      </AdressContainer>
    </section>
  );
}

const PlaceholderImg = styled.div`
  height: 10rem;
  aspect-ratio: 1;
  background-color: aliceblue;
  padding: 1rem;
  border-radius: 0.5rem;
`;

const AdressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
`;
