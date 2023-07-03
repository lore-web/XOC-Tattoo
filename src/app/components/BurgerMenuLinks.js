"use client";

import { styled } from "styled-components";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

export default function BurgerMenuLinks() {
  return (
    <BurgerMenuLinkList>
      <li key={uuidv4()}>
        <Link href={"/"}>Home</Link>
      </li>
      <li key={uuidv4()}>
        <Link href={"/pages/tattoogallery"}>Tattoo Gallery</Link>
      </li>
      <li key={uuidv4()}>
        <Link href={"/pages/artgallery"}>Art Gallery</Link>
      </li>
      <li key={uuidv4()}>
        <Link href={"/pages/about"}>About Me</Link>
      </li>
    </BurgerMenuLinkList>
  );
}

const BurgerMenuLinkList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
