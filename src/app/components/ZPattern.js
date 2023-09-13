"use client";
import { styled } from "styled-components";
import Link from "next/link";

export default function ZPattern() {
  return (
    <StyledZPattern>
      <StyledLink href={"/tattoogallery"}>
        <PlaceholderImg />
        <div>
          <h2>Tattoo Gallery</h2>
          <p>Nadelhandwerk</p>
        </div>
      </StyledLink>
      <StyledLink href={"/artgallery"}>
        <div>
          <h2>Art Gallery</h2>
          <p>Kunst!Kunst!KUNST!</p>
        </div>
        <PlaceholderImg />
      </StyledLink>
      <StyledLink href={"/about"}>
        <PlaceholderImg />
        <div>
          <h2>BIO</h2>
          <p>...ein kleiner Ausblick auf meine Person</p>
        </div>
      </StyledLink>
    </StyledZPattern>
  );
}

const StyledZPattern = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 2rem 2rem;
  grid-template-areas:
    "line1"
    "line2"
    "line3";
  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const StyledLink = styled(Link)`
  grid-area: "line1";
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const PlaceholderImg = styled.div`
  grid-area: img1;
  height: 10rem;
  aspect-ratio: 1;
  background-color: aliceblue;
  padding: 1rem;
  border-radius: 0.25rem;
`;
