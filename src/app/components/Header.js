"use client";
import { styled } from "styled-components";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";
import Image from "next/image";

export default function Header({ children }) {
  return (
    <StyledHeader>
      <Link href="/">
        <StyledLogo
          src={"/XOCLogo.png"}
          alt="xoc logo"
          height={30}
          width={30}
        />
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

const StyledLogo = styled(Image)`
  border-radius: 50%;
`;
