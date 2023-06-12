"use client";
import { styled } from "styled-components";
import Link from "next/link";

export default function ZPattern() {
  return (
    <StyledZPattern>
      <Link href={"/tattoogallery"}>
        <TattooGalleryImg />
        <TattooGalleryText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          suscipit quos libero laborum, eveniet itaque aperiam et dolor? Error
          tempora totam beatae quas eligendi laborum.
        </TattooGalleryText>
      </Link>

      <Link href={"/artgallery"}>
        <ArtGalleryImg />
        <ArtGalleryText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          suscipit quos libero laborum, eveniet itaque aperiam et dolor? Error
          tempora totam beatae quas eligendi laborum.
        </ArtGalleryText>
      </Link>
      <Link href={"/about"}>
        <BioPageImg />
        <BioPageText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          suscipit quos libero laborum, eveniet itaque aperiam et dolor? Error
          tempora totam beatae quas eligendi laborum.
        </BioPageText>
      </Link>
    </StyledZPattern>
  );
}

const StyledZPattern = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1rem 1rem;
  grid-template-areas:
    "img1 text1"
    "text2 img2"
    "img3 text3";
  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const TattooGalleryImg = styled.div`
  grid-area: img1;
  height: 10rem;
  aspect-ratio: 1;
  background-color: aliceblue;
  padding: 1rem;
`;

const ArtGalleryImg = styled(TattooGalleryImg)`
  grid-area: img2;
`;

const BioPageImg = styled(TattooGalleryImg)`
  grid-area: img3;
`;

const TattooGalleryText = styled.p`
  grid-area: text1;
`;

const ArtGalleryText = styled(TattooGalleryText)`
  grid-area: text2;
`;

const BioPageText = styled(TattooGalleryText)`
  grid-area: text3;
`;
