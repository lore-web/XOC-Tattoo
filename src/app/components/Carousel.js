/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { styled } from "styled-components";
import { v4 as uuidv4 } from "uuid";

//Install and import library
//Import alice carousel CSS
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

//Responsiveness
const responsive = {
  0: { items: 1, itemsFit: "contain" },
  568: { items: 2, itemsFit: "contain" },
  1024: { items: 3, itemsFit: "contain" },
};

//The carousel items
const items = [
  <div className="item" data-value="1" key={uuidv4()}>
    <img
      src={
        "https://res.cloudinary.com/dfdbznn1q/image/upload/v1688404588/XOC/Placeholder/280662132_2158632450959857_3150489548953560176_n_fmcyke.jpg"
      }
      alt="platzhalter tattoo bild"
      width={375}
      height={550}
      priority
    />
  </div>,
  <div className="item" data-value="2" key={uuidv4()}>
    <img
      src={
        "https://res.cloudinary.com/dfdbznn1q/image/upload/v1688404588/XOC/Placeholder/278927637_2138982719591497_1976964931288650573_n_h6yrzi.jpg"
      }
      alt="platzhalter tattoo bild"
      width={375}
      height={550}
      priority
    />
  </div>,
  <div className="item" data-value="3" key={uuidv4()}>
    <img
      src={
        "https://res.cloudinary.com/dfdbznn1q/image/upload/v1688404588/XOC/Placeholder/71392821_1373298392826604_1533973378224881664_n_vld1tu.jpg"
      }
      alt="platzhalter tattoo bild"
      width={375}
      height={550}
      priority
    />
  </div>,
  <div className="item" data-value="4" key={uuidv4()}>
    <img
      src={
        "https://res.cloudinary.com/dfdbznn1q/image/upload/v1688404588/XOC/Placeholder/273736460_2087984128024690_6294188581684516596_n_aega52.jpg"
      }
      alt="platzhalter tattoo bild"
      width={375}
      height={550}
      priority
    />
  </div>,
  <div className="item" data-value="5" key={uuidv4()}>
    <img
      src={
        "https://res.cloudinary.com/dfdbznn1q/image/upload/v1688404588/XOC/Placeholder/282175954_2171539763002459_468312838304422202_n_ytghmr.jpg"
      }
      alt="platzhalter tattoo bild"
      width={375}
      height={550}
      priority
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
        disableDotsControls
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
