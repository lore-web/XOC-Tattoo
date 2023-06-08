"use client";
import { styled } from "styled-components";

export default function Carousel() {
  return (
    <StyledCarousel>
      <PlaceholderCarousel>
        <p>Carousel</p>
      </PlaceholderCarousel>
    </StyledCarousel>
  );
}

const StyledCarousel = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PlaceholderCarousel = styled.div`
  height: 26rem;
  width: 100%;
  border: solid red;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
