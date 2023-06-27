"use client";
import React from "react";
import { useState } from "react";
import { styled } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";

//Install and import library
//Import alice carousel CSS
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

//Responsiveness
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3, itemsFit: "contain" },
};

//The carousel items
const items = [
  <div className="item" data-value="1" key={uuidv4()}>
    <Image
      src={
        "https://scontent-muc2-1.xx.fbcdn.net/v/t39.30808-6/273838127_2088268231329613_8648688830811433136_n.jpg?_nc_cat=103&cb=99be929b-3346023f&ccb=1-7&_nc_sid=0debeb&_nc_ohc=5UUSGx2geJMAX9HmygC&_nc_ht=scontent-muc2-1.xx&oh=00_AfAn-xqwCbUyYEpKUgqJyIWOmEMhVWaxXJ1Yo5bTxb1e4Q&oe=649EA5D4"
      }
      alt="platzhalter tattoo bild"
      width={375}
      height={550}
    />
  </div>,
  <div className="item" data-value="2" key={uuidv4()}>
    <Image
      src={
        "https://scontent-muc2-1.xx.fbcdn.net/v/t39.30808-6/273736460_2087984128024690_6294188581684516596_n.jpg?_nc_cat=110&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=gbSkaIhYh3IAX80lIHX&_nc_ht=scontent-muc2-1.xx&oh=00_AfCZAFZatH23H7UwKGRiPjCiNg9sx7kZinkPOjGmBd5LnA&oe=64A045C5"
      }
      alt="platzhalter tattoo bild"
      width={375}
      height={550}
    />
  </div>,
  <div className="item" data-value="3" key={uuidv4()}>
    <Image
      src={
        "https://scontent-muc2-1.xx.fbcdn.net/v/t39.30808-6/272935173_2079035045586265_345503117771392162_n.jpg?_nc_cat=107&cb=99be929b-3346023f&ccb=1-7&_nc_sid=0debeb&_nc_ohc=pcNOJOibpNMAX8i6eg5&_nc_ht=scontent-muc2-1.xx&oh=00_AfCYWDXhQigFN75IISad0s_XXF35A5hcphKneSWLdCm1xA&oe=649ECA9F"
      }
      alt="platzhalter tattoo bild"
      width={375}
      height={550}
    />
  </div>,
  <div className="item" data-value="4" key={uuidv4()}>
    <Image
      src={
        "https://scontent-muc2-1.xx.fbcdn.net/v/t39.30808-6/272893472_2079034135586356_1276778920862115589_n.jpg?_nc_cat=100&cb=99be929b-3346023f&ccb=1-7&_nc_sid=0debeb&_nc_ohc=9Bigp4UQHyMAX8lMPI1&_nc_ht=scontent-muc2-1.xx&oh=00_AfDrEgs0bF0YBfdNv9EFLcbJa9fk-2FOatE2glfN6Mf4yA&oe=649F77FA"
      }
      alt="platzhalter tattoo bild"
      width={375}
      height={550}
    />
  </div>,
  <div className="item" data-value="5" key={uuidv4()}>
    <Image
      src={
        "https://scontent-muc2-1.xx.fbcdn.net/v/t39.30808-6/273127336_2079033555586414_701774924960010966_n.jpg?_nc_cat=105&cb=99be929b-3346023f&ccb=1-7&_nc_sid=0debeb&_nc_ohc=zYmTT71yMF0AX__3LwD&_nc_ht=scontent-muc2-1.xx&oh=00_AfCrqBrgZpAB3RpPszKG8lgLKuLExZ9rUoKrvIbPtfboIw&oe=649E9C50"
      }
      alt="platzhalter tattoo bild"
      width={375}
      height={550}
    />
  </div>,
];

export default function Carousel() {
  return (
    <StyledCarousel>
      <AliceCarousel
        mouseTracking
        infinite
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </StyledCarousel>
  );
}

const StyledCarousel = styled.div`
  width: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
