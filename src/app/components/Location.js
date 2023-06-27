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
          sizes="(max-width: 768px) 100vw, (max-width: 1200) 50vw, 33vw"
        />
      </LocationMap>
      <AdressContainer>
        <p>XOC @ Drawink Nerds</p>
        <p>
          Petersburger Str. 28 <br /> 10249 Berlin
        </p>
        <Link href={"tel://+491234567890"}>+49 123 4567890</Link>
        <Link href={"mailto://email@example.com"}>email@example.com</Link>
        <TattooStudioLink
          href={
            "https://www.google.de/maps/place/Drawink+Nerds/@52.5236988,13.449067,18.58z/data=!3m1!5s0x47a84e6eed6bf0e7:0xb72dd87f0219e7f2!4m15!1m8!3m7!1s0x47a84e6eed39749f:0x7ed6c4f2eced5974!2sPetersburger+Str.+28,+10249+Berlin!3b1!8m2!3d52.5236708!4d13.4489381!16s%2Fg%2F11c4khc9sl!3m5!1s0x47a84e6eed90ed51:0x91cd300c7c30d380!8m2!3d52.5236418!4d13.4488917!16s%2Fg%2F11g69hf4tg?entry=ttu"
          }
        >
          Tatto Studio
        </TattooStudioLink>
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

const TattooStudioLink = styled(Link)`
  padding: 0.5rem;
  border: solid white;
  border-radius: 0.25rem;
  justify-self: center;
  align-self: center;
`;
