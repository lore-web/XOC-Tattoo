"use client";
import Image from "next/image";
import { styled } from "styled-components";

export default function Header({ children }) {
  return (
    <StyledHeader>
      <PlaceholderLogo />
      {children}
      <Image
        src={"/menu-outline.svg"}
        alt="Hamburger Menü"
        height={32}
        width={32}
        priority
      />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h1 {
  }
`;

const PlaceholderLogo = styled.div`
  height: 2rem;
  aspect-ratio: 1;
  background-color: aliceblue;
`;
