"use client";
import { styled } from "styled-components";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";

export default function Header({ children }) {
  return (
    <StyledHeader>
      <Link href="/">
        <PlaceholderLogo />
      </Link>
      {children}
      <BurgerMenu />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  padding: 1rem;
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const PlaceholderLogo = styled.div`
  height: 1.5rem;
  aspect-ratio: 1;
  background-color: aliceblue;

  &:hover {
    background-color: lightblue;
    cursor: pointer;
  }
`;
