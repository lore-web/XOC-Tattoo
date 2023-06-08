"use client";
import { styled } from "styled-components";

export default function Carousel() {
  return (
    <StyledCarousel>
      <PlaceholderCarousel />
    </StyledCarousel>
  );
}

const StyledCarousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PlaceholderCarousel = styled.div`
  height: 26rem;
  width: 16rem;
  background-color: aliceblue;
  padding: 1rem;
`;
