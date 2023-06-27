"use client";

import Link from "next/link";
import { styled } from "styled-components";
import Image from "next/image";

export default function Location() {
  return (
    <LocationSection>
      <h2>Anfahrt und Öffnungszeiten</h2>
      <LocationMap>
        <LocationMapImage
          src={"/LocationMapStudio.png"}
          alt="Tattoo Studio Karte"
          fill
        />
      </LocationMap>
      <AdressContainer>
        <p>XOC @ Drawink Nerds</p>
        <p>
          Petersburger Str. 28 <br /> 10249 Berlin
        </p>
        <Link href={"tel://+491234567890"}>+49 123 4567890</Link>
        <Link href={"mailto://email@example.com"}>email@example.com</Link>
        <button>Tattoo Studio</button>
      </AdressContainer>
    </LocationSection>
  );
}

const LocationSection = styled.section`
  padding: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "title title"
    "map adress"
    "map adress";

  h2 {
    grid-area: title;
    text-align: center;
    justify-self: center;
    align-self: center;
  }
`;

const LocationMap = styled.div`
  grid-area: map;
  justify-self: center;
  align-self: center;
  width: 100%;
  max-width: 26rem;
  aspect-ratio: 1;
  border-radius: 0.5rem;
  padding: 1rem;
  position: relative;
`;

const LocationMapImage = styled(Image)`
  object-fit: cover;
`;

const AdressContainer = styled.div`
  grid-area: adress;
  justify-self: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
`;
